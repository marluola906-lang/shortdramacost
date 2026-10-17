import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { a as $$Screenshot, $ as $$AffiliateCTA } from './AffiliateCTA_Bp6HEmgQ.mjs';
import 'clsx';

const frontmatter = {
  "title": "ReelShort Coins vs VIP: Which One Is Cheaper for How Many Episodes",
  "description": "Coins, VIP or ads? We did the arithmetic on all three unlock routes and found the break-even point is about 5 episodes — plus the coin math nobody explains.",
  "app": "reelshort",
  "targetKeyword": "reelshort coins vs vip",
  "intent": "bottom",
  "shortAnswer": ["The break-even point is roughly <strong>five episodes</strong>. Under that, coins are cheaper. Over it, VIP wins — and the free daily coins cover part of the coin route for free.", "One ReelShort episode costs <strong>60 coins</strong>, and the smallest coin pack is $4.99 for 500, so <strong>a single episode is about $0.60</strong>. The large $49.99 pack drops that to $0.40.", "VIP renewal started at <strong>$5.99–$19.99 per week</strong> depending on the tier we saw. That only beats coins if you will unlock <strong>more than about 8–10 episodes</strong> in that week.", "Coins are usually the better first choice because they <strong>do not auto-renew</strong>. VIP charges you again whether or not you open the app.", "The free route is more generous than most people use: <strong>50 coins on first login</strong>, up to 200 on day 7 of daily check-ins, and <strong>10 ad-unlocks a day</strong>."],
  "publishedOn": "2026-10-13",
  "updatedOn": "2026-10-16",
  "priceVerifiedOn": "2026-10-13",
  "toc": [{
    "id": "three-routes",
    "label": "Three ways to unlock one episode"
  }, {
    "id": "coin-math",
    "label": "What one episode actually costs"
  }, {
    "id": "vip-math",
    "label": "What VIP actually costs"
  }, {
    "id": "breakeven",
    "label": "Where the break-even point is"
  }, {
    "id": "free-first",
    "label": "Do this before paying anything"
  }, {
    "id": "numbers",
    "label": "The three numbers that decide this"
  }, {
    "id": "decision",
    "label": "Which to pick"
  }, {
    "id": "limits",
    "label": "Limits of this comparison"
  }, {
    "id": "when-fails",
    "label": "When this calculation does not apply"
  }],
  "faqs": [{
    "q": "Is it cheaper to buy coins or subscribe to VIP on ReelShort?",
    "a": "Below roughly five episodes, coins. Above that, VIP. A single ReelShort episode costs 60 coins, which is about $0.60 at the smallest pack or $0.40 in the largest. VIP renewal ran $5.99 to $19.99 per week depending on the tier, so it only works out cheaper if you unlock more than about 8 to 10 episodes that week. Coins also do not auto-renew, so they are the lower-risk choice for a casual viewer."
  }, {
    "q": "How many coins is one episode on ReelShort?",
    "a": "60 coins. The paywall states the price directly, so it is not a hidden number. Be aware that DramaBox and several other apps charge 50 coins per episode while NetShort charges 98, so a coin balance is not portable between apps."
  }, {
    "q": "Is it worth buying the big coin pack?",
    "a": "Only if you finish the series. Per-coin cost falls as the pack grows: $4.99 for 500 coins works out at about $0.0100 a coin, while $49.99 for 7,500 works out at about $0.0067, roughly a third cheaper. The small packs sit at the top of the store page precisely because they are the worst value."
  }, {
    "q": "Can I watch ReelShort without paying at all?",
    "a": "More often than the apps suggest. We recorded 50 coins for first login, a seven-day check-in sequence reaching 200 coins on day 7, watch-time tasks worth up to 340 coins a day, and 10 ad-unlocks per day. The free episodes before the paywall ranged from 10 to 16 depending on the series. That is often enough for a casual viewer to never pay."
  }, {
    "q": "What happens if I subscribe and stop watching?",
    "a": "The renewal charge lands 24 hours before each period ends, at the renewal rate rather than the intro rate, which can be up to three times higher. Coins do not carry that risk because they do not renew. If you are unsure, coins are the safer route."
  }],
  "relatedGuides": ["reelshort-price-explained", "how-to-get-free-coins-on-reelshort", "why-short-drama-app-prices-differ", "short-drama-app-subscription-trap"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("h2", {
      id: "three-routes",
      children: "Three ways to unlock one episode"
    }), "\n", createVNode(_components.p, {
      children: "When an episode locks, ReelShort offers three buttons, and they cost very\ndifferent amounts:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode("strong", {
          children: "60 coins"
        }), " — priced directly on the paywall"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode("strong", {
          children: "Watch an advert"
        }), " — limited to 10 per day"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode("strong", {
          children: "Go VIP"
        }), " — unlocks everything, auto-renewing"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Most people try the first two, then subscribe without checking the arithmetic.\nHere is the arithmetic."
    }), "\n", createVNode(_components.p, {
      children: "Everything below comes from one Android account in October 2026, US Google\nPlay billing, with screenshots at each step. Prices rotate, so treat these as\ndated measurements."
    }), "\n", createVNode("h2", {
      id: "coin-math",
      children: "What one episode actually costs"
    }), "\n", createVNode(_components.p, {
      children: ["One episode is ", createVNode("strong", {
        children: "60 coins"
      }), ". The coin packs we recorded:"]
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Pack"
          }), createVNode("th", {
            children: "Price"
          }), createVNode("th", {
            children: "Coins received"
          }), createVNode("th", {
            children: "Cost per coin"
          }), createVNode("th", {
            children: "Per episode"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Starter"
          }), createVNode("td", {
            children: "$4.99"
          }), createVNode("td", {
            children: "500"
          }), createVNode("td", {
            children: "$0.0100"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.60"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Small"
          }), createVNode("td", {
            children: "$9.99"
          }), createVNode("td", {
            children: "1,100 (1,000 + 100)"
          }), createVNode("td", {
            children: "$0.0091"
          }), createVNode("td", {
            children: "$0.55"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Medium"
          }), createVNode("td", {
            children: "$19.99"
          }), createVNode("td", {
            children: "2,400 (2,000 + 400)"
          }), createVNode("td", {
            children: "$0.0083"
          }), createVNode("td", {
            children: "$0.50"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Large"
          }), createVNode("td", {
            children: "$29.99"
          }), createVNode("td", {
            children: "3,900 (3,000 + 900)"
          }), createVNode("td", {
            children: "$0.0077"
          }), createVNode("td", {
            children: "$0.46"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Bulk"
          }), createVNode("td", {
            children: "$49.99"
          }), createVNode("td", {
            children: "7,500 (5,000 + 2,500)"
          }), createVNode("td", {
            children: "$0.0067"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.40"
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "Two things this table exposes that the store screen does not:"
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The small pack is a trap",
      children: createVNode(_components.p, {
        children: ["The $4.99 pack costs ", createVNode("strong", {
          children: "50% more per coin"
        }), " than the $49.99 pack —\n$0.0100 against $0.0067. Yet the small pack is what you see first when you open\na locked episode. You pay 49% more per episode by buying the pack that is\neasiest to find."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "warning",
      title: "And the small packs are hidden",
      children: createVNode(_components.p, {
        children: "The store page does not show the $4.99 tier at all. It appears only when you\nopen a locked episode and choose to top up from there. A user who buys from the\nstore page without checking pays the worst rate available."
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-coin-packs.webp",
      alt: "An in-app coin pack list showing the smallest pack at 4.99 dollars and larger bundles going up to 49.99 dollars",
      caption: "The pack list reached from a locked episode — the $4.99 tier is here but not on the main store page"
    }), "\n", createVNode("h2", {
      id: "vip-math",
      children: "What VIP actually costs"
    }), "\n", createVNode(_components.p, {
      children: ["This is where most comparisons go wrong, because they use the intro price. The\nweekly VIP rates we recorded ", createVNode("strong", {
        children: "after the first discounted week"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Tier"
          }), createVNode(_components.th, {
            children: "Renewal price"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Weekly VIP (with Ads)"
          }), createVNode(_components.td, {
            children: "$5.99/week"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Weekly VIP (Ad-Free)"
          }), createVNode(_components.td, {
            children: "$11.99/week"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Weekly VIP (Standard)"
          }), createVNode(_components.td, {
            children: "$19.99/week"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "At $0.60 per episode on coins, a week of VIP works out as:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "$5.99 plan"
        }), " breaks even at about ", createVNode(_components.strong, {
          children: "10 episodes"
        }), " a week"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "$11.99 plan"
        }), " at about ", createVNode(_components.strong, {
          children: "20 episodes"
        }), " a week"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "$19.99 plan"
        }), " at about ", createVNode(_components.strong, {
          children: "33 episodes"
        }), " a week"]
      }), "\n"]
    }), "\n", createVNode("h2", {
      id: "breakeven",
      children: "Where the break-even point is"
    }), "\n", createVNode(_components.p, {
      children: "Pulling it together, and using the middle case ($11.99/week against coins at\n$0.55 each):"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1–5 episodes"
        }), ": coins, clearly. The subscription costs more before you have\nwatched anything."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "5–8 episodes"
        }), ": close enough that the deciding factor becomes risk, not\nprice — coins do not auto-renew."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "8+ episodes in a week"
        }), ": VIP, clearly."]
      }), "\n"]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The honest framing",
      children: createVNode(_components.p, {
        children: ["The break-even point is not a fixed number, because the VIP rate you get is\nwhatever intro offer your account lands on, and the same account saw 67% off\none day and 21% off the next. What is stable is the structure: ", createVNode("strong", {
          children: "coins are\ncheaper for casual viewing, VIP is cheaper for bingeing"
        }), "."]
      })
    }), "\n", createVNode("h2", {
      id: "free-first",
      children: "Do this before paying anything"
    }), "\n", createVNode(_components.p, {
      children: "Before spending anything, exhaust what is free. On the account we tested:"
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Source"
          }), createVNode("th", {
            children: "Amount"
          }), createVNode("th", {
            children: "Notes"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "First login bonus"
          }), createVNode("td", {
            children: "50 coins"
          }), createVNode("td", {
            children: "One-time, new accounts"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Daily check-in, day 7"
          }), createVNode("td", {
            children: "200 coins"
          }), createVNode("td", {
            children: "Full week totals about 375"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Watch-time tasks"
          }), createVNode("td", {
            children: "Up to 340 coins/day"
          }), createVNode("td", {
            children: "2, 5, 10, 20 and 30 minute tiers"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ad-unlocks"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "10 episodes/day"
            })
          }), createVNode("td", {
            children: "Free, costs only your time"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Free episodes"
          }), createVNode("td", {
            children: "10 to 16"
          }), createVNode("td", {
            children: "Varies by series, not disclosed in advance"
          })]
        })]
      })]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-checkin-calendar.webp",
      alt: "A seven day daily check-in reward calendar showing coin amounts for each day with day seven awarding the most",
      caption: "The seven-day check-in sequence — day 7 alone pays 200 coins, more than three episodes"
    }), "\n", createVNode(_components.p, {
      children: "Ten ad-unlocks a day is the number most people leave on the table. At 60 coins\nper episode, the free daily check-in plus those ads covers a surprising amount of\na casual viewing habit — and the adverts are skippable, so the real cost is time."
    }), "\n", createVNode("h2", {
      id: "numbers",
      children: "The three numbers that decide this"
    }), "\n", createVNode(_components.p, {
      children: "Everything else follows from these. They are the only figures worth memorising\nbefore opening the app:"
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Figure"
          }), createVNode("th", {
            children: "Value"
          }), createVNode("th", {
            children: "What it means for you"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Coins per episode"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "60"
            })
          }), createVNode("td", {
            children: "Shown on the paywall, not hidden"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Best per-coin price"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.0067"
            })
          }), createVNode("td", {
            children: "Only reachable in the $49.99 pack"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Ad-unlock cap"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "10/day"
            })
          }), createVNode("td", {
            children: "Equals 600 coins free per day"
          })]
        })]
      })]
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-ad-unlock-prompt.webp",
      alt: "An ad-unlock prompt showing a daily counter starting at zero of ten episodes unlocked by watching adverts",
      caption: "The ad-unlock prompt with its daily counter — ten per day is 600 coins a week, or ten episodes watched for free"
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-vip-plans.webp",
      alt: "A subscription screen showing a discounted weekly VIP plan with a 24 hour countdown timer",
      caption: "The weekly VIP plans — the countdown is on the discounted rate, but the renewal rate is a different and higher number"
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-purchase-confirmation.webp",
      alt: "A Google Play subscription confirmation screen showing the renewal date, renewal price and tax notice",
      caption: "The confirmation that decides what you actually pay: renewal date, renewal rate, tax, and where cancelling really happens"
    }), "\n", createVNode("h2", {
      id: "decision",
      children: "Which to pick"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Watch the free episodes first."
          }), " Ten to sixteen before the\npaywall, and the free allowance varies by series, so check the specific show."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Run the daily loop for a week."
          }), " Check-ins plus watch-time\ntasks plus ten ad-unlocks produces more coins than most casual viewers use.\nDo this before deciding anything."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Under about eight episodes a week: buy coins, and buy a large pack."
          }), "\nNot the $4.99 tier you will see first — work out which pack size matches\nyour remaining episode count."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Bingeing weekly: VIP is cheaper"
          }), ", but only once you are past\nroughly eight episodes in that week. If your bingeing is intermittent, coins\nstill win because they do not charge you for the weeks you do not watch."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Never let a subscription run untouched"
          }), " — the renewal lands 24\nhours before the period ends at the renewal rate, not the intro rate."]
        })
      })]
    }), "\n", createVNode("h2", {
      id: "limits",
      children: "Limits of this comparison"
    }), "\n", createVNode(_components.p, {
      children: ["A caveat that applies to every number here: ", createVNode(_components.strong, {
        children: "this comparison assumes you watch\non Android with US Google Play billing, and if you do not, it does not work for\nyou."
      }), " It does not hold on iOS, where Apple’s billing and pricing differ, and it\ndoes not hold in other regions — two of the apps we tested price by the country\nyour traffic exits from. The further limits:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "One account, one region, October 2026."
        }), " The renewal rates we recorded came\nfrom that week’s intro offer. We have less data on how stable renewal rates are\nthan on how stable the coin prices are."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Watch-time tasks and ad limits are the kind of thing that changes without\nnotice."
        }), " We confirmed 10 ad-unlocks twice, on two separate days, but that cap\nis set by the app and can be altered at any time."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "We did not test whether ad-unlocks can be farmed."
        }), " The daily cap makes\nrepeated attempts pointless, but we only observed the limit, we did not try to\npush against it."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The advert quality is part of the real cost."
        }), " On our account the ads served\nwere a fake insurance offer and a TikTok install prompt. If that matters to\nyou, the “free” route is not really free."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "This is not an endorsement."
        }), " ReelShort is affiliate-linked on this site, and\nthe recommendation to start with coins and exhaust the free route is the one\nthat costs us the least commission."]
      }), "\n"]
    }), "\n", createVNode("h2", {
      id: "when-fails",
      children: "When this calculation does not apply"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you are on iOS."
        }), " Apple’s billing is a different system. Our iOS knowledge\nin this project comes from Apple’s documentation, not from testing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you are outside the US."
        }), " These are US-route prices. Your local pricing may\nbe lower, and ReelShort’s prices moved with our exit country in testing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you only want one series and it has 12 episodes left."
        }), " Then the maths is\ntrivial: multiply by 60 coins and buy the pack that covers it. No subscription\nlogic needed."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you are reading this months from now."
        }), " The structure will still hold —\nintro below renewal, cheaper per coin in bigger packs, free episodes varying by\nseries — but every specific number will have moved."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "If you care about catalogue size more than cost."
        }), " VIP unlocks 16,000-plus\ntitles on some apps; a coin balance buys you one series. That is not a cost\ncomparison."]
      }), "\n"]
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "ReelShort",
      href: "https://r.reelsgo.tv/1vwtyh4hj9R3",
      sub: "Free to download — check what your own screen actually charges before you buy anything",
      buttonLabel: "Open ReelShort"
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

const url = "src/content/guides/reelshort-coins-vs-vip.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-coins-vs-vip.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-coins-vs-vip.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
