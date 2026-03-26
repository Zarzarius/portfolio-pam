"use client";

import Image from "next/image";
import { useState } from "react";
import bind from "classnames/bind";

import { Body, Container, Heading, Section, Stat } from "@/components/ui";

import styles from "./Precision.module.css";
const cx = bind.bind(styles);

type PrecisionMode = {
  id: string;
  label: string;
  src: string;
  alt: string;
};

type PrecisionStat = {
  value: string;
  label: string;
};

type PrecisionProps = {
  title: string;
  description: string;
  modes: PrecisionMode[];
  stats: PrecisionStat[];
};

export function Precision({ title, description, modes, stats }: PrecisionProps) {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>(modes[0]?.id ?? "default");
  const active = modes.find((m) => m.id === mode) ?? modes[0];
  if (!active) {
    return null;
  }

  return (
    <Section
      borderTop
      spacing="default"
      className={cx("section")}
      id="about"
      aria-labelledby="precision-heading"
    >
      <Container size="wide" padding="none">
        <div className={cx("grid")}>
          <div className={cx("visual")}>
            <Image
              key={active.id}
              className={cx("visualImage")}
              src={active.src}
              alt={active.alt}
              fill
              sizes="(max-width: 840px) 100vw, 50vw"
              priority
            />
          </div>
          <div className={cx("copy")}>
            <Heading as="h2" size="sectionLg" id="precision-heading">
              {title}
            </Heading>
            <Body tone="muted" maxWidth="md" size="default">
              {description}
            </Body>
            <div className={cx("stats")}>
              {stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className={cx("toggleRow")} role="group" aria-label="Viewport mode">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            className={cx("modeBtn", { modeBtnActive: mode === m.id })}
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
          >
            {m.label}
          </button>
        ))}
      </div>
    </Section>
  );
}
