import { a as absoluteUrl } from './BaseLayout_CtoGVyo7.mjs';

const abs = (siteUrl, path) => absoluteUrl(siteUrl, path);
function organizationSchema(opts) {
  return {
    "@type": "Organization",
    "@id": `${opts.siteUrl}/#organization`,
    name: opts.brand,
    url: opts.siteUrl,
    description: opts.tagline
  };
}
function websiteSchema(opts) {
  return {
    "@type": "WebSite",
    "@id": `${opts.siteUrl}/#website`,
    url: opts.siteUrl,
    name: opts.brand,
    inLanguage: opts.lang,
    publisher: { "@id": `${opts.siteUrl}/#organization` }
  };
}
function personSchema(opts) {
  return {
    "@type": "Person",
    "@id": `${opts.siteUrl}/#author`,
    name: opts.name,
    description: opts.bio,
    url: abs(opts.siteUrl, "/about"),
    worksFor: { "@id": `${opts.siteUrl}/#organization` },
    knowsAbout: "Short-drama app pricing, in-app purchases and subscriptions"
  };
}
function breadcrumbSchema(opts) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: opts.crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(opts.siteUrl, c.url)
    }))
  };
}
function articleSchema(opts) {
  return {
    "@type": "BlogPosting",
    "@id": `${abs(opts.siteUrl, opts.url)}#article`,
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.siteUrl, opts.url) },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      "@type": "Person",
      name: opts.authorName,
      url: abs(opts.siteUrl, "/about")
    },
    publisher: { "@id": `${opts.siteUrl}/#organization` },
    inLanguage: "en"
  };
}
function faqSchema(opts) {
  return {
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}
function itemListSchema(opts) {
  return {
    "@type": "ItemList",
    name: opts.name,
    itemListElement: opts.items.map((it) => ({
      "@type": "ListItem",
      position: it.position,
      name: it.name,
      ...it.url ? { url: abs(opts.siteUrl, it.url) } : {}
    }))
  };
}
function appReviewSchema(opts) {
  return {
    "@type": "Review",
    "@id": `${abs(opts.siteUrl, opts.url)}#review`,
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: opts.appName,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "iOS, Android, Web"
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: opts.score,
      bestRating: 10,
      worstRating: 1
    },
    reviewBody: opts.reviewBody,
    author: {
      "@type": "Person",
      name: opts.authorName,
      url: abs(opts.siteUrl, "/about")
    },
    datePublished: opts.datePublished
  };
}
function graph(...nodes) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}

export { appReviewSchema as a, breadcrumbSchema as b, articleSchema as c, faqSchema as f, graph as g, itemListSchema as i, organizationSchema as o, personSchema as p, websiteSchema as w };
