import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import classNames from "classnames";
import { ViewTransitions } from "next-view-transitions";
import { getSiteSettingsContent } from "@/lib/sanity/content";
import { AppShell } from "./AppShell";
import "./globals.css";

/** Fetch Sanity on every request so production matches Studio without redeploying. */
export const dynamic = "force-dynamic";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettingsContent();
  return {
    title: siteSettings.siteTitle,
    description: siteSettings.defaultDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettingsContent();

  return (
    <html lang="en" className={classNames(syne.variable, manrope.variable)}>
      <body>
        <ViewTransitions>
          <AppShell
            navItems={siteSettings.headerNav}
            hireMeLabel={siteSettings.hireMeLabel}
            footerEmail={siteSettings.footerEmail}
            footerCopyright={siteSettings.footerCopyright}
            footerStatusText={siteSettings.footerStatusText}
            socialLinks={siteSettings.socialLinks}
          >
            {children}
          </AppShell>
        </ViewTransitions>
      </body>
    </html>
  );
}
