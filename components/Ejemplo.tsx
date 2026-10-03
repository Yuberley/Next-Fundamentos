/*
 * Bloque de cada ejemplo: un título, el archivo que conviene abrir y el contenido.
 * <Demo> envuelve la parte "viva" (lo que puedes tocar) para distinguirla de la explicación.
 */
export function Ejemplo({
  titulo,
  archivo,
  children,
}: {
  titulo: string;
  archivo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-borde bg-white shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-borde bg-slate-50 px-5 py-3">
        <h2 className="text-lg font-semibold">{titulo}</h2>
        <code className="text-xs">📄 {archivo}</code>
      </header>
      <div className="space-y-4 p-5 leading-relaxed">{children}</div>
    </section>
  );
}

export function Demo({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border-2 border-dashed border-borde bg-fondo p-4 sm:p-5">{children}</div>;
}
