"use client";

import { useRef } from "react";
import { Boton } from "@/components/Boton";

export function Enfocar() {
  // useRef guarda una referencia a un elemento REAL de la página (aquí, el <input>).
  // Empieza en null; React la llena cuando dibuja el elemento que tiene ref={campo}.
  const campo = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        ref={campo}
        aria-label="Campo de prueba"
        defaultValue="Hola, useRef"
        className="h-11 w-full max-w-xs rounded-xl border border-borde bg-white px-4"
      />
      {/* ?. significa: "si campo.current existe, llama a focus(); si es null, no hagas nada". */}
      <Boton onClick={() => campo.current?.focus()}>Enfocar</Boton>
      <Boton variante="secundario" onClick={() => campo.current?.select()}>
        Seleccionar el texto
      </Boton>
    </div>
  );
}
