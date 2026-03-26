"use client";

import Image from "next/image";
import { type SubmitEventHandler } from "react";
import bind from "classnames/bind";

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
const cx = bind.bind(styles);

type ContactPageProps = {
  kicker: string;
  heading: string;
  description: string;
  portraitSrc: string;
  portraitAlt: string;
  nameMark: string;
  tags: string[];
  cardTitle: string;
  cardSubtitle: string;
  formNameLabel: string;
  formEmailLabel: string;
  formDetailsLabel: string;
  formSubmitLabel: string;
  formEmailTo: string;
};

export function ContactPage({
  kicker,
  heading,
  description,
  portraitSrc,
  portraitAlt,
  nameMark,
  tags,
  cardTitle,
  cardSubtitle,
  formNameLabel,
  formEmailLabel,
  formDetailsLabel,
  formSubmitLabel,
  formEmailTo,
}: ContactPageProps) {
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
    window.location.href = `mailto:${formEmailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={cx("wrap")}>
      <Container size="wide" padding="none" className={cx("grid")}>
        <div className={cx("visual")}>
          <div className={cx("portraitFrame")}>
            <Image
              className={cx("portrait")}
              src={portraitSrc}
              alt={portraitAlt}
              fill
              sizes="(max-width: 960px) 100vw, 48vw"
              priority
            />
          </div>
          <span className={cx("nameMark")} aria-hidden>
            {nameMark}
          </span>
        </div>

        <Stack gap="xl" className={cx("copy")}>
          <Kicker withRule>{kicker}</Kicker>
          <Heading as="h1" size="page">
            {heading}
          </Heading>
          <Body tone="bright" size="default" maxWidth="md">
            {description}
          </Body>
          <ul className={cx("tags")} aria-label="Tools and platforms">
            {tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <Card id="collaborate" className={cx("collabCard")} elevation="flat">
            <Heading as="h2" size="card">
              {cardTitle}
            </Heading>
            <Body size="smaller" tone="muted" className={cx("cardSub")}>
              {cardSubtitle}
            </Body>
            <form className={cx("form")} onSubmit={handleSubmit} noValidate>
              <Stack gap="lg">
                <Field label={formNameLabel} htmlFor="contact-name">
                  <TextInput
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </Field>
                <Field label={formEmailLabel} htmlFor="contact-email">
                  <TextInput
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </Field>
                <Field label={formDetailsLabel} htmlFor="contact-details">
                  <TextArea
                    id="contact-details"
                    name="details"
                    rows={4}
                    required
                  />
                </Field>
                <Button variant="submit" type="submit" fullWidth>
                  {formSubmitLabel}
                </Button>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
