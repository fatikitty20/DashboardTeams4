# Dashboard PSP

Proyecto Next.js organizado con una arquitectura por capas inspirada en el articulo:

[Clean Code and Layered Architecture in Next.js: Organizing Frontend for Backend Consistency](https://medium.com/%40patrick.cunha336/clean-code-and-layered-architecture-in-next-js-organizing-frontend-for-backend-consistency-d2a4324c70fa)

## Por que guiarnos por esta arquitectura

Esta estructura vale la pena porque separa el proyecto por responsabilidad y no por mezcla de archivos.

### 1. El frontend habla el mismo idioma que el backend

El articulo propone trabajar con capas como `interfaces`, `api`, `entities` y `processes`.

Eso ayuda mucho porque:

- `interfaces` define contratos de datos.
- `api` concentra llamadas externas.
- `entities` maneja el estado de una sola entidad.
- `processes` coordina flujos mas completos.

Cuando el backend crezca, el frontend ya tendra lugares claros para cada tipo de logica.

### 2. Las rutas de Next.js quedan mas limpias

En Next.js, `app` debe enfocarse en rutas, layouts y navegacion.

En este proyecto:

- `src/app/login/page.tsx` solo representa la ruta `/login`
- la UI real vive en `src/components/login/pantalla-login.tsx`

Eso hace que la carpeta `app` sea facil de leer y siga la idea del App Router.

### 3. Evitamos mezclar UI con red y estado global

Un error comun es meter en un mismo archivo:

- JSX
- `fetch`
- manejo de errores
- estado global
- tipos

Con esta estructura, cada capa hace una sola cosa.

### 4. Escala mejor para un dashboard real

Un dashboard suele crecer hacia:

- autenticacion
- tablas
- filtros
- reportes
- permisos
- procesos multi-paso

Si la estructura ya tiene `entities` y `processes`, crecer duele menos.

### 5. Hace mas simple probar, cambiar y mantener

Si una llamada al backend cambia:

- tocas `api`

Si cambia el modelo de datos:

- tocas `interfaces`

Si cambia el estado de autenticacion:

- tocas `entities`

Si cambia el flujo de login:

- tocas `processes`

La UI queda mas protegida de cambios internos.

## Fuentes de referencia

- Articulo base: [Medium](https://medium.com/%40patrick.cunha336/clean-code-and-layered-architecture-in-next-js-organizing-frontend-for-backend-consistency-d2a4324c70fa)
- Redux Toolkit: [Getting Started](https://redux-toolkit.js.org/introduction/getting-started)
- Next.js App Router: [Project Structure](https://nextjs.org/docs/app/getting-started/project-structure)

## Estructura actual

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    login/
      page.tsx
  components/
    login/
      pantalla-login.tsx
      pantalla-login.module.css
  api/
    autenticacionApi.ts
  interfaces/
    autenticacion.interface.ts
  store/
    index.ts
    hooks.ts
    proveedorStore.tsx
    entities/
      autenticacionEntidad.ts
    processes/
      inicioSesionProceso.ts
```

## Que hace cada capa

### `app`

Contiene rutas y estructura de Next.js.

- `layout.tsx`: layout raiz
- `page.tsx`: redireccion desde `/`
- `login/page.tsx`: ruta `/login`

### `components`

Contiene la interfaz visual reutilizable.

- `components/login/pantalla-login.tsx`: formulario y tarjetas de resumen
- `components/login/pantalla-login.module.css`: estilos del componente

### `interfaces`

Define las formas de los datos.

- `CredencialesAcceso`
- `RespuestaAutenticacion`
- `EstadoAutenticacion`

### `api`

Separa la comunicacion con backend.

- `solicitarInicioSesion()`

Hoy devuelve un error controlado porque la API real aun no existe.

### `store/entities`

Representa estado y logica de una sola entidad.

En este caso:

- `autenticacionEntidad.ts`

Maneja:

- correo
- clave
- estado de la solicitud
- mensaje actual

### `store/processes`

Coordina flujos que usan varias capas.

En este caso:

- `inicioSesionProceso.ts`

Su trabajo es:

1. recibir credenciales
2. llamar a `api`
3. devolver exito o error

### `store/index.ts`

Construye el store global con `configureStore()`.

### `store/proveedorStore.tsx`

Conecta React con Redux usando `Provider`.

### `store/hooks.ts`

Expone hooks tipados para no repetir tipos en cada componente.

## Flujo del login

1. El usuario entra a `/`.
2. `src/app/page.tsx` redirige a `/login`.
3. `src/app/login/page.tsx` renderiza `PantallaLogin`.
4. `PantallaLogin` lee y actualiza estado desde Redux.
5. Al enviar el formulario, `PantallaLogin` dispara `iniciarSesionProceso`.
6. `iniciarSesionProceso` llama a `solicitarInicioSesion`.
7. La API responde con error porque aun no existe backend real.
8. `autenticacionEntidad` guarda el mensaje de error.
9. La UI muestra ese mensaje al usuario.

## Funciones importantes y donde son llamadas

### `DisenoRaiz`

Archivo: `src/app/layout.tsx`

- La llama Next.js automaticamente.
- Envuelve toda la aplicacion.

### `Inicio`

Archivo: `src/app/page.tsx`

- La llama Next.js cuando se entra a `/`.
- Redirige a `/login`.

### `PaginaLogin`

Archivo: `src/app/login/page.tsx`

- La llama Next.js cuando se entra a `/login`.
- Renderiza `PantallaLogin`.

### `PantallaLogin`

Archivo: `src/components/login/pantalla-login.tsx`

- La llama `PaginaLogin`.
- Dibuja la pantalla.
- Lee estado de Redux.
- Despacha acciones y procesos.

### `obtenerClaseDeTono`

Archivo: `src/components/login/pantalla-login.tsx`

- La llama `PantallaLogin`.
- Convierte un tono logico en una clase CSS.

### `manejarCambioCorreo`

Archivo: `src/components/login/pantalla-login.tsx`

- La llama el `input` de correo mediante `onChange`.
- Actualiza el correo en la entidad de autenticacion.

### `manejarCambioClave`

Archivo: `src/components/login/pantalla-login.tsx`

- La llama el `input` de clave mediante `onChange`.
- Actualiza la clave en la entidad de autenticacion.

### `manejarEnvio`

Archivo: `src/components/login/pantalla-login.tsx`

- La llama el formulario mediante `onSubmit`.
- Limpia mensajes anteriores.
- Ejecuta `iniciarSesionProceso`.

### `solicitarInicioSesion`

Archivo: `src/api/autenticacionApi.ts`

- La llama `iniciarSesionProceso`.
- Es el unico punto pensado para hablar con backend.

### `iniciarSesionProceso`

Archivo: `src/store/processes/inicioSesionProceso.ts`

- La llama `PantallaLogin`.
- Usa la capa `api`.
- Devuelve exito o error al store.

### `actualizarCorreo`

Archivo: `src/store/entities/autenticacionEntidad.ts`

- La llama `manejarCambioCorreo`.
- Guarda el correo en el estado global.

### `actualizarClave`

Archivo: `src/store/entities/autenticacionEntidad.ts`

- La llama `manejarCambioClave`.
- Guarda la clave en el estado global.

### `limpiarMensaje`

Archivo: `src/store/entities/autenticacionEntidad.ts`

- La llama `manejarEnvio`.
- Limpia mensajes anteriores antes de intentar el proceso.

## Explicacion del codigo principal

### `src/app/login/page.tsx`

```tsx
import { PantallaLogin } from "@/components/login/pantalla-login";

export default function PaginaLogin() {
  return <PantallaLogin />;
}
```

Linea por linea:

1. Importa el componente visual principal del login.
2. Declara la pagina que responde a la ruta `/login`.
3. Renderiza la pantalla real.

### `src/components/login/pantalla-login.tsx`

Este archivo concentra la UI del acceso.

Partes clave:

1. Tipos locales para tonos y tarjetas.
2. Datos `tarjetasResumen`.
3. `obtenerClaseDeTono()` para conectar datos con CSS.
4. Hooks de Redux para leer y escribir estado.
5. Funciones de eventos del formulario.
6. JSX del panel de acceso.

### `src/store/entities/autenticacionEntidad.ts`

Este archivo usa `createSlice()` de Redux Toolkit.

Su responsabilidad es:

- guardar el estado de autenticacion
- exponer acciones simples
- reaccionar a `pending`, `fulfilled` y `rejected` del proceso

### `src/store/processes/inicioSesionProceso.ts`

Este archivo usa `createAsyncThunk()`.

Su responsabilidad es:

- tomar credenciales
- llamar a la capa `api`
- traducir errores tecnicos a un mensaje usable

## Decisiones de clean code aplicadas

- Las rutas viven en `app`.
- La UI vive en `components`.
- Los contratos viven en `interfaces`.
- La red vive en `api`.
- El estado de una sola entidad vive en `entities`.
- Los flujos multi-paso viven en `processes`.
- Cada archivo tiene una responsabilidad principal.

## Cuando conviene esta estructura

Conviene cuando el proyecto va a crecer hacia:

- autenticacion real
- dashboard con varias fuentes de datos
- procesos de negocio
- alineacion con backend
- mantenimiento en equipo

No es solo para este login. Es una base para el dashboard completo.

## Como pedirme cambios despues

Puedes pedirme cosas como:

- `crea la entidad de usuarios siguiendo esta arquitectura`
- `agrega un proceso para recuperar clave`
- `conecta autenticacionApi.ts con Flask`
- `explicame el store paso a paso`
- `crea el dashboard con esta misma arquitectura`

## Ejecutar

```bash
npm install
npm run dev
```

## Validar

```bash
npm run lint
npm run build
```
