import { type Lists } from '.keystone/types';

// Model imports
import elections from './elections';
import users from './users';
import specialPages from './singletonPages';
import pages from './pages';
import documents from './documents';
import linksAndUrls from './linksAndUrls';
import discriptors from './descriptors';
import system from './system';

export const lists = {
  ...specialPages,
  ...elections,
  ...pages,
  ...documents,
  ...linksAndUrls,
  ...discriptors,
  ...users,
  ...system,
} satisfies Lists;
