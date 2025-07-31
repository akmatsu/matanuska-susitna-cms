import { type Lists } from '.keystone/types';
import Election from './Election';
import { ElectionResult } from './ElectionResult';
import ElectionsPage, { EarlyVotingLocation } from './ElectionsPage';

const lists = {
  ...Election,
  ElectionResult,
  EarlyVotingLocation,
  ElectionsPage,
} satisfies Lists;

export default lists;
