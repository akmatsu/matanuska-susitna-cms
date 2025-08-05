// export function Events =
// Events are things that have a location and a time. The location can be virtual or physical.
// Events must have a start time and an optional end time. Events can span multiple days.
// Events can be recurring, with a specified recurrence pattern.

import { list } from '@keystone-6/core';
import { generalItemAccess, generalOperationAccess } from '../../access';
import { basePage, timestampField } from '../../fieldUtils';
import { relationship, select } from '@keystone-6/core/fields';
import { serviceRelationship } from '../pages/Service';

/**
 * Creates a relationship with the {@link Event} model.
 */
export const eventRelationship = (opts?: {
  refField?: string;
  many?: boolean;
}) => {
  return relationship({
    ref: opts?.refField ? `Event.${opts.refField}` : 'Event',
    many: opts?.many,
  });
};

export const EventSeries = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    frequency: select({
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ],
    }),
  },
});

export const Event = list({
  access: {
    operation: generalOperationAccess,
    item: generalItemAccess('Event'),
  },
  fields: {
    ...basePage('Events', {
      documents: true,
      actions: true,
    }),
    services: serviceRelationship({ refField: 'events' }),
    startDate: timestampField({ isNullable: false, isRequired: true }),
    endDate: timestampField(),
  },
});
