import type { Metadata } from "next";
import { Boton } from "@/components/Boton";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";
import estilos from "./Tarjeta.module.css";

export const metadata: Metadata = { title: "Estilos" };

// La misma caja, sumando clases de Tailwind de a poco.
const pasos = [
  { clases: "", nota: "Sin clases: solo texto" },
  { clases: "p-4", nota: "p-4 → espacio interno (padding)" },
  { clases: "p-4 bg-acento text-white", nota: "bg-… y text-… → colores" },
  { clases: "p-4 bg-acento text-white rounded-xl shadow-lg", nota: "rounded-… y shadow-… → forma" },
  {
    clases: "p-4 bg-acento text-white rounded-xl shadow-lg transition hover:-rotate-2 hover:scale-105",
    nota: "hover:… → cambia al pasar el mouse",
  },
];

// Nuestros colores propios (definidos en app/globals.css, dentro de @theme).
const tokens = [
  { nombre: "fondo", clase: "bg-fondo" },
  { nombre: "tinta", clase: "bg-tinta" },
  { nombre: "suave", clase: "bg-suave" },
  { nombre: "borde", clase: "bg-borde" },
  { nombre: "acento", clase: "bg-acento" },
  { nombre: "acento-suave", clase: "bg-acento-suave" },
];

export default function EstilosPage() {
  const progreso = 70; // un valor calculado: lo usamos con style={{ }} más abajo

  return (
    <Leccion slug="03-estilos">
      <p>
        En Next.js puedes dar estilos de varias formas. En este proyecto (y en BoxBet) usamos sobre todo{" "}
        <strong>Tailwind CSS</strong>: muchas clases pequeñas que hacen una sola cosa y se combinan dentro de{" "}
        <code>className</code>.
      </p>

      <Ejemplo titulo="Tailwind paso a paso" archivo="app/03-estilos/page.tsx">
        <p>La misma caja, agregando clases de a poco. Pasa el mouse por la última.</p>
        <Demo>
          <ol className="space-y-4">
            {pasos.map((paso) => (
              <li key={paso.nota} className="grid items-center gap-2 sm:grid-cols-[12rem_1fr] sm:gap-4">
                <div className={paso.clases}>Hola 👋</div>
                <div className="space-y-1 text-sm">
                  <p className="font-medium">{paso.nota}</p>
                  <code className="text-xs">{paso.clases || "(ninguna clase)"}</code>
                </div>
              </li>
            ))}
          </ol>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Colores propios: design tokens" archivo="app/globals.css">
        <p>
          En <code>app/globals.css</code>, dentro de <code>@theme</code>, definimos los colores del sitio con
          nombres propios. Tailwind crea las clases solas: <code>bg-acento</code>, <code>text-suave</code>… Si
          cambias un color allí, cambia en todo el sitio. BoxBet hace exactamente lo mismo.
        </p>
        <Demo>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tokens.map((token) => (
              <li key={token.nombre} className="flex items-center gap-3">
                <span className={`size-10 shrink-0 rounded-lg border border-borde ${token.clase}`} />
                <code className="text-xs">{token.clase}</code>
              </li>
            ))}
          </ul>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Variantes: un componente, varios estilos" archivo="components/Boton.tsx">
        <p>
          El componente <code>Boton</code> elige sus clases según la prop <code>variante</code>. Lo vamos a usar
          en el resto de las lecciones.
        </p>
        <Demo>
          <div className="flex flex-wrap gap-3">
            <Boton>Guardar</Boton>
            <Boton variante="secundario">Cancelar</Boton>
            <Boton variante="peligro">Borrar</Boton>
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Otras formas: CSS global, CSS Modules y style" archivo="app/03-estilos/Tarjeta.module.css">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>CSS global</strong> (<code>app/globals.css</code>): reglas para todo el sitio. Por ejemplo,
            todos los <code>{"<code>"}</code> y las tablas se ven así por una regla de ese archivo.
          </li>
          <li>
            <strong>CSS Modules</strong> (<code>*.module.css</code>): CSS de toda la vida, pero sus clases solo
            existen en el componente que las importa. Next les cambia el nombre para que no choquen con otras.
          </li>
          <li>
            <strong>
              <code>{"style={{ }}"}</code>
            </strong>
            : para valores que se calculan, como el ancho de una barra de progreso.
          </li>
        </ul>
        <Demo>
          <div className="space-y-4">
            <div className={estilos.tarjeta}>Tarjeta con CSS Module</div>
            <p className="text-sm">
              Nombre real de su clase: <code className="break-all">{estilos.tarjeta}</code>
            </p>
            <div>
              <p className="mb-1 text-sm">Progreso: {progreso}%</p>
              <div className="h-3 rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-acento" style={{ width: `${progreso}%` }} />
              </div>
            </div>
          </div>
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          En <code>app/globals.css</code> cambia <code>--color-acento</code> por <code>#db2777</code> (rosado) y
          recorre el sitio.
        </li>
        <li>
          Agrega una variante <code>exito</code> (verde) en <code>components/Boton.tsx</code> y úsala aquí.
        </li>
        <li>
          Agrega un sexto paso a «Tailwind paso a paso» con <code>uppercase tracking-widest</code>.
        </li>
        <li>
          Cambia <code>progreso</code> a 25 y mira la barra.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
