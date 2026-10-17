import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://shortdramacost.com");
const $$Screenshot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Screenshot;
  const { src, alt, caption, width = 1080, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="shot"> ${src ? renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")} loading="lazy" decoding="async">` : renderTemplate`<div class="shot-placeholder"> <strong>Missing original screenshot</strong><br> ${alt} </div>`} ${caption && renderTemplate`<figcaption>${caption}</figcaption>`} </figure>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/Screenshot.astro", void 0);

export { $$Screenshot as $ };
