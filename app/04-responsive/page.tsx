import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";

export const metadata: Metadata = { title: "Diseño responsivo" };

const frutas = ["🍎", "🍌", "🍇", "🍓", "🍍", "🥝", "🍑", "🍒"];

// Todo lo de esta lección es CSS: no hay ni una línea de JavaScript midiendo la pantalla.
export default function ResponsivePage() {
  return (
    <Leccion slug="04-responsive">
      <p>
        Un diseño <strong>responsivo</strong> se adapta al tamaño de la pantalla. Con Tailwind se escribe{" "}
        <strong>mobile first</strong>: las clases sin prefijo son para el celular, y un prefijo como{" "}
        <code>md:</code> significa «desde este ancho en adelante».
      </p>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Prefijo</th>
              <th>Se aplica desde</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>(ninguno)</td>
              <td>0 px: celular</td>
              <td><code>grid-cols-2</code></td>
            </tr>
            <tr>
              <td><code>sm:</code></td>
              <td>640 px</td>
              <td><code>sm:grid-cols-3</code></td>
            </tr>
            <tr>
              <td><code>md:</code></td>
              <td>768 px: tablet</td>
              <td><code>md:flex-row</code></td>
            </tr>
            <tr>
              <td><code>lg:</code></td>
              <td>1024 px: portátil</td>
              <td><code>lg:grid-cols-4</code></td>
            </tr>
            <tr>
              <td><code>xl:</code></td>
              <td>1280 px: pantalla grande</td>
              <td><code>xl:text-6xl</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Ejemplo titulo="¿En qué tamaño estoy?" archivo="app/04-responsive/page.tsx">
        <p>
          Cambia el ancho de la ventana. Hay cinco textos y en cada tamaño solo uno es visible: lo deciden
          clases como <code>hidden md:inline</code>.
        </p>
        <Demo>
          <p className="rounded-xl bg-rose-100 p-4 text-center text-lg font-semibold sm:bg-amber-100 md:bg-emerald-100 lg:bg-sky-100 xl:bg-violet-100">
            <span className="sm:hidden">📱 Celular: menos de 640 px</span>
            <span className="hidden sm:inline md:hidden">📱 sm: 640 px o más</span>
            <span className="hidden md:inline lg:hidden">💻 md: 768 px o más</span>
            <span className="hidden lg:inline xl:hidden">💻 lg: 1024 px o más</span>
            <span className="hidden xl:inline">🖥️ xl: 1280 px o más</span>
          </p>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Grid: columnas que cambian" archivo="app/04-responsive/page.tsx">
        <p>
          Una cuadrícula con <code>grid-cols-2 sm:grid-cols-3 lg:grid-cols-4</code>: 2 columnas en el celular, 3
          en pantallas medianas y 4 en las grandes.
        </p>
        <Demo>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {frutas.map((fruta, i) => (
              <li key={fruta} className="grid h-20 place-items-center rounded-xl bg-white text-3xl shadow-sm">
                <span>
                  {fruta} <span className="text-sm text-suave">{i + 1}</span>
                </span>
              </li>
            ))}
          </ul>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Flex: de columna a fila" archivo="app/04-responsive/page.tsx">
        <p>
          Con <code>flex flex-col md:flex-row</code> los elementos van uno debajo del otro en el celular y uno al
          lado del otro desde <code>md</code>. También puedes mostrar u ocultar cosas y agrandar el texto.
        </p>
        <Demo>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="rounded-xl bg-acento-suave p-4 font-medium md:w-48 md:shrink-0">Menú lateral</div>
            <div className="flex-1 space-y-2 rounded-xl bg-white p-4 shadow-sm">
              <p className="text-xl font-bold md:text-3xl">Contenido principal</p>
              <p className="md:hidden">📱 Solo me ves en pantallas pequeñas (md:hidden)</p>
              <p className="hidden md:block">💻 Solo me ves desde md (hidden md:block)</p>
            </div>
          </div>
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          Abre las herramientas del navegador (F12) y activa la vista de celular (Ctrl + Shift + M) para probar
          tamaños de teléfono.
        </li>
        <li>
          Mira la cabecera del sitio en el celular: ¿qué desaparece? Busca la clase que lo hace en{" "}
          <code>app/layout.tsx</code>.
        </li>
        <li>
          Cambia <code>lg:grid-cols-4</code> por <code>lg:grid-cols-8</code> en el ejemplo del grid.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
