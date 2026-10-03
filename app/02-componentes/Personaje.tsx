// Las props llegan como un objeto. Con { nombre, emoji, … } sacamos cada una para usarla directo.
// El tipo describe QUÉ recibe el componente: TypeScript te avisa si falta una o tiene otro tipo.
type PersonajeProps = {
  nombre: string;
  emoji: string;
  oficio: string;
  nivel: number; // del 1 al 5
  destacado?: boolean; // el ? significa "opcional"
};

export function Personaje({ nombre, emoji, oficio, nivel, destacado = false }: PersonajeProps) {
  // Dentro del componente puedes calcular cosas con JavaScript normal antes del return.
  const estrellas = "★".repeat(nivel) + "☆".repeat(5 - nivel);

  return (
    <article
      className={`space-y-1 rounded-xl border-2 bg-white p-4 text-center shadow-sm ${destacado ? "border-acento" : "border-borde"}`}
    >
      <p className="text-4xl" aria-hidden>
        {emoji}
      </p>
      <h3 className="font-semibold">{nombre}</h3>
      <p className="text-sm text-suave">{oficio}</p>
      <p className="text-sm">
        {/* aria-hidden: el lector de pantalla salta las estrellas y lee el texto "nivel 4/5". */}
        <span className="text-amber-500" aria-hidden>
          {estrellas}
        </span>{" "}
        nivel {nivel}/5
      </p>
      {/* Renderizado condicional: si `destacado` es true se dibuja la etiqueta; si no, nada. */}
      {destacado && <p className="text-xs font-semibold text-acento">⭐ Destacado</p>}
    </article>
  );
}
