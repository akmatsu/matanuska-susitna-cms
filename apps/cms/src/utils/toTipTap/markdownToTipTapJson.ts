import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { generateJSON } from '@tiptap/html/server';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import {
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from '@tiptap/extension-table';
import { CalloutBlock, remarkCalloutDirective } from './calloutBlock';
import {
  Column,
  ColumnWrapper,
  remarkColumnDirective,
  remarkColumnsDirective,
} from './column';
import {
  remarkStepItemDirective,
  remarkStepListDirective,
  Step,
  StepList,
} from './steps';
import { remarkTextAlignmentDirective } from './textAlignment';
import { DocCollection, remarkDocCollectionDirective } from './docCollection';
import { IframeExtension, remarkIframeDirective } from './iframe';
import { DynamicLinkMark, remarkDynamicLinkDirective } from './dynamicLink';

export async function markdownToTipTapJson(markdown: string) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkCalloutDirective)
    .use(remarkColumnsDirective)
    .use(remarkColumnDirective)
    .use(remarkStepListDirective)
    .use(remarkStepItemDirective)
    .use(remarkDocCollectionDirective)
    .use(remarkIframeDirective)
    .use(remarkDynamicLinkDirective)
    .use(remarkTextAlignmentDirective)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return generateJSON(String(html), [
    CalloutBlock,
    StepList,
    Step,
    ColumnWrapper,
    Column,
    DocCollection,
    IframeExtension,
    DynamicLinkMark,
    StarterKit,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Table,
    TableRow,
    TableHeader,
    TableCell,
  ]);
}
