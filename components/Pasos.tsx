// Una secuencia de pasos numerados, para explicar "qué pasa y en qué orden".
export function Pasos({ pasos }: { pasos: { icono: string; texto: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {pasos.map((paso, i) => (
        <li key={paso.texto} className="rounded-xl border border-borde bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-acento">Paso {i + 1}</p>
          <p className="mt-1 text-2xl" aria-hidden>
            {paso.icono}
          </p>
          <p className="mt-1 text-sm">{paso.texto}</p>
        </li>
      ))}
    </ol>
  );
}
