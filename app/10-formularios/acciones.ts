"use server"; // Todo lo que exporta este archivo se ejecuta en el SERVIDOR, aunque lo llame el navegador.

import { revalidatePath } from "next/cache";
import { agregarMensaje, OPCIONES, sumarVoto } from "./datos";

// Server Action para un <form>: recibe automáticamente los datos del formulario (FormData).
export async function votar(formData: FormData) {
  const opcion = String(formData.get("opcion"));

  // Nunca confíes en lo que llega del navegador: cualquiera puede enviar otra cosa.
  if (!OPCIONES.some((o) => o.id === opcion)) return;

  sumarVoto(opcion);
  // "Los datos de esta página cambiaron: vuelve a dibujarla".
  revalidatePath("/10-formularios");
}

// Lo que la acción le responde al formulario: un error (si lo hay) y el texto, para no borrarlo.
export type EstadoPizarra = { error?: string; texto?: string };

// Con useActionState la acción recibe primero el estado anterior y luego el FormData.
export async function publicar(_anterior: EstadoPizarra, formData: FormData): Promise<EstadoPizarra> {
  const texto = String(formData.get("texto") ?? "").trim();

  // Simulamos un servidor lento (0,8 s) para alcanzar a ver el botón "Publicando…".
  await new Promise((resolver) => setTimeout(resolver, 800));

  // Validación en el servidor: aquí se decide qué es válido, no en el navegador.
  if (texto.length < 3) return { error: "Escribe al menos 3 caracteres.", texto };
  if (texto.length > 80) return { error: "Máximo 80 caracteres.", texto };

  agregarMensaje(texto);
  revalidatePath("/10-formularios");
  return {}; // sin error: el formulario queda limpio
}
