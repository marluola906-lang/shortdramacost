import { a as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent, H as Fragment, c as createAstro } from './astro/server_BKYOSBUE.mjs';
import 'piccolore';

const $$Astro = createAstro("https://shortdramacost.com");
const $$PriceTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PriceTable;
  const {
    caption,
    rows,
    verifiedOn,
    col1 = "Item",
    col2 = "Price / detail"
  } = Astro2.props;
  const pending = verifiedOn === "PENDING";
  return renderTemplate`${maybeRenderHead()}<div class="table-scroll"> <table> ${caption && renderTemplate`<caption>${caption}</caption>`} <thead> <tr> <th scope="col">${col1}</th> <th scope="col">${col2}</th> </tr> </thead> <tbody> ${rows.map((r) => renderTemplate`<tr> <td><strong>${r.label}</strong></td> <td> ${r.value} ${r.note && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<br><span class="muted small">${r.note}</span>` })}`} </td> </tr>`)} </tbody> </table> </div> ${pending ? renderTemplate`<div class="callout warn"> <span class="ct">Draft prices — not yet verified in app</span> <p>
These figures are compiled from public listings and have <strong>not</strong> been
      confirmed by us in the app yet. Treat them as a starting point only, and check the
      current price inside the app before you buy. This notice disappears once the
      figures below have been verified in-app on a recorded date.
</p> </div>` : renderTemplate`<p class="t-verified">Prices checked in-app on ${verifiedOn}.</p>`}`;
}, "C:/Users/lenovo/WorkBuddy/2026-09-30-23-39-30/short-drama-affiliate/site/src/components/PriceTable.astro", void 0);

export { $$PriceTable as $ };
