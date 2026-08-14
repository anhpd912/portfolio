export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  meta: string;
  detail: string;
  highlight?: string;
  current?: boolean;
};

export const TIMELINE: TimelineEntry[] = [
  {
    period: "2025 - Present",
    role: "Fresher Java Backend Developer",
    org: "FPT Software",
    meta: "Ha Noi",
    detail:
      "Building and maintaining Spring Boot services on client projects, from REST API design through code review to release.",
    current: true,
  },
  {
    period: "2022 - 2026",
    role: "B.E. Software Engineering",
    org: "FPT University Ha Noi",
    meta: "Korean SE specialization",
    detail:
      "Distributed systems, databases, and software architecture, taught alongside Korean language and business culture.",
    highlight: "GPA 3.5",
  },
  {
    period: "2019 - 2022",
    role: "High School Diploma",
    org: "THPT Nam Duyên Hà",
    meta: "Thái Bình",
    detail:
      "Natural sciences track. Competed on the school physics team through the provincial olympiad cycle.",
    highlight: "Third Prize, Thái Bình Provincial Physics Olympiad (2022)",
  },
];
