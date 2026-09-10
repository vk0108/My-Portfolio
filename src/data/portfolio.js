export const profile = {
  name: "Krithika Venkatesh",
  handle: "vk0108",
  brand: "krithika",
  brandExt: ".exe",
  title: "Aspiring AI Engineer",
  className: "AI ENGINEER",
  location: "Chennai, India",
  email: "krithikavenkates@gmail.com",
  // subject line pre-filled when a visitor clicks PRESS START
  emailSubject: "Let's connect, Krithika",
  linkedin: "https://www.linkedin.com/in/krithika-venkatesh-a951a3289/",
  github: "https://github.com/vk0108",
  summary:
    "Final-year Computer Science (AI & Data Science) student with hands-on experience designing multi-agent, API-driven systems focused on reliability and scalability. Proficient in Python and C#, with a strong foundation in data structures, OOP, and software design. Proven ability to build and ship full-stack, production-style applications independently and within cross-functional teams.",
  taglines: [
    "building multi-agent systems",
    "shipping full-stack AI apps",
    "turning data into decisions",
    "press START to continue",
  ],
};

export const stats = [
  { label: "CGPA", value: 8.07, max: 10, icon: "✦" },
  { label: "Builds Shipped", value: 4, max: 5, icon: "◆" },
  { label: "Internships", value: 2, max: 3, icon: "⚑" },
  { label: "Certifications", value: 10, max: 10, icon: "★" },
];

export const education = [
  {
    school: "Easwari Engineering College",
    degree: "B.Tech, Artificial Intelligence & Data Science",
    detail: "CGPA 8.07 / 10",
    period: "2023 — 2027",
    status: "IN PROGRESS",
  },
  {
    school: "Chettinad Vidyashram",
    degree: "Class 12 — CBSE",
    detail: "85.2%",
    period: "2022 — 2023",
    status: "CLEARED",
  },
  {
    school: "Chettinad Vidyashram",
    degree: "Class 10 — CBSE",
    detail: "82.8%",
    period: "2020 — 2021",
    status: "CLEARED",
  },
];

export const skillTree = [
  {
    branch: "Programming",
    color: "mint",
    icon: "⌨",
    skills: [
      { name: "Python", level: 90 },
      { name: "C#", level: 75 },
      { name: "SQL / MySQL", level: 78 },
    ],
  },
  {
    branch: "Machine Learning",
    color: "lav",
    icon: "◉",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
  {
    branch: "Cloud & AI",
    color: "sky",
    icon: "☁",
    skills: [
      { name: "Azure AI Services", level: 82 },
      { name: "Azure OpenAI", level: 85 },
      { name: "MS Agent Framework", level: 80 },
      { name: "Ollama", level: 68 },
    ],
  },
  {
    branch: "Frameworks",
    color: "peach",
    icon: "⚒",
    skills: [
      { name: "Flask", level: 85 },
      { name: "Django", level: 70 },
      { name: "ASP.NET Core", level: 68 },
      { name: "Pandas / NumPy", level: 88 },
    ],
  },
  {
    branch: "Visualization & BI",
    color: "pink",
    icon: "◔",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Matplotlib", level: 80 },
    ],
  },
];

export const quests = [
  {
    role: "AI Engineer Intern",
    org: "WhiteBlue Cloud Services",
    place: "Chennai",
    period: "Dec 2025 — May 2026",
    status: "COMPLETE",
    rank: "S",
    objectives: [
      "Developed InterviewAssist, an end-to-end agentic AI pipeline that autonomously screens candidates, conducts real-time voice-based interviews, and generates structured hiring verdicts — projected to reduce TA involvement by ~80% per candidate.",
      "Engineered a multi-agent orchestration system using Microsoft Agent Framework and Azure OpenAI, with specialized agents for resume screening, question generation, per-answer scoring, and automated PDF report generation via QuestPDF.",
    ],
    loot: ["Microsoft Agent Framework", "Azure OpenAI", "QuestPDF", "C#"],
  },
  {
    role: "Data Analyst Intern",
    org: "O Clock Software Pvt Ltd",
    place: "Chennai",
    period: "Dec 2024 — Jan 2025",
    status: "COMPLETE",
    rank: "A",
    objectives: [
      "Built interactive Power BI dashboards comparing employee effort across projects, clients, tasks, and working vs. billing hours — projected to reduce manual effort review time by ~60%.",
      "Cleaned and transformed raw employee and project data using Power Query, ensuring accurate and structured datasets for analysis.",
      "Identified trends and anomalies in team performance through data visualizations, supporting data-driven operational strategies.",
    ],
    loot: ["Power BI", "Power Query", "MySQL", "DAX"],
  },
];

export const projects = [
  {
    name: "InterviewAssist",
    subtitle: "Agentic AI Interview Automation System",
    icon: "⚙",
    color: "lav",
    difficulty: "LEGENDARY",
    blurb:
      "An end-to-end agentic pipeline that parses job descriptions, screens candidates, runs real-time voice interviews, and delivers structured hiring verdicts.",
    features: [
      "Multi-agent orchestration on Azure OpenAI with specialized agents for resume screening, question generation and per-answer scoring.",
      "LLM-generated PDF hiring reports via QuestPDF.",
      "Azure Speech SDK for continuous speech-to-text with silence detection and live pronunciation assessment, surfaced as an English Communication score.",
    ],
    stack: ["Azure OpenAI", "Agent Framework", "Azure Speech SDK", "QuestPDF", "C#"],
  },
  {
    name: "Empower Her",
    subtitle: "Women's Safety Mobile Application",
    icon: "⛨",
    color: "pink",
    difficulty: "EPIC",
    blurb:
      "A safety companion app with safe-route suggestions, SOS alerts, a community incident forum, and a Safety Tools & Tips hub.",
    features: [
      "DBSCAN and K-Means models score route safety from crime-risk data.",
      "SOS alerting and location sharing wired through Twilio.",
      "Community forum for crowd-sourced incident reporting.",
    ],
    stack: ["Flutter", "Firebase", "Google Maps API", "Twilio", "Flask", "ML"],
  },
  {
    name: "RetainSense AI",
    subtitle: "Employee Attrition Prediction System",
    icon: "❤",
    color: "mint",
    difficulty: "RARE",
    blurb:
      "A full-stack web app that predicts employee attrition risk and generates role-specific retention strategies.",
    features: [
      "Random Forest classifier with SMOTE for class imbalance and StandardScaler feature scaling.",
      "OpenAI 4.1 API generates AI-driven, role-specific retention strategies via prompt engineering.",
      "Downloadable, customized prediction reports in PDF format.",
    ],
    stack: ["Python", "Flask", "Scikit-learn", "OpenAI API", "JavaScript"],
  },
  {
    name: "Business Analytics Suite",
    subtitle: "Dashboard Reporting using Power BI",
    icon: "◳",
    color: "sky",
    difficulty: "RARE",
    blurb:
      "Interactive dashboards monitoring employee productivity, effort tracking, attendance and client performance on real organizational data.",
    features: [
      "Data models built by cleaning, transforming and integrating MySQL datasets.",
      "Power Query and DAX measures enabling KPI tracking and actionable business insight.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "MySQL"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    tier: "gold",
  },
  {
    name: "Introduction to Industry 4.0 and IIoT",
    issuer: "NPTEL",
    date: "Dec 2025",
    tier: "silver",
  },
  {
    name: "AI in Marketing",
    issuer: "NPTEL",
    date: "May 2025",
    tier: "gold",
    note: "Ranked in the top 2% of scorers",
  },
  {
    name: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    date: "Oct 2024",
    tier: "bronze",
  },
  {
    name: "Data Science Fundamentals with Python and SQL",
    issuer: "IBM",
    date: "Sept 2024",
    tier: "silver",
  },
  { name: "Tools for Data Science", issuer: "IBM", date: "Sept 2024", tier: "bronze" },
  {
    name: "Python for Data Science and AI Development",
    issuer: "IBM",
    date: "Sept 2024",
    tier: "silver",
  },
  {
    name: "Statistics for Data Science using Python",
    issuer: "IBM",
    date: "Sept 2024",
    tier: "bronze",
  },
  {
    name: "Databases with SQL and Python (Honors)",
    issuer: "IBM",
    date: "Sept 2024",
    tier: "gold",
  },
  { name: "Python Project for Data Science", issuer: "IBM", date: "Sept 2024", tier: "bronze" },
];

export const navItems = [
  { id: "home", label: "START", icon: "▶" },
  { id: "about", label: "PLAYER", icon: "◆" },
  { id: "skills", label: "SKILLS", icon: "✦" },
  { id: "quests", label: "QUESTS", icon: "⚑" },
  { id: "projects", label: "BUILDS", icon: "⚒" },
  { id: "trophies", label: "TROPHIES", icon: "★" },
  { id: "contact", label: "CONNECT", icon: "✉" },
];
