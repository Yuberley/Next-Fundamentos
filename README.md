# Next Fundamentos

Proyecto de clase para aprender **Next.js y React desde cero**. No es una aplicación: son 10 páginas
(lecciones), cada una con ejemplos pequeños que puedes tocar en el navegador y leer en el código.
Van de lo más simple a lo intermedio.

## Arrancar

Necesitas Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Cómo estudiar cada lección

1. **Mira:** abre la lección en el navegador y juega con los ejemplos.
2. **Lee:** abre su carpeta en el editor. Cada ejemplo indica qué archivo mirar (📄).
3. **Toca:** haz los «Pruébalo tú» del final. Cambia el código, guarda y observa qué pasa.

## Lecciones

| # | Lección | Qué aprendes | Carpeta |
|---|---|---|---|
| 1 | Maquetación | `page.tsx` = una URL, JSX, etiquetas semánticas, `layout.tsx` | [`app/01-maquetacion`](app/01-maquetacion) |
| 2 | Componentes y props | componentes, props, `children`, listas con `.map()` y `key` | [`app/02-componentes`](app/02-componentes) |
| 3 | Estilos | Tailwind, colores propios (`@theme`), variantes, CSS Modules, `style` | [`app/03-estilos`](app/03-estilos) |
| 4 | Diseño responsivo | mobile first, `sm:` `md:` `lg:`, grid y flex | [`app/04-responsive`](app/04-responsive) |
| 5 | Navegación | `Link`, rutas dinámicas `[planeta]`, `notFound()`, layouts anidados | [`app/05-navegacion`](app/05-navegacion) |
| 6 | Interacción | `"use client"`, eventos, `useState`, campos controlados | [`app/06-interaccion`](app/06-interaccion) |
| 7 | Manejo del estado | listas inmutables, estado derivado, levantar el estado, `useReducer` | [`app/07-estado`](app/07-estado) |
| 8 | Hooks | `useEffect` (con limpieza), `useRef`, hooks propios | [`app/08-hooks`](app/08-hooks) |
| 9 | Servidor y cliente | Server vs Client Components, `async`, `Suspense`, `loading.tsx`, `error.tsx` | [`app/09-servidor`](app/09-servidor) |
| 10 | Formularios y Server Actions | `"use server"`, `<form action>`, `useActionState`, `revalidatePath` | [`app/10-formularios`](app/10-formularios) |

Las lecciones 1 a 6 son **básicas**; de la 7 a la 10 son **intermedias**.

## Estructura

```
app/
  layout.tsx          marco común de todo el sitio (cabecera y pie)
  page.tsx            inicio (/)
  globals.css         Tailwind + colores del sitio (design tokens)
  not-found.tsx       página 404
  01-maquetacion/ …   una carpeta por lección; los componentes de cada una viven junto a su page.tsx
components/           piezas compartidas: Leccion, Ejemplo, Boton, Pasos, Pruebalo
lib/lecciones.ts      la lista de lecciones (la usan el inicio y el marco de cada lección)
```

Solo los archivos que se llaman `page.tsx` crean una URL. Por eso podemos guardar componentes
(`Contador.tsx`, `Paleta.tsx`…) en la misma carpeta de su lección.

## Mini glosario

- **Componente:** función que devuelve JSX. Se usa como una etiqueta: `<Saludo />`.
- **JSX:** la sintaxis parecida a HTML que escribimos dentro de JavaScript.
- **Props:** datos que un componente recibe de quien lo usa: `<Personaje nombre="Ada" />`.
- **Estado:** la memoria de un componente. Cuando cambia, React vuelve a dibujar.
- **Hook:** función de React que empieza con `use` (`useState`, `useEffect`…).
- **Server Component:** se ejecuta solo en el servidor. Es el tipo por defecto en Next.js.
- **Client Component:** empieza con `"use client"`. Su código también llega al navegador y puede ser interactivo.
- **Server Action:** función con `"use server"` que el navegador puede llamar, por ejemplo desde un `<form>`.

## TypeScript, lo mínimo

Los archivos son `.tsx`, pero solo usamos TypeScript para describir las props. Lee
`{ titulo: string; nivel: number }` como «este componente recibe un texto llamado `titulo` y un número
llamado `nivel`». Un `?` (`destacado?: boolean`) significa que la prop es opcional.

## Siguiente paso: BoxBet

El juego BoxBet usa todo esto en un proyecto real. Su recorrido para la clase está en
`docs/HOJA-DE-RUTA.md`, dentro del repositorio de BoxBet.
