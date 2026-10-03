"use client";

import { useState } from "react";
import { Boton } from "@/components/Boton";

// Componente HIJO: no tiene estado propio. Recibe el número para mostrarlo
// y una función (onAnotar) para AVISARLE al padre que hay que sumar.
function Equipo({
  nombre,
  color,
  puntos,
  onAnotar,
}: {
  nombre: string;
  color: string;
  puntos: number;
  onAnotar: () => void;
}) {
  return (
    <div className="space-y-2 rounded-xl border border-borde bg-white p-4 text-center shadow-sm">
      <p className={`font-semibold ${color}`}>{nombre}</p>
      <p className="text-5xl font-bold tabular-nums">{puntos}</p>
      <Boton variante="secundario" onClick={onAnotar}>
        +1 punto
      </Boton>
    </div>
  );
}

// Componente PADRE: guarda el estado porque varios hijos lo necesitan.
// A esto se le llama "levantar el estado": subirlo al ancestro común.
export function Marcador() {
  const [azul, setAzul] = useState(0);
  const [naranja, setNaranja] = useState(0);

  // Derivado otra vez: el mensaje se calcula, no se guarda.
  const mensaje = azul === naranja ? "Van empatados 🤝" : azul > naranja ? "Gana Azul 🔵" : "Gana Naranja 🟠";

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Equipo nombre="Azul" color="text-sky-600" puntos={azul} onAnotar={() => setAzul(azul + 1)} />
        <Equipo nombre="Naranja" color="text-orange-600" puntos={naranja} onAnotar={() => setNaranja(naranja + 1)} />
      </div>
      <p className="text-center text-lg font-medium" aria-live="polite">
        {mensaje}
      </p>
    </div>
  );
}
