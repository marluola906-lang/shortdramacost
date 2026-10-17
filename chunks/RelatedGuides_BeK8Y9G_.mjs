import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderSlot, b as renderTemplate, d as addAttribute } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$2 = createAstro("https://shortdramacost.com");
const $$AnswerBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AnswerBox;
  const { label = "Short answer" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="answer"> <div class="label">${label}</div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/AnswerBox.astro", void 0);

const $$Astro$1 = createAstro("https://shortdramacost.com");
const $$FaqList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqList;
  const { faqs, heading = "Frequently asked questions" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="faq"> <h2 id="faq">${heading}</h2> ${faqs.map((f) => renderTemplate`<details> <summary>${f.q}</summary> <div class="answer-body"><p>${f.a}</p></div> </details>`)} </section>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/FaqList.astro", void 0);

const $$Astro = createAstro("https://shortdramacost.com");
const $$RelatedGuides = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RelatedGuides;
  const { heading = "Related guides", items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="related"> <h2>${heading}</h2> <ul> ${items.map((it) => renderTemplate`<li> <a${addAttribute(it.href, "href")}>${it.title}</a> <span class="why">${it.why}</span> </li>`)} </ul> </section>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/RelatedGuides.astro", void 0);

export { $$AnswerBox as $, $$FaqList as a, $$RelatedGuides as b };
