"use client";

import Image from "next/image";
import { type SubmitEventHandler } from "react";

import {
  Body,
  Button,
  Card,
  Container,
  Field,
  Heading,
  Kicker,
  Stack,
  Tag,
  TextArea,
  TextInput,
} from "@/components/ui";

import styles from "./ContactPage.module.css";

const tags = ["UNREAL ENGINE 5", "ZBRUSH", "HOUDINI"] as const;

export function ContactPage() {
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
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
  };

  return (
    <div className={styles.wrap}>
      <Container size="wide" padding="none" className={styles.grid}>
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

        <Stack gap="xl" className={styles.copy}>
          <Kicker withRule>PAM: DIGITAL ARCHITECT</Kicker>
          <Heading as="h1" size="page">
            Sculpting the Ethereal.
          </Heading>
          <Body tone="bright" size="default" maxWidth="md">
            I craft immersive environments and characters at the intersection of
            art direction and real-time performance — from high-fidelity sculpts to
            production-ready assets for games and cinematic pipelines.
          </Body>
          <ul className={styles.tags} aria-label="Tools and platforms">
            {tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <Card id="collaborate" className={styles.collabCard} elevation="flat">
            <Heading as="h2" size="card">
              Start a Collaboration
            </Heading>
            <Body size="smaller" tone="muted" className={styles.cardSub}>
              Inquiries for freelance projects or studio partnerships.
            </Body>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <Stack gap="lg">
                <Field label="NAME" htmlFor="contact-name">
                  <TextInput
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label="EMAIL" htmlFor="contact-email">
                  <TextInput
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field label="PROJECT DETAILS" htmlFor="contact-details">
                  <TextArea
                    id="contact-details"
                    name="details"
                    rows={4}
                    required
                  />
                </Field>
                <Button variant="submit" type="submit" fullWidth>
                  TRANSMIT MESSAGE
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
