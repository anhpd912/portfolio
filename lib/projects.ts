export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  accent?: "yellow" | "blue" | "orange" | "red" | "green" | "raised";
};

export const projects: Project[] = [
  {
    id: "hangil",
    title: "Hangil — Korean Learning Platform",
    description:
      "First Korean learning platform for Vietnamese speakers, with TOPIK prep and AI journal grading. SM-2 spaced repetition, Groq LLM integration, dual-theme UI.",
    tech: ["Fastify", "TypeScript", "Next.js 14", "Neon PostgreSQL", "Redis", "Turborepo"],
    href: "https://hangil.io.vn",
    accent: "yellow",
  },
  {
    id: "satori-nihongo",
    title: "SatoriNihongo — Japanese Learning Platform",
    description:
      "Mobile-first learning platform with a RAG-powered chatbot and AI speaking evaluation. Auto-generated exercises via semantic search.",
    tech: ["Spring Boot", "React Native", "pgvector", "Next.js", "Google Cloud OCR"],
    accent: "blue",
  },
];

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/anhpd912" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anhpd9/" },
];

export const CONTACT_EMAIL = "pdanh.work@gmail.com";
export const CONTACT_PHONE = "0867806182";
