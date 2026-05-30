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
    stack: ["Python", "Simulation", "Data Processing", "Visualization"],
    bullets: [
      "Designed a modular inheritance simulator to model genotype-to-phenotype mapping, mutation effects, and multi-generation trait propagation.",
      "Developed configurable components for breeding logic, mutation rate control, Markov-based state transitions, and phenotype outcome generation.",
      "Built workflows that aggregate simulated offspring outcomes into population-level distributions, trend summaries, and visualizable datasets.",
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
    name: "AI Career Planning Platform for UIUC Students",
    description:
      "A LangGraph-based platform that parses resumes, job descriptions, and UIUC course history to generate personalized course, project, and skill-gap recommendations.",
    stack: ["LangGraph", "SQL", "Python", "Resume Parsing"],
    features: [
      "Multi-step AI workflow",
      "SQL-backed recommendation layer",
      "Reduced manual planning from 25 minutes to under 5 minutes per profile",
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
    name: "Database-backed Web App Project",
    description:
      "A full-stack web application with relational data modeling, API routes, and user-focused workflows.",
    stack: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    features: ["CRUD flows", "Relational schema", "Backend validation"],
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
