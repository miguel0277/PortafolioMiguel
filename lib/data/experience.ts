export interface Experience {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo?: string;
  logoBg?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Proyecto Construyete · Remoto",
    role: "Desarrollador & Automatizador de Procesos",
    startDate: "Nov 2025",
    endDate: "Ene 2026",
    logo: "https://github.com/miguel0277/construyete/blob/main/thumbnail.png?raw=true",
    logoBg: "#ffffff",
    description: [
      "Desarrollé la landing page oficial del proyecto con enfoque en conversión, rendimiento y diseño responsivo.",
      "Automaticé flujos de productos y procesos internos utilizando Google Apps Script y Python, reduciendo tiempos operativos.",
      "Implementé campañas de correos masivos automatizados con segmentación de audiencias para comunicación efectiva.",
      "Integré herramientas de inteligencia artificial para la generación de contenido y gestión de datos del proyecto.",
    ],
  },
  {
    id: 2,
    company: "Ecopetrol · Gerencia General Refinería de Barrancabermeja",
    role: "Aprendiz Universitario — Ingeniería de Datos & BI",
    startDate: "Ago 2024",
    endDate: "Ene 2025",
    logo: "https://saaeuecpprdpecp.blob.core.windows.net/web/esp/manual-de-identidad/images/eco_uso5.png",
    logoBg: "#ffffff",
    description: [
      "Diseñé y desarrollé la aplicación GOLIAT (Préstamo de Equipos de Levantamiento Mecánico de Cargas) en Power Apps, logrando trazabilidad del 100% en el departamento de mantenimiento GRB.",
      "Construí dashboards ejecutivos en Power BI con consultas DAX avanzadas y transformaciones M para el análisis de datos operacionales de aplicaciones corporativas.",
      "Integré flujos de automatización con Power Automate para la gestión de notificaciones y aprobaciones entre equipos de trabajo.",
    ],
  },
  {
    id: 3,
    company: "ExperTIC, Universidad Industrial de Santander · Bucaramanga",
    role: "Desarrollador Frontend & Auxiliar de Recursos Electrónicos",
    startDate: "Ago 2023",
    endDate: "Nov 2025",
    logo: "https://expertic.uis.edu.co/assets/expertic-logo.png",
    logoBg: "#ffffff",
    description: [
      "Desarrollé y mantuve el área de recursos electrónicos de la universidad mediante templates dinámicos en HTML, CSS y JavaScript.",
      "Diseñé plantillas estandarizadas para la publicación de recursos electrónicos institucionales, mejorando la consistencia y experiencia de usuario.",
      "Ejecuté proyectos de desarrollo a medida para la entidad aplicando metodologías ágiles de gestión de proyectos.",
    ],
  },
];
