import type { Metadata } from "next";

import { Stack } from "@/components/ui";
import { ContactPage } from "@/components/portfolio/ContactPage";

export const metadata: Metadata = {
  title: "Contact — PAM.",
  description:
    "Start a collaboration with Pam — digital architect, 3D artist. Freelance and studio inquiries.",
};

export default function Contact() {
  return (
    <Stack gap="none" align="stretch">
      <ContactPage />
    </Stack>
  );
}
