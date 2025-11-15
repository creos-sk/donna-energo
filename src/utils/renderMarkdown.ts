// /src/utils/renderMarkdown.ts
import { compile } from "@astrojs/mdx";
import { renderToString } from "astro/runtime/server/index.js";

/**
* Renders MDX string to HTML.
* (No fallback to marked.)
*/
export async function renderMarkdown(content: string): Promise<string> {
  if (!content) return "";

  const compiled = await compile(content, {});
  const { html } = await renderToString(compiled.result);
  return html;
}
