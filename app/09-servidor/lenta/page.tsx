import type { Metadata } from "next";
import Link from "next/link";
import { simularConsulta } from "../datos";

export const metadata: Metadata = { title: "Página lenta" };

// Toda la página espera 2,5 s antes de dibujarse. Mientras tanto, Next muestra loading.tsx.
export default async function PaginaLenta() {
  await simularConsulta(2500);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4 px-4 py-16 text-center">
      <p className="text-6xl" aria-hidden>
        🐢
      </p>
      <h1 className="text-3xl font-bold">¡Por fin llegué!</h1>
      <p className="text-suave">
        Mientras esta página esperaba sus datos, Next mostraba <code>loading.tsx</code> de la misma carpeta.
      </p>
      <Link href="/09-servidor" className="inline-block font-semibold text-acento hover:underline">
        ← Volver a la lección
      </Link>
    </div>
  );
}
