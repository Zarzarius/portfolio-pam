import Image from "next/image";
import styles from "./FeaturedWork.module.css";

const projects = [
  {
    id: "neon",
    area: styles.neon,
    title: "PROJECT: NEON VANGUARD",
    sub: "CHARACTER DESIGN",
    note: undefined as string | undefined,
    src: "https://images.unsplash.com/photo-1535378917042-52a7b0e318b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Futuristic robotic character bust with neon lighting",
  },
  {
    id: "ether",
    area: styles.ether,
    title: "ETHEREAL DWELLING",
    sub: undefined,
    note: undefined,
    src: "https://images.unsplash.com/photo-1600585154340-fe616c6c5c0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern architectural home at dusk",
  },
  {
    id: "clock",
    area: styles.clock,
    title: "CLOCKWORK SOUL",
    sub: "PROP DESIGN",
    note: undefined,
    src: "https://images.unsplash.com/photo-1559757172-2d9e3f0d027c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mechanical gears and precision metalwork",
  },
  {
    id: "obsid",
    area: styles.obsid,
    title: "OBSIDIAN SANCTUM",
    sub: undefined,
    note: "Environment exploration for an unannounced cinematic project.",
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80",
    alt: "Moody forest with atmospheric fog",
  },
] as const;

export function FeaturedWork() {
  return (
    <section className={styles.section} id="gallery" aria-labelledby="featured-heading">
      <div className={styles.head}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title} id="featured-heading">
            FEATURED WORK
          </h2>
          <span className={styles.underline} aria-hidden />
        </div>
        <p className={styles.blurb}>
          A selection of recent projects focusing on hyper-realistic character
          anatomy and complex sci-fi environments.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article
            key={p.id}
            className={`${styles.card} ${p.area}`}
          >
            <Image
              className={styles.img}
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 900px) 100vw, 66vw"
              priority={p.id === "neon"}
            />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              {p.sub ? (
                <p className={styles.cardSub}>{p.sub}</p>
              ) : null}
              {p.note ? (
                <p className={styles.cardNote}>{p.note}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
