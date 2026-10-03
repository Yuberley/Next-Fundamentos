"use client";

import { useActionState } from "react";
import { Boton } from "@/components/Boton";
import { publicar } from "./acciones";

export function FormularioPizarra() {
  // useActionState conecta el formulario con la Server Action y devuelve tres cosas:
  //   estado   → lo último que respondió el servidor (por ejemplo, un error)
  //   accion   → lo que va en <form action={…}>
  //   enviando → true mientras el servidor trabaja
  const [estado, accion, enviando] = useActionState(publicar, {});

  return (
    <form action={accion} className="space-y-3">
      <label className="block max-w-md space-y-1">
        <span className="block text-sm font-medium">Escribe algo en la pizarra</span>
        {/* Sin required ni minLength a propósito: así ves la validación del SERVIDOR.
            En un proyecto real usa las dos: la del navegador ayuda, la del servidor protege. */}
        <input
          name="texto"
          defaultValue={estado.texto}
          aria-invalid={Boolean(estado.error)}
          aria-describedby="pizarra-ayuda"
          className={`h-11 w-full rounded-xl border bg-white px-4 ${estado.error ? "border-red-500" : "border-borde"}`}
        />
      </label>
      <p id="pizarra-ayuda" className={`text-sm ${estado.error ? "text-red-600" : "text-suave"}`}>
        {estado.error ?? "Entre 3 y 80 caracteres."}
      </p>
      <Boton type="submit" disabled={enviando}>
        {enviando ? "Publicando…" : "Publicar"}
      </Boton>
    </form>
  );
}
