import { k as createVNode, H as Fragment, _ as __astro_tag_component__ } from './astro/server_BKYOSBUE.mjs';
import { $ as $$Callout } from './Callout_piTqrotJ.mjs';
import { $ as $$Screenshot } from './Screenshot_CH4dF0dm.mjs';
import { $ as $$AffiliateCTA } from './AffiliateCTA_GdtyC1TO.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Cancel a DramaBox Subscription (iOS, Android and Web)",
  "description": "DramaBox subscriptions cancel through the store you bought them on, not inside the app. Step-by-step for iOS and Android, plus the renewal trap to check first.",
  "app": "dramabox",
  "targetKeyword": "how to cancel dramabox subscription",
  "intent": "bottom",
  "shortAnswer": ["DramaBox subscriptions must be cancelled through the store you subscribed on — the app itself has no cancel button.", "iOS: Settings → your name → Subscriptions → select DramaBox → Cancel Subscription.", "Android: Play Store → profile icon → Payments & subscriptions → Subscriptions → DramaBox → Cancel.", "The price almost certainly changes at renewal: DramaBox charges $9.99/week for three weeks, then $12.99/week. Read the renewal figure off before you confirm anything.", "Coins are a one-off purchase with nothing to cancel — and DramaBox spends your free reward coins before your paid ones.", "After cancelling, the subscription stays in the list but shows an access-until date instead of a billing date.", "Access normally continues until the end of the period you already paid for."],
  "publishedOn": "2026-10-16",
  "updatedOn": "2026-10-16",
  "priceVerifiedOn": "2026-10-09",
  "toc": [{
    "id": "check-the-renewal-first",
    "label": "Check the renewal price first"
  }, {
    "id": "why-in-app-does-not-work",
    "label": "Why there is no cancel button in the app"
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
    "id": "coins",
    "label": "Coins: there is nothing to cancel"
  }, {
    "id": "refunds",
    "label": "If you were already charged"
  }, {
    "id": "limitations",
    "label": "What cancelling does not do"
  }],
  "faqs": [{
    "q": "Why can I not find a cancel button in the DramaBox app?",
    "a": "Because the app usually did not sell you the subscription. When you subscribe through the Apple App Store or Google Play, the store handles the payment and holds the renewal, so the only control that stops it lives in your store account settings. On Android, DramaBox says this itself in the app: cancellation is managed in Google Play subscriptions."
  }, {
    "q": "How much will I be charged when my DramaBox subscription renews?",
    "a": "Most likely more than you paid at the start. DramaBox lists Weekly Membership at $9.99 per week for the first three weeks — shown as 23% off $12.99 — and renews at $12.99 per week after that. If you subscribed during a discounted week, the amount your store shows as the renewal rate is the number that will be charged."
  }, {
    "q": "Do I get a refund if I cancel immediately?",
    "a": "Normally no. Cancelling stops the next renewal and your access continues until the end of the period you already paid for. A refund is a separate request through the app store, not an automatic result of cancelling."
  }, {
    "q": "I cancelled but got charged again — what went wrong?",
    "a": "The two usual causes are cancelling in the wrong place (deleting the app, or signing out, cancels nothing) or cancelling after the renewal had already been processed. Open your store subscription list and check whether a future billing date is still shown. If it is, the cancellation did not register and you should run the steps again."
  }, {
    "q": "Does cancelling DramaBox delete my account or my coins?",
    "a": "No. Cancelling a subscription does not delete your account and your coin balance stays attached to it. You also lose access to member benefits — DramaBox member points can only be earned by paying members, so they stop accruing once the subscription ends."
  }, {
    "q": "Can I cancel DramaBox coins and get my money back?",
    "a": "Coins are a one-off purchase rather than a subscription, so there is nothing to cancel. Refunds on spent coins go through the app store refund process and are handled case by case, with no guarantee."
  }],
  "relatedGuides": ["dramabox-subscription-cost", "is-dramabox-legit", "how-to-cancel-reelshort-subscription", "dramabox-free-coins", "short-drama-app-subscription-trap", "how-to-stop-paying-for-short-drama-apps"]
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
      id: "check-the-renewal-first",
      children: "Read this before you cancel: the price changes at renewal"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["DramaBox cancellation is the same two-minute job it is on every app store. The\npart that catches people is not the mechanics — it is what they are cancelling\n", createVNode("em", {
          children: "into"
        }), ". The introductory price is not the renewal price, and on this app\nthe gap is large enough to be the whole reason you are cancelling."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Weekly Membership is listed at ", createVNode("strong", {
          children: "$9.99 a week for the first three\nweeks"
        }), ", shown in the app as 23% off $12.99 and carrying a 24-hour\ncountdown. After the three weeks it renews at ", createVNode("strong", {
          children: "$12.99 a week"
        }), " —\n", createVNode("strong", {
          children: "23% higher than the price you agreed to"
        }), ". If you signed up\nduring a promotional week and then quietly watched it roll over, the number\nthat charged you was not the number on screen when you tapped subscribe."]
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/dramabox-membership-plans.webp",
      alt: "DramaBox membership plans page showing Weekly Membership at 9.99 dollars per week for the first three weeks against a struck-through 12.99 dollars, with Annual Membership priced at 119.99 dollars",
      caption: "The DramaBox membership screen on Android, 9 October 2026. Read the weekly tier carefully: 9.99 dollars is the introductory rate and 12.99 struck through is what replaces it. The annual tier at 119.99 dollars is the only price here that does not change at renewal"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["So before you tap anything, open your store’s subscription list and read the\n", createVNode("strong", {
          children: "renewal amount"
        }), " on the DramaBox entry. That figure — not the\npromotional price — is what your money situation actually looks like from here."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "warn",
      title: "The renewal price is the price that matters",
      children: createVNode(_components.p, {
        children: ["A cancelled subscription costs you nothing further, but a subscription you leave\nrunning at full rate costs you $12.99 a week — roughly $529 a year, for a week\nof bingeing you have already watched. If your reason for cancelling is cost, this\nis the number to do the arithmetic on. Our\n", createVNode("a", {
          href: "/guides/dramabox-subscription-cost",
          children: "DramaBox cost breakdown"
        }), " works\nout where membership starts making financial sense against the coin route, which\nis a different question from whether you can stop the renewal."]
      })
    }), "\n", createVNode("h2", {
      id: "why-in-app-does-not-work",
      children: "Why there is no cancel button inside DramaBox"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "This is not a trick and it is not a dark pattern unique to DramaBox. When you\nsubscribe through the Apple App Store or Google Play, the store takes the\npayment and holds the renewal instruction. The app is a tenant of that system,\nnot the landlord, so it genuinely cannot cancel the subscription for you."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["DramaBox is unusually direct about this. The help text on its in-app store\npage states that renewal is handled by Google Play, that Google Play charges\nautomatically within 24 hours of expiry, and that ", createVNode("strong", {
          children: "cancellation is\nmanaged in Google Play subscriptions"
        }), ". That is the app telling you\nwhere the control lives rather than hiding it."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "alert",
      title: "Three things that are not cancellations",
      children: createVNode(_components.p, {
        children: [createVNode("strong", {
          children: "Deleting the app"
        }), " cancels nothing — the subscription survives and\nkeeps renewing. ", createVNode("br", {}), createVNode("br", {}), "\n", createVNode("strong", {
          children: "Signing out"
        }), " cancels nothing either, for the same reason. ", createVNode("br", {}), createVNode("br", {}), "\n", createVNode("strong", {
          children: "Cancelling a payment method"
        }), " is not a cancellation; it can leave\nyou in a failed-payment loop while the subscription is still live."]
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Delete-and-reinstall is the single most common route to a surprise charge, and\nit is the one people are most confident about because the app really does\ndisappear. It disappears; the billing does not."
      })
    }), "\n", createVNode("h2", {
      id: "ios",
      children: "Cancel on iPhone or iPad"
    }), "\n", createVNode("ol", {
      class: "steps",
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Open Settings"
          }), " — the system Settings app on your device, not\nthe App Store."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap your name at the top."
          }), " If it is not there, tap “Sign in\nto your iPhone” first; the subscription list only appears for a signed-in\nApple ID."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Subscriptions."
          }), " This lists every active and recently\nexpired subscription on the account."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Select DramaBox."
          }), " If it is missing, you subscribed with a\ndifferent Apple ID — a common issue on shared family devices."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Check the renewal price on the detail screen"
          }), " before you\ncommit to anything. On a discounted week this is where the jump from $9.99\nto $12.99 is visible."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Cancel Subscription."
          }), " Apple will offer a retention\nprompt with an alternative offer; continuing to cancel is fine, it does not\nblock you."]
        })
      })]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "How we checked the iPhone steps",
      children: createVNode(_components.p, {
        children: "We tested this flow end to end on Android, with screenshots. For iOS we had no\ndevice to capture, so the steps above follow Apple’s own published cancellation\ndocumentation — we would rather say that than show you a picture we cannot stand\nbehind. The screen names are exactly as Apple labels them."
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
            children: "Select DramaBox"
          }), " and read the subscription detail page\nbefore tapping anything — it shows the exact renewal amount."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Tap Cancel subscription"
          }), " and work through the confirmation\nscreens, which usually include a retention offer."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Screenshot the confirmation."
          }), " It is the fastest evidence to\nhave if a charge still appears."]
        })
      })]
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["This is what a Google Play subscription confirmation looks like in practice,\nand the price jump is printed in plain sight. The line marked ", createVNode("em", {
          children: "“Today ·\n1-week period”"
        }), " is the discounted first period. Beneath it, ", createVNode("em", {
          children: "“Starting\nOct 16, 2026”"
        }), " is what you will actually pay from then on: ", createVNode("strong", {
          children: "$24.99\na week against the $15.99 you agreed to"
        }), "."]
      })
    }), "\n", createVNode($$Screenshot, {
      src: "/screenshots/netshort-gplay-subscription.webp",
      alt: "A Google Play subscription confirmation screen showing a discounted first week at 15.99 dollars and the renewal rate of 24.99 dollars per week from a later date",
      caption: "A real Google Play subscription confirmation, captured 8 October 2026 — from a sibling app in the same category, shown because the store's own layout is identical. Read the two price lines together: the discounted first period, and the renewal rate that replaces it"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "The app name differs from ours, but the store screen does not — the\nsubscription confirmation, the renewal line and the cancellation terms are\nGoogle’s own, identical across every app sold through Play. It is also the\nclearest example of the pattern DramaBox uses: a discounted first period that\nquietly becomes the standard rate."
      })
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "The store's wording is the honest part",
      children: createVNode(_components.p, {
        children: ["Note the two lines in the middle of that screenshot, in the store’s own\nlanguage: ", createVNode("em", {
          children: "“Cancel anytime in Subscriptions on Google Play”"
        }), " and ", createVNode("em", {
          children: "“We’ll\nsend you a reminder 2 days before your intro price ends.”"
        }), " You do get\nwarning. It is two days though, and people who subscribe on a discount routinely\ntreat that as the end of it rather than the start. If you subscribed on a\npromotional rate, act on the reminder."]
      })
    }), "\n", createVNode("h2", {
      id: "web",
      children: "Cancel if you subscribed on the web"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "If you subscribed through the desktop web player, neither app store holds the\nsubscription and neither store’s list will show it. The cancellation route is\nwherever you entered payment details — the account or billing page in a\nbrowser."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Worth checking specifically, because a web subscription is easy to forget:\nit will not appear in the store settings you are used to checking. If you are\nunsure which route you used, our\n", createVNode("a", {
          href: "/guides/is-dramabox-legit",
          children: "DramaBox legitimacy check"
        }), " explains who\nprocesses which payment."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "warn",
      title: "A DramaBox-specific wrinkle: prices move with your region",
      children: createVNode(_components.p, {
        children: "The same DramaBox account showed us Japanese yen through one connection and US\ndollars through another, on consecutive days. The app says as much itself:\n“the current product prices are displayed in USD. Please restart DramaBox to\nrefresh the localized pricing.” So a cancellation you make from a different\nregion, or a renewal processed while you are connected elsewhere, may not be\nhandling the same price you think it is. Check the currency on the receipt."
      })
    }), "\n", createVNode("h2", {
      id: "confirm",
      children: "Confirm it actually worked"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Do not stop at the confirmation screen. Do this:"
      })
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: "Re-open the subscription list in the same place you cancelled from."
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: ["Confirm the billing date is ", createVNode("strong", {
            children: "gone"
          }), ", or that the entry has\nmoved into an expired section."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: "Check the date it now shows. Access normally continues until the end of the\nperiod you already paid for, then ends."
        })
      }), createVNode("li", {
        children: "Keep the screenshot until after that access-until date has passed."
      })]
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "How to tell",
      children: createVNode(_components.p, {
        children: ["The entry does ", createVNode("strong", {
          children: "not"
        }), " disappear after cancelling — that is normal\nand not a sign of failure. A live subscription shows a next billing date; a\ncancelled one shows an access-until date instead. If a future billing date is\nstill there, the cancellation did not go through, and you should check your email\nfor a store confirmation. That email is the only reliable receipt — keep it."]
      })
    }), "\n", createVNode("h2", {
      id: "coins",
      children: "Coins: there is nothing to cancel"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Coin packs in DramaBox are one-off purchases, not subscriptions. If you bought\na pack there is no recurring charge to stop, and nothing in your store\nsubscription list will ever mention it."
      })
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["One rule matters here that is specific to this app: ", createVNode("strong", {
          children: "DramaBox spends\nyour reward coins first"
        }), " when you unlock an episode, as stated on the\nin-app store page. The coins you earned from check-ins, video tasks and\nsign-up bonuses are consumed before the coins you paid for. Practical\nconsequences: your free balance is not quietly expired by buying early, and a\nrefund request on spent coins is unlikely to succeed because part of what you\nspent was never paid for. If you are weighing whether to cancel or just stop\nsubscribing, our\n", createVNode("a", {
          href: "/guides/dramabox-free-coins",
          children: "free coins breakdown"
        }), " shows what the\nfree tier covers on its own."]
      })
    }), "\n", createVNode($$Callout, {
      kind: "info",
      title: "Coins you have not spent",
      children: createVNode(_components.p, {
        children: "Any coin balance stays attached to your account if you cancel — cancelling a\nsubscription does not delete the balance. If you resubscribe later, the coins\nare still there."
      })
    }), "\n", createVNode("h2", {
      id: "refunds",
      children: "If you were already charged"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "Cancelling stops future renewals. It does not refund a charge that already\nwent through, and it is not automatic."
      })
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
          }), " — when you cancelled, when\nthe charge appeared, and what you were shown when you subscribed. If the\nprice you were shown differed from what was charged, say so: that gap is the\nsubstance of the complaint."]
        })
      })]
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["Contacting the app publisher is usually the slower path, because they cannot\nissue refunds for store-processed payments. Use the store route first. The\nwider pattern — why these prices move, and what to check before the first\npayment rather than after the renewal — is in\n", createVNode("a", {
          href: "/guides/short-drama-app-subscription-trap",
          children: "how the subscription trap\nworks"
        }), "."]
      })
    }), "\n", createVNode($$AffiliateCTA, {
      appName: "DramaBox",
      href: "https://r.reelsgo.tv/uR3A7JBLdipd",
      sub: "Free to download · set a reminder before your first renewal, not after",
      buttonLabel: "Open DramaBox"
    }), "\n", createVNode("h2", {
      id: "limitations",
      children: "What cancelling does not do"
    }), "\n", createVNode("ul", {
      children: [createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "It does not refund the current period."
          }), " You keep access until\nthe period ends and you do not get that money back. For what a period\nactually costs, see\n", createVNode("a", {
            href: "/guides/dramabox-subscription-cost",
            children: "the price breakdown"
          }), "."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "It does not delete your account or your coin balance."
          }), "\nRemaining coins stay on the account, so nothing is lost if you come back."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "It does not stop member points."
          }), " It stops them. DramaBox\nstates that points are for paid members only, so cancelling ends your\naccrual — one of the few places on these apps where leaving genuinely costs\nyou something."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "It does not work retroactively."
          }), " If the renewal already\nprocessed, you are in refund territory, not cancellation territory."]
        })
      }), createVNode("li", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "It does not cover a subscription on a different account."
          }), " If\nDramaBox is absent from your list, check the other Apple ID or Google account\non the device before concluding there is nothing to cancel."]
        })
      })]
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: ["If cancelling is not the goal and you would rather keep paying less, that is a\nsolvable problem too — the\n", createVNode("a", {
          href: "/guides/how-to-stop-paying-for-short-drama-apps",
          children: "stop paying more than\nyou need to playbook"
        }), " covers choosing the payment shape deliberately,\nacross apps."]
      })
    }), "\n", createVNode("h2", {
      id: "bottom-line",
      children: "Bottom line"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "DramaBox subscriptions cancel in the store that holds them — Google Play or\nthe App Store — not in the app, and not by deleting the app. Read the renewal\nprice before you confirm anything, because $9.99 for three weeks becomes $12.99\nevery week after that. Then go back and check that the billing date is gone and\nan access-until date has replaced it."
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

const url = "src/content/guides/how-to-cancel-dramabox-subscription.mdx/";
const file = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-dramabox-subscription.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/content/guides/how-to-cancel-dramabox-subscription.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
