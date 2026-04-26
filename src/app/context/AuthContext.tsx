"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("auth_token");
  });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const isPublicPath = pathname === "/login" || pathname === "/";

    if (!isAuthenticated && !isPublicPath) {
      router.push("/login");
    }

    // Solo redirigir automáticamente si no estamos en la página de login
    // La página de login maneja su propia redirección después del login
    if (isAuthenticated && isPublicPath && pathname !== "/" && pathname !== "/login") {
      router.push("/vistas");
    }
  }, [isAuthenticated, pathname, router]);

  const login = () => {
    localStorage.setItem("auth_token", "true");
    document.cookie = "auth_token=true; path=/; max-age=3600";
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    document.cookie = "auth_token=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
