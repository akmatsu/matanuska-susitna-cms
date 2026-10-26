import 'dotenv/config';
import { DatabaseProvider, StorageConfig } from '@keystone-6/core/types';

export const baseURL = 'http://localhost:3333';

export const PAGES = {
  BULK_DOCUMENT_UPLOAD: '/bulk-document-upload',
  TYPESENSE: '/typesense',
};

export const appConfig = {
  nodeEnv: process.env.NODE_ENV,
  database: {
    provider: (process.env.DATABASE_PROVIDER as DatabaseProvider) ?? 'sqlite',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE,
    protocol: process.env.DATABASE_PROTOCOL,
  },
  server: {
    port: process.env.WEB_PORT ? parseInt(process.env.WEB_PORT) : 3333,
    originHost: process.env.ORIGIN_HOST,
  },
  widgetsUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://widgets.matsu.gov'
      : 'http://localhost:3001',
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://matsu.gov'
      : 'http://localhost:3000',
  // S3 has no access keys on purpose. The AWS SDK finds credentials on its
  // own; in production that is the EC2 instance role.
  storage: {
    s3Documents: {
      kind: 's3',
      type: 'file',
      bucketName: process.env.S3_BUCKET_NAME,
      region: process.env.S3_REGION,
    } as StorageConfig,
    s3Images: {
      kind: 's3',
      type: 'image',
      bucketName: process.env.S3_BUCKET_NAME,
      region: process.env.S3_REGION,
    } as StorageConfig,
    localDocuments: {
      kind: 'local',
      type: 'file',
      generateUrl: (path) => `${baseURL}/document-files${path}`,
      serverRoute: { path: '/document-files' },
      storagePath: 'public/document-files',
    } as StorageConfig,
    localImages: {
      kind: 'local',
      type: 'image',
      generateUrl: (path) => `${baseURL}/image-files${path}`,
      serverRoute: { path: '/image-files' },
      storagePath: 'public/image-files',
    } as StorageConfig,
  },
};
