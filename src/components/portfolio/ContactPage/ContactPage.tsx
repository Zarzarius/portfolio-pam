"use client";

import Image from "next/image";
import { type FormEvent } from "react";
import styles from "./ContactPage.module.css";

const tags = ["UNREAL ENGINE 5", "ZBRUSH", "HOUDINI"] as const;

export function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const details = String(fd.get("details") ?? "").trim();
    const subject = encodeURIComponent(
      `Collaboration inquiry${name ? ` — ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      [`Name: ${name || "—"}`, `Email: ${email || "—"}`, "", "Project details:", details || "—"].join(
        "\n",
      ),
    );
    window.location.href = `mailto:pam@art.net?subject=${subject}&body=${body}`;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.visual}>
          <div className={styles.portraitFrame}>
            <Image
              className={styles.portrait}
              src="/contact-portrait.png"
              alt="Pam working at her desk with 3D modeling software and a drawing tablet"
              fill
              sizes="(max-width: 960px) 100vw, 48vw"
              priority
            />
          </div>
          <span className={styles.nameMark} aria-hidden>
            PAM
          </span>
        </div>

        <div className={styles.copy}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} aria-hidden />
            <p className={styles.kicker}>PAM: DIGITAL ARCHITECT</p>
          </div>
          <h1 className={styles.headline}>Sculpting the Ethereal.</h1>
          <p className={styles.body}>
            I craft immersive environments and characters at the intersection of
            art direction and real-time performance — from high-fidelity sculpts to
            production-ready assets for games and cinematic pipelines.
          </p>
          <ul className={styles.tags} aria-label="Tools and platforms">
            {tags.map((t) => (
              <li key={t} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>

          <div className={styles.card} id="collaborate">
            <h2 className={styles.cardTitle}>Start a Collaboration</h2>
            <p className={styles.cardSub}>
              Inquiries for freelance projects or studio partnerships.
            </p>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field}>
                <span className={styles.label}>NAME</span>
                <input
                  className={styles.input}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>EMAIL</span>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>PROJECT DETAILS</span>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="details"
                  rows={4}
                  required
                />
              </label>
              <button className={styles.submit} type="submit">
                TRANSMIT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
