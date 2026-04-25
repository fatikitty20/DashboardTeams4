/**
 * authService — capa de dominio de autenticación.
 * Mock con localStorage. Aislado para que mañana pueda
 * reemplazarse por Lovable Cloud / Supabase sin tocar la UI.
 */

const storageKey = "auth.session";

export interface AuthSession {
  email: string;
  loggedAt: number;
}

export const authService = {
  signIn(email: string, password: string): AuthSession {
    if (!email || !password) {
      throw new Error("Email y contraseña son obligatorios");
    }
    const session: AuthSession = { email, loggedAt: Date.now() };
    localStorage.setItem(storageKey, JSON.stringify(session));
    return session;
  },

  signOut(): void {
    localStorage.removeItem(storageKey);
  },

  getSession(): AuthSession | null {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as AuthSession;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return this.getSession() !== null;
  },
};
