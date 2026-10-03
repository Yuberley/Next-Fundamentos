import type { Metadata } from "next";
import Link from "next/link";
import { consultarServicioInestable } from "../datos";

export const metadata: Metadata = { title: "Página que falla" };

// Si consultarServicioInestable() lanza un error, Next muestra error.tsx en lugar de esta página.
export default async function PaginaInestable() {
  const respuesta = await consultarServicioInestable();

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4 px-4 py-16 text-center">
      <p className="text-6xl" aria-hidden>
        ✅
      </p>
      <h1 className="text-3xl font-bold">{respuesta}</h1>
      <p className="text-suave">
        Esta vez el servicio no falló. Vuelve a la lección y abre esta página otra vez para ver el error.
      </p>
      <Link href="/09-servidor" className="inline-block font-semibold text-acento hover:underline">
        ← Volver a la lección
      </Link>
    </div>
  );
}
