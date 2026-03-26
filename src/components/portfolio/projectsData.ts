export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectData = {
  id: string;
  area: "neon" | "ether" | "clock" | "obsid";
  cardTitle: string;
  cardSubtitle?: string;
  cardNote?: string;
  cardImage: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  detail: {
    kicker: string;
    title: string;
    subtitle: string;
    overview: string;
    role: string;
    pipeline: string[];
    timeline: string;
    metrics: ProjectMetric[];
    hero: {
      src: string;
      alt: string;
    };
    gallery: ProjectGalleryItem[];
  };
};

export const projectsData: ProjectData[] = [
  {
    id: "neon",
    area: "neon",
    cardTitle: "PROJECT: NEON VANGUARD",
    cardSubtitle: "CHARACTER DESIGN",
    cardImage: {
      src: "https://picsum.photos/id/1011/1400/900",
      alt: "Futuristic robotic character bust with neon lighting",
      priority: true,
    },
    detail: {
      kicker: "CHARACTER STUDY // 03",
      title: "The Neon Nomad",
      subtitle:
        "A high-fidelity character exploration focused on expressive anatomy and hard-surface cybernetics.",
      overview:
        "The Neon Nomad project is a portrait of a survivor in a post-cyberpunk world. The goal was to balance stylized identity with realistic micro-surface treatment so the character holds up in close-up cinematic shots and game-ready presentation.",
      role: "Art Direction, Character Sculpt, Lookdev",
      pipeline: ["ZBRUSH", "SUBSTANCE 3D", "MARVELOUS DESIGNER", "UNREAL ENGINE 5"],
      timeline: "14 Days",
      metrics: [
        { label: "POLYCOUNT", value: "4.4M (HI-RES)" },
        { label: "TEXTURE SETS", value: "4x 4K (UDIM)" },
        { label: "RIG READY", value: "YES" },
      ],
      hero: {
        src: "https://picsum.photos/id/1005/1600/1200",
        alt: "Cinematic close-up portrait with dramatic neon lighting",
      },
      gallery: [
        {
          src: "https://picsum.photos/id/1027/1200/1200",
          alt: "Detailed eye shader and skin micro-surface render",
          label: "Micro Detail",
        },
        {
          src: "https://picsum.photos/id/1003/1000/700",
          alt: "Holographic geometric exploration asset",
          label: "Material Study",
        },
        {
          src: "https://picsum.photos/id/1015/1000/700",
          alt: "Dark matte hard-surface prop render",
          label: "Surface Pass",
        },
        {
          src: "https://picsum.photos/id/1040/1400/900",
          alt: "Anatomical full-body render for pose exploration",
          label: "Full Pose Narrative",
        },
      ],
    },
  },
  {
    id: "ether",
    area: "ether",
    cardTitle: "ETHEREAL DWELLING",
    cardImage: {
      src: "https://picsum.photos/id/1039/1200/900",
      alt: "Modern architectural home at dusk",
    },
    detail: {
      kicker: "ENVIRONMENT DESIGN // 07",
      title: "Ethereal Dwelling",
      subtitle:
        "An atmospheric architectural scene blending brutalist forms with cinematic light behavior.",
      overview:
        "Ethereal Dwelling explores mood-first environment storytelling. The composition was built around directional contrast and layered fog volumes, guiding the viewer through a quiet but ominous spatial narrative.",
      role: "Environment Artist, Lighting, Composition",
      pipeline: ["BLENDER", "HOUDINI", "SUBSTANCE 3D", "UNREAL ENGINE 5"],
      timeline: "3 Weeks",
      metrics: [
        { label: "LEVEL SIZE", value: "1.8KM WALKABLE" },
        { label: "LIGHT SETUPS", value: "6 ITERATIONS" },
        { label: "FPS TARGET", value: "60 FPS" },
      ],
      hero: {
        src: "https://picsum.photos/id/1043/1600/1200",
        alt: "Monolithic architecture scene under dramatic sky",
      },
      gallery: [
        {
          src: "https://picsum.photos/id/1056/1000/700",
          alt: "Interior architecture with soft ambient lighting",
          label: "Interior Blockout",
        },
        {
          src: "https://picsum.photos/id/1063/1000/700",
          alt: "Architectural exterior with cinematic mood lighting",
          label: "Facade Study",
        },
        {
          src: "https://picsum.photos/id/1068/1000/700",
          alt: "Concrete and metal material reference",
          label: "Material Board",
        },
        {
          src: "https://picsum.photos/id/1076/1400/900",
          alt: "Wide environment composition showcasing depth",
          label: "Final Composition",
        },
      ],
    },
  },
  {
    id: "clock",
    area: "clock",
    cardTitle: "CLOCKWORK SOUL",
    cardSubtitle: "PROP DESIGN",
    cardImage: {
      src: "https://picsum.photos/id/1084/1200/900",
      alt: "Mechanical gears and precision metalwork",
    },
    detail: {
      kicker: "PROP DESIGN // 11",
      title: "Clockwork Soul",
      subtitle:
        "A hero prop collection focused on precision mechanics and narrative wear across materials.",
      overview:
        "Clockwork Soul is a prop-centered exploration of functional storytelling. Every scratch, cavity, and edge break is placed to imply repeated usage by a traveling technician in a diesel-tech world.",
      role: "Prop Artist, Material Authoring, Render",
      pipeline: ["MAYA", "ZBRUSH", "SUBSTANCE 3D", "MARMOSET"],
      timeline: "10 Days",
      metrics: [
        { label: "ASSET COUNT", value: "12 HERO PROPS" },
        { label: "TEXTURE DENSITY", value: "10.24 PX/CM" },
        { label: "LOD TIERS", value: "3 LEVELS" },
      ],
      hero: {
        src: "https://picsum.photos/id/1080/1600/1200",
        alt: "Detailed mechanical object render with worn metal surfaces",
      },
      gallery: [
        {
          src: "https://picsum.photos/id/1081/1000/700",
          alt: "Macro render of mechanical component",
          label: "Macro Pass",
        },
        {
          src: "https://picsum.photos/id/1082/1000/700",
          alt: "Industrial prop lineup on dark background",
          label: "Prop Family",
        },
        {
          src: "https://picsum.photos/id/1083/1000/700",
          alt: "Textured brushed metal and roughness study",
          label: "Roughness Study",
        },
        {
          src: "https://picsum.photos/id/1085/1400/900",
          alt: "Exploded view style composition of parts",
          label: "Assembly Narrative",
        },
      ],
    },
  },
  {
    id: "obsid",
    area: "obsid",
    cardTitle: "OBSIDIAN SANCTUM",
    cardNote: "Environment exploration for an unannounced cinematic project.",
    cardImage: {
      src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80",
      alt: "Moody forest with atmospheric fog",
    },
    detail: {
      kicker: "WORLD BUILDING // 02",
      title: "Obsidian Sanctum",
      subtitle:
        "A world-building prototype where volcanic stone architecture meets bioluminescent flora.",
      overview:
        "Obsidian Sanctum focuses on environmental contrast: heavy, fractured monoliths versus delicate luminous growth. The scene was structured to support both still renders and traversable in-engine flythrough shots.",
      role: "World Building, Set Dressing, Lighting",
      pipeline: ["WORLD MACHINE", "HOUDINI", "UNREAL ENGINE 5", "NIAGARA"],
      timeline: "4 Weeks",
      metrics: [
        { label: "TERRAIN TILES", value: "48 STREAMED" },
        { label: "VFX SYSTEMS", value: "9 NIAGARA SETUPS" },
        { label: "LIGHT PROBES", value: "128 CAPTURES" },
      ],
      hero: {
        src: "https://images.unsplash.com/photo-1473447198193-3d27986e6288?auto=format&fit=crop&w=1600&q=80",
        alt: "Mysterious environment scene with dark stone and fog",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
          alt: "Mountainous silhouette used for world shape reference",
          label: "Terrain Blueprint",
        },
        {
          src: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?auto=format&fit=crop&w=1000&q=80",
          alt: "Dense forest atmosphere and mist layering study",
          label: "Fog Layering",
        },
        {
          src: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=1000&q=80",
          alt: "Cave-like volumetric lighting reference",
          label: "Light Volumes",
        },
        {
          src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
          alt: "Final environment concept with layered depth",
          label: "Final World Frame",
        },
      ],
    },
  },
];

export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}

export function getNextProject(id: string) {
  const currentIndex = projectsData.findIndex((project) => project.id === id);
  if (currentIndex === -1) {
    return projectsData[0];
  }

  return projectsData[(currentIndex + 1) % projectsData.length];
}
