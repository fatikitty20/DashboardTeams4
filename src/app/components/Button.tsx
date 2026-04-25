"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isLoading = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "8px",
    fontWeight: 500,
    cursor: disabled || isLoading ? "not-allowed" : "pointer",
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: "all 0.2s ease",
    border: "none",
    width: fullWidth ? "100%" : "auto",
    ...style,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "8px 16px", fontSize: "14px" },
    md: { padding: "12px 24px", fontSize: "16px" },
    lg: { padding: "16px 32px", fontSize: "18px" },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #6b8e23 0%, #556b2f 100%)",
      color: "white",
      boxShadow: "0 2px 8px rgba(107, 142, 35, 0.3)",
    },
    secondary: { backgroundColor: "#6b7280", color: "white" },
    outline: {
      backgroundColor: "transparent",
      color: "#6b8e23",
      border: "1.5px solid #6b8e23",
    },
    danger: {
      backgroundColor: "#ef4444",
      color: "white",
      boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
    },
    success: {
      background: "linear-gradient(135deg, #6b8e23 0%, #556b2f 100%)",
      color: "white",
      boxShadow: "0 2px 8px rgba(107, 142, 35, 0.3)",
    },
  };

  return (
    <button
      style={{ ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] }}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}