import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, u as unescapeHTML, i as renderHead, r as renderComponent, e as renderSlot } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const SITE = {
  /** 品牌名 —— 显示在 header、title、结构化数据里 */
  brand: "ShortDramaCost",
  /** 一句站点定位，会用在首页 description 与 Organization schema */
  tagline: "Hands-on pricing, coin costs and cancellation guides for short-drama apps",
  /** 默认语言 */
  lang: "en",
  /**
   * 作者信息 —— E-E-A-T 的硬性要求，站点必须有真实可查的作者
   *
   * 只写实际做过的事，不编造学历、职业或从业年限。理由有两条：
   *   1. 编造的资历一旦被对照出来，伤害远大于收益；
   *   2. 描述真实执行的方法本身就构成有效资质 —— 对「价格实测」这个
   *      细分领域，"我是一台一台手机点开商店记下来的"就是最好的证明。
   */
  author: {
    /** 固定笔名 —— 出现在每篇文章的作者栏与结构化数据的 author 字段 */
    name: "marluola",
    /**
     * 一句话说明"为什么有资格写这个"。
     * 刻意用一般现在时描述方法，而不是声称"已实测 N 个 App"——
     * 后者在价格尚未核实的阶段属于虚假声明（见 priceVerifiedOn 约定）。
     */
    bio: "Installs short-drama apps on both an iPhone and an Android phone, watches through the free episodes to find where the paywall actually starts, and records the in-app coin pack and VIP prices by hand on the day each guide is published.",
    /** 可选的公开联系方式，有助于建立信任 */
    contact: "hello@shortdramacost.com",
    /** 对外声明的开始时间 —— 必须是实际的，会在 About 页作为资历陈述出现 */
    since: "October 2026",
    /** 实测设备 —— 双平台覆盖是本站在"价格对比"上的核心卖点 */
    devices: "an iPhone and an Android phone"
  },
  /** 联盟收入披露 —— 必须醒目、必须真实（FTC 与 Google 双重要求） */
  disclosure: "Some links on this page are affiliate links. If you sign up through them we may earn a commission at no extra cost to you. This never affects our scores or what we write.",
  /** 价格核实时效声明 —— 短剧 App 改价频繁，这句话是必要的免责 */
  priceDisclaimer: "Prices are set by the app publishers and change often. Every price on this page was checked in-app on the date shown and may have changed since."
};
const AFFILIATE_REL = "sponsored nofollow noopener";
function formatDate(iso) {
  const d = /* @__PURE__ */ new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
function absoluteUrl(siteUrl, path) {
  const base = siteUrl.replace(/\/+$/, "");
  const clean = path.replace(/^\/+/, "").replace(/\/+$/, "");
  return clean === "" ? `${base}/` : `${base}/${clean}/`;
}
const NAV = [
  { href: "/", label: "Best apps" },
  { href: "/apps/reelshort/", label: "ReelShort" },
  { href: "/apps/dramabox/", label: "DramaBox" },
  { href: "/about/", label: "About" }
];

const $$Astro$2 = createAstro("https://shortdramacost.com");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const path = Astro2.url.pathname.replace(/\/$/, "") || "/";
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="wrap inner"> <a class="brand" href="/"> <span class="dot" aria-hidden="true"></span> <span>${SITE.brand}</span> </a> <nav class="site-nav" aria-label="Main"> ${NAV.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(path === item.href.replace(/\/$/, "") ? "page" : void 0, "aria-current")}>${item.label}</a>`)} </nav> </div> </header>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/SiteHeader.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="wrap"> <nav class="fnav" aria-label="Footer"> <a href="/">Best apps</a> <a href="/apps/reelshort">ReelShort</a> <a href="/apps/dramabox">DramaBox</a> <a href="/about">About</a> <a href="/privacy">Privacy</a> </nav> <p class="disc"> <strong>Affiliate disclosure:</strong> ${SITE.disclosure} </p> <p class="disc">${SITE.priceDisclaimer}</p> <p class="disc"> ${SITE.brand} is an independent publication and is not affiliated with, endorsed
      by, or sponsored by any app publisher named on this site. All trademarks belong
      to their respective owners.
</p> <p class="small">© ${year} ${SITE.brand}</p> </div> </footer>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/SiteFooter.astro", void 0);

const $$Astro$1 = createAstro("https://shortdramacost.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { crumbs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="crumbs" aria-label="Breadcrumb"> <ol> ${crumbs.map((c, i) => renderTemplate`<li> ${i === crumbs.length - 1 ? renderTemplate`<span aria-current="page">${c.name}</span>` : renderTemplate`<a${addAttribute(c.url, "href")}>${c.name}</a>`} </li>`)} </ol> </nav>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/Breadcrumbs.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://shortdramacost.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    path,
    siteUrl,
    crumbs = [],
    jsonLd = [],
    noindex = false
  } = Astro2.props;
  const canonical = absoluteUrl(siteUrl, path);
  const fullTitle = title.includes(SITE.brand) ? title : `${title} | ${SITE.brand}`;
  return renderTemplate`<html${addAttribute(SITE.lang, "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="p:domain_verify" content="ecee8251cbed1760bc5460e7a621eb63"><title>${fullTitle}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}>${noindex && renderTemplate`<meta name="robots" content="noindex,follow">`}<meta property="og:type" content="article"><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:site_name"${addAttribute(SITE.brand, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(fullTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="icon" href="/favicon.svg" type="image/svg+xml"><meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#1a1a18" media="(prefers-color-scheme: dark)">${jsonLd.map((block) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(block)))}${renderHead()}</head> <body> <a class="skip" href="#main">Skip to content</a> ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} <main id="main"> <div class="wrap"> ${crumbs.length > 0 && renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "crumbs": crumbs })}`} ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </body></html>`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, AFFILIATE_REL as A, SITE as S, absoluteUrl as a, formatDate as f };
