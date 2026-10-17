import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { $ as $$Screenshot } from './Screenshot_CH4dF0dm.mjs';
import { $ as $$AffiliateCTA } from './AffiliateCTA_GdtyC1TO.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Cancel a ReelShort Subscription (iOS, Android and Web)",
  "description": "Subscriptions must be cancelled through the store you bought them on, not inside the app. Step-by-step for iOS and Android, plus how to confirm it worked.",
  "app": "reelshort",
  "targetKeyword": "how to cancel reelshort subscription",
  "intent": "bottom",
  "shortAnswer": ["VIP subscriptions must be cancelled through the store you subscribed on — usually in the app, not inside the app.", "iOS: Settings → your name → Subscriptions → select the app → Cancel Subscription.", "Android: Play Store → profile icon → Payments & subscriptions → Subscriptions → select → Cancel.", "Coins are a one-off purchase and cannot be refunded or cancelled — there is nothing to cancel.", "After cancelling, re-open the subscription page and confirm the renewal date is gone.", "Access usually continues until the end of the period you already paid for."],
  "publishedOn": "2026-10-01",
  "updatedOn": "2026-10-09",
  "priceVerifiedOn": "2026-10-09",
  "toc": [{
    "id": "why-in-app-does-not-work",
    "label": "Why you cannot cancel inside the app"
  }, {
    "id": "ios",
    "label": "Cancel on iPhone or iPad"
  }, {
    "id": "android",
    "label": "Cancel on Android"
  }, {
    "id": "web",
    "label": "Cancel if you subscribed on the web"
  }, {
    "id": "confirm",
    "label": "Confirm it actually worked"
  }, {
    "id": "refunds",
    "label": "If you were already charged"
  }, {
    "id": "limitations",
    "label": "What cancelling does not do"
  }],
  "faqs": [{
    "q": "Why can I not find a cancel button in the ReelShort app?",
    "a": "Because the app usually did not sell you the subscription. On iOS and Android the purchase is handled by the app store, so the cancellation control lives in your store account settings rather than inside the app."
  }, {
    "q": "Do I get a refund if I cancel immediately?",
    "a": "Normally no. Cancelling stops the next renewal, and access continues until the end of the period you already paid for. Refunds are a separate request made through the app store, not an automatic result of cancelling."
  }, {
    "q": "I cancelled but it charged me again — what happened?",
    "a": "The two most common causes are cancelling in the wrong place (for example, deleting the app instead of cancelling the subscription) or cancelling after the renewal had already been processed. Check your store subscription list for the actual renewal date, then request a refund through the store."
  }, {
    "q": "Can I cancel coins and get my money back?",
    "a": "Coins are a one-off purchase, not a subscription, so there is nothing to cancel. Refunds for spent coins are handled case by case through the app store refund process and are not guaranteed."
  }, {
    "q": "Does cancelling delete my account or my coin balance?",
    "a": "Cancelling a subscription does not delete your account. Your remaining coin balance stays attached to the account, so if you resubscribe later you do not lose coins you already bought."
  }],
  "relatedGuides": ["reelshort-price-explained", "is-reelshort-legit", "how-to-get-free-coins-on-reelshort", "how-to-cancel-dramabox-subscription"]
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
      id: "why-in-app-does-not-work",
      children: "Why you cannot cancel inside the app"
    }), "\n", createVNode(_components.p, {
      children: "This is the single thing that confuses most people, and it is not a trick."
    }), "\n", createVNode(_components.p, {
      children: "When you subscribe through the Apple App Store or Google Play, the app store\nowns the subscription — it took the payment, it holds the renewal instruction,\nand it is the only party that can stop it. The app you are looking at is a\ntenant of that system, not the landlord."
    }), "\n", createVNode(_components.p, {
      children: "So you will usually find no “cancel subscription” button inside the app. People\nconclude it cannot be cancelled, give up, and get charged again. In reality the\ncontrol is one screen away, in your store account settings."
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "What that list screen tells you",
      children: createVNode(_components.p, {
        children: ["The store’s subscription list is the authoritative record — it is what decides\nwhether you are still going to be charged, regardless of what any app screen\nclaims. Two fields matter: the ", createVNode("strong", {
          children: "next billing date"
        }), " and the\n", createVNode("strong", {
          children: "renewal amount"
        }), ". If you subscribed on a discounted week, the\namount shown there is the ", createVNode("em", {
          children: "renewal"
        }), " rate, not the one you paid the first\ntime. That difference is usually where the surprise charge comes from."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "alert",
      title: "Two things that are not cancellations",
      children: [createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Deleting the app"
        }), " does not cancel anything. The subscription\nsurvives and keeps renewing. This is the most common cause of surprise charges."]
      }), createVNode("br", {}), createVNode("br", {}), createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Logging out"
        }), " does not cancel anything either, for the same\nreason."]
      })]
    }), "\n", createVNode("h2", {
      id: "ios",
      children: "Cancel on iPhone or iPad"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Open Settings."
          }), " Not the app store — the system Settings app\non your device."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap your name at the top."
          }), " If you do not see it, tap\n“Sign in to your iPhone” first — the subscription list only appears for a\nsigned-in account."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Subscriptions."
          }), " This lists every active and recently\nexpired subscription tied to your Apple ID."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Select the app in the list."
          }), " If it is not there, you did not\nsubscribe with this Apple ID — check whether you used a different account or\nsubscribed on Android or the web."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Cancel Subscription."
          }), " If you see “Cancel Free Trial”\ninstead, the same tap works — this is the step that stops the first charge."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Confirm."
          }), " Apple usually offers a retention prompt with an\nalternative offer. Choosing to continue cancelling is fine; the prompt does\nnot block you."]
        })
      })]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "How we checked the iPhone steps",
      children: createVNode(_components.p, {
        children: "We tested this flow end to end on Android, with screenshots. For iOS we had no\ndevice to capture, so the steps above follow Apple’s own published\ncancellation documentation — and we would rather tell you that than show you a\npicture we cannot stand behind. The screen names are exactly as Apple labels\nthem in the iOS Settings app."
      })
    }), "\n", createVNode("h2", {
      id: "android",
      children: "Cancel on Android"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Open the Google Play Store"
          }), " and tap your profile icon in the\ntop right."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Open “Payments & subscriptions”, then “Subscriptions”."
          }), "\nThis is the authoritative list of what will renew."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Select the app."
          }), " If it is not listed, check whether you paid\nthrough a different Google account — this is common on phones with more than\none account signed in."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Cancel subscription"
          }), " and work through the confirmation\nscreens, which will include a retention offer."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Take a screenshot of the confirmation."
          }), " It is the fastest\nevidence to have on hand if a charge still appears."]
        })
      })]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "What the Play subscription detail page gives you",
      children: createVNode(_components.p, {
        children: ["The detail page is the screen where cancellation is actually done, and it is\nalso where the ", createVNode("strong", {
          children: "exact renewal amount"
        }), " appears. Before you tap\ncancel, read that figure off — it is the number that will be charged, and it is\nfrequently higher than the price you originally paid. If it is higher and you\ndid not expect it, that is the moment to cancel rather than later."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["This is what a Google Play subscription confirmation actually looks like, and\nit is worth reading closely because the price jump is printed in plain sight.\nThe line marked ", createVNode("em", {
          children: "“Today · 1-week period”"
        }), " is the discounted first\nperiod. The line beneath it — ", createVNode("em", {
          children: "“Starting Oct 16, 2026”"
        }), " — is what you\nwill actually pay from then on: ", createVNode("strong", {
          children: "$24.99/week against the $15.99 you\nagreed to"
        }), "."]
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/netshort-gplay-subscription.webp",
      alt: "A Google Play subscription confirmation screen showing a discounted first week at 15.99 dollars and the renewal rate of 24.99 dollars per week from a later date",
      caption: "A real Google Play subscription confirmation, captured 8 October 2026. Read the two price lines together: the discounted first period, and the renewal rate that replaces it. It also carries the cancellation terms in the app's own words."
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Note the two lines in the middle, which appear in the store’s own wording:\n", createVNode("em", {
          children: "“Cancel anytime in Subscriptions on Google Play”"
        }), " and ", createVNode("em", {
          children: "“We’ll send\nyou a reminder 2 days before your intro price ends.”"
        }), " The second one is\nthe honest part of the offer — you do get warning. But it is two days, and\npeople who subscribe on a discount routinely treat that as the end of it\nrather than the start. If you subscribe on a discount, act on the reminder."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "How to tell cancellation worked",
      children: createVNode(_components.p, {
        children: ["After cancelling, the same subscription entry stays in the list — it does not\ndisappear. What changes is the date: a live subscription shows a\n", createVNode("strong", {
          children: "next billing date"
        }), ", a cancelled one shows an\n", createVNode("strong", {
          children: "access-until date"
        }), " instead. If you still see a future billing\ndate after cancelling, the cancellation did not go through, and you should check\nyour email for a confirmation from Google Play. That confirmation is the only\nreliable receipt; keep it."]
      })
    }), "\n", createVNode("h2", {
      id: "web",
      children: "Cancel if you subscribed on the web"
    }), "\n", createVNode(_components.p, {
      children: "If you subscribed through the desktop web player, the subscription is not held\nby either app store, and neither app store’s subscription list will show it. The\ncancellation route is wherever you entered payment details — the app’s own\naccount or billing page in a browser."
    }), "\n", createVNode(_components.p, {
      children: ["This is worth checking specifically, because a web subscription is easy to\nforget: it will not appear in the app store settings you are used to checking.\nIf you are unsure which route you used, start with\n", createVNode("a", {
        href: "/guides/is-reelshort-legit",
        children: "our legitimacy check"
      }), ", which explains\nwho processes which payment."]
    }), "\n", createVNode("h2", {
      id: "confirm",
      children: "Confirm it actually worked"
    }), "\n", createVNode(_components.p, {
      children: "Do not stop at the confirmation screen. Do this:"
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: "Re-open the subscription list in the same place you cancelled from."
      }), createVNode("li", {
        children: ["Confirm the renewal date is ", createVNode("strong", {
          children: "gone"
        }), " or the entry has moved to\nan expired section."]
      }), createVNode("li", {
        children: "Check the expiry date it now shows — access normally continues until the\nend of the period you already paid for, then ends."
      }), createVNode("li", {
        children: "Keep the screenshot until after that expiry date has passed."
      })]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "Why the confirmation screen is not enough",
      children: createVNode(_components.p, {
        children: "A cancelled subscription that still shows a renewal date is not cancelled. If\nthe date is still there after you confirmed, the cancellation did not register —\nrun the steps again rather than waiting to see what happens."
      })
    }), "\n", createVNode("h2", {
      id: "refunds",
      children: "If you were already charged"
    }), "\n", createVNode(_components.p, {
      children: "Cancelling stops future renewals. It does not refund a charge that already went\nthrough, and it is not automatic."
    }), "\n", createVNode(_components.p, {
      children: "For an unexpected charge:"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Go to the store’s refund route first."
          }), " On iOS that is the\nApple “Report a Problem” flow; on Android it is the Play Store refund\nrequest. These are the parties that processed the payment and they control\nthe outcome."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Cancel the subscription as well"
          }), ", so the refund request and\nthe renewal stop are both in place."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Be specific about the timeline"
          }), " — when you cancelled, when\nthe charge appeared, and whether you tried to cancel earlier."]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Contacting the app publisher is usually the slower path for a billing problem,\nbecause they cannot issue refunds for store-processed payments. Use the store\nroute first."
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "ReelShort",
      href: "https://r.reelsgo.tv/1vwtyh4hj9R3",
      sub: "Free to download · check the renewal terms before you subscribe"
    }), "\n", createVNode("h2", {
      id: "limitations",
      children: "What cancelling does not do"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "It does not refund the current period."
        }), " You keep access until the period\nends, and you do not get that money back. For what a period actually costs,\nsee ", createVNode("a", {
          href: "/guides/reelshort-price-explained",
          children: "the price breakdown"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "It does not delete your account or your coin balance."
        }), " Coins you already\nbought stay on the account, so nothing is lost if you come back."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "It does not work retroactively."
        }), " If the renewal already processed, you are\nin refund territory, not cancellation territory."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "It does not cover a subscription taken out on a different account."
        }), " Families\nsharing devices regularly hit this. If the app is not in your subscription\nlist, check the other Apple ID or Google account on the device before assuming\nthere is nothing to cancel."]
      }), "\n"]
    }), "\n", createVNode("h2", {
      id: "bottom-line",
      children: "Bottom line"
    }), "\n", createVNode(_components.p, {
      children: "Cancel through the store that holds the subscription, not inside the app.\nDeleting nothing, logging out of nothing — the only thing that stops a renewal\nis cancelling it in your store account settings. Then go back and confirm the\nrenewal date is gone."
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

const url = "src/content/guides/how-to-cancel-reelshort-subscription.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-reelshort-subscription.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-reelshort-subscription.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
