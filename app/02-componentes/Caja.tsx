// children = lo que escribas ENTRE <Caja> y </Caja>: texto, etiquetas u otros componentes.
// Así la Caja es un "marco" reutilizable y quien la usa decide qué va dentro.
export function Caja({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-borde bg-white p-4 shadow-sm">
      <h3 className="mb-2 font-semibold text-acento">{titulo}</h3>
      <div className="space-y-2 text-sm">{children}</div>
    </section>
  );
}
