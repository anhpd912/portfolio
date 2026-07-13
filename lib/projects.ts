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
};

export const projects: Project[] = [
  {
    id: "cognitive-lab",
    title: "Cognitive Lab — AI Document Learning Platform",
    description:
      "Full-stack RAG platform: upload documents and learn them through AI chat, generated learning roadmaps, and progressive quizzes — with real-time progress streamed over SSE.",
    role: "Solo Developer",
    period: "05/2026 — Now",
    highlights: [
      "Chunked upload pipeline: MinIO → RabbitMQ → Apache Tika → TokenTextSplitter → pgvector embedding",
      "Per-document RAG chat via QuestionAnswerAdvisor and pgvector cosine similarity",
      "Async quiz & roadmap generation on RabbitMQ with live SSE streaming to the client",
      "Stateless JWT auth with rotating refresh tokens and Redis-backed rate limiting",
    ],
    tech: ["Java", "Spring Boot", "Spring AI", "PostgreSQL + pgvector", "RabbitMQ", "Redis", "MinIO", "Ollama", "Docker"],
    repo: "https://github.com/anhpd912/cognitive-lab-server",
    accent: "yellow",
  },
  {
    id: "satori-nihongo",
    title: "SatoriNihongo — Japanese Learning Platform",
    description:
      "AI-powered JLPT (N5–N1) learning platform on a 13-module Spring Boot architecture: agentic RAG curriculum ingestion, a document-grounded AI tutor, and automated pronunciation and roleplay assessment.",
    role: "Back-end Developer · Team of 5",
    period: "01/2026 — 05/2026",
    highlights: [
      "Agentic RAG curriculum import: Google Document AI OCR with GPT-4o Vision fallback and Corrective/Self-RAG grounding",
      "Document-grounded AI tutor: hybrid retrieval (dense HNSW + sparse pg_trgm fused with RRF) plus HyDE",
      "Speaking assessment via Azure Speech / SpeechSuper and mission-based AI roleplay sessions",
      "Schema-per-module architecture with event-driven, decoupled cross-module communication",
    ],
    tech: ["Java", "Spring Boot", "Spring AI", "pgvector", "Redis", "OpenAI GPT-4o", "Azure Speech", "Docker"],
    repo: "https://github.com/ThuyetTVHE186110/satori-learning-support-application-backend",
    accent: "blue",
  },
  {
    id: "portfolio",
    title: "Portfolio — This Site",
    description:
      "Personal developer portfolio: a single-page neobrutalist site on Next.js 16 App Router with a custom CSS design-token system, Space Grotesk type, and viewport-aware lazy rendering for fast first paint.",
    role: "Solo Developer",
    highlights: [
      "Custom Tailwind v4 token system (color, spacing, motion, hard-shadow) driving a neobrutalist look",
      "Viewport-aware lazy rendering with content-visibility for performance",
      "Fully responsive with accessible high-contrast focus states",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    href: "https://anhpd912.github.io/portfolio/",
    repo: "https://github.com/anhpd912/portfolio",
    accent: "green",
  },
];

export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/anhpd912" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anhpd9/" },
];

export const CONTACT_EMAIL = "pdanh.work@gmail.com";
export const CONTACT_PHONE = "0867806182";
