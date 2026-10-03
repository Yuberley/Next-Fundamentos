import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";
import { Caja } from "./Caja";
import { Personaje } from "./Personaje";
import { Saludo } from "./Saludo";

export const metadata: Metadata = { title: "Componentes y props" };

// Datos de ejemplo: un arreglo de objetos. Abajo creamos un <Personaje> por cada uno.
const equipo = [
  { nombre: "Ada", emoji: "👩‍💻", oficio: "Programadora", nivel: 5 },
  { nombre: "Lin", emoji: "🧑‍🚀", oficio: "Astronauta", nivel: 4 },
  { nombre: "Tomás", emoji: "🧑‍🍳", oficio: "Chef", nivel: 3 },
  { nombre: "Sofía", emoji: "👩‍🎨", oficio: "Ilustradora", nivel: 4 },
];

export default function ComponentesPage() {
  return (
    <Leccion slug="02-componentes">
      <p>
        En la lección 1 copiamos casi las mismas clases en 5 cajas. Un <strong>componente</strong> evita eso:
        escribes una pieza una vez y la usas todas las veces que quieras, como si fuera una etiqueta nueva.
      </p>

      <Ejemplo titulo="Tu primer componente" archivo="app/02-componentes/Saludo.tsx">
        <p>
          Un componente es una <strong>función que devuelve JSX</strong> y su nombre empieza con mayúscula. Se
          usa como una etiqueta: <code>{"<Saludo />"}</code>. Aquí lo usamos tres veces:
        </p>
        <Demo>
          <div className="space-y-2">
            <Saludo />
            <Saludo />
            <Saludo />
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Props: datos que entran al componente" archivo="app/02-componentes/Personaje.tsx">
        <p>
          Las <strong>props</strong> son como los atributos de HTML: le pasan datos al componente para que cada
          uso sea distinto. Los textos van entre comillas, y los números o los booleanos entre llaves.
        </p>
        <Demo>
          <div className="grid gap-3 sm:grid-cols-3">
            <Personaje nombre="Ada" emoji="👩‍💻" oficio="Programadora" nivel={5} />
            <Personaje nombre="Lin" emoji="🧑‍🚀" oficio="Astronauta" nivel={4} destacado />
            <Personaje nombre="Tomás" emoji="🧑‍🍳" oficio="Chef" nivel={3} />
          </div>
        </Demo>
        <p className="text-sm text-suave">
          El segundo lleva <code>destacado</code> sin valor: en JSX eso equivale a <code>{"destacado={true}"}</code>.
        </p>
      </Ejemplo>

      <Ejemplo titulo="children: lo que va entre las etiquetas" archivo="app/02-componentes/Caja.tsx">
        <p>
          Todo lo que escribes entre <code>{"<Caja>"}</code> y <code>{"</Caja>"}</code> le llega al componente
          en una prop especial llamada <code>children</code>. Así funcionan el marco de cada lección (
          <code>components/Leccion.tsx</code>) y cada bloque de ejemplo (<code>components/Ejemplo.tsx</code>).
        </p>
        <Demo>
          <div className="grid gap-3 sm:grid-cols-2">
            <Caja titulo="Consejo">
              <p>Guarda el archivo y mira el navegador: se actualiza solo.</p>
            </Caja>
            <Caja titulo="Lista de compras">
              <ul className="list-disc pl-5">
                <li>Pan</li>
                <li>Queso</li>
                <li>Café</li>
              </ul>
            </Caja>
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Listas: un componente por cada dato" archivo="app/02-componentes/page.tsx">
        <p>
          Con <code>.map()</code> convertimos un arreglo de datos en un arreglo de componentes. Cada elemento
          necesita una <code>key</code> única para que React sepa cuál es cuál cuando la lista cambie.
        </p>
        <Demo>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {equipo.map((persona) => (
              <Personaje
                key={persona.nombre}
                nombre={persona.nombre}
                emoji={persona.emoji}
                oficio={persona.oficio}
                nivel={persona.nivel}
              />
            ))}
          </div>
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          Agrega un personaje nuevo al arreglo <code>equipo</code> (arriba en este archivo) y mira cómo aparece
          otra tarjeta.
        </li>
        <li>
          Borra <code>{"key={persona.nombre}"}</code>, guarda y abre la consola del navegador (F12): React se
          queja. Vuelve a ponerla.
        </li>
        <li>
          Agrega a <code>Personaje</code> una prop nueva, <code>frase</code>, y muéstrala debajo del oficio.
          TypeScript te marcará en rojo los lugares donde falta.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
