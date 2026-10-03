// loading.tsx: Next lo muestra AUTOMÁTICAMENTE mientras carga la página de esta carpeta.
export default function Cargando() {
  return (
    <div className="grid flex-1 place-items-center px-4 py-24" role="status">
      <div className="flex flex-col items-center gap-4 text-center text-suave">
        <span className="size-10 animate-spin rounded-full border-4 border-acento border-t-transparent" aria-hidden />
        <p>
          Cargando la página lenta… <br />
          (esto que ves es <code>loading.tsx</code>)
        </p>
      </div>
    </div>
  );
}
