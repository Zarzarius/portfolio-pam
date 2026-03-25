"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Precision.module.css";

const modes = [
  {
    id: "wireframe" as const,
    label: "WIREFRAME",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract wireframe and digital grid visualization",
  },
  {
    id: "lighting" as const,
    label: "LIGHTING",
    src: "https://images.unsplash.com/photo-1618005188914-5d72679e9e8c?auto=format&fit=crop&w=1200&q=80",
    alt: "3D sculpt with dramatic lighting study",
  },
  {
    id: "final" as const,
    label: "FINAL",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    alt: "Finished 3D character render",
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
    <section className={styles.section} id="about" aria-labelledby="precision-heading">
      <div className={styles.grid}>
        <div className={styles.visual}>
          <Image
            key={active.id}
            className={styles.visualImage}
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 840px) 100vw, 50vw"
            priority
          />
        </div>
        <div className={styles.copy}>
          <h2 className={styles.heading} id="precision-heading">
            PAM&apos;S PRECISION
          </h2>
          <p className={styles.body}>
            My work is built on a foundation of technical excellence. I bridge
            the gap between creative vision and real-time performance — clean
            topology, production-ready UVs, and materials that hold up under
            scrutiny in engine and on the big screen.
          </p>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.toggleRow} role="group" aria-label="Viewport mode">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            className={
              mode === m.id
                ? `${styles.modeBtn} ${styles.modeBtnActive}`
                : styles.modeBtn
            }
            onClick={() => setMode(m.id)}
            aria-pressed={mode === m.id}
          >
            {m.label}
          </button>
        ))}
      </div>
    </section>
  );
}
