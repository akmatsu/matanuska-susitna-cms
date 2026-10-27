import type { RequestHandler } from 'express';
import { appConfig } from '../configs/appConfig';
import { logger } from '../configs/logger';

const isLocalDev = appConfig.nodeEnv !== 'production';

// The CMS's own public URL, e.g. https://cms.matsu.gov
const cmsOrigin = parseUrl(process.env.NEXTAUTH_URL)?.origin;

/**
 * Origin allowlist for the admin-only API routes.
 *
 * A request is allowed only if it comes from one of these places:
 * - the CMS itself,
 * - matsu.gov or any of its subdomains, over https,
 * - localhost or 127.0.0.1 on any port, in local dev only.
 *
 * It reads the Origin header, or the Referer header if Origin is missing.
 * Requests with neither header are rejected.
 *
 * This only stops cross-site requests made by a browser. It is not real
 * authentication: anyone using curl or a script can fake these headers.
 */
function isAllowedOrigin(url: URL): boolean {
  if (url.origin === cmsOrigin) return true;

  if (isLocalDev && ['localhost', '127.0.0.1'].includes(url.hostname))
    return true;

  const isHttpsOrLocal = isLocalDev || url.protocol === 'https:';
  const isMatsuGov =
    url.hostname === 'matsu.gov' || url.hostname.endsWith('.matsu.gov');
  return isHttpsOrLocal && isMatsuGov;
}

/** Rejects requests whose Origin (or Referer) is not in the allowlist. */
export const requireAllowedOrigin: RequestHandler = (req, res, next) => {
  const url = parseUrl(req.get('origin') ?? req.get('referer'));

  if (url && isAllowedOrigin(url)) return next();

  logger.warn(
    `Blocked request: origin ${url?.origin ?? 'missing or invalid'} is not allowed`,
  );
  return res.status(403).json({ message: 'Origin not allowed' });
};

function parseUrl(value: string | undefined): URL | null {
  if (!value) return null;
  try {
    return new URL(value);
  } catch {
    return null;
  }
}
