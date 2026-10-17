import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, e as renderSlot, c as createAstro } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://shortdramacost.com");
const $$Callout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Callout;
  const { title, kind = "info" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`callout ${kind}`, "class")}> ${title && renderTemplate`<span class="ct">${title}</span>`} ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/Callout.astro", void 0);

export { $$Callout as $ };
