import { type Lists } from '.keystone/types';
import { Alert } from './Alert';
import * as AssemblyDistrictModels from './AssemblyDistrict';
import * as CommunityModels from './Community';
import { Contact } from './Contact';
import { Document } from './Document';
import { DocumentCollection } from './DocumentCollection';
import { ExternalLink } from './ExternalLink';
import * as FacilityModels from './Facility';
import { Highlight } from './Highlight';
import { HomePage } from './HomePage';
import { Image } from './Image';
import { InternalLink } from './InternalLink';
import { Location } from './Location';
import * as OrgUnitModels from './OrgUnit';
import { OperatingHour } from './OperatingHour';
import * as ParkModels from './Park';
import * as PublicNoticeModels from './PublicNotice';
import * as ServiceModels from './Service';
import { Tag } from './Tag';
import * as TrailModels from './Trail';
import { Url } from './Url';
import { User } from './User';
import { UserGroup } from './UserGroup';

export const lists = {
  Alert,
  ...AssemblyDistrictModels,
  ...CommunityModels,
  Contact,
  Document,
  DocumentCollection,
  ExternalLink,
  ...FacilityModels,
  Highlight,
  HomePage,
  Image,
  InternalLink,
  Location,
  ...OrgUnitModels,
  OperatingHour,
  ...ParkModels,
  ...PublicNoticeModels,
  ...ServiceModels,
  Tag,
  ...TrailModels,
  Url,
  User,
  UserGroup,
} satisfies Lists;
