# Copilot Instructions for DashboardTeams4

## Overview del Proyecto
DashboardTeams4 es una aplicación web de dashboard para gestión de equipos, construida con Next.js. Incluye funcionalidades de autenticación básica, páginas de login y vistas protegidas, con un enfoque en UI moderna y componentes reutilizables. El proyecto está en desarrollo inicial, con estructura preparada para expansión (API, store, interfaces).

## Stack Tecnológico
- **Framework**: Next.js 16.2.4 (App Router)
- **Librerías**: React 19.2.4, React DOM 19.2.4
- **Lenguaje**: TypeScript 6.0.3
- **Herramientas**: ESLint 9, Next.js ESLint config
- **Configuración**: Paths `@/*` para `src/*`, target ES2017, strict mode habilitado

## Arquitectura del Proyecto
### Estructura de Carpetas y Responsabilidades
- **`src/app/`**: Páginas y layouts del App Router de Next.js
  - `layout.tsx`: Layout raíz con AuthProvider y metadata
  - `page.tsx`: Página raíz que redirige a login
  - `globals.css`: Estilos globales con variables CSS para light/dark mode
  - `components/`: Componentes UI reutilizables (Button, Card, Input, etc.)
  - `context/`: Contextos de React (AuthContext para autenticación)
  - `login/`: Página de login
  - `vistas/`: Página protegida de vistas/dashboard
- **`src/api/`**: Llamadas a backend (actualmente vacío, preparado para APIs)
- **`src/interfaces/`**: Definiciones de tipos TypeScript (actualmente vacío)
- **`src/store/`**: Estado global
  - `entities/`: Entidades de estado (authEntity preparado)
  - `processes/`: Procesos complejos (loginProcess preparado)
- **`src/middleware.ts`**: Middleware de Next.js para protección de rutas
- **`public/`**: Archivos estáticos
- **`.github/`**: Instrucciones para Copilot (este archivo)

### Patrones Arquitectónicos
- **Separación de responsabilidades**: UI en components, estado en context/store, lógica en páginas
- **Protección de rutas**: Middleware verifica cookies para rutas protegidas
- **Autenticación**: Context con localStorage y cookies, redirecciones automáticas
- **Componentes reutilizables**: Props tipadas, variantes (primary, secondary, etc.)

## Convenciones de Clean Code
### Detectadas en el Código
- **TypeScript estricto**: Interfaces para props, tipos explícitos
- **Componentes funcionales**: Uso de hooks (useState, useEffect, useContext)
- **Separación de concerns**: CSS en línea con estilos inline (no CSS modules aún)
- **Comentarios explicativos**: En archivos preparados (api, store, interfaces)
- **Props destructuring**: En componentes para claridad
- **Early returns**: En middleware y context para lógica condicional

### Recomendadas
- Mantener consistencia en español para nombres de carpetas (vistas, interfaces)
- Usar CSS modules o Tailwind para estilos en lugar de inline styles
- Implementar error boundaries para manejo de errores
- Agregar tests unitarios con Jest/Testing Library
- Usar custom hooks para lógica reutilizable (ej. useAuth en lugar de context directo)

## Estilo Visual
### Paleta de Colores
- **Primario**: Verde oliva (#6b8e23, #556b2f) - usado en botones primary/success, borders
- **Secundario**: Gris (#6b7280) - botones secondary, iconos
- **Danger**: Rojo (#ef4444) - botones danger
- **Fondos**: Blanco (#ffffff), Gris claro (#e5e7eb), Dark mode (#0a0a0a, #1a2f23)
- **Texto**: Negro (#171717), Blanco, Gris (#ededed)

### Tipografía
- **Fuentes**: Geist Sans (sans-serif), Geist Mono (mono) - variables CSS --font-geist-sans, --font-geist-mono
- **Fallback**: Arial, Helvetica, sans-serif en globals.css

### UI Patterns
- **Botones**: Bordes redondeados (8px), gradientes lineales, sombras suaves, estados hover/disabled
- **Cards**: Bordes redondeados (12px), variantes (default, bordered, elevated, dark), padding configurable
- **Iconos**: SVG inline minimalistas, stroke width 1.5, colores consistentes
- **Layout**: Flexbox, responsive, overflow-x hidden
- **Espaciado**: Padding 8px-32px, gaps 8px, transiciones 0.2s ease

## Reglas para Copilot
### Qué DEBE hacer
- Seguir la documentación oficial de Next.js 16+ (leer `node_modules/next/dist/docs/` para cambios)
- Usar TypeScript con tipos estrictos y interfaces
- Mantener la estructura de carpetas existente (src/app/, components/, etc.)
- Implementar autenticación usando AuthContext y middleware
- Crear componentes reutilizables en `src/app/components/` con props tipadas
- Usar la paleta de colores y tipografía definida
- Agregar iconos SVG inline para consistencia
- Proteger rutas con middleware para páginas en `/vistas`
- Usar paths `@/*` para imports desde src

### Qué NO debe hacer
- Inventar APIs o backends no existentes (usar placeholders en `src/api/`)
- Cambiar la estructura de carpetas sin justificación
- Usar librerías no listadas en package.json
- Ignorar TypeScript (siempre tipar props, estados, etc.)
- Crear estilos inconsistentes con la paleta definida
- Usar CSS externo o frameworks sin aprobación
- Exponer datos sensibles (mantener autenticación básica)
- Crear páginas sin protección si requieren login

### Comportamiento General
- Preferir componentes funcionales con hooks
- Mantener código legible y comentado
- Seguir naming conventions (ver abajo)
- Validar cambios con ESLint antes de commits
- Usar early returns y destructuring para claridad
- Evitar código duplicado, reutilizar componentes

## Naming Conventions
- **Componentes**: PascalCase (Button, Card, AuthContext)
- **Archivos**: camelCase para TSX/TS (authContext.tsx), kebab-case para páginas (login/page.tsx)
- **Props/Estados**: camelCase (isLoading, variant)
- **Interfaces**: PascalCase con sufijo (ButtonProps, AuthContextType)
- **Variables CSS**: Kebab-case con -- ( --font-geist-sans)
- **Funciones/Hooks**: camelCase (useAuth, login)
- **Constantes**: UPPER_SNAKE_CASE si globales
- **Carpetas**: En español donde existente (vistas, interfaces), inglés para nuevo (utils, hooks)</content>
<parameter name="filePath">c:\xampp\htdocs\DashboardTeams4\.github\copilot-instructions.md