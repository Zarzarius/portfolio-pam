"use client";

import Image from "next/image";
import { useState } from "react";
import bind from "classnames/bind";

import { Body, Container, Heading, Section, Stat } from "@/components/ui";

import styles from "./Precision.module.css";
const cx = bind.bind(styles);

const modes = [
  {
    id: "wireframe" as const,
    label: "WIREFRAME",
    src: "/wireframe.png",
    alt: "Wireframe view of a sci-fi environment interior",
  },
  {
    id: "lighting" as const,
    label: "LIGHTING",
    src: "/lighting.png",
    alt: "Lighting pass of the sci-fi environment in engine",
  },
  {
    id: "final" as const,
    label: "FINAL",
    src: "/final.png",
    alt: "Final rendered sci-fi environment scene",
  },
];

const stats = [
  { value: "200+", label: "CUSTOM ASSETS" },
  { value: "12K", label: "MAX POLYCOUNT" },
  { value: "8K", label: "TEXTURE RESOLUTION" },
  { value: "0.1ms", label: "RENDER LATENCY" },
] as const;

export function Precision() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("wireframe");
  const active = modes.find((m) => m.id === mode) ?? modes[0];

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
              PAM&apos;S PRECISION
            </Heading>
            <Body tone="muted" maxWidth="md" size="default">
              My work is built on a foundation of technical excellence. I bridge
              the gap between creative vision and real-time performance — clean
              topology, production-ready UVs, and materials that hold up under
              scrutiny in engine and on the big screen.
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
