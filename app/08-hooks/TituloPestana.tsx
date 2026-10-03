"use client";

import { useEffect, useState } from "react";
import { Boton } from "@/components/Boton";

export function TituloPestana() {
  const [mensajes, setMensajes] = useState(0);

  // useEffect sincroniza React con algo que está FUERA de React: aquí, el título de la pestaña.
  // React lo ejecuta DESPUÉS de dibujar, y de nuevo cada vez que cambia algo de la lista [mensajes].
  useEffect(() => {
    document.title = mensajes > 0 ? `(${mensajes}) Hooks · Next Fundamentos` : "Hooks · Next Fundamentos";
  }, [mensajes]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Boton onClick={() => setMensajes(mensajes + 1)}>📩 Recibir mensaje</Boton>
      <Boton variante="secundario" onClick={() => setMensajes(0)}>
        Marcar como leídos
      </Boton>
      <p>
        Sin leer: <strong>{mensajes}</strong> · mira el título de la pestaña ↑
      </p>
    </div>
  );
}
