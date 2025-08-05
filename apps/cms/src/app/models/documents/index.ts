import { type Lists } from '.keystone/types';
import { Document, DocumentListItem } from './Document';
import { DocumentCollection } from './DocumentCollection';
import { Image } from './Image';

const lists = {
  Document,
  DocumentCollection,
  DocumentListItem,
  Image,
} satisfies Lists;

export default lists;
