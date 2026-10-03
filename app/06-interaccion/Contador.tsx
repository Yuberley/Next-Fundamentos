"use client"; // Client Component: su JavaScript llega al navegador, así puede responder a clics.

import { useState } from "react";
import { Boton } from "@/components/Boton";

export function Contador() {
  // useState(0) crea una "memoria" que empieza en 0. Devuelve dos cosas:
  //   cuenta    → el valor actual
  //   setCuenta → la función para cambiarlo (y que React vuelva a dibujar)
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Boton variante="secundario" onClick={() => setCuenta(cuenta - 1)}>
        −1
      </Boton>
      <output className="w-20 text-center text-4xl font-bold tabular-nums">{cuenta}</output>
      <Boton variante="secundario" onClick={() => setCuenta(cuenta + 1)}>
        +1
      </Boton>
      <Boton onClick={() => setCuenta(0)}>Reiniciar</Boton>
    </div>
  );
}
