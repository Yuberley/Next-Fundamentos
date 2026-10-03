import type { Metadata } from "next";
import Link from "next/link";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";

// Título de la pestaña para esta página: "Maquetación · Next Fundamentos".
export const metadata: Metadata = { 
  title: "Maquetación",
  description: "Pagina de maquetar",
  keywords: ["html", "dev", "front",]
 };

// Esta función ES la página. Lo que devuelve (JSX) es lo que ves en /01-maquetacion.
export default function MaquetacionPage() {
  // Variables normales de JavaScript. Abajo las mostramos dentro del JSX con { }.
  const nombre = "Ada Lovelace";
  const manzanas = 3;
  const precio = 1500;

  return (
    <Leccion slug="01-maquetacion">
      <Ejemplo titulo="Una carpeta = una página" archivo="app/01-maquetacion/hola/page.tsx">
        <p>
          En Next.js no hay que configurar rutas: <strong>cada carpeta dentro de <code>app/</code> que tenga un
          archivo <code>page.tsx</code> es una página</strong>, y el nombre de la carpeta es la URL.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Archivo</th>
                <th>URL en el navegador</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>app/page.tsx</code></td>
                <td><code>/</code></td>
              </tr>
              <tr>
                <td><code>app/01-maquetacion/page.tsx</code></td>
                <td><code>/01-maquetacion</code> (esta página)</td>
              </tr>
              <tr>
                <td><code>app/01-maquetacion/hola/page.tsx</code></td>
                <td><code>/01-maquetacion/hola</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link href="/01-maquetacion/hola" className="inline-block font-semibold text-acento hover:underline">
          Abrir /01-maquetacion/hola →
        </Link>
      </Ejemplo>

      <Ejemplo titulo="JSX: HTML dentro de JavaScript" archivo="app/01-maquetacion/page.tsx">
        <p>
          Lo que devuelve una página se escribe en <strong>JSX</strong>. Se parece a HTML, pero entre llaves{" "}
          <code>{"{ }"}</code> puedes poner cualquier valor de JavaScript: una variable, una cuenta, una función…
        </p>
        <Demo>
          <div className="space-y-1">
            <p>
              Hola, <strong>{nombre}</strong>
            </p>
            <p>
              {manzanas} manzanas × {precio} pesos = <strong>{manzanas * precio} pesos</strong>
            </p>
            <p>En mayúsculas: {nombre.toUpperCase()}</p>
          </div>
        </Demo>
        <p>Algunas diferencias con HTML que verás todo el tiempo:</p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>En HTML</th>
                <th>En JSX</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{'class="caja"'}</code></td>
                <td><code>{'className="caja"'}</code></td>
              </tr>
              <tr>
                <td><code>{"<br>"}</code></td>
                <td><code>{"<br />"}</code> (toda etiqueta se cierra)</td>
              </tr>
              <tr>
                <td><code>{"<!-- comentario -->"}</code></td>
                <td><code>{"{/* comentario */}"}</code></td>
              </tr>
              <tr>
                <td><code>{'style="color: red"'}</code></td>
                <td><code>{'style={{ color: "red" }}'}</code></td>
              </tr>
              <tr>
                <td><code>{'<label for="campo">'}</code></td>
                <td><code>{'<label htmlFor="campo">'}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Ejemplo>

      <Ejemplo titulo="Maquetar con etiquetas semánticas" archivo="app/01-maquetacion/page.tsx">
        <p>
          Maquetar es organizar la página en zonas. HTML tiene etiquetas que dicen <strong>qué es</strong> cada
          zona: así el código se lee mejor y los lectores de pantalla y buscadores entienden la página.
        </p>
        <Demo>
          <div className="grid gap-2 font-mono text-sm sm:grid-cols-[10rem_1fr]">
            <header className="rounded-lg border-2 border-sky-300 bg-sky-50 p-3 sm:col-span-2">
              {"<header>"} logo y título
            </header>
            <nav className="rounded-lg border-2 border-emerald-300 bg-emerald-50 p-3">{"<nav>"} menú</nav>
            {/* Aquí usamos <section>: una página solo puede tener UN <main>, y ya está en app/layout.tsx. */}
            <section className="min-h-28 rounded-lg border-2 border-violet-300 bg-violet-50 p-3">
              {"<main>"} contenido principal
            </section>
            <aside className="rounded-lg border-2 border-amber-300 bg-amber-50 p-3 sm:col-start-2">
              {"<aside>"} información extra
            </aside>
            <footer className="rounded-lg border-2 border-rose-300 bg-rose-50 p-3 sm:col-span-2">
              {"<footer>"} pie de página
            </footer>
          </div>
        </Demo>
        <p className="text-sm text-suave">
          ¿Notaste que las 5 cajas repiten casi las mismas clases? En la lección 2 lo resolvemos con un componente.
        </p>
      </Ejemplo>

      <Ejemplo titulo="El layout: lo que se repite en todas las páginas" archivo="app/layout.tsx">
        <p>
          La cabecera (arriba) y el pie (abajo) de este sitio no están copiados en cada página: están{" "}
          <strong>una sola vez</strong> en <code>app/layout.tsx</code>. El layout envuelve a todas las páginas y
          pone la que estás visitando donde dice <code>{"{children}"}</code>.
        </p>
        <Demo>
          <div className="space-y-2 rounded-lg border-2 border-acento bg-white p-3 text-sm">
            <p className="font-mono font-semibold text-acento">app/layout.tsx</p>
            <p className="rounded bg-slate-100 p-2">{"<header>"} Next Fundamentos · Lecciones</p>
            <div className="rounded border-2 border-dashed border-acento/60 p-4 text-center">
              <code>{"{children}"}</code> = la página actual (<code>app/01-maquetacion/page.tsx</code>)
            </div>
            <p className="rounded bg-slate-100 p-2">{"<footer>"} Proyecto de clase…</p>
          </div>
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          Abre <code>app/01-maquetacion/hola/page.tsx</code>, cambia el texto y guarda: el navegador se actualiza
          solo.
        </li>
        <li>
          Crea la carpeta <code>app/01-maquetacion/adios</code> con su propio <code>page.tsx</code> y visita{" "}
          <code>/01-maquetacion/adios</code>.
        </li>
        <li>
          Cambia <code>manzanas</code> por 10 en este archivo y mira cómo cambia la cuenta.
        </li>
        <li>
          Cambia el texto del pie de página en <code>app/layout.tsx</code>: cambia en todas las páginas a la vez.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
