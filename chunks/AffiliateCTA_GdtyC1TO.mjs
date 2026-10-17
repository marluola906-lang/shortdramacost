import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';
import { A as AFFILIATE_REL, S as SITE } from './BaseLayout_CtoGVyo7.mjs';

const $$Astro = createAstro("https://shortdramacost.com");
const $$AffiliateCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AffiliateCTA;
  const {
    appName,
    href,
    sub = "Free to download \xB7 Free episodes available before you pay",
    buttonLabel = `Open ${appName}`,
    showDisclosure = true
  } = Astro2.props;
  const isPlaceholder = href.startsWith("#");
  return renderTemplate`${maybeRenderHead()}<div class="cta"> <span class="cta-title">${appName}</span> <span class="cta-sub">${sub}</span>  <a class="cta-btn"${addAttribute(href, "href")}${addAttribute(AFFILIATE_REL, "rel")}${addAttribute(isPlaceholder ? void 0 : "_blank", "target")}> ${buttonLabel} <span aria-hidden="true">→</span> </a> ${showDisclosure && renderTemplate`<span class="disclosure">${SITE.disclosure}</span>`} </div>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/AffiliateCTA.astro", void 0);

export { $$AffiliateCTA as $ };
