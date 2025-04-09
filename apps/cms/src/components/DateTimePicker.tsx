'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

export function DateTimePicker({
  value,
  onChange,
}: {
  value?: string | null;
  onChange?: (value: string | null) => void;
}) {
  const [startDate, setStartDate] = useState<Date | null>(
    value ? new Date(value) : null,
  );

  function handleChange(date: Date | null) {
    setStartDate(date);
    onChange?.(date ? date.toISOString() : null);
  }

  return (
    <div className="w-full max-w-sm">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        showTimeSelect
        timeIntervals={15}
        dateFormat="Pp"
        className="w-full rounded-md border border-gray-300 p-2 pl-10 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        showIcon
        calendarIconClassName="flex items-center justify-center size-6"
        wrapperClassName="w-full"
        isClearable
      />
    </div>
  );
}
