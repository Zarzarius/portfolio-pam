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

type ShowreelProps = {
  kicker: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function Showreel({ kicker, title, body, ctaLabel, ctaHref }: ShowreelProps) {
  return (
    <Section
      spacing="compact"
      className={cx("strip")}
      id="showreel"
      aria-labelledby="showreel-heading"
    >
      <Container size="narrow" padding="none">
        <Kicker className={cx("kicker")}>{kicker}</Kicker>
        <Heading as="h2" size="sectionSm" align="center" id="showreel-heading">
          {title}
        </Heading>
        <Body tone="muted" align="center" className={cx("text")}>
          {body}
        </Body>
        <ButtonLink
          href={ctaHref}
          variant="outline"
          className={cx("link")}
        >
          {ctaLabel}
        </ButtonLink>
      </Container>
    </Section>
  );
}
