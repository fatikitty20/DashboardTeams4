"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";

// Iconos SVG minimalistas
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const LogInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");
    setSuccess(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      login();
      const redirect = searchParams?.get("redirect") || "/vistas";
      router.push(redirect);
    }, 800);
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            <ShieldIcon />
          </div>
        </div>

        <h1 style={styles.title}>Bienvenido</h1>
        <p style={styles.subtitle}>Ingresa tus credenciales para continuar</p>

        <div style={styles.form}>
          {/* INPUT CORREO */}
          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}>
              <MailIcon />
            </div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...styles.input,
                borderColor: emailError ? "#ef4444" : "#e5e7eb",
                paddingLeft: "44px",
              }}
            />
          </div>
          {emailError && <p style={styles.error}>{emailError}</p>}

          {/* INPUT CONTRASEÑA */}
          <div style={styles.inputGroup}>
            <div style={styles.inputIcon}>
              <LockIcon />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                ...styles.input,
                borderColor: passwordError ? "#ef4444" : "#e5e7eb",
                paddingLeft: "44px",
                paddingRight: "44px",
              }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showButton}
              type="button"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {passwordError && <p style={styles.error}>{passwordError}</p>}

          {/* BOTÓN LOGIN */}
          <button 
            onClick={handleLogin} 
            style={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span style={styles.loadingText}>Verificando...</span>
            ) : (
              <>
                <LogInIcon />
                Iniciar sesión
              </>
            )}
          </button>

          {success && (
            <div style={styles.successMessage}>
              <span style={styles.successIcon}>✓</span>
              Login correcto
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LoginForm />
    </Suspense>
  );
}

const styles = {
  container: {
    minHeight: "100vh" as const,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1a2f23 0%, #0d1f17 50%, #14251d 100%)",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  backgroundPattern: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(107, 142, 35, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(85, 107, 47, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(132, 204, 22, 0.05) 0%, transparent 30%),
      repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)
    `,
    pointerEvents: "none" as const,
  },
  card: {
    background: "rgba(255, 255, 255, 0.97)",
    backdropFilter: "blur(20px)",
    padding: "48px 40px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(107, 142, 35, 0.1)",
    textAlign: "center" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #6b8e23 0%, #556b2f 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    boxShadow: "0 8px 24px rgba(107, 142, 35, 0.35)",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    color: "#1a2f23",
    marginBottom: "6px",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "32px",
    margin: "0 0 32px 0",
    fontWeight: "400",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "18px",
  },
  inputGroup: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute" as const,
    left: "14px",
    zIndex: 1,
    pointerEvents: "none" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "10px",
    border: "1.5px solid #e5e7eb",
    outline: "none",
    transition: "all 0.25s ease",
    fontSize: "15px",
    color: "#1f2937",
    backgroundColor: "#f9fafb",
    boxSizing: "border-box" as const,
  },
  showButton: {
    position: "absolute" as const,
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    opacity: 0.7,
  },
  button: {
    width: "100%",
    padding: "14px 20px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #6b8e23 0%, #556b2f 50%, #6b8e23 100%)",
    backgroundSize: "200% 100%",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
    marginTop: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(107, 142, 35, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    letterSpacing: "0.3px",
  },
  error: {
    color: "#dc2626",
    fontSize: "13px",
    marginTop: "-12px",
    textAlign: "left" as const,
    paddingLeft: "4px",
    fontWeight: "500",
  },
  successMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#4a7c23",
    marginTop: "12px",
    fontWeight: "600",
    fontSize: "14px",
    padding: "12px 16px",
    background: "rgba(107, 142, 35, 0.12)",
    borderRadius: "10px",
    border: "1px solid rgba(107, 142, 35, 0.2)",
  },
  successIcon: {
    width: "18px",
    height: "18px",
    background: "#6b8e23",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "700",
  },
  loadingText: {
    color: "#fff",
  },
};