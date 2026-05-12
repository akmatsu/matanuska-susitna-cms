import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { generateJSON } from '@tiptap/html/server';
import StarterKit from '@tiptap/starter-kit';
import { CalloutBlock, remarkCalloutDirective } from './calloutBlock';
import {
  remarkStepItemDirective,
  remarkStepListDirective,
  Step,
  StepList,
} from './steps';

export async function markdownToTipTapJson(markdown: string) {
  console.log(
    'Converting markdown to TipTap JSON with the following markdown:',
  );
  console.log(markdown);
  const html = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkCalloutDirective)
    .use(remarkStepListDirective)
    .use(remarkStepItemDirective)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  console.log('Generated HTML from markdown:');
  console.log(String(html));

  return generateJSON(String(html), [CalloutBlock, StepList, Step, StarterKit]);
}
