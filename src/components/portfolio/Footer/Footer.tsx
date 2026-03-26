import { ExternalLink, LogoMark, StatusDot } from "@/components/ui";
import bind from "classnames/bind";

import styles from "./Footer.module.css";
const cx = bind.bind(styles);

const social = [
  { href: "https://www.artstation.com", label: "ArtStation" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
] as const;

type FooterProps = {
  variant?: "default" | "contact";
};

export function Footer({ variant = "default" }: FooterProps) {
  if (variant === "contact") {
    return (
      <footer className={cx("footer", "footerContact")}>
        <div className={cx("contactGrid")}>
          <div className={cx("brandBlock")}>
            <LogoMark href="/" size="sm" />
            <p className={cx("copyInline")}>
              © 2024 THE IMMERSIVE GALLERY. ALL RIGHTS RESERVED.
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
            <span className={cx("statusText")}>STATUS: ONLINE</span>
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
          <a className={cx("email")} href="mailto:pam@art.net">
            pam@art.net
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
          © 2024 THE IMMERSIVE GALLERY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
