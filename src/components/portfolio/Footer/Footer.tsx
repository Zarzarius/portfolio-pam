import { ExternalLink, LogoMark, StatusDot } from "@/components/ui";
import bind from "classnames/bind";

import styles from "./Footer.module.css";
const cx = bind.bind(styles);

type SocialLink = {
  href: string;
  label: string;
};

type FooterProps = {
  variant?: "default" | "contact";
  social: SocialLink[];
  email: string;
  copyright: string;
  statusText: string;
};

export function Footer({
  variant = "default",
  social,
  email,
  copyright,
  statusText,
}: FooterProps) {
  if (variant === "contact") {
    return (
      <footer className={cx("footer", "footerContact")}>
        <div className={cx("contactGrid")}>
          <div className={cx("brandBlock")}>
            <LogoMark href="/" size="sm" />
            <p className={cx("copyInline")}>
              {copyright}
            </p>
          </div>
          <ul className={cx("socialRow")} aria-label="Social links">
            {social.map((s) => (
              <li key={s.href}>
                <ExternalLink
                  href={s.href}
                  tone="muted"
                  className={cx("socialLinkRow")}
                >
                  {s.label.toUpperCase()}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <div className={cx("status")}>
            <StatusDot />
            <span className={cx("statusText")}>{statusText}</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={cx("footer")} id="contact">
      <div className={cx("grid")}>
        <div>
          <LogoMark href="/#top" size="sm" />
        </div>
        <div>
          <p className={cx("colTitle")}>CONTACT</p>
          <a className={cx("email")} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div>
          <p className={cx("colTitle")}>SOCIAL</p>
          <ul className={cx("socialList")}>
            {social.map((s) => (
              <li key={s.href}>
                <ExternalLink
                  href={s.href}
                  tone="muted"
                  className={cx("socialLink")}
                >
                  {s.label.toUpperCase()}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <p className={cx("copy")}>
          {copyright}
        </p>
      </div>
    </footer>
  );
}
