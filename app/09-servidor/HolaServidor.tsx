// Sin "use client": es un Server Component. Su código se ejecuta en el servidor y NUNCA llega al navegador.
export function HolaServidor() {
  // Este mensaje sale en la TERMINAL donde corre `npm run dev`.
  // (En desarrollo, Next también lo copia en la consola del navegador con la etiqueta "Server").
  console.log("🖥️ HolaServidor se dibujó en el servidor");

  return (
    <div className="space-y-2">
      <p className="font-semibold">🖥️ Hola desde el servidor</p>
      <p className="text-sm text-suave">
        Me dibujé con Node.js <code>{process.version}</code> (sistema <code>{process.platform}</code>). El
        navegador no tiene <code>process</code>: este dato solo existe en el servidor.
      </p>
    </div>
  );
}
