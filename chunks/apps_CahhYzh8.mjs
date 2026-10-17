import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { A as AstroError, U as UnknownContentCollectionError, a as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, b as renderTemplate, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position",
  "background"
];

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_B3xs9EPC.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://shortdramacost.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_CJCkXcWz.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_E2A1fM-W.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const APPS = [
  /* =====================================================================
     主力 App —— 站点所有深度内容围绕它展开
     ===================================================================== */
  {
    slug: "reelshort",
    name: "ReelShort",
    tagline: "The original English-language short-drama app — best production, highest coin cost",
    score: 8.6,
    primary: true,
    bestFor: "Viewers who want native English originals with Western casts and accept paying more for polish",
    platforms: "iOS, Android, Web player",
    freeTier: "About 10–16 free episodes per series (varies by title), plus daily check-in coins, watch-time tasks and ad unlocks",
    catalog: "Narrower than rivals but consistently high production value",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free", note: "Coins and VIP are the paid layers" },
      { label: "Single episode unlock", value: "60 coins ≈ $0.60", note: "At the $4.99/500-coin pack rate. Free/paid boundary varies by series (10–16 episodes observed)." },
      { label: "Coin packs", value: "$4.99 – $49.99", note: "Five tiers; the two smallest only appear in the episode unlock popup, not the store page" },
      { label: "VIP weekly (renewal)", value: "$5.99 – $19.99 / week", note: "Observed renewal prices on Android, all + tax" },
      { label: "VIP intro week", value: "Rotates daily ($1.99 – $15.99 observed)", note: "We saw 67% OFF one day and 21% OFF the next — judge by the renewal price" },
      { label: "VIP annual", value: "$199.99 / year", note: "About $3.85/week" }
    ],
    pros: [
      "English originals filmed with real casts — no dubbing to get wrong",
      "Generous per-series free tier (5–10 episodes) before any paywall",
      "Works in a desktop browser, so you can watch without installing anything",
      "Consistent production quality across the catalogue"
    ],
    cons: [
      "Finishing a series with coins runs $25–45 at 60 coins (about $0.60) per episode",
      "The discounted intro week rotates daily — 67% OFF one day, 21% OFF the next on the same account",
      "The two smallest coin packs are hidden inside the unlock popup; the store page starts at $19.99",
      "Free-episode boundary varies by series and is never published (10–16 episodes observed)",
      "Store rating and third-party review rating diverge sharply — read both before subscribing"
    ],
    verdict: "The best-produced catalogue in the category, and the most expensive way to binge. Good value if you watch one series at a time and lean on the free tier; poor value if you finish a series every week.",
    sections: [
      {
        id: "what-it-is",
        heading: "What ReelShort actually is",
        body: [
          "ReelShort is the app that took the vertical micro-drama format — 60- to 90-second episodes, 60 to 90 episodes per series, cliffhanger every episode — and made it work with English-language, Western-cast productions rather than dubbed imports.",
          "That single choice drives everything else about it. Because it films its own originals instead of licensing and dubbing existing shows, its catalogue is smaller but its hit rate per title is higher, and there is no dubbing mismatch to complain about.",
          "The trade-off is price. Originals cost money to shoot, and that cost lands on the viewer through coin packs and VIP tiers that sit at the top of the category."
        ]
      },
      {
        id: "how-payment-works",
        heading: "How the payment model works — and where the cost hides",
        body: [
          "There are two separate paid layers, and this is the part most reviews gloss over: coins and VIP. They solve different problems and mixing them up is how people end up spending far more than they expected.",
          "Coins are the per-episode unlock currency. You watch the free opening episodes, hit the paywall, and spend coins to keep going. For a full-length series this is where the real money goes, because you are paying per episode rather than per month.",
          "VIP is a time-based subscription that removes most of the paywall for the duration. If you watch frequently it is dramatically cheaper per episode than coins; if you watch once a month the weekly tier can cost more than simply buying coins for the one series you wanted.",
          "The practical rule: decide how many series you will finish this month before you buy anything. One series — buy coins. Two or more — look hard at the annual tier instead of the weekly one."
        ]
      },
      {
        id: "free-route",
        heading: "How far the free tier actually gets you",
        body: [
          "Every series opens with a block of free episodes, and there are daily check-in coins on top. That is enough to sample the catalogue properly without paying anything.",
          "What the free tier will not do is let you finish a series. It is designed to stop at the point where you are invested — that is the entire business model, and it is worth being clear-eyed about rather than treating as a trick.",
          "Our recommendation: use the free tier to test three or four series across different genres before you spend anything. If none of them hook you, the app is not for you and you have lost nothing."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Who should not subscribe",
        body: [
          "If you finish more than a couple of series a month, the coin economy here is the wrong shape for you — a volume-watching habit is served far better by a subscription-first app with a larger catalogue.",
          "If you watch on a television, this is not the app for you either: vertical video on a horizontal screen is a format mismatch no amount of production quality fixes.",
          "And if you want to avoid subscriptions entirely, look for apps where a meaningful share of complete series stay free rather than ones where free episodes are strictly a sampler."
        ]
      }
    ],
    faqs: [
      {
        q: "Is ReelShort free to use?",
        a: "Downloading it is free and every series opens with a block of free episodes, plus there are daily check-in coins. Finishing a series usually requires either coins or a VIP subscription, so a small number of series can be watched at no cost but a regular viewing habit cannot."
      },
      {
        q: "Why is ReelShort more expensive than other short-drama apps?",
        a: "It films its own English-language originals with real casts instead of licensing and dubbing existing productions. Original production costs more per title, which shows up in the coin packs and in a weekly VIP tier that sits at the top of the category."
      },
      {
        q: "Is a ReelShort VIP subscription worth it?",
        a: "It depends on how many series you finish per month. If you finish two or more, the annual tier is usually far cheaper than buying coins per series. If you watch one series occasionally, buying coins for that single series is normally the cheaper route."
      },
      {
        q: "Does ReelShort work on a desktop browser?",
        a: "Yes. It has a web player in addition to the iOS and Android apps, which is useful if you want to watch without installing anything. Tablets work but waste screen space on vertical video, and televisions are not properly supported."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/1vwtyh4hj9R3",
    screenshots: [
      {
        src: "/screenshots/reelshort-vip-plans.webp",
        alt: "ReelShort VIP subscription screen showing weekly and yearly plans with prices in US dollars",
        caption: "VIP plans as shown in the app on Android, 9 Oct 2026 — the weekly tier was offered at two different prices on consecutive days",
        width: 414,
        height: 819
      },
      {
        src: "/screenshots/reelshort-coin-packs.webp",
        alt: "ReelShort coin refill page listing coin pack tiers with dollar prices",
        caption: "Coin packs: the two cheapest tiers only appear inside the episode-unlock popup, never on this page",
        width: 415,
        height: 816
      },
      {
        src: "/screenshots/reelshort-purchase-confirmation.webp",
        alt: "Google Play purchase confirmation dialog for a ReelShort coin pack showing the dollar amount",
        caption: "Billing runs through Google Play, which is also where the subscription has to be cancelled",
        width: 415,
        height: 811
      },
      {
        src: "/screenshots/reelshort-episode-free-boundary.webp",
        alt: "ReelShort episode list showing free episodes followed by episodes marked with padlock icons",
        caption: "The free/paid boundary is never published — on this series it fell after episode 16, on another after 10",
        width: 414,
        height: 817
      },
      {
        src: "/screenshots/reelshort-ad-unlock-prompt.webp",
        alt: "ReelShort ad unlock prompt offering to unlock an episode in exchange for watching an advertisement",
        caption: "Ten ad unlocks a day, the most generous allowance we measured",
        width: 415,
        height: 817
      },
      {
        src: "/screenshots/reelshort-checkin-calendar.webp",
        alt: "ReelShort daily check-in calendar showing the coin reward for each day of the week",
        caption: "Check-in coins are the main free route: day 3 paid 80 coins in our test",
        width: 414,
        height: 825
      }
    ],
    relatedGuides: [
      "how-to-get-free-coins-on-reelshort",
      "is-reelshort-legit",
      "reelshort-price-explained",
      "how-to-cancel-reelshort-subscription",
      "reelshort-vs-dramabox"
    ],
    sourceNote: "All prices verified in-app on Android (US Google Play account), 8–9 October 2026. Store ratings: App Store 4.7 (506K), Google Play 3.8 (1.92M), Trustpilot 1.3 (265, unclaimed profile)."
  },
  /* =====================================================================
     第二实体 —— 用于分散单一 App 风险，同时承接对比类关键词
     ===================================================================== */
  {
    slug: "dramabox",
    name: "DramaBox",
    tagline: "The volume option — biggest catalogue, lowest cost per finished series",
    score: 8.5,
    primary: false,
    bestFor: "Binge watchers and price-sensitive viewers who care about catalogue size over production polish",
    platforms: "iOS, Android, Web player",
    freeTier: "Free opening episodes — paywall arrived at episode 12 in our testing; plus check-in coins, video tasks and 8 ad unlocks/day",
    catalog: "Largest in the category — 16,000+ series claimed, 100+ new per week",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free" },
      { label: "Primary model", value: "Subscription first, coins optional", note: "The reverse of how ReelShort is structured" },
      { label: "Weekly membership", value: "$9.99/week for first 3 weeks, then $12.99/week", note: "Verified on Android 9 Oct 2026; intro offer carries a 24h countdown and rotates" },
      { label: "Annual membership", value: "$119.99 / year", note: "Marketed as $2.31/week — $80 less than ReelShort's annual tier" },
      { label: "Coin packs", value: "$2.99 – $24.99", note: "300/$2.99, 770/$6.99, 1,600/$12.99, 3,500/$24.99 — cheaper entry than ReelShort" },
      { label: "Single episode unlock", value: "50 coins ≈ $0.50", note: "Nearly identical to ReelShort per episode once converted" }
    ],
    pros: [
      "Far cheaper per finished series than coin-first apps",
      "Largest catalogue with a very fast refresh rate",
      "Subscription-first structure makes cost predictable",
      "Wide language and subtitle coverage"
    ],
    cons: [
      "Dubbed rather than original English, so audio quality varies by title",
      "Starts charging early — paywall arrived at episode 12 of the first series we tested",
      "Prices by your IP region, not your account: the same device showed yen prices on a Japanese connection and dollars on a US one",
      "Day-7 check-in pays 50 coins vs ReelShort's 200, and ad unlocks cap at 8/day vs 10",
      "Member points are earned by paying members only — a retention hook, not a free route"
    ],
    verdict: "If you measure value as cost per finished series, this is the cheapest major option by a wide margin. You trade production consistency and native English audio for volume and price.",
    sections: [
      {
        id: "what-it-is",
        heading: "What DramaBox actually is",
        body: [
          "DramaBox is the volume play. Where other apps commission a smaller number of higher-budget originals, DramaBox keeps a much larger catalogue refreshed continuously and charges far less to access all of it.",
          "That shows up most clearly in structure: it is subscription-first rather than coin-first, which means a single weekly subscription typically covers as many series as you can watch."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Where it falls short",
        body: [
          "The cost of volume is consistency. Per-title production quality varies more here than in originals-first apps, and because most content is dubbed rather than filmed in English, audio quality is not uniform.",
          "If you specifically want native English performances, this is the wrong app despite the better price. If you want the most series for the least money, it is the right one."
        ]
      }
    ],
    faqs: [
      {
        q: "How much does DramaBox cost per month?",
        a: "Verified in-app on Android (October 2026): weekly membership is $9.99/week for the first 3 weeks then $12.99/week, and the annual tier is $119.99/year (about $2.31/week). One week of membership covers as many series as you can watch, which is why it is far cheaper per finished series than coin-first apps. Check the current price in the app — intro offers rotate."
      },
      {
        q: "Is DramaBox cheaper than ReelShort?",
        a: "For finishing a series, substantially cheaper — one week of membership ($9.99–$12.99 verified October 2026) covers multiple full series, against roughly $25–45 in ReelShort coins for one series. The per-episode coin prices are almost identical between the two apps; the gap comes from DramaBox making the subscription the obvious path. The trade-off is dubbed rather than original English audio and an earlier paywall."
      },
      {
        q: "Does DramaBox have original English content?",
        a: "Its catalogue leans heavily on dubbed and subtitled titles rather than native English productions. If English-language originals are a requirement, an origins-first app will suit you better."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/uR3A7JBLdipd",
    screenshots: [
      {
        src: "/screenshots/dramabox-membership-plans.webp",
        alt: "DramaBox membership screen showing weekly and annual subscription prices in US dollars",
        caption: "Membership pricing in US dollars, 9 Oct 2026 — the same screen showed yen prices on a Japanese connection",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/dramabox-store-plans.webp",
        alt: "DramaBox in-app store listing membership passes and coin packs with prices",
        caption: "Subscription first, coins second — the opposite structure to ReelShort",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/dramabox-paywall-regional-pricing.webp",
        alt: "DramaBox paywall screen showing coin prices with the currency changing between connections",
        caption: "Pricing follows your IP region, not your account, so a VPN changes what you are quoted",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/dramabox-checkin-rewards.webp",
        alt: "DramaBox daily check-in rewards screen showing coin amounts for each day",
        caption: "Check-in pays 50 coins on day seven against ReelShort's 200",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/dramabox-ad-unlock.webp",
        alt: "DramaBox ad unlock popup showing how many episodes can be unlocked by watching ads today",
        caption: "Eight ad unlocks a day, against ten on ReelShort",
        width: 505,
        height: 884
      }
    ],
    relatedGuides: ["reelshort-vs-dramabox"]
  },
  /* =====================================================================
       第二梯队 —— 2026-10-09 全部完成实机实测（BlueStacks + 真实 Google Play 计费，
       美元价），sections / faqs / priceRows / screenshots 已补齐，
       因此由枢纽页的不可点卡片自动升级为独立测评页。
  
       升级规则不变：apps/[slug].astro 的 getStaticPaths() 只遍历 REVIEWED_APPS，
       所以「有没有独立页」完全由本文件里 sections 是否为空决定，
       以后新增 App 时先补内容、再自动获得页面，不要为了凑数量提前放开。
       ===================================================================== */
  {
    slug: "goodshort",
    name: "GoodShort",
    tagline: "The most polished interface we tested — and the stingiest ad allowance",
    score: 8.2,
    primary: false,
    bestFor: "People who judge an app by how it feels to use rather than by catalogue size",
    platforms: "iOS, Android",
    freeTier: "Episodes 1–7 free on our test series (50 episodes), 5 ad unlocks a day, and the most active check-in and reward system of the four apps we measured",
    catalog: "Mid-sized — we verified the episode inventory of one series, not the full catalogue",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free" },
      { label: "Weekly VIP", value: "$19.99 / week", note: "Unlocks all series for 7 days · auto-renew · cancel anytime" },
      { label: "Yearly VIP", value: "$149.99 / year", note: "About $0.41 a day" },
      { label: "In-app discount popup", value: "$19.99/week for 3 weeks", note: 'Labelled "51% OFF"; the renewal price after the three weeks is printed as "then /w" with no number' },
      { label: "Coin packs", value: "$4.99 – $29.99", note: "500 coins to 4,050 coins including bonus; the bonus percentage is printed on each pack (+5% / +10% / +35%)" },
      { label: "Single episode unlock", value: "50 coins ≈ $0.50", note: "At the $4.99/500-coin rate" },
      { label: "Free/paid boundary", value: "Episodes 1–7 free", note: "Out of 50 episodes on the series we tested" },
      { label: "Ad unlocks", value: "5 per day", note: "Half the allowance of ReelShort and ShortMax — and ours failed once" }
    ],
    pros: [
      "The best-organised onboarding and navigation of the six apps on this site — a genre preferences wall runs before the feed starts",
      "The most generous check-in we measured: 320 bonus coins across seven days (30/30/50/30/30/60/90)",
      "Bonus coins are labelled on the packs themselves (+5% / +10% / +35%), so you can see exactly what you are buying",
      "A rewards page that pays coins for playing games and reading as well as for watching ads",
      "Store pricing is the simplest of the four we tested: one weekly price and one yearly price, no tiers to decode"
    ],
    cons: [
      "Only 5 ad unlocks a day, half of what ReelShort and ShortMax allow",
      'An ad unlock failed outright in our testing — "Ad unlock failed. Please try again later" — which can burn part of the daily allowance',
      "Free coins lean on third-party offerwalls, so earning them means installing other apps or trading attention elsewhere",
      'Discount messaging contradicts itself: a "50% OFF" banner on the home feed sits next to a "51% OFF" popup inside a series',
      "The intro offer promises three weeks at $19.99 and then leaves the renewal price blank"
    ],
    verdict: "If how an app feels matters most to you, this is the one — the interface and onboarding are visibly better than the rest of the category. Just do not count on the ad route to carry you: five unlocks a day, and ours failed once.",
    sections: [
      {
        id: "what-it-is",
        heading: "What GoodShort actually is",
        body: [
          "GoodShort is the app that behaves like a product team cares about it. Where most short-drama apps bury the paywall behind four taps and a carousel, GoodShort opens with a genre preferences wall, then builds a feed around what you picked.",
          'The pricing is also unusually plain. One weekly pass, one yearly pass, no tiers, no "with ads" and "ad-free" variants to compare. In a category where a single app can show five different weekly prices on the same day, that is a real difference.',
          "What it is not is the cheapest option, or the biggest catalogue. It is the one you will least mind using."
        ]
      },
      {
        id: "why-interface-matters",
        heading: "Why the interface is worth paying attention to",
        body: [
          "In a vertical-drama app you make one decision hundreds of times: keep watching or move on. The interface is the entire mechanism for that decision. An app where the next episode, the unlock prompt and the free alternative all sit on one screen is a materially different product from one where you have to hunt.",
          "GoodShort is the clearest example of that in our testing. The unlock screen presents the three routes — watch an ad, spend coins, or subscribe — together, so you can see what each one costs before committing.",
          "This is also where its weakness shows. The clearest presentation is worth less when the ad route is the most restricted of the four apps we measured, and when one of our ad attempts failed rather than paying out."
        ]
      },
      {
        id: "free-coins",
        heading: "How the free-coin system really works",
        body: [
          "GoodShort has the most active free-coin economy we encountered, and the least self-contained one. Daily check-in pays 320 bonus coins over seven days, which is comfortably more than ReelShort or DramaBox.",
          "The rest comes from offerwalls — playing partner games, reading partner fiction, watching ads at four coins a clip. That means the value is real but the cost is not zero: you pay in time, and in the data the third-party offerwall collects when you install what it is promoting.",
          "Our advice is to treat offerwall earnings as a bonus rather than a plan. Use the check-in, use the five daily ad unlocks, and decide whether to subscribe based on the weekly pass price alone."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Who should skip it",
        body: [
          "If your goal is to watch as much as possible without paying, this is the wrong pick: five ad unlocks a day and a seven-episode free opening will not get you through a 50-episode series, and its rival StardustTV gives you ten free episodes instead of seven.",
          "If you want the largest possible catalogue, the volume players beat it outright.",
          "And if you dislike the feeling of being marketed at, note that the discount banners here are aggressive even by the standards of this category — the app will show you two different discount figures in two different places on the same day."
        ]
      }
    ],
    faqs: [
      {
        q: "How much does GoodShort cost?",
        a: "Verified in the app on Android with a US Google Play account on 9 October 2026: weekly VIP is $19.99/week and yearly VIP is $149.99/year, about $0.41 a day. Coin packs run from $4.99 for 500 coins to $29.99 for 4,050 coins including bonus, and a single episode costs 50 coins, or about $0.50 at the cheapest pack rate. An in-app popup also offered three weeks at $19.99/week, but it did not state the renewal price."
      },
      {
        q: "Is GoodShort free to use?",
        a: "Downloading it is free and the paywall arrived after episode 7 of the 50-episode series we tested. After that you need to watch ads, spend coins or subscribe. Free coins come from a seven-day check-in worth 320 bonus coins plus third-party offerwall tasks, but the ad route is capped at five unlocks a day — the lowest allowance we measured."
      },
      {
        q: "Why did the ad unlock fail?",
        a: 'We captured an "Ad unlock failed. Please try again later" message during testing. When that happens the episode does not unlock, and depending on the failure it can consume part of the daily allowance. It is a good reason not to rely on the ad route as your only way to finish a series.'
      },
      {
        q: "Is GoodShort cheaper than ReelShort or DramaBox?",
        a: "Per episode it is slightly cheaper than ReelShort — 50 coins against 60 — and its weekly and yearly passes are priced identically to ShortMax. It is more expensive than DramaBox, whose annual pass is $119.99 against GoodShort's $149.99, and DramaBox also gives away more free gold per day."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/o5joUVp3y6zM",
    screenshots: [
      {
        src: "/screenshots/goodshort-home-feed.webp",
        alt: "GoodShort home feed showing genre shelves and a promotional discount banner",
        caption: 'Home feed on Android, 9 Oct 2026 — the "50% OFF" banner here contradicts the "51% OFF" popup inside a series',
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/goodshort-store-plans.webp",
        alt: "GoodShort in-app store listing weekly and yearly VIP passes with coin packs and prices",
        caption: "One weekly price, one yearly price, no tiers — the plainest pricing screen of the four apps we tested",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/goodshort-episode-free-boundary.webp",
        alt: "GoodShort episode grid showing unlocked episodes followed by rows of locked episodes",
        caption: "The paywall fell after episode 7 on this 50-episode series, leaving a long tail of locked episodes",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/goodshort-ad-unlock-failed.webp",
        alt: "GoodShort error message reading Ad unlock failed, please try again later",
        caption: "Our ad unlock failed outright — the reward is not guaranteed, and the daily allowance is only five",
        width: 505,
        height: 884
      }
    ],
    sourceNote: "All prices verified in the app on Android with a US Google Play account on 9 October 2026, using real Google Play billing. App Store US rating at the time of writing: 4.90 from 529K ratings (iTunes Search API, 8 October 2026).",
    relatedGuides: []
  },
  {
    slug: "shortmax",
    name: "ShortMax",
    tagline: "The shortest free opening of the apps we tested — but the most generous ad unlocks",
    score: 7.6,
    primary: false,
    bestFor: "Viewers who watch every day and will use the daily ad unlocks, and people who want to watch on a television",
    platforms: "iOS, Android (television apps are advertised by the publisher; we did not test them)",
    freeTier: "Episodes 1–6 free on our test series (30 episodes), then 50 coins an episode, 10 ad unlocks a day, or a pass",
    catalog: "Large dubbed catalogue — we verified the pricing and free boundary, not the catalogue size",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free" },
      { label: "Weekly Pass Pro", value: "$19.99 / week", note: "≈$2.86 a day · auto-renew · cancel anytime" },
      { label: "Annual Pass Pro", value: "$149.99 / year", note: "≈$0.41 a day" },
      { label: "Intro pass (popup)", value: "$12.79 / week for the first 2 weeks", note: "Then $19.99/week; the popup carried a visible countdown" },
      { label: "Coin packs", value: "$4.99 – $24.99", note: "500 / 1,100 / 2,400 / 3,375 coins; the two larger packs carry bonus coins of up to +35%" },
      { label: "Single episode unlock", value: "50 coins ≈ $0.50", note: "At the $4.99/500-coin rate" },
      { label: "Free/paid boundary", value: "Episodes 1–6 free", note: "Out of 30 episodes on the series we tested — the shortest opening we measured" },
      { label: "Ad unlocks", value: "10 per day", note: "The joint-highest allowance, matching ReelShort" }
    ],
    pros: [
      "Ten ad unlocks a day, double what GoodShort and StardustTV allow — the best free route of any app we measured",
      "The cheapest annual pass at this weekly price point: $149.99/year works out to about $0.41 a day",
      "New accounts get a 100-coin bonus on sign-up",
      "Coin packs scale their bonus with size, up to +35% on the largest pack",
      "The publisher also ships television apps, which almost nobody else in this category does"
    ],
    cons: [
      "The shortest free opening we measured: six episodes, then the paywall, on a 30-episode series",
      "Ad unlocks are served as full-screen third-party install advertisements — we lost two capture attempts to ads that took over the screen mid-flow",
      "The pricing page shows two different per-day figures at once ($2.86/day and $2.28/day) for the same weekly pass",
      "Discount pressure is explicit: the intro offer runs on a countdown and reverts to $19.99/week",
      "The annual pass is more expensive than DramaBox's $119.99 and buys a smaller, more expensive-per-episode library"
    ],
    verdict: "The best free route of any app here — ten ad unlocks a day is genuinely useful — attached to the shortest free opening and the most intrusive advertising we sat through. Worth it if you watch daily and can tolerate the interruptions.",
    sections: [
      {
        id: "what-it-is",
        heading: "What ShortMax actually is",
        body: [
          "ShortMax sits in the middle of this category and prices itself near the top of it. It is a subscription-first app with a large dubbed catalogue, a weekly pass at $19.99 and an annual pass at $149.99 — the same headline prices as GoodShort, attached to a much shorter free opening.",
          "What separates it is the ad allowance. Ten ad unlocks a day is more than any other app we measured, and for a daily viewer that is a real, repeatable way to watch without paying.",
          "What also separates it is the advertising itself. The reward ads are full-screen third-party promotions, and they interrupted our own testing. Ten unlocks a day is only generous if you can sit through them."
        ]
      },
      {
        id: "pricing",
        heading: "Which price is the real one",
        body: [
          "The list price is $19.99 a week, and the app will try to sell you an intro week at $12.79 for the first two weeks behind a countdown timer. Both figures are real; the second one expires.",
          "The number worth comparing is the annual pass, because it is the only one that tells you what the app costs per day of watching. At $149.99 a year ShortMax undercuts ReelShort's $199.99 and is beaten by DramaBox's $119.99.",
          "Coins are the second route and the more expensive one per episode: 50 coins, about $0.50, for a single episode, against a weekly pass that unlocks everything for seven days. Buy coins only if you have exactly one show in mind."
        ]
      },
      {
        id: "free-route",
        heading: "How far free actually gets you",
        body: [
          "Six episodes. That was the boundary on the 30-episode series we tested, and it is the shortest opening of the four apps measured for this site — GoodShort gives seven, NetShort nine and StardustTV ten.",
          "On top of that, the ten daily ad unlocks are the strongest free allowance here. If you are happy to watch two or three ads a day, the app becomes usable indefinitely without paying.",
          "The limitation is worth stating plainly: this method works for one series at a time. It does not work if you want to binge a 30-episode show in an evening, and it depends on the ads actually loading — ours were third-party install ads that we did not always get through."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Who should skip it",
        body: [
          "If you dislike advertising, skip it. The free route is built on ads, and they are the least pleasant we encountered in this comparison.",
          "If you want to sample a series properly before paying, six free episodes is thin — StardustTV and NetShort both let you watch further before the paywall appears.",
          "And if you are choosing on price alone, the annual pass is beaten by DramaBox, though ShortMax does slightly undercut ReelShort."
        ]
      }
    ],
    faqs: [
      {
        q: "How much does ShortMax cost?",
        a: "Verified on Android with a US Google Play account on 9 October 2026: Weekly Pass Pro is $19.99/week and Annual Pass Pro is $149.99/year, about $0.41 a day. An in-app popup offered the first two weeks at $12.79/week with a countdown timer before reverting to $19.99. Coin packs run from $4.99 for 500 coins to $24.99 for 3,375 coins including bonus, and a single episode costs 50 coins."
      },
      {
        q: "Is ShortMax free?",
        a: "Partly. Episodes 1–6 of the series we tested were free, then the paywall arrived. After that you have three routes: watch ads (up to ten episodes a day, the best allowance we measured), spend 50 coins per episode, or buy a pass."
      },
      {
        q: "Is ShortMax cheaper than ReelShort?",
        a: "Slightly, on both routes. Its yearly pass is $149.99 against ReelShort's $199.99, and its per-episode coin price is 50 coins against 60 — about $0.50 versus $0.60. The trade-off is that ReelShort starts you with more free episodes."
      },
      {
        q: "Does ShortMax work on a television?",
        a: "The publisher advertises television apps, which is unusual in this category, but we tested only the Android phone build and cannot confirm how the TV version behaves. Treat TV support as unverified by us."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/80SIjW6dw0Lh",
    screenshots: [
      {
        src: "/screenshots/shortmax-home-feed.webp",
        alt: "ShortMax home screen showing recommendation shelves and a new-user banner",
        caption: "Home feed on Android, 9 Oct 2026, captured in a clean emulator with a US Play account so the dollar prices are real",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/shortmax-store-plans.webp",
        alt: "ShortMax store page listing Weekly Pass Pro and Annual Pass Pro alongside coin packs with prices",
        caption: "The weekly and annual passes share the screen with coin packs — two different per-day figures appear at once",
        width: 505,
        height: 852
      },
      {
        src: "/screenshots/shortmax-intro-offer.webp",
        alt: "ShortMax discount popup offering an introductory weekly price with a countdown timer",
        caption: "The intro offer runs on a countdown and reverts to $19.99 a week",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/shortmax-episode-free-boundary.webp",
        alt: "ShortMax episode list showing the last free episode followed by locked episodes with padlock icons",
        caption: "Six free episodes on a 30-episode series — the shortest opening we measured",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/shortmax-unlock-options.webp",
        alt: "ShortMax episode unlock screen offering to watch an ad, spend coins or subscribe",
        caption: "All three routes on one screen, with the daily ad counter visible at 0 of 10",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/shortmax-welcome-bonus.webp",
        alt: "ShortMax welcome bonus screen awarding new accounts a small number of bonus coins",
        caption: "New accounts get a 100-coin welcome bonus — useful, but a fraction of one episode's cost",
        width: 505,
        height: 884
      }
    ],
    sourceNote: "All prices verified in a clean Android emulator running the real Google Play billing SDK with a US account, 9 October 2026. Screenshots were captured in the same session.",
    relatedGuides: []
  },
  {
    slug: "stardusttv",
    name: "StardustTV",
    tagline: "The widest free opening we measured — and three different weekly prices",
    score: 8,
    primary: false,
    bestFor: "People who want to watch a lot before deciding whether to pay anything at all",
    platforms: "iOS, Android",
    freeTier: "Episodes 1–10 free on our test series (50 episodes) — the widest free opening of the four apps we measured — then 65 coins an episode or two ads per episode",
    catalog: "Mid-sized catalogue that includes titles labelled as containing AI-generated content",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free" },
      { label: "Weekly VIP (listed price)", value: "$19.99 / week", note: "Auto-renew · cancel anytime · PayPal supported at checkout" },
      { label: "Weekly VIP (checkout price)", value: "$17.99 / week", note: "A 10% discount applied at the payment step" },
      { label: "Membership coupon (popup)", value: "$13.19 / week", note: "Labelled 40% off with a 59:56 countdown; the crossed-out base price was never shown, and $13.19 does not reconcile with $19.99" },
      { label: "Coin packs", value: "$5.99 – $29.99", note: "600 / 1,000 / 2,200 / 3,450 coins including bonus" },
      { label: "Single episode unlock", value: "65 coins ≈ $0.65", note: "The highest per-episode rate we measured apart from NetShort" },
      { label: "Free/paid boundary", value: "Episodes 1–10 free", note: "Out of 50 episodes on the series we tested" },
      { label: "Ad route", value: "2 ads per episode, 5 episodes a day", note: "Two ads per unlock is double what ReelShort and DramaBox require" },
      { label: "Annual pass", value: "Not offered in the payment flow we saw", note: "Only the weekly pass appeared — no cheaper long-term option to move to" }
    ],
    pros: [
      "The widest free opening in our testing: ten episodes before any paywall",
      "PayPal is accepted at checkout alongside the store payment sheet, which almost nobody else in this category offers",
      'Playback screens carry an explicit "Contains AI-generated content" label rather than hiding how a title was made',
      "Free-coin tasks include reading short articles, so not every reward depends on watching another ad",
      "A coupon popup can bring the weekly price down to $13.19, the lowest weekly figure we saw anywhere in this comparison"
    ],
    cons: [
      "Three weekly prices coexist — $19.99, $17.99 and $13.19 — and the 40% coupon's base price does not reconcile with the listed price",
      "65 coins an episode is among the most expensive single-episode rates we measured",
      "The ad route costs two ads per episode and five episodes a day, so it is slower and more interruptive than ReelShort's one ad per episode",
      "No annual pass appeared anywhere in the payment flow, which removes the cheapest long-term route",
      "Its reputation as an app where entire series are free did not hold up in our testing: we found a ten-episode opening and then a paywall",
      "Some catalogue titles are openly AI-generated, and production quality varies accordingly"
    ],
    verdict: "The best free opening we found and the least pushy upsell — but the price you are shown depends on which popup reaches you first, and there is no annual tier to fall back on.",
    sections: [
      {
        id: "what-it-is",
        heading: "What StardustTV actually is",
        body: [
          "StardustTV is a mid-sized app in a category of very large ones, and it plays a different game: instead of competing on catalogue size, it gives you more before asking for money. Ten free episodes is the most generous opening of the four apps we measured for this site.",
          "Two details stand out. It labels titles that contain AI-generated footage, which no other app we tested does. And it accepts PayPal at checkout, which matters if you would rather not attach a card to yet another subscription.",
          "Those are the marks of an app that expects you to look closely before you pay. The pricing, unfortunately, does not return the favour."
        ]
      },
      {
        id: "pricing",
        heading: "Three prices for the same subscription",
        body: [
          "On the same day, on the same account, StardustTV quoted us three weekly prices: $19.99 on the plan card, $17.99 at checkout after a 10% discount, and $13.19 behind a 40%-off coupon popup with a one-hour countdown.",
          "The coupon is the cheapest weekly price we saw anywhere in this comparison — but a 40% discount off $19.99 would be about $11.99, not $13.19, which implies a base price the app never showed us.",
          "Our rule when a price is quoted three ways is to trust the checkout screen, because that is the number that reaches your card. But it is worth knowing that the cheapest figure only appears if you wait for the right popup."
        ]
      },
      {
        id: "free-claim",
        heading: 'The "whole series are free" claim, tested',
        body: [
          "StardustTV is widely described as the app where complete series are free with no coins. We went looking for that and did not find it on the series we tested: episodes 1–10 were free, episode 11 was locked, and unlocking it cost 65 coins or two ads.",
          "It is possible other titles on the app are entirely free — we tested one series in one session, and a claim like that deserves more evidence than a single test. What we can say is that the app we used was not giving away whole series in the way its reputation suggests.",
          "We would rather report the boundary we actually hit than repeat a claim we could not reproduce. If a series you care about is genuinely free, the app’s own episode list will show you before you pay anything."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Who should skip it",
        body: [
          "If you watch a lot and want one predictable monthly cost, skip it — there is no annual pass in the payment flow, so you would be paying weekly for as long as you subscribe.",
          "If you want the strongest production values, the originals-first apps beat it, and part of this catalogue is openly AI-generated.",
          "And if you are choosing purely on the price of finishing a series with coins, 65 coins an episode makes it one of the more expensive options here, even though the free start is the most generous."
        ]
      }
    ],
    faqs: [
      {
        q: "How much does StardustTV cost?",
        a: "Verified on Android with a US Google Play account on 9 October 2026: the weekly VIP pass is listed at $19.99/week, drops to $17.99 at checkout with a 10% discount, and a coupon popup offered $13.19/week at 40% off. Coin packs run from $5.99 for 600 coins to $29.99 for 3,450 coins including bonus. No annual pass appeared in the payment flow we saw. Confirm the figure on your own checkout screen before paying, because the app quotes three different weekly prices."
      },
      {
        q: "Is StardustTV really free for whole series?",
        a: "That is its reputation, but in our testing the series we opened gave us ten free episodes and then a paywall at episode 11, where unlocking cost 65 coins or two ads. We cannot rule out that some titles are fully free, but we could not reproduce the claim on the series we tried, so we report the boundary we actually saw."
      },
      {
        q: "How many episodes can I unlock with ads on StardustTV?",
        a: "Five episodes a day at two ads each, so ten ads in total for five episodes. That is the same daily cap as GoodShort but twice the ads per episode, and well behind ReelShort and ShortMax, which allow one ad per episode."
      },
      {
        q: "Is StardustTV cheaper than the other short-drama apps?",
        a: "Mixed. Its coupon price of $13.19/week is the cheapest weekly figure we recorded anywhere, but it has no annual pass, its per-episode coin price of 65 is above ReelShort's 60 and DramaBox's 50, and finishing a series through the ad route takes twice as many ads as ReelShort requires."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/DWPvOLygsDNe",
    screenshots: [
      {
        src: "/screenshots/stardusttv-home-feed.webp",
        alt: "StardustTV home screen with drama series shelves in a vertical video layout",
        caption: "Home feed on Android, 9 Oct 2026, with a US Play account so prices render in dollars",
        width: 404,
        height: 707
      },
      {
        src: "/screenshots/stardusttv-store-plans.webp",
        alt: "StardustTV store page showing the weekly VIP pass and coin packs with dollar prices",
        caption: "Only the weekly pass is offered here — no annual tier appears in the payment flow",
        width: 404,
        height: 707
      },
      {
        src: "/screenshots/stardusttv-coupon-offer.webp",
        alt: "StardustTV membership coupon popup offering a discounted weekly price with a countdown timer",
        caption: "The $13.19/week coupon runs on a one-hour countdown and never shows the base price it discounts",
        width: 404,
        height: 707
      },
      {
        src: "/screenshots/stardusttv-episode-free-boundary.webp",
        alt: "StardustTV episode list showing ten unlocked episodes and locked episodes after them",
        caption: "Ten free episodes, then episode 11 at 65 coins — the widest free opening we measured",
        width: 404,
        height: 707
      }
    ],
    sourceNote: 'All prices verified in a clean Android emulator with a US Google Play account on 9 October 2026. Playback screens in this app carry a "Contains AI-generated content" label, which no other app we tested displays.',
    relatedGuides: []
  },
  {
    slug: "netshort",
    name: "NetShort",
    tagline: "The cheapest annual pass we found — inside the widest spread of weekly prices",
    score: 7.9,
    primary: false,
    bestFor: "People who will commit to a year, and will read the Play billing screen before agreeing to a weekly price",
    platforms: "iOS, Android",
    freeTier: "Episodes 1–9 free on our test series (57 episodes), then 98 N coins an episode or two ads per episode",
    catalog: "Large and frequently refreshed — we verified one series' episode inventory, not the full catalogue",
    priceVerifiedOn: "2026-10-09",
    reviewedOn: "2026-10-09",
    priceRows: [
      { label: "Download", value: "Free" },
      { label: "Annual pass", value: "$99.99 / year", note: "About $0.27 a day — the cheapest annual price we recorded anywhere" },
      { label: "Weekly pass (intro)", value: "$15.99 for the first week", note: "Crossed-out price $24.99" },
      { label: "Weekly pass (renewal)", value: "$24.99 / week", note: 'Confirmed on the Google Play subscription sheet: "Starting Oct 16, 2026 $24.99/week + tax"' },
      { label: "Single episode unlock", value: "98 N coins", note: "The most expensive per-episode price we measured — 50 to 65 is typical elsewhere" },
      { label: "Coin packs", value: "Not shown in the app", note: "The top-up page only listed the two passes, so the coin route cannot be priced in advance" },
      { label: "Free/paid boundary", value: "Episodes 1–9 free", note: "Out of 57 episodes on the series we tested" },
      { label: "Ad route", value: "2 ads per episode", note: "Double what ReelShort and DramaBox require; no daily cap is published" }
    ],
    pros: [
      "The cheapest annual pass in this comparison: $99.99/year, about $0.27 a day, against DramaBox's $119.99 and ReelShort's $199.99",
      "Nine free episodes before the paywall — the second-widest opening we measured",
      "Its Google Play billing sheet matched the in-app price exactly, the most consistent disclosure of the four apps",
      "A large, actively refreshed catalogue with wide language coverage",
      "The welcome flow hands out bonus coins for linking a messaging app or email and for enabling notifications"
    ],
    cons: [
      "Five different weekly prices on the same day on the same account: $7.99, $14.99, $14.39, $15.99 and $24.99",
      "The most expensive per-episode unlock we measured at 98 N coins, nearly double ReelShort's 60",
      "Coin packs are not listed on the top-up page at all, so you cannot work out the value of the coin route before subscribing",
      "Two ads per episode rather than one, and our unlock ad ran to three minutes",
      "Bonus coins expire after seven days, and check-in itself is gated behind watching an ad",
      "One competitor review site quotes NetShort at about $30 a week, which matches none of the five figures we saw — treat outside price claims about this app with suspicion"
    ],
    verdict: "The annual pass is the best long-term price in this comparison and the catalogue is large. But the weekly price depends on where in the app you look, so read the Google Play confirmation sheet before you agree to anything.",
    sections: [
      {
        id: "what-it-is",
        heading: "What NetShort actually is",
        body: [
          "NetShort is a large, fast-moving catalogue app with a subscription that is priced aggressively in both directions: the annual pass is the cheapest commitment in this comparison, and the weekly pass is the most confusing.",
          "Its app does the category basics well — big library, wide language support, a straightforward episode grid. It also does one thing better than its rivals: the price it showed on the Google Play billing sheet was the price it showed in the app.",
          "That consistency matters more than it sounds, because the rest of the app does not share it."
        ]
      },
      {
        id: "price-confusion",
        heading: "Five weekly prices in one session",
        body: [
          "During one testing session on one account we were quoted $7.99, $14.99, $14.39, $15.99 and $24.99 a week. The first three came from a new-user popup and a checkout button, the fourth from the top-up page, and the fifth from the renewal terms on the Play subscription sheet.",
          "The last one is the important one. Google Play told us plainly: the introductory week is $15.99, and renewals from 16 October 2026 are $24.99/week plus tax. Whatever the popups promise, that is the price your card will see after the first week.",
          "This is why we lead with the annual pass when we talk about NetShort. $99.99 for a year is the clearest number the app offers, and unlike the weekly price it does not change depending on which screen finds you."
        ]
      },
      {
        id: "free-route",
        heading: "Free episodes and the ad route",
        body: [
          "Nine episodes free on the 57-episode series we tested — a genuinely useful amount of time to decide whether you like the show.",
          "After that, unlocking costs 98 N coins, the steepest single-episode price we recorded, or two ads. Two ads per episode is double what ReelShort and DramaBox ask, and our unlock ad ran to three minutes, the longest in our testing.",
          "There is no published daily cap on ad unlocks, and we could not confirm whether one exists. That uncertainty cuts both ways: it may mean no limit, or it may mean the limit appears exactly when you are mid-series and counting on it."
        ]
      },
      {
        id: "who-should-skip",
        heading: "Who should skip it",
        body: [
          "If you are only going to watch for a month, skip the weekly pass and think again — at $24.99 a week after the intro, four weeks costs more than a year of StardustTV's coupon rate and nearly a quarter of the annual pass here.",
          "If you need to price out the coin route, this app is the wrong choice: it does not publish coin pack prices in the top-up flow.",
          "And if you want a straightforward subscription that tells you one price, look at DramaBox or GoodShort first. This app is competitive on price and difficult on clarity."
        ]
      }
    ],
    faqs: [
      {
        q: "How much does NetShort cost?",
        a: "Verified on Android with a US Google Play account on 9 October 2026: the annual pass is $99.99/year (about $0.27 a day), and the weekly pass is $15.99 for the first week with renewals at $24.99/week plus tax, confirmed on the Google Play subscription sheet. Be aware that we were also quoted $7.99, $14.99, $14.39 and $15.99 a week for the same pass elsewhere in the app during the same session — the Play sheet is the number that reaches your card."
      },
      {
        q: "Is NetShort free?",
        a: "Episodes 1–9 of the series we tested were free, plus a welcome bonus of coins for linking an account. After that, episodes cost 98 N coins each or two ads per episode. Bonus coins expire after seven days, and the daily check-in itself requires watching an ad."
      },
      {
        q: "Why does NetShort show so many different prices?",
        a: "The app runs several simultaneous offers — a new-user popup, an intro discount on the top-up page, a promotional price at the checkout button, and the renewal terms on the Play sheet. They are all real, but they apply to different stages of the same subscription. The renewal price on the Play confirmation sheet is the only one that describes what you will keep paying."
      },
      {
        q: "Is NetShort cheaper than ReelShort?",
        a: "For a full year, yes — $99.99 against ReelShort's $199.99. For a single series it depends: NetShort charges 98 N coins per episode against ReelShort's 60, so unlocking a series with coins costs far more here, while a weekly or annual pass covers everything."
      }
    ],
    affiliateUrl: "https://r.reelsgo.tv/hU9L0X3fz-Nu",
    screenshots: [
      {
        src: "/screenshots/netshort-store-plans.webp",
        alt: "NetShort top-up page showing the intro weekly price and the annual pass with dollar prices",
        caption: "The top-up page on Android, 9 Oct 2026 — only the two passes appear here, never coin packs",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/netshort-gplay-subscription.webp",
        alt: "Google Play subscription sheet for NetShort showing the introductory price and the renewal terms",
        caption: "The Play sheet states the renewal plainly: $24.99/week plus tax from 16 October 2026 — the number the app's own popups do not agree on",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/netshort-episode-free-boundary.webp",
        alt: "NetShort episode grid showing unlocked episodes and rows of locked episodes below them",
        caption: "Nine free episodes, then a paywall at 98 N coins each — the steepest per-episode price we measured",
        width: 505,
        height: 884
      },
      {
        src: "/screenshots/netshort-checkin-rewards.webp",
        alt: "NetShort daily check-in screen showing bonus coin amounts for each day of the week",
        caption: "Check-in pays 355 N coins across seven days, but the bonus expires in seven days and the check-in is ad-gated",
        width: 505,
        height: 884
      }
    ],
    sourceNote: "All prices verified in a clean Android emulator with a US Google Play account, cross-checked against the Google Play subscription sheet, 9 October 2026. App Store US rating at the time of writing: 4.74 from 219K ratings (iTunes Search API, 8 October 2026).",
    relatedGuides: []
  }
];
const APPS_BY_SCORE = [...APPS].sort((a, b) => b.score - a.score);
const getApp = (slug) => APPS.find((a) => a.slug === slug);
const REVIEWED_APPS = APPS.filter((a) => a.sections.length > 0);

export { APPS_BY_SCORE as A, DEFAULT_OUTPUT_FORMAT as D, REVIEWED_APPS as R, VALID_SUPPORTED_FORMATS as V, getApp as a, DEFAULT_HASH_PROPS as b, getCollection as g, renderEntry as r };
