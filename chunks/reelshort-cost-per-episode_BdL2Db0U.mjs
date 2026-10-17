import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { $ as $$Screenshot } from './Screenshot_CH4dF0dm.mjs';
import { $ as $$AffiliateCTA } from './AffiliateCTA_GdtyC1TO.mjs';
import 'clsx';

const frontmatter = {
  "title": "ReelShort Cost Per Episode: What One Episode Actually Costs",
  "description": "One ReelShort episode costs 60 coins. What that works out to per episode at every coin pack price, from $0.60 on the smallest pack down to $0.40 on the largest.",
  "app": "reelshort",
  "targetKeyword": "reelshort cost per episode",
  "intent": "bottom",
  "shortAnswer": ["One locked ReelShort episode costs <strong>60 coins</strong>. That is the price of an episode before you have bought anything — the app tells you this figure, it does not vary by series or tier.", "What it works out to depends entirely on which pack you buy: <strong>$0.60 per episode</strong> on the $4.99 pack, down to <strong>$0.40 on the $49.99 pack</strong>.", "That 50% spread is the single most useful number on this page. The episode costs the same 60 coins either way — you are paying for the price of the pack, not the price of the episode.", "A $49.99 pack holds 7,500 coins, which is <strong>exactly 125 episodes</strong> and nothing left over.", "For a typical 54-episode series with about 10 free, finishing it costs roughly <strong>$17.60–$20.30 in coins</strong> depending on the pack.", "If you will watch more than roughly 5 episodes, a subscription undercuts coins — see our ReelShort price breakdown for where the line sits."],
  "publishedOn": "2026-10-18",
  "updatedOn": "2026-10-18",
  "priceVerifiedOn": "2026-10-09",
  "toc": [{
    "id": "one-number",
    "label": "The one number that matters"
  }, {
    "id": "what-it-works-out-to",
    "label": "What 60 coins works out to"
  }, {
    "id": "the-spread",
    "label": "The 50% spread between packs"
  }, {
    "id": "the-7500-pack",
    "label": "Why the $49.99 pack is the efficient one"
  }, {
    "id": "a-whole-series",
    "label": "Working a whole series through"
  }, {
    "id": "coins-vs-subscription",
    "label": "When coins stop being the answer"
  }, {
    "id": "the-trap",
    "label": "The trap: the small pack is the one you see first"
  }, {
    "id": "other-apps",
    "label": "How DramaBox compares per episode"
  }, {
    "id": "limitations",
    "label": "What this arithmetic cannot tell you"
  }],
  "faqs": [{
    "q": "How much is one episode on ReelShort in dollars?",
    "a": "It depends on which coin pack you bought, and the spread is wide. A locked episode costs 60 coins. That works out to $0.60 per episode on the $4.99 pack, $0.50 on the $19.99 pack, and $0.40 on the $49.99 pack. All three are correct — the episode is 60 coins in every case, so the per-episode dollar cost is entirely decided by the price of the pack you purchased."
  }, {
    "q": "Why do different ReelShort coin packs give different value?",
    "a": "Because larger packs include a bonus: the $9.99 pack holds 1,100 coins rather than 1,000, the $49.99 pack holds 7,500 rather than 5,000. The per-coin price therefore falls steadily as packs get larger, from about one cent down to about two thirds of a cent. The smallest pack is the worst deal by that measure — it exists mainly because it is the easiest number to say yes to."
  }, {
    "q": "How many episodes can I watch for $49.99 on ReelShort?",
    "a": "The $49.99 pack holds 7,500 coins at 60 coins per episode, which is exactly 125 episodes with nothing left over. It is the only pack where the arithmetic comes out clean, which makes it easy to reason about but also easy to overspend — 125 episodes is a lot more than most people watch."
  }, {
    "q": "Is it cheaper to buy coins or subscribe on ReelShort?",
    "a": "For finishing a single series, coins usually win: roughly $17.60 to $20.30 for a typical 54-episode title with about 10 episodes free. Once you are watching several series a month, a weekly subscription undercuts that quickly, because it is unlimited rather than metered. The break-even sits at around five episodes on a single-series basis, and our price breakdown works the full comparison."
  }, {
    "q": "Which is cheaper per episode, ReelShort or DramaBox?",
    "a": "DramaBox, on both counts. It charges 50 coins per episode against ReelShort's 60, its entry pack is $2.99 against $4.99, and its best per-episode rate is $0.36 against ReelShort's $0.40 — DramaBox's largest pack carries a 40% bonus and costs half as much to start with. ReelShort does have the cleaner arithmetic: its $49.99 pack divides into exactly 125 episodes with nothing stranded. Cheaper is DramaBox, easier to plan is ReelShort."
  }, {
    "q": "Is the 60-coin price the same on every series?",
    "a": "Yes — ReelShort charges 60 coins per locked episode regardless of the series, its length or its production value. The figure appears on the paywall itself. What varies between series is how many episodes are free before that paywall, which ranged from about 10 on a 54-episode title to 16 on an 81-episode one in our testing."
  }],
  "relatedGuides": ["reelshort-price-explained", "reelshort-cost-per-season", "reelshort-coins-vs-vip", "how-to-get-free-coins-on-reelshort", "reelshort-vs-dramabox", "short-drama-app-most-free-episodes"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("h2", {
      id: "one-number",
      children: "The one number that matters"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Every locked episode on ReelShort costs ", createVNode("strong", {
          children: "60 coins"
        }), ". The\npaywall states it outright, and it does not change with the series, its\nlength or its production budget. A dubbed two-minute vertical drama and a\nlicensed K-drama adaptation sit behind the same 60 coins."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "That figure alone is not very useful on its own, because coins are not\ndollars. What makes it useful is dividing it by the price of the pack you\nactually bought — and that produces the most surprising number on this page."
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-coin-packs.webp",
      alt: "ReelShort coin pack refill screen showing five tiers from 500 coins for 4.99 dollars up to 5,000 plus 2,500 bonus coins for 49.99 dollars",
      caption: "The ReelShort coin refill screen on Android, 9 October 2026. Five tiers, and the price per coin falls the whole way down the list — the smallest pack is the most expensive per episode on the screen"
    }), "\n", createVNode("h2", {
      id: "what-it-works-out-to",
      children: "What 60 coins works out to"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Here is the whole thing in one table. We priced every tier in-app and divided\nthe pack price by the coins it delivers, then multiplied by 60:"
      })
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Pack"
          }), createVNode("th", {
            children: "Price"
          }), createVNode("th", {
            children: "Coins (incl. bonus)"
          }), createVNode("th", {
            children: "Per coin"
          }), createVNode("th", {
            children: createVNode("strong", {
              children: "Per episode"
            })
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Smallest"
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
            children: "1,000 + 100"
          }), createVNode("td", {
            children: "$9.99"
          }), createVNode("td", {
            children: "1,100"
          }), createVNode("td", {
            children: "$0.0091"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.54"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "2,000 + 400"
          }), createVNode("td", {
            children: "$19.99"
          }), createVNode("td", {
            children: "2,400"
          }), createVNode("td", {
            children: "$0.0083"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.50"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "3,000 + 900"
          }), createVNode("td", {
            children: "$29.99"
          }), createVNode("td", {
            children: "3,900"
          }), createVNode("td", {
            children: "$0.0077"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.46"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Largest"
          }), createVNode("td", {
            children: "$49.99"
          }), createVNode("td", {
            children: "7,500"
          }), createVNode("td", {
            children: "$0.0067"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.40"
            })
          })]
        })]
      })]
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Read the last column top to bottom: ", createVNode("strong", {
          children: "$0.60, $0.54, $0.50, $0.46,\n$0.40"
        }), ". Twenty cents separates the most expensive way to buy an\nepisode from the cheapest, for an episode that costs exactly the same either\nway."]
      })
    }), "\n", createVNode("h2", {
      id: "the-spread",
      children: "The 50% spread between packs"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["The smallest pack charges ", createVNode("strong", {
          children: "$0.60"
        }), " per episode. The largest\ncharges ", createVNode("strong", {
          children: "$0.40"
        }), ". The large pack is therefore\n", createVNode("strong", {
          children: "50% cheaper per episode"
        }), " — which makes the intuitive move,\nstarting small “just to test it”, the most expensive way to buy."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "This is the practical form of the argument: your cost per episode is decided\nentirely by your first purchase, and you cannot change it afterwards."
      })
    }), "\n", createVNode($$Callout, {
      kind: "warn",
      title: "The test-the-waters instinct costs you 50%",
      children: createVNode(_components.p, {
        children: "Paying $4.99 to “see whether I like it” and then continuing on that pack means\nevery episode you ever watch costs $0.60. The identical viewing on the $49.99\npack costs $0.40 — and ReelShort does not credit the difference or convert it."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "The mechanical reason is in the bonus structure, which is worth seeing\nplainly because it is not obvious from the pack labels:"
      })
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: ["The $4.99 pack gives you ", createVNode("strong", {
          children: "500 coins for 500"
        }), " — no bonus."]
      }), createVNode("li", {
        children: ["The $9.99 pack is labelled “1,000” but delivers ", createVNode("strong", {
          children: "1,100"
        }), "."]
      }), createVNode("li", {
        children: ["The $49.99 pack is labelled “5,000” but delivers ", createVNode("strong", {
          children: "7,500"
        }), " — a 50% bonus, by far the largest in the list."]
      })]
    }), "\n", createVNode($$Callout, {
      kind: "alert",
      title: "The label is not the amount",
      children: createVNode(_components.p, {
        children: ["Read ReelShort’s pack labels carefully: the headline number is what you\n", createVNode("em", {
          children: "pay for"
        }), ", and the bonus is added on top. A pack advertised as 5,000\ncoins costs $49.99 and gives you 7,500. This is also where our own earlier\nnote was wrong — we initially recorded only three tiers because the smaller\npacks are not shown on the main store page. They exist, inside the locked-episode\nrecharge flow, and they are the worst value on the screen."]
      })
    }), "\n", createVNode("h2", {
      id: "the-7500-pack",
      children: "Why the $49.99 pack is the efficient one"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "The largest pack has the lowest cost per coin, and it is also the only one\nwhere the arithmetic lands on a whole number:"
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "7,500 coins ÷ 60 coins per episode = exactly 125 episodes."
        }), " No\nremainder, no coins stranded in your balance that you will never spend."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "That is genuinely convenient for planning, and it is also precisely how the\npack is designed to work on you: 125 episodes is a long way past the point\nwhere most people stop, and the balance sits in your account looking like a\nsmall asset rather than leftover cash."
      })
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "When the big pack is the wrong call",
      children: createVNode(_components.p, {
        children: "The large pack wins on unit price and loses on exposure. If you might watch five\nepisodes, $49.99 buys 125 of them. Judge it on the series you are actually\nabout to watch — and remember that most of that series is free, so your coin\nspend starts at the paywall, not at episode one."
      })
    }), "\n", createVNode("h2", {
      id: "a-whole-series",
      children: "Working a whole series through"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Single-episode arithmetic becomes concrete once it is attached to an actual\nseries. Two examples from our testing:"
      })
    }), "\n", createVNode("h3", {
      children: "A 54-episode series with about 10 free"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["That leaves roughly 44 episodes to unlock, or\n", createVNode("strong", {
          children: "44 × 60 = 2,640 coins"
        }), ". Two packs cover it:"]
      })
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "Route"
          }), createVNode("th", {
            children: "Pack bought"
          }), createVNode("th", {
            children: "Per episode"
          }), createVNode("th", {
            children: "Total for the series"
          }), createVNode("th", {
            children: "Coins left over"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "Smaller route"
          }), createVNode("td", {
            children: "$29.99 (3,900)"
          }), createVNode("td", {
            children: "$0.46"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$20.30"
            })
          }), createVNode("td", {
            children: "1,260"
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "Larger route"
          }), createVNode("td", {
            children: "$49.99 (7,500)"
          }), createVNode("td", {
            children: "$0.40"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$17.60"
            })
          }), createVNode("td", {
            children: "4,860"
          })]
        })]
      })]
    }), "\n", createVNode("h3", {
      children: "An 81-episode series with about 16 free"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["That leaves roughly 65 episodes, or ", createVNode("strong", {
          children: "3,900 coins"
        }), " — which is\nexactly one $29.99 pack. Finishing this one costs\n", createVNode("strong", {
          children: "$29.99"
        }), " on the smaller pack and ", createVNode("strong", {
          children: "$25.99"
        }), " on the\nlarger."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["The pattern across both: ", createVNode("strong", {
          children: "finishing one series with coins lands between\nroughly $17 and $30"
        }), ", and the pack you choose moves that figure by a\nfew dollars rather than by tens."]
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/reelshort-episode-free-boundary.webp",
      alt: "ReelShort episode list showing the transition from free episodes to locked episodes marked with a padlock icon",
      caption: "The free boundary on ReelShort, Android, October 2026. Roughly 10 episodes on this 54-episode title, about 16 on the 81-episode one — your coin spend starts here, not at episode one"
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "How we checked the free boundary",
      children: createVNode(_components.p, {
        children: ["The count is not published anywhere and it moves from title to title: we\nmeasured about 10 free episodes on a 54-episode series and 16 on an 81-episode\none. Open the episode list and scroll to the first padlock before you commit to\nbuying anything. Our\n", createVNode("a", {
          href: "/guides/short-drama-app-most-free-episodes",
          children: "free-episode survey"
        }), "\ncovers what six apps gave us."]
      })
    }), "\n", createVNode("h2", {
      id: "coins-vs-subscription",
      children: "When coins stop being the answer"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "The per-episode figures above assume you are finishing one series and\nstopping. If you finish several, the arithmetic inverts, because a\nsubscription is a ceiling rather than a meter."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "At $0.46 per episode, a second series costs another $12–14 in coins. A weekly\nmembership covers unlimited series for $9.99 to $12.99. So the coin route\nstays ahead for roughly the first series and loses after that, and the\ncrossover is easy to calculate for your own case."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Our ", createVNode("a", {
          href: "/guides/reelshort-price-explained",
          children: "ReelShort price\nbreakdown"
        }), " works through both payment shapes properly, and\n", createVNode("a", {
          href: "/guides/reelshort-coins-vs-vip",
          children: "coins versus VIP"
        }), " isolates which\nof the two paid layers is being wasted."]
      })
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "ReelShort",
      href: "https://r.reelsgo.tv/1vwtyh4hj9R3",
      sub: "Free to download · one episode is 60 coins, so the pack decides the price"
    }), "\n", createVNode("h2", {
      id: "the-trap",
      children: "The trap: the small pack is the one you see first"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "This deserves naming as a design choice rather than an accusation, because it\nis entirely legal and widely used across the category."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "The smallest pack is what a new user meets first, and it is the worst deal on\nthe screen at $0.60 per episode. The best deal — the $49.99 pack at $0.40 —\nis the one that requires committing to the largest number before you know\nwhether you will watch more than five episodes."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "There is a second, smaller version of the same thing worth knowing: the\nsmaller packs are not shown on the main store page at all. They live inside\nthe locked-episode recharge flow, which is where most people actually buy. We\nmissed them for the same reason — we originally logged only three tiers\nbecause we read the main store page."
      })
    }), "\n", createVNode($$Callout, {
      kind: "alert",
      title: "What is genuinely hidden, and what is not",
      children: createVNode(_components.p, {
        children: "Being fair here: the bonus coins are stated in the pack label, the per-coin\nrate is arithmetic anyone can do, and the renewal terms appear in your store\nsubscription screen. Nothing is concealed — the design simply makes the worst\nvalue the easiest to reach. That is worth knowing precisely because you can\nthen choose the other one deliberately."
      })
    }), "\n", createVNode("h2", {
      id: "other-apps",
      children: "How DramaBox compares per episode"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["The comparison most price lists stop short of is the one that matters: not\ncoin price, but ", createVNode("strong", {
          children: "per-episode cost at each pack tier"
        }), ". DramaBox\ncharges ", createVNode("strong", {
          children: "50 coins per episode"
        }), " against ReelShort’s 60, and the\npackages diverge from there."]
      })
    }), "\n", createVNode("table", {
      class: "data-table",
      children: [createVNode("thead", {
        children: createVNode("tr", {
          children: [createVNode("th", {
            children: "App"
          }), createVNode("th", {
            children: "Coins per episode"
          }), createVNode("th", {
            children: "Cheapest pack"
          }), createVNode("th", {
            children: "Per episode there"
          }), createVNode("th", {
            children: "Largest pack"
          }), createVNode("th", {
            children: "Best per episode"
          })]
        })
      }), createVNode("tbody", {
        children: [createVNode("tr", {
          children: [createVNode("td", {
            children: "ReelShort"
          }), createVNode("td", {
            children: "60"
          }), createVNode("td", {
            children: "$4.99 / 500"
          }), createVNode("td", {
            children: "$0.60"
          }), createVNode("td", {
            children: "$49.99 / 7,500"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.40"
            })
          })]
        }), createVNode("tr", {
          children: [createVNode("td", {
            children: "DramaBox"
          }), createVNode("td", {
            children: "50"
          }), createVNode("td", {
            children: "$2.99 / 300"
          }), createVNode("td", {
            children: "$0.50"
          }), createVNode("td", {
            children: "$24.99 / 3,500"
          }), createVNode("td", {
            children: createVNode("strong", {
              children: "$0.36"
            })
          })]
        })]
      })]
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["DramaBox wins on both rows. Its headline per-episode coin price is 17% lower,\nits entry pack is cheaper at $2.99 against $4.99, and — the number most\ncomparisons miss — ", createVNode("strong", {
          children: "its best per-episode rate is $0.36 against\nReelShort’s $0.40"
        }), ", because DramaBox’s largest pack carries a 40%\nbonus and costs half as much to begin with."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["So the honest summary: ", createVNode("strong", {
          children: "DramaBox is cheaper per episode at both ends of\nthe range."
        }), " ReelShort’s $49.99 pack has the cleaner arithmetic — 125\nepisodes exactly, no remainder — which makes it easier to plan, but it is not\nthe better price. If per-episode cost is the only question,\n", createVNode("a", {
          href: "/guides/reelshort-vs-dramabox",
          children: "DramaBox comes out ahead"
        }), "."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The takeaway most price lists miss",
      children: createVNode(_components.p, {
        children: "Comparing coin packages across apps by dividing price by coins looks rigorous\nand is usually wrong, because it silently assumes you buy the largest pack\neverywhere. Decide the pack first, then compare."
      })
    }), "\n", createVNode("h2", {
      id: "limitations",
      children: "What this arithmetic cannot tell you"
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Prices rotate."
          }), " The intro discounts in this category change\nday to day — we saw ReelShort at 67% off one day and 21% off the next. Coin\npack prices are more stable than VIP tiers but they are not fixed, so\nre-check before a large purchase."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Every figure is Android, October 2026."
          }), " We did not verify\nthese tiers on iOS, and the store surfaces differ."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Free-episode counts are samples, not rules."
          }), " Two titles gave\nus 10 and 16. ReelShort publishes nothing, so your series may differ."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "This page ignores subscriptions entirely"
          }), ", and for anything\nbeyond one series that is the wrong frame. Use it to price coins, then read\nthe price breakdown before deciding how to pay."]
        })
      })]
    }), "\n", createVNode("h2", {
      id: "bottom-line",
      children: "Bottom line"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["One ReelShort episode costs ", createVNode("strong", {
          children: "60 coins"
        }), ", and that number never\nmoves. What moves is what a coin is worth, which depends on the pack you\nbought:"]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "$0.60"
        }), " per episode on the $4.99 pack.\n", createVNode("strong", {
          children: "$0.50"
        }), " on the $19.99 pack.\n", createVNode("strong", {
          children: "$0.40"
        }), " on the $49.99 pack — exactly 125 episodes, no coins\nstranded."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["So the practical rule is short: ", createVNode("strong", {
          children: "buy the pack that matches how many\nepisodes you will actually watch, and never buy the small pack twice."
        }), "\nFor finishing a single series, $17.60–$20.30 in coins is the realistic range.\nPast that, a subscription undercuts it, and the crossover is around five\nepisodes."]
      })
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

const url = "src/content/guides/reelshort-cost-per-episode.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-episode.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/reelshort-cost-per-episode.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
