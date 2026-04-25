"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Iconos SVG en línea
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const LogInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
    <polyline points="10 17 15 12 10 7"></polyline>
    <line x1="15" y1="12" x2="3" y2="12"></line>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setSuccess(false);

    if (email !== "kazita4@gmail.com") {
      setEmailError("Correo incorrecto");
      valid = false;
    }

    if (password !== "343gear2A@") {
      setPasswordError("Contraseña incorrecta");
      valid = false;
    }

    if (valid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSuccess(true);
        router.push("/vistas/dashboard");
      }, 800);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            <LogInIcon />
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

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e3a5f 100%)",
    position: "relative" as const,
    overflow: "hidden",
  },
  backgroundPattern: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 30%)
    `,
    pointerEvents: "none" as const,
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "24px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
    textAlign: "center" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "24px",
  },
  logo: {
    width: "72px",
    height: "72px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "8px",
    margin: 0,
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "32px",
    margin: "0 0 32px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
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
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "2px solid #e5e7eb",
    outline: "none",
    transition: "all 0.3s ease",
    fontSize: "15px",
    color: "#111827",
    backgroundColor: "#f9fafb",
    boxSizing: "border-box" as const,
  },
  showButton: {
    position: "absolute" as const,
    right: "14px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    marginTop: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "#ef4444",
    fontSize: "13px",
    marginTop: "-8px",
    textAlign: "left" as const,
    paddingLeft: "4px",
  },
  successMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#10b981",
    marginTop: "16px",
    fontWeight: "600",
    fontSize: "15px",
    padding: "12px",
    background: "rgba(16, 185, 129, 0.1)",
    borderRadius: "10px",
  },
  successIcon: {
    width: "20px",
    height: "20px",
    background: "#10b981",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
  loadingText: {
    color: "#fff",
  },
};