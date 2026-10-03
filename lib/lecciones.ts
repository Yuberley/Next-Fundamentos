/*
 * La lista de lecciones vive en UN solo lugar.
 * La usan el inicio (app/page.tsx) y el marco de cada lección (components/Leccion.tsx):
 * si agregas una lección aquí, aparece en los dos.
 */
export type Leccion = {
  slug: string; // nombre de la carpeta dentro de app/ (y por lo tanto, la URL)
  titulo: string;
  resumen: string;
  nivel: "Básico" | "Intermedio";
};

export const lecciones: Leccion[] = [
  {
    slug: "01-maquetacion",
    titulo: "Maquetación",
    resumen: "Una carpeta con page.tsx es una página. JSX: HTML dentro de JavaScript.",
    nivel: "Básico",
  },
  {
    slug: "02-componentes",
    titulo: "Componentes y props",
    resumen: "Piezas reutilizables que reciben datos y contenido.",
    nivel: "Básico",
  },
  {
    slug: "03-estilos",
    titulo: "Estilos",
    resumen: "Tailwind CSS, colores propios, variantes y CSS Modules.",
    nivel: "Básico",
  },
  {
    slug: "04-responsive",
    titulo: "Diseño responsivo",
    resumen: "Mobile first: la misma página en celular, tablet y computador.",
    nivel: "Básico",
  },
  {
    slug: "05-navegacion",
    titulo: "Navegación",
    resumen: "Link, rutas dinámicas, página 404 y layouts que no se reinician.",
    nivel: "Básico",
  },
  {
    slug: "06-interaccion",
    titulo: "Interacción",
    resumen: "Client Components, eventos y tu primer useState.",
    nivel: "Básico",
  },
  {
    slug: "07-estado",
    titulo: "Manejo del estado",
    resumen: "Listas, estado derivado, estado compartido y useReducer.",
    nivel: "Intermedio",
  },
  {
    slug: "08-hooks",
    titulo: "Hooks",
    resumen: "useEffect, useRef y tus propios hooks.",
    nivel: "Intermedio",
  },
  {
    slug: "09-servidor",
    titulo: "Servidor y cliente",
    resumen: "Dónde corre tu código, datos lentos, loading y errores.",
    nivel: "Intermedio",
  },
  {
    slug: "10-formularios",
    titulo: "Formularios y Server Actions",
    resumen: "Enviar datos al servidor sin crear una API.",
    nivel: "Intermedio",
  },
];
