import { connection } from "next/server";

/*
 * Funciones que SIMULAN una base de datos o una API lenta.
 * En un proyecto real aquí iría la consulta de verdad (BoxBet usa Supabase).
 */

// Espera `ms` milisegundos, como si el servidor estuviera consultando algo.
export async function simularConsulta(ms: number) {
  // connection() = "espera a que llegue una visita real". Sin esto, al compilar (npm run build)
  // Next generaría la página una sola vez y siempre mostraría ese mismo resultado.
  await connection();
  await new Promise((resolver) => setTimeout(resolver, ms));
}

export async function obtenerClima() {
  await simularConsulta(1500);
  return [
    { ciudad: "Bogotá", icono: "🌧️", temperatura: 14 },
    { ciudad: "Medellín", icono: "⛅", temperatura: 24 },
    { ciudad: "Cali", icono: "☀️", temperatura: 27 },
    { ciudad: "Cartagena", icono: "🌴", temperatura: 31 },
  ];
}

// Falla una vez sí y otra no, para poder ver error.tsx y el botón "Reintentar".
let intentos = 0;

export async function consultarServicioInestable() {
  await simularConsulta(600);
  intentos += 1;
  if (intentos % 2 === 1) {
    throw new Error("El servicio no respondió (error simulado).");
  }
  return "¡Esta vez sí respondió! 🎉";
}
