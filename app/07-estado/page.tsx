import type { Metadata } from "next";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pruebalo } from "@/components/Pruebalo";
import { Buscador } from "./Buscador";
import { Dados } from "./Dados";
import { Marcador } from "./Marcador";
import { Paleta } from "./Paleta";

export const metadata: Metadata = { title: "Manejo del estado" };

export default function EstadoPage() {
  return (
    <Leccion slug="07-estado">
      <p>
        El estado es la <strong>memoria</strong> de un componente. En la lección 6 guardamos un número o un
        texto. Ahora veremos cuatro ideas que usarás siempre: listas, valores que se calculan, estado compartido
        entre componentes y, para casos más grandes, <code>useReducer</code>.
      </p>

      <Ejemplo titulo="Listas en el estado: una paleta de colores" archivo="app/07-estado/Paleta.tsx">
        <p>
          Para cambiar una lista no la modificamos: creamos <strong>una lista nueva</strong> (con{" "}
          <code>[...colores, nuevo]</code> o <code>.filter()</code>) y se la damos a <code>setColores</code>.
          Así React nota el cambio y vuelve a dibujar.
        </p>
        <Demo>
          <Paleta />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Estado derivado: lo que se calcula no se guarda" archivo="app/07-estado/Buscador.tsx">
        <p>
          El buscador solo guarda lo que escribes. La lista filtrada y el «X de 16» se{" "}
          <strong>calculan</strong> cada vez que React dibuja. Menos estado = menos errores.
        </p>
        <Demo>
          <Buscador />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Compartir estado: subirlo al padre" archivo="app/07-estado/Marcador.tsx">
        <p>
          Los dos equipos y el mensaje de abajo necesitan los mismos puntos. Por eso el estado vive en el padre (
          <code>Marcador</code>), que se lo pasa a cada hijo por props junto con una función para avisar «anoté».
          Los datos <strong>bajan</strong> por props; los avisos <strong>suben</strong> con funciones.
        </p>
        <Demo>
          <Marcador />
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Intermedio · useReducer: el estado con reglas" archivo="app/07-estado/Dados.tsx">
        <p>
          Cuando hay varias formas de cambiar el estado, conviene escribirlas juntas en un <strong>reducer</strong>
          : una función que recibe el estado y una acción (<code>lanzar</code>, <code>deshacer</code>,{" "}
          <code>reiniciar</code>) y devuelve el estado nuevo. El modo local de BoxBet funciona exactamente así.
        </p>
        <Demo>
          <Dados />
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          Limita la paleta a 8 colores (pista: <code>colores.length</code>).
        </li>
        <li>
          Haz que el buscador ignore las tildes, para que «limon» encuentre «Limón» (pista:{" "}
          <code className="break-all">{'texto.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "")'}</code>).
        </li>
        <li>
          Agrega al marcador un botón «Reiniciar» que ponga ambos equipos en 0. ¿En qué componente debe ir?
        </li>
        <li>
          En <code>Dados.tsx</code>, agrega una acción <code>{'"lanzar-dos"'}</code> que agregue dos tiradas a la
          vez.
        </li>
      </Pruebalo>
    </Leccion>
  );
}
