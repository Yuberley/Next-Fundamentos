// Cada variante es un "estilo con nombre". El nombre dice QUÉ comunica, no de qué color es.
const variantes = {
  primario: "bg-acento text-white hover:bg-acento-oscuro",
  secundario: "border border-borde bg-white text-tinta hover:bg-slate-100",
  peligro: "bg-red-600 text-white hover:bg-red-700",
};

// React.ComponentProps<"button"> = todas las props de un <button> normal (onClick, disabled, type…)
// y además la nuestra: `variante`. El ? significa que es opcional.
type BotonProps = React.ComponentProps<"button"> & {
  variante?: "primario" | "secundario" | "peligro";
};

export function Boton({ variante = "primario", className = "", ...resto }: BotonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold transition active:scale-95 disabled:pointer-events-none disabled:opacity-50 ${variantes[variante]} ${className}`}
      // ...resto entrega al <button> todo lo demás que reciba: children, onClick, disabled…
      {...resto}
    />
  );
}
