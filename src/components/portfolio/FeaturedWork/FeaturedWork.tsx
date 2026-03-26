import { Container, Section, SectionHeader } from "@/components/ui";
import bind from "classnames/bind";

import { ProjectCard } from "./ProjectCard";
import styles from "./FeaturedWork.module.css";
const cx = bind.bind(styles);

const projects = [
  {
    id: "neon",
    areaClass: styles.neon,
    title: "PROJECT: NEON VANGUARD",
    sub: "CHARACTER DESIGN",
    note: undefined as string | undefined,
    src: "https://images.unsplash.com/photo-1535378917042-52a7b0e318b2?auto=format&fit=crop&w=1400&q=80",
    alt: "Futuristic robotic character bust with neon lighting",
    priority: true,
  },
  {
    id: "ether",
    areaClass: styles.ether,
    title: "ETHEREAL DWELLING",
    sub: undefined,
    note: undefined,
    src: "https://images.unsplash.com/photo-1600585154340-fe616c6c5c0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern architectural home at dusk",
  },
  {
    id: "clock",
    areaClass: styles.clock,
    title: "CLOCKWORK SOUL",
    sub: "PROP DESIGN",
    note: undefined,
    src: "https://images.unsplash.com/photo-1559757172-2d9e3f0d027c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mechanical gears and precision metalwork",
  },
  {
    id: "obsid",
    areaClass: styles.obsid,
    title: "OBSIDIAN SANCTUM",
    sub: undefined,
    note: "Environment exploration for an unannounced cinematic project.",
    src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80",
    alt: "Moody forest with atmospheric fog",
  },
] as const;

export function FeaturedWork() {
  return (
    <Section id="gallery" aria-labelledby="featured-heading">
      <Container size="wide" padding="none">
        <SectionHeader
          title="FEATURED WORK"
          titleId="featured-heading"
          description="A selection of recent projects focusing on hyper-realistic character anatomy and complex sci-fi environments."
          align="split"
        />
        <div className={cx("grid")}>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
