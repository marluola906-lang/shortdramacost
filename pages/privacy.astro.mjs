import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BKYOSBUE.mjs';
import 'piccolore';
import { $ as $$BaseLayout, S as SITE } from '../chunks/BaseLayout_CtoGVyo7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://shortdramacost.com");
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const siteUrl = (Astro2.site ?? new URL("https://YOUR-DOMAIN.com")).href.replace(/\/$/, "");
  const title = "Privacy policy";
  const description = `How ${SITE.brand} handles data, cookies and affiliate links.`;
  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy", url: "/privacy" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "path": "/privacy", "siteUrl": siteUrl, "crumbs": crumbs, "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <header class="page-head"> <h1>Privacy policy</h1> <p class="muted">Template — have this reviewed before launch if you operate at any scale.</p> </header> <h2>What this site collects</h2> <p>
This is a static website. Reading a page does not require an account, and
      we do not ask you for personal information to read any content on it.
</p> <h2>Analytics</h2> <p>
If privacy-friendly analytics are enabled, they record aggregate page views
      without cookies and without building a profile of you. Insert your specific
      analytics provider here before launch, or delete this section if you do not
      run analytics.
</p> <h2>Affiliate links</h2> <p> ${SITE.disclosure} When you follow an affiliate link, the destination site
      and its affiliate network may set their own cookies to attribute the
      referral. Those cookies are controlled by them, not by us, and are governed
      by their privacy policies.
</p> <h2>Third-party links</h2> <p>
We link to app stores and app publishers. We do not control what those
      sites do with your data, and this policy does not cover them.
</p> <h2>Contact</h2> <p>
Questions about this policy: <a${addAttribute(`mailto:${SITE.author.contact}`, "href")}>${SITE.author.contact}</a> </p> </article> ` })}`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/privacy.astro";
const $$url = "/privacy/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
