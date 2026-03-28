import {
  Body,
  ButtonLink,
  Container,
  GradientText,
  Heading,
  Kicker,
  Pill,
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
  leftPillText: string;
  rightPillText: string;
};

export function Hero({
  kicker,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  leftPillText,
  rightPillText,
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
      <div className={cx("pills")} aria-hidden>
        <Pill>
          <span className={cx("dot")} />
          {leftPillText}
        </Pill>
        <Pill>
          <svg
            className={cx("lockIcon")}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
          </svg>
          {rightPillText}
        </Pill>
      </div>
    </Section>
  );
}
