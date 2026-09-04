import { createWriteStream } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import type { StorageStrategy } from '@keystone-6/core/types';

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
          ContentType: meta.contentType,
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
