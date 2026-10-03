"use client";

import { useState } from "react";
import { Boton } from "@/components/Boton";

export function Adivinanza({ pregunta, respuesta }: { pregunta: string; respuesta: string }) {
  // Cada <Adivinanza> tiene SU PROPIO estado: abrir una no abre las demás.
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-3 rounded-xl bg-white p-4 shadow-sm">
      <p className="text-lg">🤔 {pregunta}</p>
      {/* Renderizado condicional: si visible es true, React dibuja el párrafo; si es false, no. */}
      {visible && <p className="font-semibold text-acento">💡 {respuesta}</p>}
      <Boton variante="secundario" onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar respuesta" : "Ver respuesta"}
      </Boton>
    </div>
  );
}
