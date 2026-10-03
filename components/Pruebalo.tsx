// Ideas para experimentar al final de cada lección: cambiar el código, guardar y observar.
export function Pruebalo({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950 sm:p-6">
      <h2 className="text-lg font-semibold">🧪 Pruébalo tú</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">{children}</ul>
    </aside>
  );
}
