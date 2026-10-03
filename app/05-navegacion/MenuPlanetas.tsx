"use client"; // usePathname necesita el navegador. Verás "use client" con calma en la lección 6.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { planetas } from "./planetas";

const enlaces = [
  { href: "/05-navegacion", texto: "📖 Explicación" },
  ...planetas.map((planeta) => ({ href: `/05-navegacion/${planeta.slug}`, texto: `${planeta.emoji} ${planeta.nombre}` })),
  // Plutón no está en la lista de planetas: su página mostrará el 404 de [planeta]/not-found.tsx.
  { href: "/05-navegacion/pluton", texto: "❓ Plutón" },
];

export function MenuPlanetas() {
  // usePathname() devuelve la URL actual, por ejemplo "/05-navegacion/marte".
  const rutaActual = usePathname();

  return (
    <ul className="flex flex-wrap gap-2">
      {enlaces.map((enlace) => {
        const activo = enlace.href === rutaActual;
        return (
          <li key={enlace.href}>
            {/* <Link> navega SIN recargar la página: solo cambia lo que es distinto. */}
            <Link
              href={enlace.href}
              // aria-current avisa a los lectores de pantalla cuál es la página actual.
              aria-current={activo ? "page" : undefined}
              className={`inline-block rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                activo ? "border-acento bg-acento text-white" : "border-borde bg-white hover:border-acento"
              }`}
            >
              {enlace.texto}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
