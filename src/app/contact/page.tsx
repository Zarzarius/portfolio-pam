import type { Metadata } from "next";

import { Stack } from "@/components/ui";
import { ContactPage } from "@/components/portfolio/ContactPage";
import { getContactPageContent } from "@/lib/sanity/content";

export async function generateMetadata(): Promise<Metadata> {
  const contactPage = await getContactPageContent();
  return {
    title: contactPage.seoTitle,
    description: contactPage.seoDescription,
  };
}

export default async function Contact() {
  const contactPage = await getContactPageContent();
  return (
    <Stack gap="none" align="stretch">
      <ContactPage
        kicker={contactPage.kicker}
        heading={contactPage.heading}
        description={contactPage.description}
        portraitSrc={contactPage.portraitSrc}
        portraitAlt={contactPage.portraitAlt}
        nameMark={contactPage.nameMark}
        tags={contactPage.tags}
        cardTitle={contactPage.cardTitle}
        cardSubtitle={contactPage.cardSubtitle}
        formNameLabel={contactPage.formNameLabel}
        formEmailLabel={contactPage.formEmailLabel}
        formDetailsLabel={contactPage.formDetailsLabel}
        formSubmitLabel={contactPage.formSubmitLabel}
        formEmailTo={contactPage.formEmailTo}
      />
    </Stack>
  );
}
