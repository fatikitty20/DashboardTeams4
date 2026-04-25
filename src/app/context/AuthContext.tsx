"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const publicPaths = ["/login", "/"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setIsAuthenticated(!!token);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    if (isChecking) return;

    const isPublicPath = publicPaths.some((path) => pathname?.startsWith(path));

    if (!isAuthenticated && !isPublicPath) {
      router.push("/login");
    }

    if (isAuthenticated && isPublicPath && pathname !== "/") {
      router.push("/vistas/dashboard");
    }
  }, [isAuthenticated, isChecking, pathname, router]);

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

  if (isChecking) {
    return null;
  }

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
