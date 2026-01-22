import { type Lists } from '.keystone/types';
import Election from './Election';
import { ElectionResult } from './ElectionResult';
import ElectionsPage, { EarlyVotingLocation } from './ElectionsPage';
import { Session } from '../../../session';

const lists = {
  ...Election,
  ElectionResult,
  EarlyVotingLocation,
  ElectionsPage,
} satisfies Lists<Session>;

export default lists;
