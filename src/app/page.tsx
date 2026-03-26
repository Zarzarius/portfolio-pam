import type { Metadata } from "next";
import { Stack } from "@/components/ui";
import {
  FeaturedWork,
  Hero,
  Precision,
  Showreel,
} from "@/components/portfolio";
import { getHomePageContent } from "@/lib/sanity/content";
import { getSanityProjects } from "@/lib/sanity/projects";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getHomePageContent();
  return {
    title: homePage.seoTitle,
    description: homePage.seoDescription,
  };
}

export default async function Home() {
  const homePage = await getHomePageContent();
  const projects = await getSanityProjects();
  if (projects.length === 0) {
    notFound();
  }

  return (
    <Stack gap="none" align="stretch">
      <Hero
        kicker={homePage.heroKicker}
        title={homePage.heroTitle}
        highlight={homePage.heroHighlight}
        description={homePage.heroDescription}
        primaryCta={{ label: homePage.heroPrimaryCtaLabel, href: homePage.heroPrimaryCtaHref }}
        secondaryCta={{ label: homePage.heroSecondaryCtaLabel, href: homePage.heroSecondaryCtaHref }}
        leftPillText={homePage.heroPillLeft}
        rightPillText={homePage.heroPillRight}
      />
      <FeaturedWork
        title={homePage.featuredTitle}
        description={homePage.featuredDescription}
        projects={projects}
      />
      <Precision
        title={homePage.precisionTitle}
        description={homePage.precisionDescription}
        modes={homePage.precisionModes}
        stats={homePage.precisionStats}
      />
      <Showreel
        kicker={homePage.showreelKicker}
        title={homePage.showreelTitle}
        body={homePage.showreelBody}
        ctaLabel={homePage.showreelCtaLabel}
        ctaHref={homePage.showreelCtaHref}
      />
    </Stack>
  );
}
