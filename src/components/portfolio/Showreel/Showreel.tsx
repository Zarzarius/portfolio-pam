import styles from "./Showreel.module.css";

export function Showreel() {
  return (
    <section className={styles.strip} id="showreel" aria-labelledby="showreel-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>SHOWREEL</p>
        <h2 className={styles.title} id="showreel-heading">
          Motion & breakdown
        </h2>
        <p className={styles.text}>
          A director&apos;s cut of recent cinematics, turntables, and look-dev
          passes. Replace this block with an embedded reel when your cut is
          ready.
        </p>
        <a
          className={styles.link}
          href="mailto:pam@art.net?subject=Showreel%20request"
        >
          REQUEST LINK
        </a>
      </div>
    </section>
  );
}
