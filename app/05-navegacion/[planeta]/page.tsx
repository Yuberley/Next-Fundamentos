import Link from "next/link";
import { notFound } from "next/navigation";
import { planetas } from "../planetas";

/*
 * [planeta] entre corchetes = segmento dinámico. Esta MISMA página sirve
 * /05-navegacion/marte, /05-navegacion/tierra, /05-navegacion/lo-que-sea…
 * Next le pasa la parte variable de la URL en `params`. Es una Promesa: por eso async/await.
 */
export default async function PaginaPlaneta({ params }: { params: Promise<{ planeta: string }> }) {
  const { planeta } = await params;
  const datos = planetas.find((p) => p.slug === planeta);

  // Si no está en la lista, mostramos el 404 de esta carpeta (not-found.tsx).
  if (!datos) notFound();

  return (
    <section className="space-y-4 rounded-2xl border border-borde bg-white p-6 shadow-sm sm:p-8">
      <p className="text-6xl" aria-hidden>
        {datos.emoji}
      </p>
      <h2 className="text-3xl font-bold">{datos.nombre}</h2>
      <p className="text-lg">{datos.dato}</p>
      <p className="text-suave">Distancia promedio al Sol: {datos.distancia}.</p>
      <p className="text-sm text-suave">
        La URL dice <code>/05-navegacion/{planeta}</code>, así que <code>params</code> es{" "}
        <code>{`{ planeta: "${planeta}" }`}</code>.
      </p>
      <Link href="/05-navegacion" className="inline-block font-semibold text-acento hover:underline">
        ← Volver a la explicación
      </Link>
    </section>
  );
}
