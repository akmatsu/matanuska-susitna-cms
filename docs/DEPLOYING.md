# Deploying the CMS

The CMS runs in Docker on an EC2 host. This page covers how a deploy works, how to roll back, how to read logs, and how to set up a new host.

## How it fits together

```
Internet ──► Traefik (/opt/edge) ──► web container ──► RDS (Postgres)
                                     publish-worker      Redis server
                                     page-views-worker   TypeSense (search.matsu.gov)
                                                         S3 (msb-cms-documents)
```

- **One image, many processes.** `Dockerfile` builds a single image. `docker-compose.yml` runs it three ways: `web` (the Keystone server), `publish-worker`, and `page-views-worker`. A fourth service, `migrate`, only runs when you ask for it.
- **Traefik** is the reverse proxy. It lives in the separate [msb-edge-proxy](https://github.com/akmatsu/msb-edge-proxy) repo, cloned to `/opt/edge`, and runs in its ACME mode: it gets and renews Let's Encrypt certificates by itself. Only the `web` container joins Traefik's `edge` network. No container publishes a port on the host.
- **Postgres, Redis, and TypeSense are not in Docker.** They run on their own servers. The containers reach them using the settings in `cms.env`.
- **S3 uses the EC2 instance role.** There are no S3 keys anywhere. The AWS SDK reads temporary credentials from the instance metadata service. This only works if the instance metadata hop limit is 2 or more, because containers count as an extra network hop.

## Files on the host

Everything lives in `/opt/cms`:

| File | What it is | Who writes it |
|---|---|---|
| `docker-compose.yml` | The stack definition | The deploy workflow, copied from this repo |
| `cms.env` | App settings and secrets, passed into the containers | The deploy workflow, built from GitHub environment secrets. Must be `chmod 600` |
| `.env` | `IMAGE_TAG` and `CMS_HOST`. Compose uses these to fill in `${...}` in `docker-compose.yml` | The deploy workflow |

Compose does **not** expand `${...}` inside `cms.env`. Write full, literal values there.

## How a deploy works

A push to `main` deploys to prod. `.github/workflows/deploy-cms.yml` then:

1. **Builds the image** on an arm64 runner, because the host is arm64. It pushes the image to GHCR as `ghcr.io/akmatsu/matanuska-susitna-cms:sha-<commit>`.
2. **Writes `cms.env`** from the `cms-prod` environment secrets, and copies it and `docker-compose.yml` to `/opt/cms`.
3. **Updates the host** over SSH:
   ```sh
   docker compose pull                 # download the new image
   docker compose run --rm migrate     # apply database migrations once
   docker compose up -d                # replace the containers
   ```
   Migrations run once, before the containers start, so the three processes never race to apply the same migration.

The `stage` branch works the same way with the `cms-stage` environment, but no stage host exists right now.

## Rolling back

Old images stay on the host for a week, so you can roll back without pulling.

```sh
cd /opt/cms
docker image ls ghcr.io/akmatsu/matanuska-susitna-cms   # find the tag you want
# Edit .env and set IMAGE_TAG to that tag, for example sha-abc123...
docker compose up -d
```

Migrations do **not** roll back. If the bad release changed the database, you need a new migration that reverses the change.

The next push to `main` overwrites `.env` with the new commit's tag.

## Everyday commands

Run these in `/opt/cms`.

```sh
docker compose ps                                   # status and health
docker compose logs -f web                          # follow web logs
docker compose logs -f publish-worker page-views-worker
docker compose restart publish-worker               # restart one service
docker stats                                        # memory and CPU per container
```

Logs are JSON from Pino. Docker rotates them (10 MB × 5 files per container).

## Setting up a new host

Do this once per host. These steps assume Ubuntu 24.04 on arm64.

1. **Infra (Terraform).** Give the instance:
   - an instance profile whose role can `s3:GetObject`, `s3:PutObject`, and `s3:DeleteObject` on the documents bucket, and `s3:ListBucket` on the bucket itself;
   - IMDSv2 required, with hop limit 2;
   - a security group that allows 80 and 443 from anywhere (Let's Encrypt needs port 80) and port 22 only for the deploy workflow;
   - access to RDS, Redis, and TypeSense;
   - DNS for the CMS hostname pointing at the instance.
2. **Install Docker** from Docker's apt repository: https://docs.docker.com/engine/install/ubuntu/. Install the `docker-compose-plugin` package too.
3. **Turn on log rotation** for anything that does not set it in compose. Put this in `/etc/docker/daemon.json`, then run `sudo systemctl restart docker`:
   ```json
   { "log-driver": "json-file", "log-opts": { "max-size": "10m", "max-file": "5" } }
   ```
4. **Let the deploy user run Docker:** `sudo usermod -aG docker <deploy-user>`. Being in the `docker` group is the same as having root on the host, so only the deploy user should be in it.
5. **Start Traefik.** Clone msb-edge-proxy to `/opt/edge` and start it in ACME mode, following that repo's docs. This also creates the `edge` network.
6. **Create the app folder:** `sudo mkdir -p /opt/cms && sudo chown <deploy-user> /opt/cms`.
7. **Deploy** by pushing to the branch for that environment.

## Moving prod from pm2 to Docker (one time)

The old setup ran Node through nvm and pm2 directly on the host.

1. Apply the infra changes:
   - the instance role;
   - switching every cache behavior on the `cms-internal.matsu.gov` CloudFront distribution to the `Managed-AllViewerExceptHostHeader` origin request policy. This matters because Traefik picks both the certificate and the route by host name.

   Check that signing in through `cms-internal.matsu.gov` still works on the old setup.
2. Do steps 2–4 and 6 of "Setting up a new host" while pm2 keeps serving traffic. In `/opt/edge`, run `docker compose up --no-start`. This creates the `edge` network without taking ports 80 and 443 yet.
3. Start a maintenance window:
   1. Run `pm2 stop all`. Then stop and disable nginx and certbot's renewal timer, so nothing else holds ports 80 and 443 or tries to renew the old certificate. Use `certbot.timer` if certbot came from apt, or `snap.certbot.renew.timer` if it came from snap:
      ```sh
      sudo systemctl disable --now nginx
      sudo systemctl disable --now certbot.timer   # or snap.certbot.renew.timer
      ```
   2. Start Traefik in `/opt/edge`.
   3. Merge to `main` and wait for the deploy to finish.
4. Check the site (see "After a deploy" below).
5. **If it fails:** run `docker compose down` in `/opt/cms` and `/opt/edge`. Then run `sudo systemctl enable --now nginx certbot.timer` and `pm2 start all`.
6. After prod has been stable for a while, remove pm2, nvm, nginx, certbot, and any `~/.aws` credentials on the host. Then retire the old static S3 key in IAM.

## After a deploy

- `docker compose ps` shows `web` as `healthy`.
- `https://cms.matsu.gov` loads, and the certificate is from Let's Encrypt.
- `https://cms-internal.matsu.gov` loads through CloudFront.
- Signing in with Entra works.
- Uploading a document works. In CloudTrail, the `PutObject` call should come from the instance role, not an IAM user.
- Publishing a draft works, and the change shows up in search.

## Testing the image locally

Create a gitignored `docker-compose.override.yml` next to `docker-compose.yml`:

```yaml
services:
  web:
    ports: ['3333:3333']
  publish-worker:
    extra_hosts: ['host.docker.internal:host-gateway']
networks:
  edge:
    external: false
```

Then:

```sh
docker build -t ghcr.io/akmatsu/matanuska-susitna-cms:local .
# Make cms.env from apps/cms/.env. Point DATABASE_HOST, REDIS_HOST, and
# TYPESENSE_HOST at host.docker.internal.
echo -e 'IMAGE_TAG=local\nCMS_HOST=localhost' > .env
docker compose run --rm migrate
docker compose up
curl http://localhost:3333/_healthcheck
```

The image runs with `NODE_ENV=production`, so documents and images go to S3. To test uploads locally, you need AWS credentials that can reach a bucket.

## Gotchas

- **Traefik hides unhealthy containers.** If the site returns a bare 404, check `docker compose ps`. Traefik does not route to a container whose health check is failing.
- **Health checks use `127.0.0.1`, not `localhost`.** `localhost` can resolve to IPv6 first, and the check fails.
- **Upload timeouts.** Uploads pass through the CMS on their way to S3, and files can be up to 500 MB. The Traefik read timeout on `websecure` must be longer than the slowest upload.
