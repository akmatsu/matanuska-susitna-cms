import { type Lists } from '.keystone/types';
import { ExternalLink } from './ExternalLink';
import { InternalLink } from './InternalLink';
import { Url } from './Url';
import { Highlight } from './Highlight';

const lists = {
  ExternalLink,
  InternalLink,
  Url,
  Highlight,
} satisfies Lists;

export default lists;
