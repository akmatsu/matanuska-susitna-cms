import { list, ListConfig } from '@keystone-6/core';
import { generalOperationAccess } from '../access';
import { select } from '@keystone-6/core/fields';
import { timeField } from '../../components/customFields/timeField';

export const OperatingHour: ListConfig<any> = list({
  access: {
    operation: generalOperationAccess,
  },
  ui: {
    isHidden: true,
  },
  fields: {
    day: select({
      options: [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
        { label: 'Ever Day', value: 'every-day' },
        { label: 'Weekdays', value: 'weekdays' },
        { label: 'Weekends', value: 'weekends' },
      ],
      validation: { isRequired: true },
    }),
    open: timeField(),
    close: timeField(),
  },
});
