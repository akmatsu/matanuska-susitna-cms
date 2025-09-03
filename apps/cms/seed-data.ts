import 'dotenv/config';
import { faker } from '@faker-js/faker';
import * as PrismaModule from '.prisma/client';
import config from './keystone';
import { getContext } from '@keystone-6/core/context';
import { logger } from './src/configs/logger';
import { CommonTypeInfo } from './src/controllers/types';

async function insertSeedData() {
  const context = getContext<CommonTypeInfo>(config, PrismaModule);
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

  if (serviceCount <= 1 && adminUser) {
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
                  title: faker.string.uuid(),
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

  const services = await service.findMany({
    take: 10,
  });

  const boardCount = await board.count();
  if (boardCount <= 1 && adminUser) {
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
                  title: faker.string.uuid(),
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
                  title: faker.string.uuid(),
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
                  title: faker.string.uuid(),
                  url: faker.internet.url(),
                },
              },
            },
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

  const parks = await sudoContextDB.Park.count();
  if (parks <= 1 && adminUser) {
    const actionUrls = await sudoContextDB.Url.createMany({
      data: faker.helpers.multiple(
        () => {
          return {
            title: faker.string.uuid(),
            url: faker.internet.url(),
          };
        },
        {
          count: 10,
        },
      ),
    });
    await sudoContextDB.Park.createMany({
      data: faker.helpers.multiple(
        (v, i) => {
          return {
            title: faker.lorem.sentence({ min: 2, max: 5 }),
            description: faker.lorem.paragraph({ min: 1, max: 2 }),
            body: faker.lorem.paragraphs({ min: 3, max: 5 }),
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

            actions: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: actionUrls[i].title,
                    value: actionUrls[i].id,
                  },
                },
              },
            },
            contacts: {
              create: [
                {
                  name: faker.person.fullName(),
                  phone: '123-456-7890',
                  title: faker.person.jobTitle(),
                  email: faker.internet.email(),
                },
              ],
            },

            trails: {
              create: [
                {
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
                  services: {
                    connect: {
                      id: faker.helpers.arrayElement(services).id,
                    },
                  },
                },
              ],
            },
          };
        },
        {
          count: 10,
        },
      ),
    });
  }

  const homePageCount = await sudoContextDB.HomePage.count();

  if (homePageCount < 1) {
    await sudoContextDB.Url.deleteMany({
      where: [
        {
          title: 'Animal Care',
        },
        {
          title: 'Problem Reporter',
        },
        {
          title: 'MyProperty Lookup',
        },
        {
          title: 'Parcel Viewer',
        },
        {
          title: 'Career Opportunities',
        },
        {
          title: 'Legislation',
        },
        {
          title: 'Projects',
        },
      ],
    });
    const urls = await sudoContextDB.Url.createMany({
      data: [
        {
          title: 'Animal Care',
          url: 'https://animalcare.matsugov.us/',
        },
        {
          title: 'Problem Reporter',
          url: 'https://problemreporter.matsugov.us/',
        },
        {
          title: 'MyProperty Lookup',
          url: 'https://myproperty.matsugov.us/index.aspx',
        },
        {
          title: 'Parcel Viewer',
          url: 'https://mapping.matsugov.us/Html5Viewer/index.html?viewer=MSB_Parcel_Viewer',
        },
        {
          title: 'Career Opportunities',
          url: 'https://www.governmentjobs.com/careers/matsugov',
        },
        {
          title: 'Legislation',
          url: 'https://matanuska.legistar.com/Legislation.aspx',
        },
        {
          title: 'Projects',
          url: 'https://projects.matsugov.us/',
        },
      ],
    });

    await sudoContextDB.HomePage.createOne({
      data: {
        heroImage:
          'https://d1159zutbdy4l.cloudfront.net/public/uploads/9a6d51bb-9b20-4008-ac82-4100120ed080/Butte-Fall-jumbo2.jpg',

        title: 'Matanuska-Susitna Borough',
        toolbeltOne: {
          create: {
            title: 'Animal Care',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[0].title,
                    value: urls[0].id,
                  },
                },
              },
            },
          },
        },
        toolbeltTwo: {
          create: {
            title: 'Problem Reporter',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[1].title,
                    value: urls[1].id,
                  },
                },
              },
            },
          },
        },
        toolbeltThree: {
          create: {
            title: 'MyProperty Lookup',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[2].title,
                    value: urls[2].id,
                  },
                },
              },
            },
          },
        },
        toolbeltFour: {
          create: {
            title: 'Parcel Viewer',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[3].title,
                    value: urls[3].id,
                  },
                },
              },
            },
          },
        },
        highlightOne: {
          create: {
            title: 'Career Opportunities',
            image:
              'https://d1159zutbdy4l.cloudfront.net/public/uploads/223dc449-ba58-42b4-80f3-4c456f159f08optimized_images/1280x1920_optimized_image.jpg',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[4].title,
                    value: urls[4].id,
                  },
                },
              },
            },
          },
        },
        highlightTwo: {
          create: {
            title: 'Legislation',
            image:
              'https://d1159zutbdy4l.cloudfront.net/public/uploads/d34162a6-3bbd-4356-9e61-7f9f0e2e11c4optimized_images/1000x370_optimized_image.jpg',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[5].title,
                    value: urls[5].id,
                  },
                },
              },
            },
          },
        },
        highlightThree: {
          create: {
            title: 'Projects',
            image:
              'https://d1159zutbdy4l.cloudfront.net/public/uploads/9b164e25-eb5f-4cb3-829a-166c67fc463foptimized_images/1000x800_optimized_image.jpg',
            linkedItem: {
              create: {
                label: faker.lorem.words({ min: 1, max: 3 }),
                selectItem: {
                  itemType: {
                    label: 'Url',
                    value: 'url',
                  },
                  itemId: {
                    label: urls[6].title,
                    value: urls[6].id,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  const electionPageCount = await sudoContextDB.ElectionsPage.count();
  if (electionPageCount < 1) {
    await sudoContextDB.ElectionsPage.createOne({
      data: {
        title: 'Matanuska-Susitna Borough Elections',
        howElectionsWork: `The Borough Clerk's Office is responsible for planning and administering Borough regular and special elections. The Borough's regular election date is on the first Tuesday, following the first Monday, in November. The 2025 regular election is scheduled for November 4, 2025.

If you have questions regarding the State/Federal election please contact the :internal-link[Alaska State Division of Elections]{list="Url" itemId="cmd7lv5zi00043j0gfsbrcvdu"}.

The cities of Houston, Palmer, and Wasilla hold elections on the first Tuesday in October. Please contact the respective city should you have questions regarding a city election.
`,
        description:
          'Ensuring fair, transparent, and accessible elections for all Borough residents',
        stateElectionContact: {
          create: {
            name: 'Alaska State Division of Elections',
            phone: '(907) 373-8952',
          },
        },
        boroughElectionContact: {
          create: {
            name: 'Borough Clerks Office',
            phone: '(907) 861-8683',
            email: 'estelle.wiese@matsugov.us',
          },
        },
      },
    });
  }

  const boardPageCount = await sudoContextDB.BoardPage.count();
  if (boardPageCount < 1) {
    await sudoContextDB.BoardPage.createOne({
      data: {
        title: 'Matanuska-Susitna Boards & Commissions',
        description:
          'View or apply to a board or community council in the Matanuska-Susitna Borough.',
        body: `#### The Matanuska-Susitna Borough Needs You! Volunteer to serve on a board or commission and make a difference in your community.

The Matanuska-Susitna Borough Boards, Commissions, and Service Areas are looking for volunteers to serve. This is a great opportunity to get involved in the community and make a positive impact. Serving on a board or commission is a great way for citizens to provide input on important issues and help shape the future of the Matanuska-Susitna Borough. For more information on applying for a board or commission, please call the Mat-Su Borough Clerk's Office at [(907) 861-8683](tel:9078618683).
`,
      },
    });
  }
}

try {
  insertSeedData();
} catch (error) {
  logger.error(error, 'Error inserting seed data');
}
