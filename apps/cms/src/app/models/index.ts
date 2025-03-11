import { type Lists } from '.keystone/types';
import { Alert } from './Alert';
import { ApiKey } from './ApiKey';
import { AssemblyDistrict } from './AssemblyDistrict';
import { Community } from './Community';
import { Contact } from './Contact';
import { Document } from './Document';
import { DocumentCollection } from './DocumentCollection';
import { Facility } from './Facility';
import { Highlight } from './Highlight';
import { Image } from './Image';
import { OrgUnit } from './OrgUnit';
import { Park } from './Park';
import { Service } from './Service';
import { Tag } from './Tag';
import { Trail } from './Trail';
import { User } from './User';
import { UserGroup } from './UserGroup';

export const lists = {
  Alert,
  ApiKey,
  AssemblyDistrict,
  Community,
  Contact,
  Document,
  DocumentCollection,
  Facility,
  Highlight,
  Image,
  OrgUnit,
  Park,
  Service,
  Tag,
  Trail,
  User,
  UserGroup,
} satisfies Lists;
