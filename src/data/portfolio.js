export const profile = {
  name: "Chuck Wang",
  role: "UIUC CS + Statistics student",
  focus: "Backend Engineering, AI Agents, Data Analysis",
  email: "haokunw3@illinois.edu",
  github: "https://github.com/Chuck0816",
  linkedin: "https://www.linkedin.com/in/haokunw3",
  resume: "/Chuck-Wang-Resume.pdf",
  photo: "/chuck-wang.jpg",
  intro:
    "UIUC CS + Statistics student focused on backend engineering and agentic AI systems. I enjoy building reliable APIs, database-backed applications, and LLM workflows that turn messy requirements into usable tools. My background also includes data analysis, forecasting, simulation, and research projects, which helps me reason about systems from both an engineering and data perspective.",
};

export const navItems = [
  { label: "Education", href: "#education" },
  { label: "Internships", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const coursework = [
  "Data Structures",
  "Algorithms & Models of Computation",
  "Computer Systems",
  "Data Science Pipeline",
  "Statistics",
  "Relational Databases",
  "Machine Learning",
];

export const experiences = [
  {
    title: "SPIN Intern, Simulation Software Engineering Project",
    organization: "National Center for Supercomputing Applications (NCSA)",
    dates: "April 2026 - Present",
    stack: ["Python", "FastAPI", "Pydantic",  "YAML/JSON", "SQL", "React","Pytest",  "Genetics Simulation"],
    bullets: [
      "Designed a modular genetics simulation engine with configurable inheritance rules, mutation settings, genotype-to-phenotype mappings, and multi-generation breeding logic.",
      "Built a rule-driven architecture that separates simulation configuration from core engine logic, improving extensibility, maintainability, and testability.",
      "Developed data-processing pipelines to aggregate simulated offspring outcomes into population-level phenotype distributions, generation trends, and visualization-ready datasets.",
      "Implemented Python-based visualization workflows for analyzing inheritance patterns, mutation effects, and trait frequency changes across generations."
    ],
  },
  {
    title: "Software Engineer Intern, Property Search Website",
    organization: "IDX Exchange",
    dates: "October 2025 - December 2025",
    stack: ["PHP", "JavaScript", "MySQL", "Google Maps API", "Linux"],
    bullets: [
      "Built backend PHP API endpoints for property search, geolocation logic, advanced filtering, and dynamic map-based queries.",
      "Implemented Google Maps powered views with interactive markers, location-based filtering, and synchronized search results.",
      "Deployed a production property search application on a Linux-based hosting environment using cPanel, PHP, and MySQL.",
    ],
  },
  {
    title: "Data Director, NLP Research Project",
    organization: "Youphoria",
    dates: "March 2026 - Present",
    stack: ["Python", "CNN Text Classification", "Content Moderation", "NLP"],
    bullets: [
      "Researched CNN-based text classification for moderating user-generated posts on a wellness platform with fitness tracking and community forum features.",
      "Studied how CNN filters identify local phrase patterns related to profanity, harassment, hate speech, and sexually explicit content.",
      "Proposed a lightweight moderation pipeline combining bad-word screening with CNN-based classification to detect harmful posts while minimizing false positives.",
    ],
  },
  {
    title: "Course Assistant",
    organization: "Siebel School of Computing and Data Science, UIUC",
    dates: "February 2025 - May 2025",
    stack: ["Teaching", "Debugging", "Programming Fundamentals"],
    bullets: [
      "Delivered weekly programming tutorials and supported 50+ students with debugging, assignment strategies, and core programming concepts.",
    ],
  },
];

export const projects = [
  {
    name: "Flight Route Intelligence Platform",
    description:
      "A database-backed full-stack flight analytics platform for searching flight routes, comparing airline reliability, and analyzing delay and cancellation trends using real-world aviation datasets.",
    stack: ["React", "SQL", "Python", "Google Maps API"],
    features: [
      "Modeled normalized database entities for flights, airports, airlines, routes, and performance records",
      "Built SQL-driven backend features with CRUD operations, joins, aggregations, stored procedures, and analytical queries",
      "Integrated Google Maps API to visualize airport locations and flight route connections",
    ],
    github: "https://github.com/Chuck0816",
    demo: "https://your-demo-link.com",
  },
  {
    name: "Property Search Website",
    description:
      "A production property-search application with backend APIs, MySQL-backed filtering, geolocation logic, and interactive Google Maps views.",
    stack: ["PHP", "JavaScript", "MySQL", "Google Maps API", "Linux"],
    features: ["Advanced property filtering", "Interactive map markers", "Production deployment"],
    github: "https://github.com/Chuck0816",
    demo: "https://chuck.calisearch.org/",
  },
  {
    name: "Handwriting Recognition Platform",
    description:
      "A digit recognition platform with a Pygame drawing interface and a CNN trained on MNIST.",
    stack: ["Python", "Pygame", "TensorFlow", "CNN"],
    features: ["Real-time digit drawing", "Input normalization", "98.99% test accuracy"],
    github: "https://github.com/Chuck0816",
    demo: "https://your-demo-link.com",
  },
];

export const skillGroups = [
  {
    label: "Programming",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    label: "AI & Agentic Tools",
    skills: ["LangGraph", "LLM Workflows", "Prompt Engineering", "Cursor"],
  },
  {
    label: "Web & Backend",
    skills: ["REST APIs", "React", "PHP", "API Design", "Pagination", "Google Maps API"],
  },
  {
    label: "Databases & Systems",
    skills: [
      "MySQL",
      "Relational Databases",
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Git",
      "Linux",
    ],
  },
];
