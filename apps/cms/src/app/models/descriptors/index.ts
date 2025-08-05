import { type Lists } from '.keystone/types';
import { Contact, ContactListItem } from './Contact';
import { Location } from './Location';
import { OperatingHour } from './OperatingHour';

const lists = {
  Contact,
  ContactListItem,
  Location,
  OperatingHour,
} satisfies Lists;

export default lists;
