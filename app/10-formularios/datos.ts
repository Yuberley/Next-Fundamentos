/*
 * "Base de datos" de mentira: variables en la memoria del servidor.
 * Todos los que abran la página ven los mismos datos, y se borran al reiniciar `npm run dev`.
 * En un proyecto real aquí usarías una base de datos de verdad (BoxBet usa Supabase).
 */

export const OPCIONES = [
  { id: "estilos", nombre: "Estilos", emoji: "🎨" },
  { id: "navegacion", nombre: "Navegación", emoji: "🧭" },
  { id: "estado", nombre: "Estado", emoji: "🧠" },
  { id: "hooks", nombre: "Hooks", emoji: "🪝" },
];

const votos: Record<string, number> = { estilos: 0, navegacion: 0, estado: 0, hooks: 0 };

type Mensaje = { id: number; texto: string; hora: string };
const mensajes: Mensaje[] = [];

export function obtenerVotos() {
  return { ...votos };
}

export function sumarVoto(opcion: string) {
  votos[opcion] += 1;
}

export function obtenerMensajes() {
  return [...mensajes].reverse(); // los más nuevos primero
}

export function agregarMensaje(texto: string) {
  // Aquí SÍ usamos push: esto no es estado de React, es nuestra "base de datos".
  mensajes.push({
    id: mensajes.length + 1,
    texto,
    hora: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }),
  });
}
