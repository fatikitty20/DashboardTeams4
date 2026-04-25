import { useCallback, useEffect, useState } from "react";
import { authService, type AuthSession } from "./authService";

/** Hook reactivo encima de authService. */
export const useAuth = () => {
  const [session, setSession] = useState<AuthSession | null>(() => authService.getSession());

  useEffect(() => {
    const onStorage = () => setSession(authService.getSession());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const signIn = useCallback((email: string, password: string) => {
    const next = authService.signIn(email, password);
    setSession(next);
    return next;
  }, []);

  const signOut = useCallback(() => {
    authService.signOut();
    setSession(null);
  }, []);

  return { session, isAuthenticated: !!session, signIn, signOut };
};
