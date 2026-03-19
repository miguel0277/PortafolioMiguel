export interface Skill {
  name: string;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const softSkills: Skill[] = [
  { name: "Liderazgo" },
  { name: "Gestión del Conocimiento" },
  { name: "Pensamiento Analítico" },
  { name: "Comunicación Efectiva" },
  { name: "Trabajo en Equipo" },
  { name: "Resolución de Problemas" },
  { name: "Gestión de Proyectos" },
  { name: "Dirección Empresarial" },
];

export const technicalSkills: SkillCategory[] = [
  {
    category: "Data & BI",
    skills: [
      { name: "Power BI", color: "#F2C811" },
      { name: "DAX", color: "#F2C811" },
      { name: "M (Power Query)", color: "#F2C811" },
      { name: "Chart.js", color: "#FF6384" },
      { name: "Pandas", color: "#150458" },
      { name: "NumPy", color: "#013243" },
      { name: "Jupyter Notebook", color: "#F37626" },
      { name: "Google Colab", color: "#F9AB00" },
    ],
  },
  {
    category: "Lenguajes & Consultas",
    skills: [
      { name: "Python", color: "#3776AB" },
      { name: "SQL", color: "#336791" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Power Apps fx", color: "#742774" },
    ],
  },
  {
    category: "Desarrollo Web",
    skills: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "Vercel", color: "#000000" },
      { name: "v0", color: "#000000" },
    ],
  },
  {
    category: "Low-Code / Enterprise",
    skills: [
      { name: "Power Apps", color: "#742774" },
      { name: "Power Automate", color: "#0066FF" },
      { name: "Apps Script", color: "#4285F4" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", color: "#0089D6" },
      { name: "AWS", color: "#FF9900" },
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#181717" },
      { name: "Linux", color: "#FCC624" },
    ],
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "SQL Server", color: "#CC2927" },
    ],
  },
  {
    category: "IA & Herramientas",
    skills: [
      { name: "Claude", color: "#D4A574" },
      { name: "Claude Code", color: "#D4A574" },
      { name: "Prompt Engineering", color: "#8B5CF6" },
      { name: "Jira", color: "#0052CC" },
      { name: "Scrum / Agile", color: "#6DB33F" },
    ],
  },
];
