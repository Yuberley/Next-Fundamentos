"use client";

import { useState } from "react";

const frutas = [
  "Aguacate", "Banano", "Cereza", "Durazno", "Fresa", "Guayaba", "Kiwi", "Limón",
  "Mango", "Manzana", "Maracuyá", "Naranja", "Papaya", "Pera", "Piña", "Uva",
];

export function Buscador() {
  // El ÚNICO estado es lo que escribe la persona.
  const [busqueda, setBusqueda] = useState("");

  // Estado DERIVADO: la lista visible se CALCULA en cada dibujo a partir de `busqueda`.
  // No hace falta otro useState: guardarla aparte solo serviría para que se desincronice.
  const visibles = frutas.filter((fruta) => fruta.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="space-y-3">
      <label className="block max-w-sm space-y-1">
        <span className="block text-sm font-medium">Buscar fruta</span>
        <input
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
          placeholder="Ej.: man"
          className="h-11 w-full rounded-xl border border-borde bg-white px-4"
        />
      </label>
      <p className="text-sm text-suave" aria-live="polite">
        {visibles.length} de {frutas.length} frutas
      </p>
      <ul className="flex flex-wrap gap-2">
        {visibles.map((fruta) => (
          <li key={fruta} className="rounded-full bg-white px-3 py-1 text-sm shadow-sm">
            {fruta}
          </li>
        ))}
      </ul>
      {visibles.length === 0 && <p>No hay frutas con «{busqueda}» 🍂</p>}
    </div>
  );
}
