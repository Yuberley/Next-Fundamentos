import { useEffect, useState } from "react";

/*
 * Un hook propio es una función que empieza con "use" y usa otros hooks por dentro.
 * Es la misma lógica de Cronometro.tsx, movida aquí para poder reutilizarla.
 * Cada componente que lo llame obtiene SU PROPIO estado.
 */
export function useCronometro() {
  const [decimas, setDecimas] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return;
    const id = setInterval(() => setDecimas((d) => d + 1), 100);
    return () => clearInterval(id);
  }, [corriendo]);

  // Devolvemos solo lo que necesita quien lo use: el tiempo y las acciones.
  return {
    segundos: (decimas / 10).toFixed(1),
    corriendo,
    alternar: () => setCorriendo(!corriendo),
    reiniciar: () => {
      setCorriendo(false);
      setDecimas(0);
    },
  };
}
