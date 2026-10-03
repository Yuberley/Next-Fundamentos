// Un componente es una función que devuelve JSX. Su nombre SIEMPRE empieza con mayúscula.
// "export" permite usarlo en otros archivos con: import { Saludo } from "./Saludo";
export function Saludo() {
  return <p className="rounded-lg bg-white px-4 py-2 shadow-sm">¡Hola! 👋 Soy un componente.</p>;
}
