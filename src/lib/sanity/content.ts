import {asImageUrl, sanityClient, type SanityImageRef} from "./client";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteSocialLink = {
  label: string;
  href: string;
};

export type SiteSettingsContent = {
  siteTitle: string;
  defaultDescription: string;
  headerNav: SiteNavItem[];
  hireMeLabel: string;
  footerEmail: string;
  footerCopyright: string;
  footerStatusText: string;
  socialLinks: SiteSocialLink[];
};

export type HomePageContent = {
  heroKicker: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  heroPrimaryCtaLabel: string;
  heroPrimaryCtaHref: string;
  heroSecondaryCtaLabel: string;
  heroSecondaryCtaHref: string;
  heroPillLeft: string;
  heroPillRight: string;
  featuredTitle: string;
  featuredDescription: string;
  precisionTitle: string;
  precisionDescription: string;
  precisionModes: Array<{
    id: string;
    label: string;
    src: string;
    alt: string;
  }>;
  precisionStats: Array<{
    value: string;
    label: string;
  }>;
  showreelKicker: string;
  showreelTitle: string;
  showreelBody: string;
  showreelCtaLabel: string;
  showreelCtaHref: string;
  seoTitle: string;
  seoDescription: string;
};

export type ContactPageContent = {
  kicker: string;
  heading: string;
  description: string;
  portraitSrc: string;
  portraitAlt: string;
  nameMark: string;
  tags: string[];
  cardTitle: string;
  cardSubtitle: string;
  formNameLabel: string;
  formEmailLabel: string;
  formDetailsLabel: string;
  formSubmitLabel: string;
  formEmailTo: string;
  seoTitle: string;
  seoDescription: string;
};

type RawSiteSettings = {
  siteTitle?: string;
  defaultDescription?: string;
  headerNav?: Array<{label?: string; href?: string}>;
  hireMeLabel?: string;
  footerEmail?: string;
  footerCopyright?: string;
  footerStatusText?: string;
  socialLinks?: Array<{label?: string; href?: string}>;
};

type RawHomePage = {
  heroKicker?: string;
  heroTitle?: string;
  heroHighlight?: string;
  heroDescription?: string;
  heroPrimaryCtaLabel?: string;
  heroPrimaryCtaHref?: string;
  heroSecondaryCtaLabel?: string;
  heroSecondaryCtaHref?: string;
  heroPillLeft?: string;
  heroPillRight?: string;
  featuredTitle?: string;
  featuredDescription?: string;
  precisionTitle?: string;
  precisionDescription?: string;
  precisionModes?: Array<{
    id?: string;
    label?: string;
    image?: SanityImageRef;
    imageUrl?: string;
    alt?: string;
  }>;
  precisionStats?: Array<{value?: string; label?: string}>;
  showreelKicker?: string;
  showreelTitle?: string;
  showreelBody?: string;
  showreelCtaLabel?: string;
  showreelCtaHref?: string;
  seoTitle?: string;
  seoDescription?: string;
};

type RawContactPage = {
  kicker?: string;
  heading?: string;
  description?: string;
  portraitImage?: SanityImageRef;
  portraitImageUrl?: string;
  portraitImageAlt?: string;
  nameMark?: string;
  tags?: string[];
  cardTitle?: string;
  cardSubtitle?: string;
  formNameLabel?: string;
  formEmailLabel?: string;
  formDetailsLabel?: string;
  formSubmitLabel?: string;
  formEmailTo?: string;
  seoTitle?: string;
  seoDescription?: string;
};

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  defaultDescription,
  headerNav,
  hireMeLabel,
  footerEmail,
  footerCopyright,
  footerStatusText,
  socialLinks
}`;

const homePageQuery = `*[_type == "homePage"][0]{
  heroKicker,
  heroTitle,
  heroHighlight,
  heroDescription,
  heroPrimaryCtaLabel,
  heroPrimaryCtaHref,
  heroSecondaryCtaLabel,
  heroSecondaryCtaHref,
  heroPillLeft,
  heroPillRight,
  featuredTitle,
  featuredDescription,
  precisionTitle,
  precisionDescription,
  precisionModes,
  precisionStats,
  showreelKicker,
  showreelTitle,
  showreelBody,
  showreelCtaLabel,
  showreelCtaHref,
  seoTitle,
  seoDescription
}`;

const contactPageQuery = `*[_type == "contactPage"][0]{
  kicker,
  heading,
  description,
  portraitImage,
  portraitImageUrl,
  portraitImageAlt,
  nameMark,
  tags,
  cardTitle,
  cardSubtitle,
  formNameLabel,
  formEmailLabel,
  formDetailsLabel,
  formSubmitLabel,
  formEmailTo,
  seoTitle,
  seoDescription
}`;

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export async function getSiteSettingsContent(): Promise<SiteSettingsContent> {
  const doc = await sanityClient.fetch<RawSiteSettings | null>(siteSettingsQuery);
  invariant(doc, "Missing required Sanity document: siteSettings");
  const headerNav = (doc.headerNav ?? []).filter(
    (item): item is {label: string; href: string} => Boolean(item?.label && item?.href),
  );
  const socialLinks = (doc.socialLinks ?? []).filter(
    (item): item is {label: string; href: string} => Boolean(item?.label && item?.href),
  );
  invariant(headerNav.length > 0, "siteSettings.headerNav must include at least one link");
  invariant(socialLinks.length > 0, "siteSettings.socialLinks must include at least one link");
  invariant(doc.siteTitle, "siteSettings.siteTitle is required");
  invariant(doc.defaultDescription, "siteSettings.defaultDescription is required");
  invariant(doc.hireMeLabel, "siteSettings.hireMeLabel is required");
  invariant(doc.footerEmail, "siteSettings.footerEmail is required");
  invariant(doc.footerCopyright, "siteSettings.footerCopyright is required");
  invariant(doc.footerStatusText, "siteSettings.footerStatusText is required");

  return {
    siteTitle: doc.siteTitle,
    defaultDescription: doc.defaultDescription,
    headerNav,
    hireMeLabel: doc.hireMeLabel,
    footerEmail: doc.footerEmail,
    footerCopyright: doc.footerCopyright,
    footerStatusText: doc.footerStatusText,
    socialLinks,
  };
}

export async function getHomePageContent(): Promise<HomePageContent> {
  const doc = await sanityClient.fetch<RawHomePage | null>(homePageQuery);
  invariant(doc, "Missing required Sanity document: homePage");
  const precisionModes =
    doc.precisionModes
      ?.map((mode) => {
        const src = asImageUrl(mode.image, 1600) ?? mode.imageUrl ?? null;
        if (!mode.id || !mode.label || !mode.alt || !src) {
          return null;
        }
        return {id: mode.id, label: mode.label, alt: mode.alt, src};
      })
      .filter((item): item is {id: string; label: string; src: string; alt: string} => item !== null) ?? [];
  const precisionStats =
    doc.precisionStats?.filter(
      (stat): stat is {value: string; label: string} => Boolean(stat?.value && stat?.label),
    ) ?? [];

  invariant(doc.heroKicker, "homePage.heroKicker is required");
  invariant(doc.heroTitle, "homePage.heroTitle is required");
  invariant(doc.heroHighlight, "homePage.heroHighlight is required");
  invariant(doc.heroDescription, "homePage.heroDescription is required");
  invariant(doc.heroPrimaryCtaLabel, "homePage.heroPrimaryCtaLabel is required");
  invariant(doc.heroPrimaryCtaHref, "homePage.heroPrimaryCtaHref is required");
  invariant(doc.heroSecondaryCtaLabel, "homePage.heroSecondaryCtaLabel is required");
  invariant(doc.heroSecondaryCtaHref, "homePage.heroSecondaryCtaHref is required");
  invariant(doc.heroPillLeft, "homePage.heroPillLeft is required");
  invariant(doc.heroPillRight, "homePage.heroPillRight is required");
  invariant(doc.featuredTitle, "homePage.featuredTitle is required");
  invariant(doc.featuredDescription, "homePage.featuredDescription is required");
  invariant(doc.precisionTitle, "homePage.precisionTitle is required");
  invariant(doc.precisionDescription, "homePage.precisionDescription is required");
  invariant(precisionModes.length > 0, "homePage.precisionModes must include at least one mode");
  invariant(precisionStats.length > 0, "homePage.precisionStats must include at least one stat");
  invariant(doc.showreelKicker, "homePage.showreelKicker is required");
  invariant(doc.showreelTitle, "homePage.showreelTitle is required");
  invariant(doc.showreelBody, "homePage.showreelBody is required");
  invariant(doc.showreelCtaLabel, "homePage.showreelCtaLabel is required");
  invariant(doc.showreelCtaHref, "homePage.showreelCtaHref is required");
  invariant(doc.seoTitle, "homePage.seoTitle is required");
  invariant(doc.seoDescription, "homePage.seoDescription is required");

  return {
    heroKicker: doc.heroKicker,
    heroTitle: doc.heroTitle,
    heroHighlight: doc.heroHighlight,
    heroDescription: doc.heroDescription,
    heroPrimaryCtaLabel: doc.heroPrimaryCtaLabel,
    heroPrimaryCtaHref: doc.heroPrimaryCtaHref,
    heroSecondaryCtaLabel: doc.heroSecondaryCtaLabel,
    heroSecondaryCtaHref: doc.heroSecondaryCtaHref,
    heroPillLeft: doc.heroPillLeft,
    heroPillRight: doc.heroPillRight,
    featuredTitle: doc.featuredTitle,
    featuredDescription: doc.featuredDescription,
    precisionTitle: doc.precisionTitle,
    precisionDescription: doc.precisionDescription,
    precisionModes,
    precisionStats,
    showreelKicker: doc.showreelKicker,
    showreelTitle: doc.showreelTitle,
    showreelBody: doc.showreelBody,
    showreelCtaLabel: doc.showreelCtaLabel,
    showreelCtaHref: doc.showreelCtaHref,
    seoTitle: doc.seoTitle,
    seoDescription: doc.seoDescription,
  };
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  const doc = await sanityClient.fetch<RawContactPage | null>(contactPageQuery);
  invariant(doc, "Missing required Sanity document: contactPage");
  const portraitSrc = asImageUrl(doc.portraitImage, 1600) ?? doc.portraitImageUrl ?? null;
  const tags = (doc.tags ?? []).filter(Boolean);

  invariant(doc.kicker, "contactPage.kicker is required");
  invariant(doc.heading, "contactPage.heading is required");
  invariant(doc.description, "contactPage.description is required");
  invariant(portraitSrc, "contactPage portrait image is required");
  invariant(doc.portraitImageAlt, "contactPage.portraitImageAlt is required");
  invariant(doc.nameMark, "contactPage.nameMark is required");
  invariant(tags.length > 0, "contactPage.tags must include at least one tag");
  invariant(doc.cardTitle, "contactPage.cardTitle is required");
  invariant(doc.cardSubtitle, "contactPage.cardSubtitle is required");
  invariant(doc.formNameLabel, "contactPage.formNameLabel is required");
  invariant(doc.formEmailLabel, "contactPage.formEmailLabel is required");
  invariant(doc.formDetailsLabel, "contactPage.formDetailsLabel is required");
  invariant(doc.formSubmitLabel, "contactPage.formSubmitLabel is required");
  invariant(doc.formEmailTo, "contactPage.formEmailTo is required");
  invariant(doc.seoTitle, "contactPage.seoTitle is required");
  invariant(doc.seoDescription, "contactPage.seoDescription is required");

  return {
    kicker: doc.kicker,
    heading: doc.heading,
    description: doc.description,
    portraitSrc,
    portraitAlt: doc.portraitImageAlt,
    nameMark: doc.nameMark,
    tags,
    cardTitle: doc.cardTitle,
    cardSubtitle: doc.cardSubtitle,
    formNameLabel: doc.formNameLabel,
    formEmailLabel: doc.formEmailLabel,
    formDetailsLabel: doc.formDetailsLabel,
    formSubmitLabel: doc.formSubmitLabel,
    formEmailTo: doc.formEmailTo,
    seoTitle: doc.seoTitle,
    seoDescription: doc.seoDescription,
  };
}
