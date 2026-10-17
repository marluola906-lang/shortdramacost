import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BKYOSBUE.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/","cacheDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/node_modules/.astro/","outDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/","srcDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/","publicDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/public/","buildClientDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/client/","buildServerDir":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/server/","adapterName":"","routes":[{"file":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/404.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DCRRZWq3.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/about/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DCRRZWq3.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/privacy/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DCRRZWq3.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DCRRZWq3.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"site":"https://shortdramacost.com","base":"/","trailingSlash":"always","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/apps/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/apps/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/guides/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/guides/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/pages/privacy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/apps/[slug]@_@astro":"pages/apps/_slug_.astro.mjs","\u0000@astro-page:src/pages/guides/[slug]@_@astro":"pages/guides/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astrojs-manifest":"manifest_Wauz4gZP.mjs","C:\\Users\\lenovo\\WorkBuddy\\2026-09-30-23-39-30\\short-drama-affiliate\\site\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\lenovo\\WorkBuddy\\2026-09-30-23-39-30\\short-drama-affiliate\\site\\.astro\\content-modules.mjs":"chunks/content-modules_Brg0op9w.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_grhnNWIa.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_QcquGciM.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-free-coins.mdx?astroPropagatedAssets":"chunks/dramabox-free-coins_C0V6hNmS.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/are-short-drama-apps-a-scam.mdx?astroPropagatedAssets":"chunks/are-short-drama-apps-a-scam_CtOYGr03.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/cheapest-short-drama-app.mdx?astroPropagatedAssets":"chunks/cheapest-short-drama-app_D6BHiAbp.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/apps-like-reelshort.mdx?astroPropagatedAssets":"chunks/apps-like-reelshort_DGQF6c9r.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-subscription-cost.mdx?astroPropagatedAssets":"chunks/dramabox-subscription-cost_i3FrIKxn.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-vs-goodshort.mdx?astroPropagatedAssets":"chunks/dramabox-vs-goodshort_CWL022a-.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-dramabox-subscription.mdx?astroPropagatedAssets":"chunks/how-to-cancel-dramabox-subscription_Cmd2CNL9.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-reelshort-subscription.mdx?astroPropagatedAssets":"chunks/how-to-cancel-reelshort-subscription_DtYbCWXy.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-get-free-coins-on-reelshort.mdx?astroPropagatedAssets":"chunks/how-to-get-free-coins-on-reelshort_DfhofNi1.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/is-dramabox-legit.mdx?astroPropagatedAssets":"chunks/is-dramabox-legit_Cae5Nf9Z.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-stop-paying-for-short-drama-apps.mdx?astroPropagatedAssets":"chunks/how-to-stop-paying-for-short-drama-apps_CncWFbBV.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-coins-vs-vip.mdx?astroPropagatedAssets":"chunks/reelshort-coins-vs-vip_IwH2qKfZ.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/is-reelshort-legit.mdx?astroPropagatedAssets":"chunks/is-reelshort-legit_BRr-yxqB.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-season.mdx?astroPropagatedAssets":"chunks/reelshort-cost-per-season_CWxFEHcu.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-episode.mdx?astroPropagatedAssets":"chunks/reelshort-cost-per-episode_BR95Z1E7.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-price-explained.mdx?astroPropagatedAssets":"chunks/reelshort-price-explained_9K1vm1pi.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-vs-dramabox.mdx?astroPropagatedAssets":"chunks/reelshort-vs-dramabox_pYxmB8bl.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/why-short-drama-app-prices-differ.mdx?astroPropagatedAssets":"chunks/why-short-drama-app-prices-differ_7pRCFk94.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-most-free-episodes.mdx?astroPropagatedAssets":"chunks/short-drama-app-most-free-episodes_CpO2IfSa.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-cancellation-refund.mdx?astroPropagatedAssets":"chunks/short-drama-app-cancellation-refund_2bSlLLAc.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-subscription-trap.mdx?astroPropagatedAssets":"chunks/short-drama-app-subscription-trap_C9fqfsML.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-free-coins.mdx":"chunks/dramabox-free-coins_5gaPT5r4.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/are-short-drama-apps-a-scam.mdx":"chunks/are-short-drama-apps-a-scam_BvcAg5JH.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/cheapest-short-drama-app.mdx":"chunks/cheapest-short-drama-app_TKjgRKzS.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/apps-like-reelshort.mdx":"chunks/apps-like-reelshort_Dj7yHLuJ.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-subscription-cost.mdx":"chunks/dramabox-subscription-cost_BDDNFWwb.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/dramabox-vs-goodshort.mdx":"chunks/dramabox-vs-goodshort_qfp6jE3b.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-dramabox-subscription.mdx":"chunks/how-to-cancel-dramabox-subscription_DDgTHHf6.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-reelshort-subscription.mdx":"chunks/how-to-cancel-reelshort-subscription_JU6N8R4j.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-get-free-coins-on-reelshort.mdx":"chunks/how-to-get-free-coins-on-reelshort_FzCUjwQO.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/is-dramabox-legit.mdx":"chunks/is-dramabox-legit_Bx33S7pl.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-stop-paying-for-short-drama-apps.mdx":"chunks/how-to-stop-paying-for-short-drama-apps_D6lrkRdA.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-coins-vs-vip.mdx":"chunks/reelshort-coins-vs-vip_CJozZXVY.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/is-reelshort-legit.mdx":"chunks/is-reelshort-legit_CsBV2HU-.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-season.mdx":"chunks/reelshort-cost-per-season_C3samzCQ.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-episode.mdx":"chunks/reelshort-cost-per-episode_zfnN9C8P.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-price-explained.mdx":"chunks/reelshort-price-explained_BhE2NwGD.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-vs-dramabox.mdx":"chunks/reelshort-vs-dramabox_BzbGyoz3.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/why-short-drama-app-prices-differ.mdx":"chunks/why-short-drama-app-prices-differ_DuZuSL_D.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-most-free-episodes.mdx":"chunks/short-drama-app-most-free-episodes_NU6EOsEk.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-cancellation-refund.mdx":"chunks/short-drama-app-cancellation-refund_D_m5HaVN.mjs","C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/short-drama-app-subscription-trap.mdx":"chunks/short-drama-app-subscription-trap_CRkaoWcO.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/404.html","/file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/about/index.html","/file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/privacy/index.html","/file:///C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"XVSwcU/Rwv6w8PjrZvR+ekiFcEKJTF6j3r6qOP6+kKQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
