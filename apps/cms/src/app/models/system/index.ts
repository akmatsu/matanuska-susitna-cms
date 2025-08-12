import { type Lists } from '.keystone/types';
import { Tag } from './Tag';
import { Alert } from './Alert';
import { Redirect } from './Redirect';

const lists = {
  Alert,
  Tag,
  Redirect,
} satisfies Lists;

export default lists;
