import Link from "next/link";

// not-found.tsx: Next lo muestra cuando la URL no coincide con ninguna página (error 404).
export default function NoEncontrada() {
  return (
    <div className="mx-auto max-w-md space-y-4 px-4 py-20 text-center">
      <p className="text-7xl" aria-hidden>
        🛸
      </p>
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="text-suave">
        Ninguna carpeta dentro de <code>app/</code> tiene un <code>page.tsx</code> para esta URL.
      </p>
      <Link href="/" className="inline-block font-semibold text-acento hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
