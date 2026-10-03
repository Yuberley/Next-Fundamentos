import Link from "next/link";
import { lecciones } from "@/lib/lecciones";

/*
 * Marco común de todas las lecciones: encabezado, contenido y enlaces "anterior / siguiente".
 * Es un componente como cualquier otro: recibe una prop (slug) y un contenido (children).
 * Lo entenderás del todo en la lección 2.
 */
export function Leccion({ slug, children }: { slug: string; children: React.ReactNode }) {
  const posicion = lecciones.findIndex((leccion) => leccion.slug === slug);
  const actual = lecciones[posicion];
  const anterior = lecciones[posicion - 1];
  const siguiente = lecciones[posicion + 1];

  return (
    <article className="mx-auto w-full max-w-4xl space-y-8 px-4 py-10 sm:py-14">
      <header className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-acento uppercase">
          Lección {posicion + 1} · {actual.nivel}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{actual.titulo}</h1>
        <p className="text-lg text-suave">{actual.resumen}</p>
        <p className="text-sm text-suave">
          📁 Código de esta lección: <code>app/{slug}/</code>
        </p>
      </header>

      {children}

      <nav className="flex flex-wrap justify-between gap-4 border-t border-borde pt-6 font-medium">
        <Link href={anterior ? `/${anterior.slug}` : "/"} className="text-acento hover:underline">
          ← {anterior ? anterior.titulo : "Inicio"}
        </Link>
        <Link href={siguiente ? `/${siguiente.slug}` : "/"} className="text-acento hover:underline">
          {siguiente ? siguiente.titulo : "Volver al inicio"} →
        </Link>
      </nav>
    </article>
  );
}
