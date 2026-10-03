"use client";

import { Boton } from "@/components/Boton";
import { useCronometro } from "./useCronometro";

// Toda la lógica está en el hook: el componente solo dibuja.
function Reloj({ nombre }: { nombre: string }) {
  const { segundos, corriendo, alternar, reiniciar } = useCronometro();

  return (
    <div className="space-y-3 rounded-xl border border-borde bg-white p-4 shadow-sm">
      <p className="font-semibold">{nombre}</p>
      <p className="font-mono text-4xl font-bold tabular-nums">{segundos} s</p>
      <div className="flex flex-wrap gap-2">
        <Boton onClick={alternar}>{corriendo ? "⏸ Pausar" : "▶ Iniciar"}</Boton>
        <Boton variante="secundario" onClick={reiniciar}>
          Reiniciar
        </Boton>
      </div>
    </div>
  );
}

export function DosCronometros() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Reloj nombre="Jugador 1" />
      <Reloj nombre="Jugador 2" />
    </div>
  );
}
