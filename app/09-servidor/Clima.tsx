import { obtenerClima } from "./datos";

// Un Server Component puede ser async: ESPERA los datos y luego dibuja.
// No necesita useEffect, ni useState, ni pedir nada desde el navegador.
export async function Clima() {
  const ciudades = await obtenerClima(); // tarda 1,5 s (simulado)

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {ciudades.map((c) => (
        <li key={c.ciudad} className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm">
          <span>
            {c.icono} {c.ciudad}
          </span>
          <strong className="text-2xl">{c.temperatura} °C</strong>
        </li>
      ))}
    </ul>
  );
}
