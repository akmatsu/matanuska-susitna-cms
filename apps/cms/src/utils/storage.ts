import { createWriteStream } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { lookup } from 'mime-types';
import type { StorageStrategy } from '@keystone-6/core/types';

/**
 * Keystone's built-in `file()` field always reports `application/octet-stream`
 * as the content type, regardless of the actual file - see @keystone-6/core's
 * fields.js inputResolver for file fields. (`image()` fields sniff the real
 * file bytes and aren't affected.) Historically this meant documents landed in
 * S3 with the wrong Content-Type metadata, so browsers would offer them as a
 * generic download instead of rendering them inline, requiring a manual fix in
 * the S3 console. Since transformName keeps the original extension for file
 * fields, look up the real MIME type from the key whenever we're handed that
 * placeholder value instead of trusting it.
 */
function resolveContentType(key: string, reportedContentType: string) {
  if (reportedContentType && reportedContentType !== 'application/octet-stream') {
    return reportedContentType;
  }
  return lookup(key) || reportedContentType;
}

export function createS3Storage(config: {
  bucketName: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}): StorageStrategy<any> {
  const client = new S3Client({
    region: config.region,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });

  return {
    async put(key, stream, meta) {
      await client.send(
        new PutObjectCommand({
          Bucket: config.bucketName,
          Key: key,
          Body: stream,
          ContentType: resolveContentType(key, meta.contentType),
        }),
      );
    },
    async delete(key) {
      await client.send(
        new DeleteObjectCommand({ Bucket: config.bucketName, Key: key }),
      );
    },
    url(key) {
      return `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${key}`;
    },
  };
}

export function createLocalStorage(config: {
  storagePath: string;
  baseUrl: string;
  urlPath: string;
}): StorageStrategy<any> {
  return {
    async put(key, stream) {
      await mkdir(config.storagePath, { recursive: true });
      await pipeline(
        stream,
        createWriteStream(path.join(config.storagePath, key)),
      );
    },
    async delete(key) {
      await rm(path.join(config.storagePath, key), { force: true });
    },
    url(key) {
      return `${config.baseUrl}${config.urlPath}/${key}`;
    },
  };
}
