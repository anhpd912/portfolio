export const TOOLKIT_SKILLS: string[] = [
  "Java",
  "Spring Boot",
  "Spring AI",
  "Spring Security",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "RabbitMQ",
  "Docker",
  "JWT / OAuth",
  "React.js",
  "Next.js",
  "Python",
  "MongoDB",
  "Git",
];

export const PROCESS_STEPS: { title: string; desc: string }[] = [
  {
    title: "Requirements",
    desc: "Clarify the domain, user stories, and non-functional needs: throughput, latency, security. Define what \"done\" means before writing a line of code.",
  },
  {
    title: "Architecture",
    desc: "Choose module boundaries and data flow: schema-per-module PostgreSQL, event-driven cross-module communication, query ports. Decide sync vs async (RabbitMQ, application events) up front.",
  },
  {
    title: "API Design",
    desc: "Contract-first REST endpoints with consistent error envelopes, pagination, and versioning. Secure by default: stateless JWT with rotating refresh tokens and rate limiting.",
  },
  {
    title: "Implementation",
    desc: "Spring Boot with clean layering: controllers thin, services testable, repositories via Spring Data JPA. AI features wired through Spring AI advisor chains with grounding checks.",
  },
  {
    title: "Testing",
    desc: "JUnit and Postman collections covering happy paths, auth edge cases, and failure modes. Verify RAG grounding and rate-limit behavior under load.",
  },
  {
    title: "Deployment",
    desc: "Dockerized services with health checks, environment-driven config, and CI via Git. Observability and graceful shutdown from day one.",
  },
];
