/**
 * Context de Autenticación
 * 
 * Este archivo proporciona el estado global de autenticación para toda la aplicación.
 * Usa la API de Context de React para compartir el estado entre componentes.
 * 
 * Funcionalidades:
 * - isAuthenticated: indica si el usuario ha iniciado sesión
 * - login(): método para iniciar sesión
 * - logout(): método para cerrar sesión
 * - Protección de rutas: redirige a login si no está autenticado
 * 
 * @module context/AuthContext
 */

// "use client" porque este componente usa hooks y se ejecuta en el navegador
"use client";

// Importamos los hooks y funciones necesarias de React y Next.js
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

// ============================================
// TIPOS (INTERFACES)
// ============================================

/**
 * Define la forma del contexto de autenticación
 * Esto asegura que todos los componentes que usen el contexto tengan la misma estructura
 */
interface AuthContextType {
  isAuthenticated: boolean; // true si el usuario está logueado
  login: () => void;        // Función para iniciar sesión
  logout: () => void;       // Función para cerrar sesión
}

// ============================================
// CREACIÓN DEL CONTEXTO
// ============================================

/**
 * Crea el contexto de autenticación con tipo undefined por defecto
 * El valor inicial es undefined para detectar si se usa fuera del Provider
 */
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================
// COMPONENTE PROVIDER
// ============================================

/**
 * AuthProvider - Proveedor del contexto de autenticación
 * 
 * Este componente envuelve la aplicación y proporciona el estado de autenticación.
 * Debe estar en el nivel más alto de la app (generalmente en layout.tsx)
 * 
 * @param children - Componentes hijos que tendrán acceso al contexto
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  
  /**
   * Estado de autenticación
   * Se inicializa leyendo localStorage para persistir la sesión
   * 
   * Nota: typeof window === "undefined" verifica si estamos en el servidor
   * durante el Server-Side Rendering (SSR) para evitar errores
   */
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("auth_token");
  });
  
  // useRouter: hook de Next.js para navegación programática
  const router = useRouter();
  
  // usePathname: hook de Next.js que devuelve la ruta actual
  const pathname = usePathname();

  /**
   * Effect que protege las rutas
   * 
   * Se ejecuta cada vez que cambia isAuthenticated, pathname o router
   * - Si no está autenticado y la ruta no es pública → redirige a /login
   * - Si está autenticado y la ruta es pública → redirige a /vistas
   */
  useEffect(() => {
    if (!pathname) return;

    // Rutas públicas que no requieren autenticación
    const isPublicPath = pathname === "/login" || pathname === "/";

    // Redirigir a login si no está autenticado y la ruta es privada
    if (!isAuthenticated && !isPublicPath) {
      router.push("/login");
    }

    // Redirigir a /vistas si está autenticado y la ruta es pública (excepto home)
    if (isAuthenticated && isPublicPath && pathname !== "/") {
      router.push("/vistas");
    }
  }, [isAuthenticated, pathname, router]);

  /**
   * Función para iniciar sesión
   * 1. Guarda un token en localStorage (persistencia)
   * 2. Guarda una cookie para uso en servidor
   * 3. Actualiza el estado de autenticación
   */
  const login = () => {
    localStorage.setItem("auth_token", "true");
    document.cookie = "auth_token=true; path=/; max-age=3600";
    setIsAuthenticated(true);
  };

  /**
   * Función para cerrar sesión
   * 1. Elimina el token de localStorage
   * 2. Elimina la cookie
   * 3. Actualiza el estado a no autenticado
   * 4. Redirige a la página de login
   */
  const logout = () => {
    localStorage.removeItem("auth_token");
    document.cookie = "auth_token=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.push("/login");
  };

  // Provee el contexto a los componentes hijos
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================
// HOOK PERSONALIZADO
// ============================================

/**
 * Hook para acceder al contexto de autenticación
 * 
 * Uso típico:
 * const { isAuthenticated, login, logout } = useAuth();
 * 
 * @throws Error si se usa fuera de un AuthProvider
 * @returns El contexto de autenticación
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
