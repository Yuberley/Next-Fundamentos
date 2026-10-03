"use client"; // error.tsx debe ser un Client Component: tiene un botón que reacciona al clic.

import Link from "next/link";
import { Boton } from "@/components/Boton";

// Next lo muestra cuando la página de esta carpeta lanza un error.
// retry() vuelve a pedir la página al servidor y la intenta dibujar otra vez.
export default function ErrorInestable({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <div className="mx-auto w-full max-w-md space-y-4 px-4 py-16 text-center">
      <p className="text-6xl" aria-hidden>
        💥
      </p>
      <h1 className="text-3xl font-bold">Algo salió mal</h1>
      {/* En desarrollo mostramos el mensaje real. En producción Next lo oculta por seguridad,
          así que ahí mostramos un texto propio. */}
      <p className="text-suave">
        {process.env.NODE_ENV === "development" ? error.message : "El servidor tuvo un problema. Intenta de nuevo."}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Boton onClick={() => retry()}>Reintentar</Boton>
        <Link href="/09-servidor" className="self-center font-semibold text-acento hover:underline">
          Volver a la lección
        </Link>
      </div>
    </div>
  );
}
