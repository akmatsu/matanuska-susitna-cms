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
import Plan from './Plan';
import Event from './Event';

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
  ...Plan,
  ...Event,
  FacilityListItem,
};

export default lists;
