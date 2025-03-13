import { type Lists } from '.keystone/types';
import { Alert } from './Alert';
import { AssemblyDistrict } from './AssemblyDistrict';
import { Community } from './Community';
import { Contact } from './Contact';
import { Document } from './Document';
import { DocumentCollection } from './DocumentCollection';
import { ExternalLink } from './ExternalLink';
import { Facility } from './Facility';
import { Highlight } from './Highlight';
import { Image } from './Image';
import { Location } from './Location';
import { OrgUnit } from './OrgUnit';
import { Park } from './Park';
import { Service } from './Service';
import { Tag } from './Tag';
import { Trail } from './Trail';
import { User } from './User';
import { UserGroup } from './UserGroup';

export const lists = {
  Alert,
  AssemblyDistrict,
  Community,
  Contact,
  Document,
  DocumentCollection,
  ExternalLink,
  Facility,
  Highlight,
  Image,
  Location,
  OrgUnit,
  Park,
  Service,
  Tag,
  Trail,
  User,
  UserGroup,
} satisfies Lists;
