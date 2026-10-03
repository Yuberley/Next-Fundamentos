import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { MenuPlanetas } from "./MenuPlanetas";

export const metadata: Metadata = { title: "Navegación" };

/*
 * Layout de esta sección. Envuelve a /05-navegacion y a todas las /05-navegacion/[planeta].
 * Al navegar con <Link>, Next solo cambia {children}: este layout NO se vuelve a crear,
 * por eso lo que escribas en el campo de texto sobrevive al cambiar de planeta.
 */
export default function NavegacionLayout({ children }: { children: React.ReactNode }) {
  return (
    <Leccion slug="05-navegacion">
      <Ejemplo titulo="Un layout que no se reinicia" archivo="app/05-navegacion/layout.tsx">
        <Demo>
          <div className="space-y-4">
            <label className="block space-y-1">
              <span className="block text-sm font-medium">1. Escribe algo aquí…</span>
              <input
                placeholder="Por ejemplo, tu nombre"
                className="h-11 w-full max-w-sm rounded-xl border border-borde bg-white px-4"
              />
            </label>
            <div className="space-y-2">
              <p className="text-sm font-medium">2. …y visita planetas con estos enlaces (son {"<Link>"}):</p>
              <MenuPlanetas />
            </div>
            <p className="text-sm">
              3. Ahora compara con un enlace normal de HTML:{" "}
              {/* A propósito usamos <a> en vez de <Link> para ver la diferencia: recarga TODO. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/05-navegacion/tierra" className="font-semibold text-acento underline">
                🌍 Tierra con {"<a>"}
              </a>{" "}
              (recarga la página y el texto se pierde).
            </p>
          </div>
        </Demo>
      </Ejemplo>

      {/* Aquí va la página actual: la explicación o el planeta elegido. */}
      {children}
    </Leccion>
  );
}
