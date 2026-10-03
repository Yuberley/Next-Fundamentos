import type { Metadata } from "next";
import { Boton } from "@/components/Boton";
import { Demo, Ejemplo } from "@/components/Ejemplo";
import { Leccion } from "@/components/Leccion";
import { Pasos } from "@/components/Pasos";
import { Pruebalo } from "@/components/Pruebalo";
import { votar } from "./acciones";
import { obtenerMensajes, obtenerVotos, OPCIONES } from "./datos";
import { FormularioPizarra } from "./FormularioPizarra";

export const metadata: Metadata = { title: "Formularios y Server Actions" };

const recorrido = [
  { icono: "📝", texto: "Envías el formulario (sin escribir fetch ni crear una API)." },
  { icono: "🖥️", texto: "Next ejecuta la Server Action en el servidor con los datos del formulario." },
  { icono: "💾", texto: "La acción valida, guarda y llama a revalidatePath()." },
  { icono: "🔁", texto: "La página se vuelve a dibujar en el servidor con los datos nuevos." },
];

// Server Component: lee los datos directamente en el servidor, como en la lección 9.
export default function FormulariosPage() {
  const votos = obtenerVotos();
  const total = Object.values(votos).reduce((suma, n) => suma + n, 0);
  const mensajes = obtenerMensajes();

  return (
    <Leccion slug="10-formularios">
      <p>
        Hasta ahora el servidor solo <em>mostraba</em> datos. Con una <strong>Server Action</strong> el navegador
        también puede <em>enviarle</em> datos: es una función marcada con <code>{'"use server"'}</code> que pones
        en el <code>action</code> de un <code>{"<form>"}</code>.
      </p>
      <Pasos pasos={recorrido} />

      <Ejemplo titulo="Un formulario que llama al servidor: encuesta" archivo="app/10-formularios/acciones.ts">
        <p>
          Cada botón envía su opción (<code>name</code> y <code>value</code>) a la acción <code>votar</code>.
          Este formulario está en un Server Component y no usa estado de React: funciona incluso sin JavaScript.
        </p>
        <Demo>
          <div className="space-y-5">
            <p className="font-medium">¿Qué tema te ha gustado más?</p>
            <form action={votar} className="flex flex-wrap gap-2">
              {OPCIONES.map((opcion) => (
                <Boton key={opcion.id} name="opcion" value={opcion.id} variante="secundario">
                  {opcion.emoji} {opcion.nombre}
                </Boton>
              ))}
            </form>
            <ul className="space-y-3">
              {OPCIONES.map((opcion) => {
                const cantidad = votos[opcion.id];
                const porcentaje = total === 0 ? 0 : Math.round((cantidad / total) * 100);
                return (
                  <li key={opcion.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>
                        {opcion.emoji} {opcion.nombre}
                      </span>
                      <span className="text-suave">
                        {cantidad} {cantidad === 1 ? "voto" : "votos"} · {porcentaje}%
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-acento transition-all" style={{ width: `${porcentaje}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Demo>
      </Ejemplo>

      <Ejemplo titulo="Validar y mostrar «enviando»: useActionState" archivo="app/10-formularios/FormularioPizarra.tsx">
        <p>
          Este formulario es un Client Component que usa <code>useActionState</code>: así puede mostrar el error
          que devuelve el servidor junto al campo, y desactivar el botón mientras se publica. Prueba a enviarlo
          vacío.
        </p>
        <Demo>
          <div className="space-y-5">
            <FormularioPizarra />
            {mensajes.length === 0 ? (
              <p className="text-suave">La pizarra está vacía. ¡Escribe lo primero!</p>
            ) : (
              <ul className="space-y-2">
                {mensajes.map((mensaje) => (
                  <li key={mensaje.id} className="rounded-xl bg-white p-3 shadow-sm">
                    <span className="mr-2 text-xs text-suave">{mensaje.hora}</span>
                    {mensaje.texto}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Demo>
      </Ejemplo>

      <Pruebalo>
        <li>
          Abre esta página en dos pestañas, vota en una y recarga la otra: los datos viven en el servidor, no en tu
          navegador.
        </li>
        <li>
          Desactiva JavaScript (F12 → Ctrl + Shift + P → escribe «Disable JavaScript») y vota: ¡también funciona!
        </li>
        <li>
          Cambia el mínimo de 3 caracteres en <code>acciones.ts</code> y prueba de nuevo.
        </li>
        <li>Reinicia <code>npm run dev</code>: todo se borra, porque vive en memoria.</li>
      </Pruebalo>
    </Leccion>
  );
}
