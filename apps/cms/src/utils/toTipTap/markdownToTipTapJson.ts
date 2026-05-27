import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { generateJSON } from '@tiptap/html/server';
import StarterKit from '@tiptap/starter-kit';
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table';
import { CalloutBlock, remarkCalloutDirective } from './calloutBlock';
import {
  remarkStepItemDirective,
  remarkStepListDirective,
  Step,
  StepList,
} from './steps';

export async function markdownToTipTapJson(markdown: string) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkCalloutDirective)
    .use(remarkStepListDirective)
    .use(remarkStepItemDirective)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return generateJSON(String(html), [
    CalloutBlock,
    StepList,
    Step,
    StarterKit,
    Table,
    TableRow,
    TableHeader,
    TableCell,
  ]);
}
