import { type Lists } from '.keystone/types';
import { User } from './User';
import { UserGroup } from './UserGroup';

const lists = {
  User,
  UserGroup,
} satisfies Lists;

export default lists;
