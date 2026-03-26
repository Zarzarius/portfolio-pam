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

import styles from "./Hero.module.css";
const cx = bind.bind(styles);

export function Hero() {
  return (
    <Section
      spacing="hero"
      className={cx("hero")}
      id="top"
      aria-labelledby="hero-title"
    >
      <div className={cx("glow")} aria-hidden />
      <Container size="content" padding="none" className={cx("inner")}>
        <Kicker animate className={cx("heroKicker")}>
          PAM&apos;S DIGITAL PORTFOLIO
        </Kicker>
        <Heading
          as="h1"
          size="display"
          align="center"
          animate
          id="hero-title"
        >
          PAM CREATES <GradientText>VIRTUAL</GradientText>
        </Heading>
        <Body
          tone="muted"
          align="center"
          maxWidth="md"
          center
          animate
          className={cx("heroDesc")}
        >
          I&apos;m Pam, a 3D Artist specializing in character design and
          environment modeling. I transform abstract concepts into immersive
          digital experiences.
        </Body>
        <div className={cx("actions")}>
          <ButtonLink href="#gallery" variant="primary">
            Explore Gallery
          </ButtonLink>
          <ButtonLink href="#showreel" variant="ghost">
            View Showreel
          </ButtonLink>
        </div>
      </Container>
      <div className={cx("pills")} aria-hidden>
        <Pill>
          <span className={cx("dot")} />
          EARTH_ENGINE SYSTEM STATUS
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
          SYS SEC PARTIAL_TAP
        </Pill>
      </div>
    </Section>
  );
}
