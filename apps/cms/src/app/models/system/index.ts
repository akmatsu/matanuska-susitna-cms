import { Tag } from './Tag';
import { Alert } from './Alert';
import { Redirect } from './Redirect';
import pageViews from './pageViews';

const lists = {
  Alert,
  Tag,
  Redirect,
  ...pageViews,
};

export default lists;
