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
import { HomePage } from './HomePage';
import { Image } from './Image';
import { InternalLink } from './InternalLink';
import { Location } from './Location';
import { OrgUnit } from './OrgUnit';
import { OperatingHour } from './OperatingHour';
import { Park } from './Park';
import { PublicNotice } from './PublicNotice';
import { Service } from './Service';
import { Tag } from './Tag';
import { Trail } from './Trail';
import { Url } from './Url';
import { User } from './User';
import { UserGroup } from './UserGroup';
import { TestModel } from './TestModel';

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
  HomePage: HomePage,
  Image,
  InternalLink,
  Location,
  OrgUnit,
  OperatingHour,
  Park,
  PublicNotice,
  Service,
  Tag,
  Trail,
  Url,
  User,
  UserGroup,
  TestModel,
} satisfies Lists;
