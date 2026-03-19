export interface TechStack {
  name: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  images?: string[];
  techStack: TechStack[];
  status: "En producción" | "Demo disponible" | "Portfolio" | "Próximamente";
  statusColor: string;
  demoUrl?: string;
  codeUrl?: string;
  category: "data" | "web";
}

export const dataProjects: Project[] = [
  {
    id: 1,
    title: "GOLIAT — Levantamiento Mecánico de Cargas",
    description:
      "Aplicación integral desarrollada en Power Apps para Ecopetrol GRB. Gestión de solicitudes de equipos de levantamiento mecánico con trazabilidad del 100%, dashboard ejecutivo en Power BI y flujos automatizados con Power Automate. 313+ solicitudes gestionadas, 2363 millones en valor ahorrativo.",
    icon: "Crane",
    images: ["/projects/PowerBiGoliat.png"],
    techStack: [
      { name: "Power Apps", color: "#742774" },
      { name: "Power BI", color: "#F2C811" },
      { name: "Power Automate", color: "#0066FF" },
      { name: "DAX", color: "#F2C811" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    category: "data",
  },
  {
    id: 2,
    title: "Dashboard Reporte Vial — Seguimiento de Radares",
    description:
      "Dashboard ejecutivo en Power BI para el seguimiento de infracciones viales en la Refinería de Barrancabermeja. Monitoreo de radares, análisis de velocidades promedio por mes, y control de emergencias con más de 6,318 infracciones registradas.",
    icon: "Radar",
    images: ["/projects/VALEpbi.png"],
    techStack: [
      { name: "Power BI", color: "#F2C811" },
      { name: "DAX", color: "#F2C811" },
      { name: "Power Query", color: "#F2C811" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    category: "data",
  },
  {
    id: 3,
    title: "MI SAS — Sistema de Aislamiento Seguro",
    description:
      "Dashboard para gestión de aislamientos de seguridad industrial en Ecopetrol. Seguimiento por categoría, departamento y estado (instalados, por validar, cerrados) con visualización geográfica en mapa interactivo.",
    icon: "ShieldCheck",
    techStack: [
      { name: "Power BI", color: "#F2C811" },
      { name: "DAX", color: "#F2C811" },
      { name: "SQL", color: "#336791" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    category: "data",
  },
  {
    id: 4,
    title: "Central de Herramientas GRB",
    description:
      "Sistema de gestión y reporte de la central de herramientas para la Refinería de Barrancabermeja. Control de 11,324 herramientas, seguimiento de solicitudes por estado y departamento, con préstamo a funcionarios.",
    icon: "Wrench",
    images: ["/projects/VALEpbi.png"],
    techStack: [
      { name: "Power BI", color: "#F2C811" },
      { name: "DAX", color: "#F2C811" },
      { name: "Power Query", color: "#F2C811" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    category: "data",
  },
];

export const webProjects: Project[] = [
  {
    id: 5,
    title: "The Vault",
    description:
      "Aplicación web construida completamente con Claude Code. Plataforma para gestión y organización de recursos digitales con interfaz moderna, fluida y responsiva. Desplegada en Vercel.",
    icon: "Vault",
    images: ["/projects/TheVault.png", "/projects/TheVault2.png", "/projects/TheVault3.png", "/projects/TheVault4.png"],
    techStack: [
      { name: "Next.js", color: "#000000" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "shadcn/ui", color: "#000000" },
      { name: "Claude AI", color: "#D4A574" },
    ],
    status: "Demo disponible",
    statusColor: "#16a34a",
    demoUrl: "https://thevault-six.vercel.app/",
    codeUrl: "https://github.com/miguel0277/thevault",
    category: "web",
  },
  {
    id: 6,
    title: "GOLIAT — Interfaz Power Apps",
    description:
      "Aplicación empresarial completa en Power Apps para Ecopetrol. Gestión de solicitudes de servicio, aprobaciones, asignación de equipos y operadores con geolocalización. Interfaz intuitiva con múltiples pantallas y roles de usuario.",
    icon: "AppWindow",
    images: ["/projects/PantallasGoliat.png", "/projects/AppGoliat.png"],
    techStack: [
      { name: "Power Apps", color: "#742774" },
      { name: "Power Automate", color: "#0066FF" },
      { name: "SharePoint", color: "#0078D4" },
      { name: "Power BI", color: "#F2C811" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    category: "web",
  },
  {
    id: 7,
    title: "Landing Page Construyete",
    description:
      "Landing page oficial del proyecto Construyete, empresa colombiana de consultoría tecnológica y análisis estratégico. Diseño moderno con enfoque en conversión, secciones de servicios, quiénes somos, y contacto. Desarrollada con enfoque responsivo y optimizada para SEO.",
    icon: "Rocket",
    images: ["/projects/LandingConstruyete.png", "/projects/LandingConstruyete2.png"],
    techStack: [
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Google Apps Script", color: "#4285F4" },
    ],
    status: "En producción",
    statusColor: "#16a34a",
    demoUrl: "https://construyete.co",
    codeUrl: "https://github.com/miguel0277/construyete",
    category: "web",
  },
  {
    id: 8,
    title: "Próximamente",
    description: "Nuevo proyecto en desarrollo. Más detalles próximamente.",
    icon: "Rocket",
    techStack: [],
    status: "Próximamente",
    statusColor: "#94A3B8",
    category: "web",
  },
];
