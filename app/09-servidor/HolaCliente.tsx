"use client"; // Client Component: además de dibujarse en el servidor, su código llega al navegador.

import { useState } from "react";
import { Boton } from "@/components/Boton";

export function HolaCliente() {
  const [clics, setClics] = useState(0);

  function saludar() {
    setClics(clics + 1);
    // Los eventos solo ocurren en el navegador: este mensaje sale en su consola (F12 → Console).
    console.log(`🌐 Clic número ${clics + 1}: esto corre en el navegador`);
  }

  return (
    <div className="space-y-2">
      <p className="font-semibold">🌐 Hola desde el navegador</p>
      <Boton onClick={saludar}>Saludar en la consola</Boton>
      <p className="text-sm text-suave">Clics: {clics}</p>
    </div>
  );
}
