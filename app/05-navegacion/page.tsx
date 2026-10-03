import { Ejemplo } from "@/components/Ejemplo";
import { Pruebalo } from "@/components/Pruebalo";

// Esta página es la URL /05-navegacion. El marco (Leccion y el menú) viene de layout.tsx.
export default function NavegacionPage() {
  return (
    <>
      <Ejemplo titulo="Link: cambiar de página sin recargar" archivo="app/05-navegacion/MenuPlanetas.tsx">
        <p>
          Con <code>{'<Link href="…">'}</code> Next cambia solo lo que es distinto (la página) y deja quieto el
          resto (los layouts). Por eso el texto que escribiste arriba sobrevive. Con una etiqueta{" "}
          <code>{"<a>"}</code> normal el navegador descarga todo de nuevo y lo pierde.
        </p>
        <p>
          Además, cuando publicas el sitio, <code>Link</code> descarga por adelantado las páginas de los enlaces
          que estás viendo, así que navegar se siente instantáneo.
        </p>
      </Ejemplo>

      <Ejemplo titulo="Rutas dinámicas: una página para muchos planetas" archivo="app/05-navegacion/[planeta]/page.tsx">
        <p>
          La carpeta <code>[planeta]</code> lleva corchetes: es un <strong>segmento dinámico</strong>. Un solo{" "}
          <code>page.tsx</code> atiende todas estas URL, y Next le entrega la parte variable en{" "}
          <code>params</code>:
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>params</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/05-navegacion/marte</code></td>
                <td><code>{'{ planeta: "marte" }'}</code></td>
              </tr>
              <tr>
                <td><code>/05-navegacion/tierra</code></td>
                <td><code>{'{ planeta: "tierra" }'}</code></td>
              </tr>
              <tr>
                <td><code>/05-navegacion/pluton</code></td>
                <td><code>{'{ planeta: "pluton" }'}</code>: no está en la lista → 404</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Ejemplo>

      <Ejemplo titulo="Enlace activo y página 404" archivo="app/05-navegacion/[planeta]/not-found.tsx">
        <p>
          El menú resalta dónde estás: <code>usePathname()</code> le dice la URL actual. Y si el planeta no
          existe (prueba con Plutón 😢), la página llama a <code>notFound()</code> y Next muestra el archivo{" "}
          <code>not-found.tsx</code> que está en la misma carpeta.
        </p>
      </Ejemplo>

      <Pruebalo>
        <li>
          Agrega un planeta en <code>app/05-navegacion/planetas.ts</code> (Urano o Neptuno): aparece en el menú y
          tiene su propia página, sin crear archivos nuevos.
        </li>
        <li>
          Escribe a mano en la barra de direcciones <code>/05-navegacion/sol</code>.
        </li>
        <li>
          Cambia el <code>{"<a>"}</code> del layout por un <code>{"<Link>"}</code> y repite la prueba del texto.
        </li>
      </Pruebalo>
    </>
  );
}
