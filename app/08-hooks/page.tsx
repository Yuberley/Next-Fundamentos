import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";
import { Cronometro } from "./Cronometro";
import { DosCronometros } from "./DosCronometros";
import { Enfocar } from "./Enfocar";
import { TituloPestana } from "./TituloPestana";

export const metadata: Metadata = { title: "Hooks" };

export default function HooksPage() {
  return (
    <Leccion slug="08-hooks">
      <p>
        Los <strong>hooks</strong> son funciones de React que empiezan con <code>use</code>. Ya usaste{" "}
        <code>useState</code> y <code>useReducer</code>. Tienen dos reglas:
      </p>
      <ol className="list-decimal space-y-1 pl-6">
        <li>Solo se llaman dentro de un componente (o dentro de otro hook).</li>
        <li>
          Siempre al principio del componente: nunca dentro de un <code>if</code>, un <code>for</code> o una
          función interna.
        </li>
      </ol>

      <Ejemplo titulo="useEffect: sincronizar con algo fuera de React" archivo="app/08-hooks/TituloPestana.tsx">
        <p>
          El título de la pestaña no es parte de lo que React dibuja. Con <code>useEffect</code> lo actualizamos
          cada vez que cambia <code>mensajes</code>: la lista <code>[mensajes]</code> le dice a React{" "}
          <strong>cuándo</strong> repetir el efecto.
        </p>
        <Demo>
          <TituloPestana />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="useEffect con limpieza: un cronómetro" archivo="app/08-hooks/Cronometro.tsx">
        <p>
          Al iniciar, el efecto crea un intervalo. Al pausar (o al salir de la página), la{" "}
          <strong>función de limpieza</strong> lo detiene. Todo lo que un efecto enciende, la limpieza lo apaga.
        </p>
        <Demo>
          <Cronometro />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="useRef: tocar un elemento de la página" archivo="app/08-hooks/Enfocar.tsx">
        <p>
          <code>useRef</code> te da acceso directo a un elemento real del HTML, por ejemplo para poner el cursor
          en un campo. Úsalo para lo que React no hace por ti: foco, selección, desplazamiento…
        </p>
        <Demo>
          <Enfocar />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Intermedio · Tu propio hook" archivo="app/08-hooks/useCronometro.ts">
        <p>
          Movimos la lógica del cronómetro a <code>useCronometro()</code>. Ahora cualquier componente puede
          tener un cronómetro con una línea, y cada uno tiene su propio estado. BoxBet tiene varios hooks así en{" "}
          <code>features/game/hooks/</code>.
        </p>
        <Demo>
          <DosCronometros />
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          En <code>Cronometro.tsx</code> borra la línea <code>{"return () => clearInterval(id);"}</code>. Inicia,
          pausa y vuelve a iniciar varias veces: ¿se detiene? ¿a qué velocidad va? Vuelve a ponerla.
        </li>
        <li>
          Cambia <code>[mensajes]</code> por <code>[]</code> en <code>TituloPestana.tsx</code>: ahora el efecto
          corre una sola vez y el título ya no se actualiza.
        </li>
        <li>
          Agrega a cada reloj un botón «Vuelta» que guarde el tiempo en una lista (useState con arreglos, como en
          la lección 7).
        </li>
      </Pruebalo>
    </Leccion>
  );
}
