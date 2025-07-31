import { type Lists } from '.keystone/types';
import AssemblyDistrict from './AssemblyDistrict';
import Board from './Board';
import Community from './Community';
import Facility, { FacilityListItem } from './Facility';
import OrgUnit from './OrgUnit';
import Park from './Park';
import PublicNotice from './PublicNotice';
import Service from './Service';
import Topic from './Topic';
import Trail from './Trail';

const lists = {
  ...AssemblyDistrict,
  ...Board,
  ...Community,
  ...Facility,
  ...OrgUnit,
  ...Park,
  ...PublicNotice,
  ...Service,
  ...Topic,
  ...Trail,
  FacilityListItem: FacilityListItem,
} satisfies Lists;

export default lists;
