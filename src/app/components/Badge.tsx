"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md";
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
}: BadgeProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: { backgroundColor: "#4b5563", color: "white" },
    success: { backgroundColor: "#22c55e", color: "white" },
    warning: { backgroundColor: "#f59e0b", color: "black" },
    danger: { backgroundColor: "#ef4444", color: "white" },
    info: { backgroundColor: "#3b82f6", color: "white" },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "2px 8px", fontSize: "11px" },
    md: { padding: "4px 12px", fontSize: "13px" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "9999px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
    >
      {children}
    </span>
  );
}