"use client";

import { useState } from "react";
import { Boton } from "@/components/Boton";

export function Paleta() {
  const [colores, setColores] = useState(["#4f46e5", "#f59e0b", "#10b981"]);
  const [nuevo, setNuevo] = useState("#ec4899");

  function agregar() {
    if (colores.includes(nuevo)) return; // sin repetidos (y así cada color sirve como key)
    // ❌ colores.push(nuevo) cambiaría el arreglo "por dentro" y React no se enteraría.
    // ✅ Creamos un arreglo NUEVO: los colores anteriores (...colores) más el nuevo.
    setColores([...colores, nuevo]);
  }

  function quitar(color: string) {
    // filter también crea un arreglo nuevo: todos menos ese color.
    setColores(colores.filter((c) => c !== color));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="color"
          value={nuevo}
          onChange={(evento) => setNuevo(evento.target.value)}
          aria-label="Elige un color"
          className="h-11 w-16 cursor-pointer rounded-lg border border-borde bg-white p-1"
        />
        <Boton onClick={agregar}>Agregar {nuevo}</Boton>
      </div>
      <ul className="flex flex-wrap gap-3">
        {colores.map((color) => (
          <li key={color} className="space-y-1 text-center">
            <button
              type="button"
              onClick={() => quitar(color)}
              aria-label={`Quitar ${color}`}
              title="Clic para quitar"
              // style={{ }}: el color viene de los datos, así que no puede ser una clase fija de Tailwind.
              style={{ backgroundColor: color }}
              className="block size-16 rounded-xl shadow-md transition hover:scale-105"
            />
            <code className="text-xs">{color}</code>
          </li>
        ))}
      </ul>
      <p className="text-sm text-suave">{colores.length} colores · haz clic en un color para quitarlo</p>
    </div>
  );
}
