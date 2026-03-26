import {
  Body,
  ButtonLink,
  Container,
  Heading,
  Kicker,
  Section,
} from "@/components/ui";
import bind from "classnames/bind";

import styles from "./Showreel.module.css";
const cx = bind.bind(styles);

export function Showreel() {
  return (
    <Section
      spacing="compact"
      className={cx("strip")}
      id="showreel"
      aria-labelledby="showreel-heading"
    >
      <Container size="narrow" padding="none">
        <Kicker className={cx("kicker")}>SHOWREEL</Kicker>
        <Heading as="h2" size="sectionSm" align="center" id="showreel-heading">
          Motion & breakdown
        </Heading>
        <Body tone="muted" align="center" className={cx("text")}>
          A director&apos;s cut of recent cinematics, turntables, and look-dev
          passes. Replace this block with an embedded reel when your cut is
          ready.
        </Body>
        <ButtonLink
          href="mailto:pam@art.net?subject=Showreel%20request"
          variant="outline"
          className={cx("link")}
        >
          REQUEST LINK
        </ButtonLink>
      </Container>
    </Section>
  );
}
