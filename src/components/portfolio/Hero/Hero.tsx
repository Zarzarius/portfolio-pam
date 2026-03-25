import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden />
      <div className={styles.inner}>
        <p className={styles.kicker}>PAM&apos;S DIGITAL PORTFOLIO</p>
        <h1 className={styles.title} id="hero-title">
          PAM CREATES <span className={styles.accent}>VIRTUAL</span>
        </h1>
        <p className={styles.desc}>
          I&apos;m Pam, a 3D Artist specializing in character design and
          environment modeling. I transform abstract concepts into immersive
          digital experiences.
        </p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="#gallery">
            Explore Gallery
          </a>
          <a className={styles.btnGhost} href="#showreel">
            View Showreel
          </a>
        </div>
      </div>
      <div className={styles.pills} aria-hidden>
        <span className={styles.pill}>
          <span className={styles.dot} />
          EARTH_ENGINE SYSTEM STATUS
        </span>
        <span className={styles.pill}>
          <svg
            className={styles.lockIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
          </svg>
          SYS SEC PARTIAL_TAP
        </span>
      </div>
    </section>
  );
}
