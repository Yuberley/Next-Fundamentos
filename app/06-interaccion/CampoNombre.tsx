"use client";

import { useState } from "react";

// Campo "controlado": lo que muestra el input viene del estado, y cada tecla actualiza el estado.
export function CampoNombre() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="space-y-3">
      <label className="block max-w-sm space-y-1">
        <span className="block text-sm font-medium">Tu nombre</span>
        <input
          value={nombre}
          // onChange se ejecuta con cada tecla. evento.target es el input; .value, su texto.
          onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Escribe aquí…"
          className="h-11 w-full rounded-xl border border-borde bg-white px-4"
        />
      </label>
      <p className="text-xl">
        Hola, <strong>{nombre || "desconocido"}</strong> 👋
      </p>
      <p className="text-sm text-suave">{nombre.length} caracteres</p>
    </div>
  );
}
