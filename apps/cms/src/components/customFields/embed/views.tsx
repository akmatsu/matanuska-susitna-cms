import {
  CellComponent,
  FieldControllerConfig,
  FieldProps,
} from '@keystone-6/core/types';
import { CellContainer } from '@keystone-6/core/admin-ui/components';
import {
  FieldContainer,
  FieldDescription,
  FieldLabel,
} from '@keystone-ui/fields';
import { Button } from '@keystone-ui/button';

export function Field({ field, value }: FieldProps<typeof controller>) {
  const embedHTML = `<iframe src="${value}" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedHTML);
  };

  return (
    <FieldContainer>
      <FieldLabel>{field.label}</FieldLabel>
      <FieldDescription id={`${field.path}-description`}>
        {field.description}
      </FieldDescription>
      <div className="flex w-full max-w-[382px] gap-4">
        <code className="block w-full overflow-x-auto rounded-sm border border-gray-200 bg-gray-100 p-2 whitespace-pre">
          {embedHTML}
        </code>
        <Button
          onClick={copyToClipboard}
          aria-label="Copy embed code."
          popover="auto"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="size-4"
            >
              <path
                fill="currentColor"
                d="M8.379 5.5H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.09 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1M15.986 4h1.764A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2h3.5a2.25 2.25 0 0 1 2.236 2M9.5 4.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75"
              ></path>
            </svg>
          </span>
        </Button>
      </div>
    </FieldContainer>
  );
}

export const Cell: CellComponent = () => {
  return <CellContainer>Empty</CellContainer>;
};

export const CardValue = () => {
  return <FieldContainer>Empty</FieldContainer>;
};

const createViewValue = Symbol('create view virtual field value');

export function controller(config: FieldControllerConfig<{ query: string }>) {
  return {
    path: config.path,
    label: config.label,
    description: config.description,
    graphqlSelection: `${config.path}${config.fieldMeta.query}`,
    defaultValue: createViewValue,
    deserialize: (data: any): string => {
      return data[config.path];
    },
    serialize: () => ({}),
  };
}
