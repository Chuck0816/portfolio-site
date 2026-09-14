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
    stack: ["Python", "FastAPI", "Pydantic",  "YAML/JSON", "SQL", "React","Pytest",  "Genetics Simulation", "LangGraph", "RAG"],
    bullets: [
      "Built a configuration-driven simulation engine that loads YAML file into typed domain models, validates them before execution, and runs multi-generation workflows that track surviving populations and mutation, lethal, and transition events without changing core engine code.",
      "Built and deployed a FastAPI backend on AWS EC2 that stores rule sets, simulation runs, and generation-level metrics in PostgreSQL; implemented APIs for configuration validation, simulation execution, and result retrieval, with deterministic seeding and 70+ automated tests for reproducible runs.", 
      "Build a LangGraph multi-agent system that enables users to analyze simulation results through naturallanguage queries, coordinating retrieval, data-analysis, and simulation agents to inspect metrics, compare generations, and using RAG to retrieve relevant simulation rules and project documentation for interpretation."
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
    title: "UIUC STAT400&CS124 Course Assistant",
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
    stack: ["React", "MySQL","SQL", "Python", "Google Maps API", "Query Optimization", "Database Design"],
    features: [
      "Built and Deployed a Dockerized React 19 application on GCP Cloud Run, supporting authenticated flight search, map-based route visualization, analytics dashboards, and saved routes across 23.3M flight records",
      "Designed a normalized 13-table MySQL database integrating BTS, DOT, and OpenFlights datasets, and wrote SQL queries using joins, CTEs, window functions, and conditional aggregation for route and airline analytics.",
      "Implemented 10 Next.js route handlers and reusable TypeScript query modules for airport lookup, route discovery, user lifecycle operations, saved routes, and route-metric retrieval.",
      "Added Auth.js JWT authentication and a MySQL stored-procedure caching layer that computes and stores route, airline, delay, and fare metrics on demand, with transaction rollback and cache hit/miss handling.",
      "Optimized MySQL with EXPLAIN ANALYZE and composite covering indexes, reducing a carrier-reliability query from 1,741.7s to 1.079s - a 1,614x speedup.
    ],
    github: "https://github.com/Chuck0816",
    demo: "https://your-demo-link.com",
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
