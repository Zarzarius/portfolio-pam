"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [displayMode, setDisplayMode] = useState<(typeof modes)[number]["id"]>(modes[0]?.id ?? "default");
  const [incomingMode, setIncomingMode] = useState<(typeof modes)[number]["id"] | null>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = modes.find((m) => m.id === mode) ?? modes[0];
  const display = modes.find((m) => m.id === displayMode) ?? modes[0];
  const incoming = incomingMode ? modes.find((m) => m.id === incomingMode) : null;

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    },
    [],
  );

  if (!active) {
    return null;
  }

  const handleModeChange = (nextModeId: (typeof modes)[number]["id"]) => {
    if (nextModeId === mode) {
      return;
    }

    setMode(nextModeId);

    const nextMode = modes.find((m) => m.id === nextModeId);
    const currentDisplay = modes.find((m) => m.id === displayMode) ?? modes[0];

    if (!nextMode || !currentDisplay || nextMode.id === currentDisplay.id) {
      setDisplayMode(nextModeId);
      setIncomingMode(null);
      return;
    }

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
    }

    setIncomingMode(nextModeId);
    transitionTimerRef.current = setTimeout(() => {
      setDisplayMode(nextModeId);
      setIncomingMode(null);
      transitionTimerRef.current = null;
    }, 420);
  };

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
              className={cx("visualImage")}
              src={display.src}
              alt={display.alt}
              fill
              sizes="(max-width: 840px) 100vw, 50vw"
              priority
            />
            {incoming ? (
              <Image
                key={incoming.id}
                className={cx("visualImage", "visualImageIncoming")}
                src={incoming.src}
                alt={incoming.alt}
                fill
                sizes="(max-width: 840px) 100vw, 50vw"
                priority
              />
            ) : null}
          </div>
          <div className={cx("toggleRow")} role="group" aria-label="Viewport mode">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                className={cx("modeBtn", { modeBtnActive: mode === m.id })}
                onClick={() => handleModeChange(m.id)}
                aria-pressed={mode === m.id}
              >
                {m.label}
              </button>
            ))}
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
    </Section>
  );
}
