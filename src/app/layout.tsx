import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import classNames from "classnames";
import { ViewTransitions } from "next-view-transitions";
import { AppShell } from "./AppShell";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "PAM. — 3D Artist & Virtual Worlds",
  description:
    "Pam — 3D artist specializing in character design and environment modeling. Immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(syne.variable, manrope.variable)}>
      <body>
        <ViewTransitions>
          <AppShell>{children}</AppShell>
        </ViewTransitions>
      </body>
    </html>
  );
}
