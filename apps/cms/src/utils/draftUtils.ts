export function mapDataFields(
  input: Record<string, any>,
  output: Record<string, any> = {},
): Record<string, any> {
  const { id, ...rest } = input;

  Object.entries(rest).forEach(([k, v]) => {
    if (
      k.endsWith('Count') ||
      k === 'createdAt' ||
      k === 'updatedAt' ||
      k === '__typename'
    ) {
      return;
    }

    if (v === null) {
      output[k] = null;
      return;
    }

    if (Array.isArray(v)) {
      output[k] = {
        connect: (v as Array<any>)
          .filter((i) => i && typeof i === 'object' && 'id' in i)
          .map((i: any) => ({ id: i.id })),
      };
      return;
    }

    if (typeof v === 'object' && 'id' in v) {
      output[k] = { connect: { id: v.id } };
      return;
    }

    output[k] = v;
  });

  return output;
}
