/**
 * Página de inicio de sesión (Login)
 * 
 * Componente que renderiza el formulario de autenticación.
 * Maneja la validación de credenciales y la navegación después del login.
 * 
 * @module login/page
 */

// "use client" indica que este componente se ejecuta en el navegador
// Esto es necesario porque usamos hooks de React (useState) y navegación
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { EyeIcon, EyeOffIcon, LogInIcon, MailIcon, LockIcon } from "../components/icons";
import styles from "./login.module.css";

// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Valida el formato del correo electrónico
 * @param email - Correo a validar
 * @returns Mensaje de error vacío si es válido, o mensaje de error
 */
const validateEmail = (email: string): string => {
  if (!email) return "El correo es requerido";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Ingresa un correo válido";
  return "";
};

/**
 * Valida la contraseña del usuario
 * @param password - Contraseña a validar
 * @returns Mensaje de error vacío si es válido, o mensaje de error
 */
const validatePassword = (password: string): string => {
  if (!password) return "La contraseña es requerida";
  if (password.length < 6) return "Mínimo 6 caracteres";
  return "";
};


// ============================================
// COMPONENTE PRINCIPAL
// ============================================

/**
 * Componente de página de login
 * Maneja el estado del formulario y la autenticación del usuario
 */
export default function Login() {
  // useRouter: hook de Next.js para navegación programática
  const router = useRouter();
  
  // useSearchParams: obtiene parámetros de URL (ej: ?redirect=/dashboard)
  const searchParams = useSearchParams();
  
  // useAuth: hook personalizado que proporciona el contexto de autenticación
  const { login } = useAuth();
  
  // Estados locales del formulario
  const [email, setEmail] = useState("");           // Valor del campo email
  const [password, setPassword] = useState("");     // Valor del campo contraseña
  const [emailError, setEmailError] = useState(""); // Error de validación del email
  const [passwordError, setPasswordError] = useState(""); // Error de validación del password
  const [success, setSuccess] = useState(false);    // Muestra mensaje de éxito
  const [showPassword, setShowPassword] = useState(false); // Alternar visibilidad password
  const [isLoading, setIsLoading] = useState(false); // Estado de carga durante login

  /**
   * Maneja el evento de submit del formulario de login
   * 1. Valida los campos
   * 2. Si hay errores, los muestra
   * 3. Si es válido, simula el login y redirige
   */
  const handleLogin = () => {
    // Validar campos
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (emailErr || passwordErr) {
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return;
    }

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
    <div className={styles.container}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <LogInIcon />
          </div>
        </div>
        
        <h1 className={styles.title}>Bienvenido</h1>
        <p className={styles.subtitle}>Ingresa tus credenciales para continuar</p>

        <div className={styles.form}>
          {/* INPUT CORREO */}
          <div className={styles.inputGroup}>
            <div className={styles.inputIcon}>
              <MailIcon />
            </div>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              style={{ borderColor: emailError ? "#ef4444" : undefined, paddingLeft: "44px" }}
            />
          </div>
          {emailError && <p className={styles.error}>{emailError}</p>}

          {/* INPUT CONTRASEÑA */}
          <div className={styles.inputGroup}>
            <div className={styles.inputIcon}>
              <LockIcon />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              style={{ borderColor: passwordError ? "#ef4444" : undefined, paddingLeft: "44px", paddingRight: "44px" }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className={styles.showButton}
              type="button"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {passwordError && <p className={styles.error}>{passwordError}</p>}

          {/* BOTÓN LOGIN */}
          <button 
            onClick={handleLogin} 
            className={styles.button}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.loadingText}>Verificando...</span>
            ) : (
              <>
                <LogInIcon />
                Iniciar sesión
              </>
            )}
          </button>

          {success && (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              Login correcto
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
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