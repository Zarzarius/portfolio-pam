import Link from "next/link";
import styles from "./Footer.module.css";

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
      <footer className={`${styles.footer} ${styles.footerContact}`}>
        <div className={styles.contactGrid}>
          <div className={styles.brandBlock}>
            <Link className={styles.logo} href="/">
              PAM.
            </Link>
            <p className={styles.copyInline}>
              © 2024 THE IMMERSIVE GALLERY. ALL RIGHTS RESERVED.
            </p>
          </div>
          <ul className={styles.socialRow} aria-label="Social links">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  className={styles.socialLinkRow}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden />
            <span className={styles.statusText}>STATUS: ONLINE</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div>
          <a className={styles.logo} href="#top">
            PAM.
          </a>
        </div>
        <div>
          <p className={styles.colTitle}>CONTACT</p>
          <a className={styles.email} href="mailto:pam@art.net">
            pam@art.net
          </a>
        </div>
        <div>
          <p className={styles.colTitle}>SOCIAL</p>
          <ul className={styles.socialList}>
            {social.map((s) => (
              <li key={s.href}>
                <a
                  className={styles.socialLink}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.copy}>
          © 2024 THE IMMERSIVE GALLERY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
