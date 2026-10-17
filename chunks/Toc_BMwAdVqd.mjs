import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://shortdramacost.com");
const $$Toc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Toc;
  const { items, label = "On this page" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="toc" aria-label="Table of contents"> <div class="label">${label}</div> <ol> ${items.map((it) => renderTemplate`<li><a${addAttribute(`#${it.id}`, "href")}>${it.label}</a></li>`)} </ol> </nav>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/Toc.astro", void 0);

export { $$Toc as $ };
