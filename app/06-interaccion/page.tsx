import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pasos } from "@/components/Pasos";
import { Pruebalo } from "@/components/Pruebalo";
import { Adivinanza } from "./Adivinanza";
import { CampoNombre } from "./CampoNombre";
import { Contador } from "./Contador";
import { DetectorEventos } from "./DetectorEventos";

export const metadata: Metadata = { title: "Interacción" };

const ciclo = [
  { icono: "🖼️", texto: "React dibuja la pantalla con el estado actual." },
  { icono: "👆", texto: "La persona hace algo: un clic, una tecla… (un evento)." },
  { icono: "✏️", texto: "Tu código cambia el estado con su función set…()." },
  { icono: "🔁", texto: "React vuelve a dibujar con el estado nuevo. Y vuelta al paso 1." },
];

// Esta página NO tiene "use client": es de servidor. Solo los componentes interactivos
// (Contador, Adivinanza…) llevan "use client" y envían JavaScript al navegador.
export default function InteraccionPage() {
  return (
    <Leccion slug="06-interaccion">
      <p>
        Hasta ahora todo se dibujó en el servidor y llegó al navegador como HTML, sin JavaScript. Para responder
        a un clic necesitamos JavaScript en el navegador: eso es un <strong>Client Component</strong>, un archivo
        que empieza con <code>{'"use client"'}</code>.
      </p>
      <p>
        Y para que la pantalla cambie, el componente necesita <strong>estado</strong>: una memoria que, al
        cambiar, hace que React vuelva a dibujar. Se crea con <code>useState</code>. Así funciona todo:
      </p>
      <Pasos pasos={ciclo} />

      <Ejemplo titulo="Contador: tu primer useState" archivo="app/06-interaccion/Contador.tsx">
        <p>
          Cada botón llama a <code>setCuenta</code> con un valor nuevo. React vuelve a dibujar el componente y el
          número cambia. Nunca cambiamos el número «a mano».
        </p>
        <Demo>
          <Contador />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Mostrar y ocultar" archivo="app/06-interaccion/Adivinanza.tsx">
        <p>
          Un estado <code>true</code>/<code>false</code> decide si algo se dibuja o no. Hay dos adivinanzas: el
          mismo componente con distintas props, y cada una con su propio estado.
        </p>
        <Demo>
          <div className="grid gap-3 sm:grid-cols-2">
            <Adivinanza pregunta="Tengo agujas y no sé coser, tengo números y no sé leer." respuesta="El reloj" />
            <Adivinanza pregunta="Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera." respuesta="La pera" />
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Escribir en un campo" archivo="app/06-interaccion/CampoNombre.tsx">
        <p>
          El input muestra lo que hay en el estado (<code>value</code>) y cada tecla actualiza el estado (
          <code>onChange</code>). Así el saludo y el contador de letras cambian mientras escribes.
        </p>
        <Demo>
          <CampoNombre />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Más eventos" archivo="app/06-interaccion/DetectorEventos.tsx">
        <p>
          Además de <code>onClick</code> hay eventos para el mouse, el teclado, el foco y muchos más. Todos reciben
          un objeto <code>evento</code> con información de lo que pasó.
        </p>
        <Demo>
          <DetectorEventos />
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>Haz que el contador sume de 5 en 5.</li>
        <li>
          Borra la línea <code>{'"use client"'}</code> de <code>Contador.tsx</code> y guarda: Next mostrará un
          error que dice que <code>useState</code> solo funciona en Client Components. Léelo y vuelve a ponerla.
        </li>
        <li>
          Agrega una tercera <code>{"<Adivinanza>"}</code> en este archivo, con tu propia pregunta.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
