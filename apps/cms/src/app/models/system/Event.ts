// export function Events =
// Events are things that have a location and a time. The location can be virtual or physical.
// Events must have a start time and an optional end time. Events can span multiple days.
// Events can be recurring, with a specified recurrence pattern.

import { list } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../../access';
import { basePage } from '../../fieldUtils';

export const Event = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Event'),
  },
  fields: {
    ...basePage('Events'),
  },
});
