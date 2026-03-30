import {
  Body,
  ButtonLink,
  Container,
  GradientText,
  Heading,
  Kicker,
  Section,
} from "@/components/ui";
import bind from "classnames/bind";

import { HeroSplashBackground } from "./HeroSplashBackground";
import styles from "./Hero.module.css";
const cx = bind.bind(styles);

type HeroProps = {
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function Hero({
  kicker,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <Section
      spacing="hero"
      className={cx("hero")}
      id="top"
      aria-labelledby="hero-title"
    >
      <HeroSplashBackground />
      <div className={cx("glow")} aria-hidden />
      <Container size="content" padding="none" className={cx("inner")}>
        <Kicker animate className={cx("heroKicker")}>
          {kicker}
        </Kicker>
        <Heading
          as="h1"
          size="display"
          align="center"
          animate
          id="hero-title"
        >
          {title} <GradientText>{highlight}</GradientText>
        </Heading>
        <Body
          tone="muted"
          align="center"
          maxWidth="md"
          center
          animate
          className={cx("heroDesc")}
        >
          {description}
        </Body>
        <div className={cx("actions")}>
          <ButtonLink href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="ghost">
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
