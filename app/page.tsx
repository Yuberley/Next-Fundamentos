import Link from "next/link";
import { lecciones } from "@/lib/lecciones";

const pasos = [
  { titulo: "1. Mira", texto: "Abre la lección en el navegador y juega con los ejemplos." },
  { titulo: "2. Lee", texto: "Abre su carpeta en el editor: cada ejemplo dice qué archivo mirar." },
  { titulo: "3. Toca", texto: "Haz los «Pruébalo tú»: cambia el código, guarda y observa." },
];

// Página de inicio: el archivo app/page.tsx corresponde a la URL "/".
// Recorre la lista de lecciones con .map() y crea un enlace (Link) por cada una.
export default function Inicio() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-14 px-4 py-12 sm:py-16">
      <header className="space-y-4 text-center">
        <p className="text-sm font-semibold tracking-wide text-acento uppercase">
          Next.js 16 · React 19 · Tailwind CSS 4
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">Aprende Next.js paso a paso</h1>
        <p className="mx-auto max-w-2xl text-lg text-balance text-suave">
          10 lecciones cortas, de lo más simple a lo intermedio. Cada lección es una página con ejemplos que
          puedes tocar, y una carpeta dentro de <code>app/</code> con su código.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-3">
        {pasos.map((paso) => (
          <li key={paso.titulo} className="rounded-2xl border border-borde bg-white p-5 shadow-sm">
            <p className="font-semibold">{paso.titulo}</p>
            <p className="mt-1 text-sm text-suave">{paso.texto}</p>
          </li>
        ))}
      </ul>

      <section id="lecciones" className="scroll-mt-20 space-y-4">
        <h2 className="text-2xl font-bold">Lecciones</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lecciones.map((leccion, i) => (
            <li key={leccion.slug}>
              <Link
                href={`/${leccion.slug}`}
                className="group flex h-full flex-col gap-2 rounded-2xl border border-borde bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-acento hover:shadow-md"
              >
                <span className="flex items-center justify-between text-sm">
                  <span className="font-mono font-semibold text-acento">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-suave">{leccion.nivel}</span>
                </span>
                <span className="text-lg font-semibold group-hover:text-acento">{leccion.titulo}</span>
                <span className="text-sm text-suave">{leccion.resumen}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
