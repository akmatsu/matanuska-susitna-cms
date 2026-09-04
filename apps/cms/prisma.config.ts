import 'dotenv/config';
import { defineConfig } from 'prisma/config';
import { appConfig } from './src/configs/appConfig';

export default defineConfig({
  schema: 'schema.prisma',
  datasource: {
    url: appConfig.databaseUrl,
  },
});
