import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";
import { Clima } from "./Clima";
import { DatoLento } from "./DatoLento";
import { HolaCliente } from "./HolaCliente";
import { HolaServidor } from "./HolaServidor";

export const metadata: Metadata = { title: "Servidor y cliente" };

// Lo que se ve mientras llegan los datos (el "fallback" de Suspense).
function Esperando({ texto }: { texto: string }) {
  return (
    <p className="flex items-center gap-2 text-suave">
      <span className="size-4 animate-spin rounded-full border-2 border-acento border-t-transparent" aria-hidden />
      {texto}
    </p>
  );
}

export default function ServidorPage() {
  return (
    <Leccion slug="09-servidor">
      <p>
        En Next.js los componentes son <strong>de servidor</strong> por defecto: se ejecutan en el servidor
        (mientras desarrollas, tu propio computador) y al navegador solo llega el resultado. Los que llevan{" "}
        <code>{'"use client"'}</code> también envían su JavaScript al navegador, para poder ser interactivos.
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Server Component</th>
              <th>Client Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>¿Cómo se crea?</td>
              <td>Así es por defecto</td>
              <td>
                Con <code>{'"use client"'}</code> arriba del archivo
              </td>
            </tr>
            <tr>
              <td>¿Se dibuja en el servidor?</td>
              <td>Sí</td>
              <td>Sí (la primera vez)</td>
            </tr>
            <tr>
              <td>¿Su código llega al navegador?</td>
              <td>No</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>
                ¿<code>useState</code>, <code>onClick</code>…?
              </td>
              <td>No</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>¿Puede leer una base de datos o claves secretas?</td>
              <td>Sí</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Ejemplo titulo="¿Dónde se ejecuta cada uno?" archivo="app/09-servidor/HolaServidor.tsx">
        <p>
          Al cargar esta página, <code>HolaServidor</code> escribe un mensaje en la <strong>terminal</strong> donde
          corre <code>npm run dev</code>. El botón de <code>HolaCliente</code> escribe en la{" "}
          <strong>consola del navegador</strong> (F12 → Console).
        </p>
        <p className="text-sm text-suave">
          Ojo: mientras desarrollas, Next también copia los mensajes del servidor en la consola del navegador con
          una etiqueta gris <strong>Server</strong>, para ayudarte. Los mensajes de <code>HolaCliente</code> no
          llevan esa etiqueta.
        </p>
        <Demo>
          <div className="grid gap-4 sm:grid-cols-2">
            <HolaServidor />
            <HolaCliente />
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Componentes async: esperar datos antes de dibujar" archivo="app/09-servidor/Clima.tsx">
        <p>
          <code>Clima</code> es una función <code>async</code> que espera los datos (simulados, tardan 1,5 s) y
          después dibuja. Mientras tanto, <code>{"<Suspense>"}</code> muestra un aviso de «cargando» y el resto
          de la página ya está visible.
        </p>
        <Demo>
          <Suspense fallback={<Esperando texto="Consultando el clima…" />}>
            <Clima />
          </Suspense>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Streaming: cada parte llega a su ritmo" archivo="app/09-servidor/DatoLento.tsx">
        <p>
          Tres componentes lentos, cada uno en su propio <code>{"<Suspense>"}</code>. Recarga la página (F5) y
          mira el orden en que aparecen: el servidor envía cada parte apenas está lista.
        </p>
        <Demo>
          <div className="grid gap-3 sm:grid-cols-3">
            {[3, 1, 2].map((segundos) => (
              <div key={segundos} className="min-h-16 rounded-xl bg-white p-4 shadow-sm">
                <Suspense fallback={<Esperando texto={`Esperando ${segundos} s…`} />}>
                  <DatoLento segundos={segundos} />
                </Suspense>
              </div>
            ))}
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Archivos especiales: loading.tsx y error.tsx" archivo="app/09-servidor/lenta/loading.tsx">
        <p>
          Next tiene archivos con nombre especial que funcionan solos. <code>loading.tsx</code> se muestra
          mientras carga la página de su carpeta, y <code>error.tsx</code> si algo falla, con un botón para
          reintentar. En desarrollo, cuando algo falla también verás un aviso rojo «Issue» abajo a la izquierda:
          es Next contándote el error.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/09-servidor/lenta"
            className="rounded-full border border-borde bg-white px-4 py-2 font-semibold hover:border-acento"
          >
            🐢 Abrir una página lenta
          </Link>
          <Link
            href="/09-servidor/inestable"
            className="rounded-full border border-borde bg-white px-4 py-2 font-semibold hover:border-acento"
          >
            💥 Abrir una página que falla
          </Link>
        </div>
      </Ejemplo>

      <Pruebalo>
        <li>
          Recarga la página y busca el mensaje 🖥️ en la terminal. Luego usa el botón 🌐 y búscalo en la consola
          del navegador.
        </li>
        <li>
          Quita la etiqueta <code>{"<Suspense>"}</code> que envuelve a <code>{"<Clima />"}</code> (deja solo{" "}
          <code>{"<Clima />"}</code>) y recarga: ahora toda la página espera al clima.
        </li>
        <li>
          Cambia los segundos <code>[3, 1, 2]</code> de los datos lentos y mira el nuevo orden.
        </li>
        <li>Abre la página que falla y usa «Reintentar» varias veces.</li>
      </Pruebalo>
    </Leccion>
  );
}
