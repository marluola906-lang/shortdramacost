import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { $ as $$PriceTable } from './PriceTable_CJB5Jb0Q.mjs';
import { $ as $$Screenshot } from './Screenshot_CH4dF0dm.mjs';
import { $ as $$AffiliateCTA } from './AffiliateCTA_GdtyC1TO.mjs';
import 'clsx';

const frontmatter = {
  "title": "ReelShort Price Explained: Coins vs VIP, and What a Full Series Really Costs",
  "description": "The two paid layers on ReelShort — coins vs VIP — with prices verified in-app on Android in October 2026, and which is cheaper for your habit.",
  "app": "reelshort",
  "targetKeyword": "reelshort price",
  "intent": "bottom",
  "shortAnswer": ["ReelShort has two separate paid layers: coins (per-episode unlocks) and VIP (a time-based subscription).", "Verified on Android, 8–9 October 2026: a single episode costs 60 coins — roughly $0.60 at the cheapest pack.", "VIP renews at $5.99–$19.99 per week depending on tier, and the discounted first week changes from day to day.", "The break-even question is simple: how many series will you finish this month?"],
  "publishedOn": "2026-10-01",
  "updatedOn": "2026-10-09",
  "priceVerifiedOn": "2026-10-09",
  "toc": [{
    "id": "two-layers",
    "label": "The two paid layers"
  }, {
    "id": "coin-economics",
    "label": "Coin economics"
  }, {
    "id": "vip-economics",
    "label": "VIP economics"
  }, {
    "id": "break-even",
    "label": "The break-even rule"
  }, {
    "id": "hidden-costs",
    "label": "Where the cost actually hides"
  }, {
    "id": "limitations",
    "label": "What we cannot price for you"
  }],
  "faqs": [{
    "q": "How much does ReelShort cost per month?",
    "a": "There is no single monthly price, because the app sells coins for per-episode unlocks and VIP passes on weekly and annual terms. Verified in-app on Android (October 2026): coins run $4.99–$49.99 per pack at roughly $0.0067–$0.0100 per coin, one episode costs 60 coins, and VIP renews at $5.99–$19.99 per week depending on tier."
  }, {
    "q": "Is it cheaper to buy coins or VIP?",
    "a": "Coins are cheaper if you finish about one series per month or less. At 60 coins per episode, a 60-episode series costs roughly $24–36 in coins, while one week of VIP at the observed $5.99–$11.99 renewal prices can cover several series. VIP becomes cheaper once you finish two or more series a month."
  }, {
    "q": "Are the prices on this page verified?",
    "a": "Yes — we checked them inside the app on an Android phone with a US Google Play account on 8–9 October 2026, and the screenshots on this page are from those sessions. Two caveats: these are Android prices (iOS can differ), and the discounted first week of VIP changed between our two visits a day apart, so treat any intro price you see as temporary."
  }, {
    "q": "Why is ReelShort more expensive than other short-drama apps?",
    "a": "It films its own English-language originals with real casts instead of licensing and dubbing existing productions. Original production costs more per title, which is reflected in both the coin packs and the VIP tiers."
  }],
  "relatedGuides": ["reelshort-cost-per-episode", "how-to-get-free-coins-on-reelshort", "how-to-cancel-reelshort-subscription", "reelshort-vs-dramabox", "why-short-drama-app-prices-differ", "reelshort-coins-vs-vip"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("h2", {
      id: "two-layers",
      children: "The two paid layers, and why mixing them up is expensive"
    }), "\n", createVNode(_components.p, {
      children: "Most coverage of this app describes “the price” as if there were one. There are\ntwo, they solve different problems, and confusing them is the main reason people\nspend more than they intended."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Coins"
      }), " are an unlock currency. You spend them to open episodes beyond the free\nblock. They are consumed as you go, so the cost scales with how much you watch."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "VIP"
      }), " is a time-based pass. It removes most of the per-episode paywall for as\nlong as it lasts. The cost is fixed regardless of how much you watch."]
    }), "\n", createVNode(_components.p, {
      children: "That distinction produces the entire pricing strategy: coins reward light\nviewers and punish heavy ones. VIP does the opposite."
    }), "\n", createVNode($$PriceTable, {
      verifiedOn: "2026-10-09",
      caption: "ReelShort pricing, verified in-app on Android (US Google Play account), 8–9 October 2026",
      col1: "Item",
      col2: "Price / detail",
      rows: [{
        label: 'Download',
        value: 'Free',
        note: 'Coins and VIP are the paid layers'
      }, {
        label: 'Single episode unlock',
        value: '60 coins ≈ $0.60',
        note: 'At the $4.99 / 500-coin pack rate. The exact free/paid boundary differs by series.'
      }, {
        label: 'Coin packs',
        value: '$4.99 – $49.99',
        note: 'Five tiers: $4.99/500, $9.99/1,100, $19.99/2,400, $29.99/3,900, $49.99/7,500. Unit price falls from ~$0.0100 to ~$0.0067 per coin.'
      }, {
        label: 'VIP weekly (renewal)',
        value: '$5.99 – $19.99 per week',
        note: 'With-ads tier renewed at $5.99/week when observed; top tiers reach $19.99/week. All prices plus tax.'
      }, {
        label: 'VIP intro week',
        value: 'Rotates daily — $1.99 to $15.99 observed',
        note: 'We saw a 67%-off offer one day and a 21%-off offer the next. Never assume the intro price is the real price.'
      }, {
        label: 'VIP annual',
        value: '$199.99 per year',
        note: 'Roughly the price of 10–33 weeks of the weekly tiers, depending on which tier you compare against.'
      }]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-coin-packs.webp",
      alt: "ReelShort unlock popup showing coin packs at $4.99 for 500 coins, $9.99 for 1,100 coins and $19.99 for 2,400 coins, with a 60-coin price for the locked episode",
      caption: "Coin packs as shown in the unlock popup on Android, 9 October 2026. The smallest packs only appear here — the main store page starts at $19.99."
    }), "\n", createVNode("h2", {
      id: "coin-economics",
      children: "Coin economics: fine for one series, bad for a habit"
    }), "\n", createVNode(_components.p, {
      children: ["One episode costs 60 coins. At the smallest pack ($4.99 for 500 coins) that\nworks out to roughly ", createVNode(_components.strong, {
        children: "60 cents per episode"
      }), " — and a full-length series here\nruns 50 to 80 episodes, so finishing one with coins costs in the region of\n", createVNode(_components.strong, {
        children: "$25–45"
      }), ". The largest pack ($49.99 for 7,500 coins) drops the unit price by a\nthird, but you would need to finish two to three series to burn through it."]
    }), "\n", createVNode(_components.p, {
      children: "One detail worth knowing before you buy: the store page only advertises the\nthree large packs ($19.99 and up). The $4.99 and $9.99 packs exist, but they\nsurface in the unlock popup when you tap a locked episode. If you only want one\nseries, go looking for the small packs — do not let the store page talk you\ninto the $19.99 tier by hiding the alternatives."
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The one-line test",
      children: createVNode(_components.p, {
        children: "If you can name the exact series you want to finish and you will not start\nanother one this month, coins are the right purchase. If you cannot name a\nsingle series, you are about to pay per episode for browsing."
      })
    }), "\n", createVNode("h2", {
      id: "vip-economics",
      children: "VIP economics: a ceiling, if you use it"
    }), "\n", createVNode(_components.p, {
      children: "The weekly tiers renew at $5.99 (with ads) up to $19.99 per week — the highest\nrenewal prices in the category, which is the single most important thing to know\nabout them. The annual tier changes the maths completely: at $199.99 a year it\nworks out to roughly $3.85 per week, well under any weekly renewal price."
    }), "\n", createVNode(_components.p, {
      children: ["One thing we confirmed the hard way, by checking on two consecutive days: ", createVNode(_components.strong, {
        children: "the\ndiscounted first week is not a fixed offer"
      }), ". On 8 October our account was\nshown a $1.99 first week (marketed as 67% off); on 9 October the same device\nand account were shown $15.99 first week (21% off, with a 24-hour countdown).\nThe renewal prices stayed consistent — it is the hook price that moves. So when\na screenshot or advert shows you a bargain first week, assume that number was\ntrue for someone, once."]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-vip-plans.webp",
      alt: "ReelShort store subscription screen showing VIP tiers with weekly and monthly renewal prices",
      caption: "VIP tiers as shown in the in-app store on 8 October 2026. The intro prices here had changed by our next visit a day later — the renewal prices are the ones to compare."
    }), "\n", createVNode("h2", {
      id: "break-even",
      children: "The break-even rule"
    }), "\n", createVNode(_components.p, {
      children: "We reduce this to one question, because everything else is a detail:"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "How many series will you finish this month?"
          }), "\nWrite down a number before you look at any price. Most people overestimate\nthis by a wide margin."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Zero or one:"
          }), " buy coins for that specific series. Do not\nsubscribe. One series at 60 coins per episode is roughly $25–45 depending on\nlength — less than a single month of the top weekly tier."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Two or more:"
          }), " the subscription route wins. Even the $11.99\nweekly renewal covers more viewing than two coin-finished series, and the\nannual tier at $199.99 beats buying the weekly one repeatedly."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Unsure:"
          }), " start with the free episodes and coins for a single\nseries. You can always subscribe later — there is no discount for committing\nearly, so there is no reason to guess."]
        })
      })]
    }), "\n", createVNode("h2", {
      id: "hidden-costs",
      children: "Where the cost actually hides"
    }), "\n", createVNode(_components.p, {
      children: "The published prices are not where people lose money. These are:"
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: [createVNode("strong", {
          children: "Renewal drift."
        }), " A weekly tier renews roughly 52 times a\nyear. “I’ll cancel next week” is the most expensive sentence in this app.\nThe Google Play confirmation screen states plainly that the subscription\n“automatically renews until cancelled”."]
      }), createVNode("li", {
        children: [createVNode("strong", {
          children: "Intro-price whiplash."
        }), " The discounted first week rotates —\nwe documented a 67%-off offer and a 21%-off offer on consecutive days. Judge\nthe app by its renewal price, which is what you will actually pay most weeks."]
      }), createVNode("li", {
        children: [createVNode("strong", {
          children: "Paying per episode for browsing."
        }), " Spending coins to sample\nsomething you then abandon. The free episodes exist precisely so you don’t\nhave to do this — see\n", createVNode("a", {
          href: "/guides/how-to-get-free-coins-on-reelshort",
          children: "how far the free tier gets you"
        }), "."]
      }), createVNode("li", {
        children: [createVNode("strong", {
          children: "Hidden small packs."
        }), " The $4.99 and $9.99 packs are only\nshown inside the episode unlock popup. Buying from the store page alone means\npaying $19.99 minimum."]
      })]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-purchase-confirmation.webp",
      alt: "Google Play purchase confirmation screen for ReelShort weekly subscription showing $1.99 for the first week and $5.99 per week starting October 15",
      caption: "The Google Play confirmation screen, 8 October 2026: $1.99 for the first week, then $5.99 per week from 15 October, plus tax. The renewal line is the number most people miss."
    }), "\n", createVNode($$Callout, {
      kind: "alert",
      title: "Before you subscribe to any tier",
      children: createVNode(_components.p, {
        children: ["Know three things: the exact renewal period, the price after any introductory\noffer, and how you will cancel. Our\n", createVNode("a", {
          href: "/guides/how-to-cancel-reelshort-subscription",
          children: "cancellation walkthrough"
        }), "\ncovers the third one — read it before you subscribe, not after the first charge."]
      })
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "ReelShort",
      href: "https://r.reelsgo.tv/1vwtyh4hj9R3",
      sub: "Free to download · confirm current pricing in-app before you pay",
      buttonLabel: "Open ReelShort"
    }), "\n", createVNode("h2", {
      id: "limitations",
      children: "What we cannot price for you"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "We cannot give you a single monthly figure."
        }), " Anyone who does is guessing at\nyour viewing habit. The number that matters is cost per finished series."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "These are Android prices."
        }), " We verified every figure on an Android phone\nwith a US Google Play account. Apple’s App Store tiers, the web player, and\nnon-US accounts can all differ. Check the price on the platform you will\nactually pay on."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The intro price you see will probably differ from ours."
        }), " It rotated between\nour two visits a day apart. The renewal prices held steady across both days,\nwhich is why we anchor every comparison to those."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The comparison with other apps is a shape comparison, not a price promise."
        }), "\nOur ", createVNode("a", {
          href: "/guides/reelshort-vs-dramabox",
          children: "ReelShort vs DramaBox"
        }), " breakdown\nexplains why a subscription-first app is structurally cheaper per series —\nthat conclusion holds even when the exact figures move."]
      }), "\n"]
    }), "\n", createVNode("h2", {
      id: "bottom-line",
      children: "Bottom line"
    }), "\n", createVNode(_components.p, {
      children: "Coins are the pay-per-episode route and VIP is the ceiling — pick the shape that\nmatches your actual habit, not your aspirational one. Name the number of series\nyou will finish this month, then buy accordingly. That single decision is worth\nmore than any discount you will find."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/guides/reelshort-price-explained.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-price-explained.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-price-explained.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
