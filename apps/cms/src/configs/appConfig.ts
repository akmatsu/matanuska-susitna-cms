import 'dotenv/config';
import { DatabaseProvider } from '@keystone-6/core/types';
import { createLocalStorage, createS3Storage } from '../utils/storage';

export const baseURL = 'http://localhost:3333';

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
  get databaseUrl() {
    return `${this.database.protocol}://${this.database.user}:${this.database.password}@${this.database.host}:${this.database.port}/${this.database.name}`;
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
  storage: {
    get s3Documents() {
      return createS3Storage({
        bucketName: process.env.S3_BUCKET_NAME as string,
        region: process.env.S3_REGION as string,
        accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
      });
    },
    get s3Images() {
      return createS3Storage({
        bucketName: process.env.S3_BUCKET_NAME as string,
        region: process.env.S3_REGION as string,
        accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
      });
    },
    get localDocuments() {
      return createLocalStorage({
        storagePath: 'public/document-files',
        baseUrl: baseURL,
        urlPath: '/document-files',
      });
    },
    get localImages() {
      return createLocalStorage({
        storagePath: 'public/image-files',
        baseUrl: baseURL,
        urlPath: '/image-files',
      });
    },
  },
};
