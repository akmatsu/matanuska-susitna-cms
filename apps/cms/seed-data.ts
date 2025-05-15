import 'dotenv/config';
import { faker } from '@faker-js/faker';
import * as PrismaModule from '.prisma/client';
import config from './keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from './src/configs/logger';

async function insertSeedData() {
  const context = getContext(config, PrismaModule);
  const sudoContextDB = context.sudo().db;

  const { User: user, Service: service } = sudoContextDB;

  let adminUser = await user.findOne({
    where: {
      authId: process.env.ADMIN_USER_AUTH_ID,
    },
  });

  if (!adminUser) {
    try {
      adminUser = await user.createOne({
        data: {
          authId: process.env.ADMIN_USER_AUTH_ID,
          name: process.env.ADMIN_USER_NAME,
          role: parseInt(process.env.ADMIN_USER_ROLE!),
        },
      });
    } catch (error) {
      logger.error(error, 'Error creating admin user');
    }
  }

  const fakeServices = faker.helpers.multiple(
    () => {
      return {
        heroImage: faker.image.url({ width: 1920 }),
        title: faker.lorem.sentence({ min: 2, max: 5 }),
        description: faker.lorem.paragraph({ min: 2, max: 3 }),
        body: faker.lorem.paragraphs({ min: 2, max: 3 }),
        slug: faker.lorem.slug(),
        status: faker.helpers.objectValue({
          published: 'published',
          unpublished: 'unpublished',
        }),

        owner: {
          connect: {
            id: adminUser?.id,
          },
        },

        primaryAction: {
          create: {
            label: faker.lorem.words({ min: 1, max: 2 }),
            url: {
              create: {
                title: faker.lorem.words({ min: 1, max: 3 }),
                url: faker.internet.url(),
              },
            },
          },
        },

        primaryContact: {
          create: {
            email: faker.internet.email(),
            phone: '123-456-7890',
            title: faker.person.jobTitle(),
            name: faker.person.fullName(),
          },
        },
      };
    },
    {
      count: 20,
    },
  );

  try {
    fakeServices.forEach(async (data) => {
      logger.info(data);
      return service.createOne({ data });
    });
  } catch (error) {
    logger.error(error, 'Error creating services');
  }
}

try {
  insertSeedData();
} catch (error) {
  logger.error(error, 'Error inserting seed data');
}
