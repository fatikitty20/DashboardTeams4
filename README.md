# Dashboard Next.js - Clean Code

Este proyecto es un Dashboard básico con "Hola Mundo" siguiendo principios de Clean Code.

---

## 📁 Estructura de Carpetas

```
src/
├── app/                  # Páginas principales de la app
│   └── page.tsx          # Página de inicio (Hola Mundo)
│
├── components/           # Componentes reutilizables
│   └── Saludo.tsx        # Componente que muestra "Hola Mundo"
│
├── api/                  # (Reservado) Para conectar con backend
├── interfaces/           # (Reservado) Para definir tipos de datos
├── store/                # (Reservado) Para estado global
│   ├── entities/         #   - Entidades (datos individuales)
│   └── processes/        #   - Procesos (flujos complejos)
└── pages/                # (Reservado) Para más páginas
```

---

## 🚀 Cómo ejecutar

```bash
cd next-app
npm install
npm run dev
```

Luego abre: **http://localhost:3000**

---

## 📝 Explicación de cada archivo

### `src/components/Saludo.tsx`
```typescript
import React from "react";  // Importamos React para usar componentes

// Esta función es un componente: recibe nada y retorna HTML
export function Saludo() {
  return <h1>Hola Mundo</h1>;  // Retorna un título
}
```

### `src/app/page.tsx`
```typescript
import { Saludo } from "@/components/Saludo";  // Importamos nuestro componente

// Esta es la página principal
export default function Home() {
  return (
    <main>  // Etiqueta semántica para contenido principal
      <Saludo />  // Usamos nuestro componente
    </main>
  );
}
```

---

## 📌 Carpetas reservadas (para después)

| Carpeta | Para qué sirve |
|---------|----------------|
| `api/` | Hacer llamadas a un servidor (login, datos, etc.) |
| `interfaces/` | Definir la forma de los datos (tipos TypeScript) |
| `store/entities/` | Guardar estado global (usuario logueado, etc.) |
| `store/processes/` | Procesos complejos (checkout, pagos, etc.) |
| `pages/` | Más páginas (login, perfil, dashboard, etc.) |

---

## ✅ Clean Code aplicado

- **Nombres claros**: `Saludo` dice exactamente qué hace
- **Una responsabilidad**: cada archivo hace una sola cosa
- **Comentarios útiles**: explican sin complicar
- **Código simple**: sin tipos complejos ni funciones largas

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
