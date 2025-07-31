import { type Lists } from '.keystone/types';
import { Document } from './Document';
import { DocumentCollection } from './DocumentCollection';
import { Image } from './Image';

const lists = {
  Document,
  DocumentCollection,
  Image,
} satisfies Lists;

export default lists;
