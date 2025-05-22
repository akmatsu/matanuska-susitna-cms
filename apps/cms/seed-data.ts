import 'dotenv/config';
import { faker } from '@faker-js/faker';
import * as PrismaModule from '.prisma/client';
import config from './keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from './src/configs/logger';

async function insertSeedData() {
  const context = getContext(config, PrismaModule);
  const sudoContextDB = context.sudo().db;

  const { User: user, Service: service, Board: board } = sudoContextDB;

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

  const serviceCount = await service.count();

  if (serviceCount <= 1) {
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

  const boardCount = await board.count();
  if (boardCount <= 1) {
    const fakeBoards = faker.helpers.multiple(
      () => {
        return {
          title: faker.lorem.sentence({ min: 2, max: 5 }),
          description: faker.lorem.paragraph({ min: 2, max: 3 }),
          body: faker.lorem.paragraphs({ min: 2, max: 3 }),
          slug: faker.lorem.slug(),
          status: faker.helpers.objectValue({
            published: 'published',
            unpublished: 'unpublished',
          }),

          meetingSchedule: 'Every 2nd Tuesday of the month',

          owner: {
            connect: {
              id: adminUser?.id,
            },
          },

          linkToResolutions: {
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

          linkToAgendas: {
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

          linkToPublicOpinionMessage: {
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

          documents: {
            connect: [
              {
                id: 'cmar41hu700024ar09nltol8x',
              },
            ],
          },

          contacts: {
            create: [
              {
                email: faker.internet.email(),
                phone: '123-456-7890',
                title: faker.person.jobTitle(),
                name: faker.person.fullName(),
              },
            ],
          },
        };
      },
      {
        count: 10,
      },
    );

    try {
      fakeBoards.forEach(async (data) => {
        logger.info(data);
        return board.createOne({ data });
      });
    } catch (error) {
      logger.error(error, 'Error creating boards');
    }
  }
}

try {
  insertSeedData();
} catch (error) {
  logger.error(error, 'Error inserting seed data');
}
