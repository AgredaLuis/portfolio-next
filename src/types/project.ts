export interface Project {
    technologies: string[]; // Arreglo de strings para las tecnologías
    name: string; // Nombre del proyecto
    description: string; // Descripción detallada del proyecto
    framework: string; // Framework utilizado (opcional)
    image: string; // Ruta de la imagen (opcional)
    video?: string; // Ruta del video (opcional)
    code?: string; // Ruta del repositorio GitHub (opcional)
    url?: string; // Ruta del sitio web (opcional)
  }