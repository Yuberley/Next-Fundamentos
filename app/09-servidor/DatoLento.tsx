import { simularConsulta } from "./datos";

// Tarda los segundos que le digas. Sirve para ver cómo llega cada parte de la página por separado.
export async function DatoLento({ segundos }: { segundos: number }) {
  await simularConsulta(segundos * 1000);
  return <p className="font-medium">✅ Llegué después de {segundos} s</p>;
}
