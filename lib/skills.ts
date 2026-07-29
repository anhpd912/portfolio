import type { IconKey } from "@/components/ui/icons";

export type { IconKey };

export const TECH_STACK: { name: string; icon: IconKey }[] = [
  { name: "Java", icon: "code" },
  { name: "Spring Boot", icon: "layers" },
  { name: "PostgreSQL", icon: "db" },
  { name: "Redis", icon: "zap" },
  { name: "Docker", icon: "box" },
  { name: "RabbitMQ", icon: "server" },
  { name: "pgvector", icon: "brain" },
  { name: "Next.js", icon: "globe" },
];

export const SERVICES: { num: number; title: string; desc: string; icon: IconKey }[] = [
  {
    num: 1,
    title: "Backend Development",
    desc: "Spring Boot 3 APIs with Spring Security, JWT auth with rotating refresh tokens, Spring Data JPA and event-driven modular architectures.",
    icon: "server",
  },
  {
    num: 2,
    title: "AI & RAG Systems",
    desc: "Agentic RAG pipelines with Spring AI — hybrid retrieval (pgvector + pg_trgm, RRF), grounding verification, and SSE-streamed AI chat.",
    icon: "brain",
  },
  {
    num: 3,
    title: "Data & Infrastructure",
    desc: "PostgreSQL, Redis, MongoDB and RabbitMQ. Schema-per-module design, async pipelines, rate limiting, Docker and MinIO object storage.",
    icon: "db",
  },
  {
    num: 4,
    title: "Frontend Development",
    desc: "React and Next.js with TypeScript and Tailwind — responsive, accessible interfaces with design-token systems and static deployment.",
    icon: "code",
  },
];
