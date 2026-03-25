/* eslint-disable react/prop-types */
'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { FieldContainer, FieldLabel } from '@keystone-ui/fields';
import clsx from 'clsx';
import * as XLSX from 'xlsx';
import {
  CardValueComponent,
  CellComponent,
  FieldController,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { Button } from '@keystone-ui/button';

export function Field({
  field,
  value,
  onChange,
}: FieldProps<typeof controller>) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setLoading(true);
    setFileName(file.name);

    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const arrayBuffer = event.target?.result as ArrayBuffer;
          const workbook = XLSX.read(arrayBuffer, { type: 'array' });

          // Get the first sheet name if not specified in config
          const sheetName = field.sheetName || workbook.SheetNames[0];

          if (!workbook.SheetNames.includes(sheetName)) {
            throw new Error(
              `Sheet "${sheetName}" not found. Available sheets: ${workbook.SheetNames.join(', ')}`,
            );
          }

          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);

          if (data.length === 0) {
            throw new Error(
              'The spreadsheet is empty. Please add data and try again.',
            );
          }

          onChange?.(data);
          setLoading(false);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'Failed to parse Excel file',
          );
          setLoading(false);
        }
      };

      reader.onerror = () => {
        setError('Failed to read the file');
        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const handleClear = () => {
    onChange?.(null);
    setFileName(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <FieldContainer as="fieldset">
      <FieldLabel>{field.label}</FieldLabel>
      {field.description && (
        <p className="mb-4 text-sm text-gray-600">{field.description}</p>
      )}

      <div className="space-y-4">
        <div
          className={clsx(
            'cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors',
            {
              'border-gray-300 bg-gray-50 hover:bg-gray-100': !loading,
              'border-blue-300 bg-blue-50': loading,
            },
          )}
          onClick={() => !loading && fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileChange}
            disabled={loading}
            className="hidden"
          />

          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              Supported formats: Excel (.xlsx, .xls) or CSV
            </p>
            {fileName && (
              <p className="text-sm font-medium text-blue-600">
                {loading ? 'Parsing...' : 'File: ' + fileName}
              </p>
            )}
          </div>
        </div>

        {error && (
          <div className="rounded bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {value && typeof value === 'object' && Array.isArray(value) && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="mb-2 text-sm font-semibold text-green-900">
              ✓ Data loaded successfully
            </p>
            <p className="mb-3 text-sm text-green-700">
              {value.length} row{value.length !== 1 ? 's' : ''} imported from{' '}
              {fileName || 'spreadsheet'}
            </p>

            {value.length > 0 && (
              <details className="text-sm">
                <summary className="cursor-pointer font-medium text-green-700 hover:underline">
                  Preview data
                </summary>
                <div className="mt-2 max-h-48 overflow-auto rounded border border-green-200 bg-white p-2">
                  <pre className="text-xs break-words whitespace-pre-wrap text-gray-700">
                    {JSON.stringify(value.slice(0, 3), null, 2)}
                    {value.length > 3 &&
                      '\n... and ' + (value.length - 3) + ' more rows'}
                  </pre>
                </div>
              </details>
            )}

            <div className="mt-4 flex gap-2">
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className="text-sm"
              >
                Replace File
              </Button>
              <Button
                onClick={handleClear}
                disabled={loading}
                tone="negative"
                className="text-sm"
              >
                Clear Data
              </Button>
            </div>
          </div>
        )}
      </div>
    </FieldContainer>
  );
}

export const controller = (
  config: FieldControllerConfig<{ sheetName?: string }>,
): FieldController<any, any> & { sheetName?: string } => {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: config.path,
    sheetName: config.fieldMeta?.sheetName,
    defaultValue: null,
    deserialize: (data) => {
      const value = data[config.path];
      return Array.isArray(value) ? value : null;
    },
    serialize: (value) => ({
      [config.path]: value,
    }),
  };
};

export const CardValue: CardValueComponent<typeof controller> = ({ field }) => {
  const value = field.value;
  return (
    <div>
      {value && Array.isArray(value) ? `${value.length} rows` : 'No data'}
    </div>
  );
};

export const Cell: CellComponent<typeof controller> = (props) => {
  const { item, field } = props;
  const value = item[field.path];
  return (
    <div>{value && Array.isArray(value) ? `${value.length} rows` : '-'}</div>
  );
};
