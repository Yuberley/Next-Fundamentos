import Link from "next/link";

// Se muestra cuando la página de esta carpeta llama a notFound().
// Como está DENTRO de 05-navegacion, el layout de la lección (y el menú) se siguen viendo.
export default function PlanetaNoEncontrado() {
  return (
    <section className="space-y-3 rounded-2xl border border-borde bg-white p-6 text-center shadow-sm sm:p-8">
      <p className="text-6xl" aria-hidden>
        🔭
      </p>
      <h2 className="text-2xl font-bold">Ese planeta no está en nuestra lista</h2>
      <p className="text-suave">Si buscabas a Plutón: desde 2006 se considera un planeta enano.</p>
      <Link href="/05-navegacion" className="inline-block font-semibold text-acento hover:underline">
        ← Volver a la explicación
      </Link>
    </section>
  );
}
