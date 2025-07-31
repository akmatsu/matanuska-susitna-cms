import { type Lists } from '.keystone/types';
import { Contact } from './Contact';
import { Location } from './Location';
import { OperatingHour } from './OperatingHour';

const lists = {
  Contact,
  Location,
  OperatingHour,
} satisfies Lists;

export default lists;
