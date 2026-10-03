"use client";

import { useState } from "react";

// Los eventos de React se escriben como props que empiezan con "on": onClick, onMouseEnter, onKeyDown…
export function DetectorEventos() {
  const [ultimo, setUltimo] = useState("ninguno todavía");
  const [encima, setEncima] = useState(false);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div
        onMouseEnter={() => {
          setEncima(true);
          setUltimo("onMouseEnter: el mouse entró");
        }}
        onMouseLeave={() => {
          setEncima(false);
          setUltimo("onMouseLeave: el mouse salió");
        }}
        onDoubleClick={() => setUltimo("onDoubleClick: doble clic")}
        className={`grid h-32 place-items-center rounded-xl border-2 border-dashed p-4 text-center select-none transition ${
          encima ? "border-acento bg-acento-suave" : "border-borde bg-white"
        }`}
      >
        {encima ? "¡Te veo! 👀 Haz doble clic" : "Pasa el mouse por aquí"}
      </div>
      <label className="space-y-1">
        <span className="block text-sm font-medium">Escribe para ver las teclas</span>
        <input
          // El evento trae información: aquí, qué tecla se presionó.
          onKeyDown={(evento) => setUltimo(`onKeyDown: tecla "${evento.key}"`)}
          onFocus={() => setUltimo("onFocus: entraste al campo")}
          onBlur={() => setUltimo("onBlur: saliste del campo")}
          className="h-11 w-full rounded-xl border border-borde bg-white px-4"
        />
      </label>
      <p className="sm:col-span-2" aria-live="polite">
        Último evento: <code>{ultimo}</code>
      </p>
    </div>
  );
}
