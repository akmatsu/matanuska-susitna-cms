export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowercaseFirstLetter(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

const ignoreWords = [
  // Articles
  'a',
  'an',
  'the',

  // Conjunctions
  'and',
  'but',
  'or',
  'nor',
  'for',
  'so',
  'yet',

  // Prepositions
  'at',
  'by',
  'for',
  'in',
  'of',
  'off',
  'on',
  'out',
  'to',
  'up',
  'as',
  'it',
  'is',
  'be',
  'am',
  'are',
  'was',
  'were',
  'been',
  'have',
];

const separators = [' ', '-', '_'];
const escapedSeparators = separators
  .map((s) => (s === '-' ? '\\-' : s))
  .join('');
const separatorRegex = new RegExp(`[${escapedSeparators}]`, 'gi');

export function toTitleCase(str: string) {
  const lowerCaseStr = str.toLowerCase();

  return separators.reduce((acc, separator) => {
    return acc
      .split(separator)
      .map((word, index) => {
        return index === 0
          ? capitalizeFirstLetter(word)
          : ignoreWords.includes(word)
            ? word
            : capitalizeFirstLetter(word);
      })
      .join(separator);
  }, lowerCaseStr);
}

export function toCamelCase(str: string) {
  return str
    .toLowerCase()
    .split(separatorRegex)
    .map((word, index) => (index > 0 ? capitalizeFirstLetter(word) : word))
    .join('');
}

export function toPascalCase(str: string) {
  return capitalizeFirstLetter(toCamelCase(str));
}

export function slugify(str: string) {
  return str.toLowerCase().replace(separatorRegex, '-');
}

type PlainObject = Record<string, any>;

function _isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function deepMerge<T extends PlainObject>(
  target: T,
  source?: Partial<T>,
): T {
  const output: PlainObject = { ...target };

  if (!source) return output as T;

  for (const key in source) {
    const sourceVal = source[key];
    const targetVal = target[key];

    if (_isPlainObject(sourceVal) && _isPlainObject(targetVal)) {
      output[key] = deepMerge(targetVal, sourceVal as Partial<PlainObject>);
    } else if (sourceVal !== undefined) {
      output[key] = sourceVal;
    }
  }

  return output as T;
}

export function deepMergeAll<T extends PlainObject>(
  target: T | undefined,
  ...sources: Partial<T>[]
): T {
  return sources.reduce(
    (acc, source) => deepMerge(acc, source),
    (target ?? {}) as T,
  ) as T;
}
