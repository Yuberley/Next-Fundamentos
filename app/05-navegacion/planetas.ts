// Datos de ejemplo. En una aplicación real vendrían de una base de datos o de una API.
export type Planeta = {
  slug: string; // la parte de la URL: /05-navegacion/marte
  nombre: string;
  emoji: string;
  distancia: string; // distancia promedio al Sol
  dato: string;
};

export const planetas: Planeta[] = [
  {
    slug: "mercurio",
    nombre: "Mercurio",
    emoji: "🌑",
    distancia: "58 millones de km",
    dato: "Un año allí dura solo 88 días terrestres.",
  },
  {
    slug: "venus",
    nombre: "Venus",
    emoji: "🟡",
    distancia: "108 millones de km",
    dato: "Es el planeta más caliente del sistema solar.",
  },
  {
    slug: "tierra",
    nombre: "Tierra",
    emoji: "🌍",
    distancia: "150 millones de km",
    dato: "Es el único planeta donde sabemos que hay vida.",
  },
  {
    slug: "marte",
    nombre: "Marte",
    emoji: "🔴",
    distancia: "228 millones de km",
    dato: "Tiene el volcán más alto que se conoce: el monte Olimpo.",
  },
  {
    slug: "jupiter",
    nombre: "Júpiter",
    emoji: "🟠",
    distancia: "778 millones de km",
    dato: "Es tan grande que dentro cabrían unas 1.300 Tierras.",
  },
  {
    slug: "saturno",
    nombre: "Saturno",
    emoji: "🪐",
    distancia: "1.430 millones de km",
    dato: "Es tan poco denso que flotaría en una piscina gigante.",
  },
];
