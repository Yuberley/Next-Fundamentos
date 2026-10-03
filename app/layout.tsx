import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// next/font descarga la fuente al compilar y la sirve desde este mismo sitio (más rápido).
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// metadata: título de la pestaña y descripción para buscadores.
// "%s" se reemplaza por el título de cada página: "Estilos · Next Fundamentos".
export const metadata: Metadata = {
  title: { default: "Next Fundamentos", template: "%s · Next Fundamentos" },
  description: "Lecciones cortas para aprender Next.js y React desde cero.",
};

/*
 * Layout raíz: envuelve TODAS las páginas del sitio.
 * La cabecera y el pie se escriben una sola vez aquí y aparecen en cada página.
 * {children} es el lugar donde Next coloca la página que estás visitando.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <header className="sticky top-0 z-10 border-b border-borde bg-white/85 backdrop-blur">
          <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <span className="grid size-8 place-items-center rounded-lg bg-acento text-white">N</span>
              {/* En el celular solo se ve la "N"; desde sm (640px) aparece el nombre completo. */}
              <span className="hidden sm:inline">Next Fundamentos</span>
            </Link>
            <Link href="/#lecciones" className="text-sm font-medium text-suave hover:text-acento">
              Lecciones
            </Link>
          </nav>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>

        <footer className="border-t border-borde px-4 py-6 text-center text-sm text-balance text-suave">
          Proyecto de clase · Next.js 16 · React 19 · Tailwind CSS 4
        </footer>
      </body>
    </html>
  );
}
