import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { a as $$Screenshot, $ as $$AffiliateCTA } from './AffiliateCTA_Bp6HEmgQ.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Cheapest Short Drama App Is Not the One With the Lowest Price",
  "description": "We ranked six short drama apps four ways — weekly renewal, entry price, per-episode cost and free episodes. The cheapest app changes every time.",
  "app": "general",
  "targetKeyword": "cheapest short drama app",
  "intent": "mid",
  "shortAnswer": ["There is no single cheapest app. Ranked by <strong>weekly renewal</strong> the answer is DramaBox at $12.99; by <strong>intro price</strong> it is ReelShort at $1.99–$5.99; by <strong>entry coin pack</strong> it is DramaBox at $2.99.", "The ranking <strong>inverts completely</strong> once you include free episodes. StardustTV gives ten free episodes and GoodShort seven, while DramaBox starts charging at episode 12 — the app with the lowest sticker price has among the shortest free run.", "We tested six apps on Android in October 2026 and recorded <strong>every price with the date it was measured</strong>. All of these figures move; treat them as snapshots, not quotes.", "The honest answer is that <strong>the cheapest app depends on how many episodes you actually intend to watch</strong> — and that number is usually small."],
  "publishedOn": "2026-10-11",
  "updatedOn": "2026-10-11",
  "priceVerifiedOn": "2026-10-11",
  "toc": [{
    "id": "by-weekly",
    "label": "Cheapest by weekly renewal"
  }, {
    "id": "by-entry",
    "label": "Cheapest to start"
  }, {
    "id": "by-episode",
    "label": "Cheapest per episode"
  }, {
    "id": "by-free",
    "label": "Cheapest once free episodes count"
  }, {
    "id": "verdict",
    "label": "The verdict, by viewing habit"
  }, {
    "id": "limits",
    "label": "Limits of this comparison"
  }, {
    "id": "when-fails",
    "label": "When this ranking does not apply"
  }],
  "faqs": [{
    "q": "What is the cheapest short drama app right now?",
    "a": "It depends which price you measure. By weekly renewal it was DramaBox at $12.99/week in our October 2026 tests; by introductory price it was ReelShort at $1.99–$5.99 for a first week; by smallest first coin purchase it was DramaBox at $2.99. The introductory price is a discounted first period and is not what you pay ongoing, which is why we rank by renewal."
  }, {
    "q": "Which short drama app has the most free episodes?",
    "a": "In our testing StardustTV gave ten free episodes before the paywall, the widest opening of the six. GoodShort gave seven, ShortMax six, NetShort nine, ReelShort sixteen on one series but only ten on another, and DramaBox was charging by episode 12. The number varies by series, so check the specific show rather than the app."
  }, {
    "q": "Are these prices accurate right now?",
    "a": "They are measurements from Android in October 2026, and these apps rotate introductory pricing by day and account. The one thing that has stayed stable across everything we measured is the structure: intro price below renewal price, coin packs cheaper per coin in larger sizes, and a free allowance that varies by series."
  }, {
    "q": "Should I buy an annual plan to save money?",
    "a": "Only if you will still be watching in twelve months. The annual prices we recorded were $149.99 on ShortMax and GoodShort, and $99.99 on NetShort, against weekly rates of $19.99 and $24.99. NetShort annual was the only one that worked out clearly cheaper per week. If your interest is likely to fade, a cancelled weekly subscription costs less in total even at a higher unit price."
  }],
  "relatedGuides": ["dramabox-vs-goodshort", "why-short-drama-app-prices-differ", "short-drama-app-subscription-trap", "reelshort-vs-dramabox", "how-to-stop-paying-for-short-drama-apps", "short-drama-app-most-free-episodes", "is-dramabox-legit"]
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
      id: "by-weekly",
      children: "Cheapest by weekly renewal"
    }), "\n", createVNode(_components.p, {
      children: ["If you want the number that decides whether a subscription is affordable, it is\nthe ", createVNode("strong", {
        children: "renewal rate"
      }), " — the price you pay every week after the\nfirst one. Introductory prices are marketing; renewal rates are arithmetic."]
    }), "\n", createVNode(_components.p, {
      children: "Here is what six apps charged on renewal, all measured on Android with a US\nGoogle Play account in October 2026:"
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "App"
          }), createVNode("th", {
            children: "Weekly renewal"
          }), createVNode("th", {
            children: "Annual, if offered"
          }), createVNode("th", {
            children: "About"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "DramaBox"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$12.99"
            })
          }), createVNode("td", {
            children: "$119.99"
          }), createVNode("td", {
            children: "$1.86/week on annual"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "StardustTV"
          }), createVNode("td", {
            children: [createVNode("strong", {
              children: "$19.99"
            }), " base", createVNode("br", {}), "$13.19 via coupon"]
          }), createVNode("td", {
            children: "None offered"
          }), createVNode("td", {
            children: "No annual tier in the payment flow"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ReelShort"
          }), createVNode("td", {
            children: [createVNode("strong", {
              children: "$19.99"
            }), createVNode("br", {}), "(also saw $5.99 / $11.99 tiers)"]
          }), createVNode("td", {
            children: "$199.99"
          }), createVNode("td", {
            children: "Three weekly tiers observed"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ShortMax"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$19.99"
            })
          }), createVNode("td", {
            children: "$149.99"
          }), createVNode("td", {
            children: "$0.41/day on annual"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GoodShort"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$19.99"
            })
          }), createVNode("td", {
            children: "$149.99"
          }), createVNode("td", {
            children: "Identical to ShortMax"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "NetShort"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$24.99"
            })
          }), createVNode("td", {
            children: "$99.99"
          }), createVNode("td", {
            children: "Cheapest annual by far"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["By that measure ", createVNode("strong", {
        children: "DramaBox wins outright at $12.99/week"
      }), ", roughly\n35% below the $19.99 cluster and well below NetShort’s $24.99."]
    }), "\n", createVNode(_components.p, {
      children: ["But notice how little this ranking tells you. NetShort has the most expensive\nweekly rate ", createVNode("em", {
        children: "and"
      }), " by far the cheapest annual plan at $99.99 — about $1.92\na week if you keep it a year. Whether that is the cheapest option depends\nentirely on whether you would still be watching in March."]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The annual trap in reverse",
      children: createVNode(_components.p, {
        children: "Three apps priced their annual plans at exactly $149.99 and one at $199.99,\nwhich works out to $2.86 and $3.85 per week. Buying a year to save money on\nan app you will abandon in six weeks is the more expensive mistake, not the\ncheaper one."
      })
    }), "\n", createVNode("h2", {
      id: "by-entry",
      children: "Cheapest to start"
    }), "\n", createVNode(_components.p, {
      children: "The first purchase is a different question. If you are going to buy coins rather\nthan subscribe, this is what the smallest pack cost:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode("strong", {
          children: "DramaBox — $2.99"
        }), " for 300 coins"]
      }), "\n", createVNode(_components.li, {
        children: "ReelShort — $4.99 for 500 coins (and this pack was only visible from inside a\nlocked episode, not on the store page)"
      }), "\n", createVNode(_components.li, {
        children: "GoodShort — $4.99 for 500"
      }), "\n", createVNode(_components.li, {
        children: "ShortMax — $4.99 for 500"
      }), "\n", createVNode(_components.li, {
        children: "StardustTV — $5.99 for 600"
      }), "\n", createVNode(_components.li, {
        children: "NetShort — coin packs were not displayed in-app at all"
      }), "\n"]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/shortmax-store-plans.webp",
      alt: "An in-app coin purchase screen showing a coin pack priced at 4.99 dollars among larger bundles",
      caption: "A typical coin store — the entry pack sits at $4.99 while the large bundles look like the better deal per coin"
    }), "\n", createVNode(_components.p, {
      children: ["DramaBox is cheapest to start ", createVNode("em", {
        children: "and"
      }), " cheapest by weekly renewal. That is\nthe one clean sweep in this whole comparison — the caveats are in\n", createVNode("a", {
        href: "/apps/dramabox",
        children: "our full DramaBox review"
      }), "."]
    }), "\n", createVNode("h2", {
      id: "by-episode",
      children: "Cheapest per episode"
    }), "\n", createVNode(_components.p, {
      children: "This is the measure that matters if you are paying per episode, and it is where\nthe ranking stops looking like a price list."
    }), "\n", createVNode(_components.p, {
      children: "Per-episode coin cost, worked out from the smallest available pack:"
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "App"
          }), createVNode("th", {
            children: "Coins per episode"
          }), createVNode("th", {
            children: "Approx. cost"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "DramaBox"
          }), createVNode("td", {
            children: "50"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "≈ $0.50"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ShortMax"
          }), createVNode("td", {
            children: "50"
          }), createVNode("td", {
            children: "≈ $0.50"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GoodShort"
          }), createVNode("td", {
            children: "50"
          }), createVNode("td", {
            children: "≈ $0.50"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ReelShort"
          }), createVNode("td", {
            children: "60"
          }), createVNode("td", {
            children: "≈ $0.60"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "StardustTV"
          }), createVNode("td", {
            children: "65"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "≈ $0.65"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "NetShort"
          }), createVNode("td", {
            children: "98 N coins"
          }), createVNode("td", {
            children: [createVNode("strong", {
              children: "Most expensive"
            }), " — and it also required watching 2 ads per episode"]
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Now the inversion: ", createVNode("strong", {
        children: "DramaBox’s weekly renewal is the cheapest, and its\nper-episode coin cost is mid-table."
      }), " If you buy coins rather than\nsubscribe, the app that looked most expensive on a subscription basis is not the\nmost expensive way to watch."]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/dramabox-store-plans.webp",
      alt: "An in-app coin purchase screen showing a small coin pack and larger bundles with dollar prices",
      caption: "DramaBox's coin store: a $2.99 entry pack, and the per-coin cost falls as the pack grows"
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/netshort-store-plans.webp",
      alt: "A subscription page showing a weekly renewal price with a promotional Google Pay button price",
      caption: "NetShort's Top Up page: $15.99 on the plan, $14.39 on the Google Pay button — two prices for one subscription"
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-coin-packs.webp",
      alt: "A coin pack list showing several bundle sizes with the smallest pack priced at 4.99 dollars",
      caption: "ReelShort's packs: $4.99 for 500 coins, $49.99 for 7,500 — the same coins are a third cheaper in the large bundle"
    }), "\n", createVNode(_components.p, {
      children: ["There is a further wrinkle in coin pricing that only shows up if you divide\nproperly. The small pack is always the worst value per coin. ReelShort’s $4.99\nfor 500 works out at $0.0100 a coin, while its $49.99 for 7,500 works out at\n$0.0067 — ", createVNode("strong", {
        children: "the same coins are 33% cheaper when you buy more of them"
      }), ",\nwhich is the opposite of how these stores are laid out, with the small pack most\nprominent."]
    }), "\n", createVNode("h2", {
      id: "by-free",
      children: "Cheapest once free episodes count"
    }), "\n", createVNode(_components.p, {
      children: "For most people the honest answer is that you will not pay for many episodes at\nall, because every one of these apps gives some away first."
    }), "\n", createVNode(_components.p, {
      children: "How many episodes you got before the paywall, on the series each app showed us:"
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "App"
          }), createVNode("th", {
            children: "Free episodes"
          }), createVNode("th", {
            children: "Note"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "StardustTV"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "10"
            })
          }), createVNode("td", {
            children: "Widest opening we measured"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "NetShort"
          }), createVNode("td", {
            children: "9"
          }), createVNode("td", {
            children: "But 2 ads per episode, and 98 coins to buy"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "GoodShort"
          }), createVNode("td", {
            children: "7"
          }), createVNode("td", {
            children: "Only 5 ad-unlocks a day, and ads failed for us"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ShortMax"
          }), createVNode("td", {
            children: "6"
          }), createVNode("td", {})]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "DramaBox"
          }), createVNode("td", {
            children: "~11"
          }), createVNode("td", {
            children: "Charging by episode 12 on the series we opened"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "ReelShort"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "10 or 16"
            })
          }), createVNode("td", {
            children: "Varies by series — 10 on a 54-episode show, 16 on an 81-episode one"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Two things fall out of this. First, ", createVNode("strong", {
        children: "the free allowance varies within the\nsame app"
      }), " — ReelShort gave sixteen free episodes on one series and ten\non another, so any app-level claim about free episodes is unreliable. Second,\nReelShort’s number looked the best on paper and was beaten in practice by\nStardustTV, because ReelShort’s ads run ten per day while GoodShort’s run five.\nAnd free episodes are only half the free allowance — the daily coin tasks are\nthe other half, and they vary just as much between apps\n(", createVNode("a", {
        href: "/guides/dramabox-free-coins",
        children: "DramaBox"
      }), ",\n", createVNode("a", {
        href: "/guides/how-to-get-free-coins-on-reelshort",
        children: "ReelShort"
      }), ")."]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/stardusttv-episode-free-boundary.webp",
      alt: "An episode list showing ten unlocked episodes followed by locked episodes",
      caption: "StardustTV's free run: episodes 1 to 10 unlocked, episode 11 at 65 coins — the widest opening of the six apps"
    }), "\n", createVNode("h2", {
      id: "verdict",
      children: "The verdict, by viewing habit"
    }), "\n", createVNode(_components.p, {
      children: "There is no single cheapest app, but the decision collapses to four habits:"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "If you will watch under about five series a year"
          }), ", do not\nsubscribe at all. Free episodes plus ad-unlocks cover a casual viewer in\nevery one of these apps, and you pay nothing. NetShort and GoodShort are the\ntwo to avoid on this route — NetShort demands two ads per episode, and\nGoodShort’s ad-unlocks failed outright when we tested them."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "If you binge regularly and buy coins"
          }), ", target the mid-priced\nper-episode apps: DramaBox, ShortMax and GoodShort at 50 coins. NetShort is\nthe expensive one on this route despite its low annual price."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "If you subscribe weekly"
          }), ", DramaBox at $12.99/week is the\ncheapest renewal we found, and it is also the cheapest entry pack at $2.99."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "If you are confident you will still be watching in a year"
          }), ",\nNetShort’s $99.99 annual is the only one that clearly beats its own weekly\nrate. Everyone else should skip annual plans."]
        })
      })]
    }), "\n", createVNode($$Callout, {
      kind: "warning",
      title: "Before you commit to any of these",
      children: createVNode(_components.p, {
        children: ["These are the numbers your screen will probably not show. Introductory prices\nrotate by day and by account, and two of the apps price by your network exit\ncountry. Open the app, find your own numbers, and check them against\n", createVNode("a", {
          href: "/guides/why-short-drama-app-prices-differ",
          children: "why published prices disagree"
        }), "\nbefore you decide."]
      })
    }), "\n", createVNode("h2", {
      id: "limits",
      children: "Limits of this comparison"
    }), "\n", createVNode(_components.p, {
      children: ["A caveat that applies to every number below: this is a ranking, and rankings\ncarry their own failure mode. ", createVNode(_components.strong, {
        children: "The limitation of this comparison is that it\ndoes not work for anyone whose watching habits differ from the pattern we\nmeasured"
      }), " — and we do not know your pattern. The further constraints:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Six apps, one platform, October 2026."
        }), " All testing was on Android with a\nUS Google Play account. iOS billing differs, and we have not measured these\napps on iOS."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Renewal rates move too."
        }), " We recorded DramaBox’s weekly renewal at $12.99\non one day. The introductory prices are documented as rotating; the renewal\nrates are simply what we were quoted, and we have less data on how stable they\nare."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Free episode counts are per series, not per app."
        }), " Two of the six apps gave\ndifferent free lengths on different shows, so treat any app-level free\nepisode claim as unreliable."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Three of the apps priced annual at exactly $149.99."
        }), " That similarity is\nworth watching — it may indicate shared ownership or a common pricing agency,\nbut we did not investigate and cannot say."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "NetShort’s coin packs were never displayed in-app."
        }), " We could not price its\nper-episode cost from a pack, so its position in the per-episode table is\nbased on the coin requirement alone and is the least certain row in this\narticle."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "This is not an endorsement."
        }), " All six are affiliate-linked on this site.\nThe rankings come from measured prices, and we name the trade-offs rather\nthan picking a favourite."]
      }), "\n"]
    }), "\n", createVNode("h2", {
      id: "when-fails",
      children: "When this ranking does not apply to you"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you are outside the US."
        }), " These are US-route prices on US accounts. Your\nlocal pricing may be lower, and at least two apps price by exit country."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you have found a better offer."
        }), " These apps rotate introductory pricing\naggressively. A $1.99 first week was genuinely available to us in October —\nif you see something better, that beats anything written here."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If your interest is casual and short."
        }), " The most common outcome for a\ncasual viewer is paying nothing at all, which no ranking in this article is\nbuilt around."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you care about the catalogue rather than the price."
        }), " Cost per episode\nsays nothing about whether a show is worth finishing, and app quality varies\nfar more than price does."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you are reading this months from now."
        }), " Every figure here will have\nmoved. The structure will not."]
      }), "\n"]
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "DramaBox",
      href: "https://r.reelsgo.tv/uR3A7JBLdipd",
      sub: "Cheapest weekly renewal and cheapest entry pack in our testing — but check your own screen first",
      buttonLabel: "Open DramaBox"
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

const url = "src/content/guides/cheapest-short-drama-app.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/cheapest-short-drama-app.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/cheapest-short-drama-app.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
