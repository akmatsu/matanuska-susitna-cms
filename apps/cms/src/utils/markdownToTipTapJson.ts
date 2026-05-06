import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { generateJSON } from '@tiptap/html/server';
import StarterKit from '@tiptap/starter-kit';

export async function markdownToTipTapJson(markdown: string) {
  const html = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return generateJSON(String(html), [StarterKit]);
}
