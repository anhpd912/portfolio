export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role?: string;
  period?: string;
  highlights?: string[];
  href?: string;
  repo?: string;
  accent?: "yellow" | "blue" | "orange" | "red" | "green" | "raised";
  /** Single-letter monogram shown as the panel's watermark. */
  letter: string;
  /** Background gradient for the hover-expand project panel. */
  gradient: string;
  /** Short category label shown above the title in the panel. */
  category: string;
};

export const projects: Project[] = [
  {
    id: "satori-nihongo",
    title: "SatoriNihongo",
    category: "AI Japanese Learning Platform",
    letter: "S",
    gradient: "linear-gradient(135deg,#131a45,#3b1f66)",
    description:
      "JLPT N5–N1 learning platform on a 13-module Spring Boot architecture: agentic RAG curriculum ingestion, document-grounded AI tutor, and pronunciation assessment. Team of 5 — Back-end Developer.",
    role: "Back-end Developer · Team of 5",
    period: "01/2026 — 05/2026",
    highlights: [
      "Agentic RAG curriculum import: Google Document AI OCR with GPT-4o Vision fallback and Corrective/Self-RAG grounding",
      "Document-grounded AI tutor: hybrid retrieval (dense HNSW + sparse pg_trgm fused with RRF) plus HyDE",
      "Speaking assessment via Azure Speech / SpeechSuper and mission-based AI roleplay sessions",
      "Schema-per-module architecture with event-driven, decoupled cross-module communication",
    ],
    tech: ["Spring Boot 3", "Spring AI", "pgvector", "GPT-4o", "Redis"],
    repo: "https://github.com/ThuyetTVHE186110/satori-learning-support-application-backend",
    accent: "blue",
  },
  {
    id: "cognitive-lab",
    title: "Cognitive Lab",
    category: "AI Document Learning Platform",
    letter: "C",
    gradient: "linear-gradient(135deg,#0e2547,#0f4159)",
    description:
      "Solo full-stack RAG system: chunked uploads through MinIO → RabbitMQ → Tika → pgvector, per-document AI chat, and async quiz & roadmap generation streamed live over SSE.",
    role: "Solo Developer",
    period: "05/2026 — Now",
    highlights: [
      "Chunked upload pipeline: MinIO → RabbitMQ → Apache Tika → TokenTextSplitter → pgvector embedding",
      "Per-document RAG chat via QuestionAnswerAdvisor and pgvector cosine similarity",
      "Async quiz & roadmap generation on RabbitMQ with live SSE streaming to the client",
      "Stateless JWT auth with rotating refresh tokens and Redis-backed rate limiting",
    ],
    tech: ["Spring AI", "RabbitMQ", "MinIO", "Ollama", "JWT"],
    repo: "https://github.com/anhpd912/cognitive-lab-server",
    accent: "yellow",
  },
  {
    id: "portfolio",
    title: "Portfolio v1",
    category: "Neobrutalist Developer Site",
    letter: "P",
    gradient: "linear-gradient(135deg,#2c1d4f,#14294f)",
    description:
      "Next.js 16 single-page portfolio with a hand-built neobrutalist design-token system, viewport-aware lazy rendering, and static export to GitHub Pages.",
    role: "Solo Developer",
    highlights: [
      "Custom Tailwind v4 token system (color, spacing, motion, hard-shadow) driving a neobrutalist look",
      "Viewport-aware lazy rendering with content-visibility for performance",
      "Fully responsive with accessible high-contrast focus states",
    ],
    tech: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript"],
    href: "https://anhpd912.github.io/portfolio/",
    repo: "https://github.com/anhpd912/portfolio",
    accent: "green",
  },
];

export const CONTACT_EMAIL = "pdanh.work@gmail.com";
export const CONTACT_PHONE = "0867806182";

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/anhpd912" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anhpd9/" },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
  { label: "Phone", href: `tel:${CONTACT_PHONE}` },
];
