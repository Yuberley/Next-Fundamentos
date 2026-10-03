"use client";

import { useEffect, useState } from "react";
import { Boton } from "@/components/Boton";

export function Cronometro() {
  const [decimas, setDecimas] = useState(0); // décimas de segundo
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return; // en pausa no hay nada que hacer

    // Cada 100 ms sumamos una décima. Usamos setDecimas((d) => d + 1) y no setDecimas(decimas + 1)
    // porque dentro del intervalo `decimas` quedaría "congelado" en el valor que tenía al empezar.
    const id = setInterval(() => setDecimas((d) => d + 1), 100);

    // LIMPIEZA: React la ejecuta antes de repetir el efecto y cuando el componente desaparece.
    // Sin ella, el intervalo seguiría vivo aunque pauses.
    return () => clearInterval(id);
  }, [corriendo]);

  return (
    <div className="space-y-4">
      <p className="font-mono text-5xl font-bold tabular-nums">{(decimas / 10).toFixed(1)} s</p>
      <div className="flex flex-wrap gap-2">
        <Boton onClick={() => setCorriendo(!corriendo)}>{corriendo ? "⏸ Pausar" : "▶ Iniciar"}</Boton>
        <Boton
          variante="secundario"
          onClick={() => {
            setCorriendo(false);
            setDecimas(0);
          }}
        >
          Reiniciar
        </Boton>
      </div>
    </div>
  );
}
