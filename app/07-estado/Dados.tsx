"use client";

import { useReducer } from "react";
import { Boton } from "@/components/Boton";

// 1. El estado: la lista de tiradas.
type Estado = { tiradas: number[] };

// 2. Las acciones: TODAS las formas en que puede cambiar el estado, cada una con su nombre.
type Accion = { tipo: "lanzar"; valor: number } | { tipo: "deshacer" } | { tipo: "reiniciar" };

// 3. El reducer: (estado actual, acción) → estado nuevo.
//    Debe ser una función PURA: no usa Math.random ni la hora; todo lo que necesita llega en la acción.
function reducer(estado: Estado, accion: Accion): Estado {
  switch (accion.tipo) {
    case "lanzar":
      return { tiradas: [...estado.tiradas, accion.valor] };
    case "deshacer":
      return { tiradas: estado.tiradas.slice(0, -1) };
    case "reiniciar":
      return { tiradas: [] };
  }
}

const CARAS = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

export function Dados() {
  // useReducer devuelve el estado y `dispatch`, la función para enviar acciones al reducer.
  const [estado, dispatch] = useReducer(reducer, { tiradas: [] });

  // Derivados: se calculan a partir de las tiradas.
  const total = estado.tiradas.reduce((suma, valor) => suma + valor, 0);
  const ultima = estado.tiradas.at(-1);
  const hayTiradas = estado.tiradas.length > 0;

  function lanzar() {
    // Lo aleatorio se decide AQUÍ, en el evento, y viaja dentro de la acción.
    const valor = Math.floor(Math.random() * 6) + 1;
    dispatch({ tipo: "lanzar", valor });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <span className="text-7xl leading-none" aria-hidden>
          {ultima ? CARAS[ultima - 1] : "🎲"}
        </span>
        <div aria-live="polite">
          <p className="text-sm text-suave">{ultima ? `Salió ${ultima}` : "Sin lanzar"}</p>
          <p className="text-4xl font-bold tabular-nums">Total: {total}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Boton onClick={lanzar}>Lanzar dado</Boton>
        <Boton variante="secundario" onClick={() => dispatch({ tipo: "deshacer" })} disabled={!hayTiradas}>
          Deshacer
        </Boton>
        <Boton variante="peligro" onClick={() => dispatch({ tipo: "reiniciar" })} disabled={!hayTiradas}>
          Reiniciar
        </Boton>
      </div>
      <p className="text-sm text-suave">Tiradas: {hayTiradas ? estado.tiradas.join(" + ") : "ninguna"}</p>
    </div>
  );
}
