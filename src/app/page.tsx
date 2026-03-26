import { Stack } from "@/components/ui";
import {
  FeaturedWork,
  Hero,
  Precision,
  Showreel,
} from "@/components/portfolio";

export default function Home() {
  return (
    <Stack gap="none" align="stretch">
      <Hero />
      <FeaturedWork />
      <Precision />
      <Showreel />
    </Stack>
  );
}
