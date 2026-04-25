"use client";

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onClose?: () => void;
}

export default function Alert({ children, variant = "info", title, onClose }: AlertProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    info: { backgroundColor: "#1e3a5f", borderColor: "#3b82f6", color: "#93c5fd" },
    success: { backgroundColor: "#14532d", borderColor: "#22c55e", color: "#86efac" },
    warning: { backgroundColor: "#451a03", borderColor: "#f59e0b", color: "#fcd34d" },
    error: { backgroundColor: "#450a0a", borderColor: "#ef4444", color: "#fca5a5" },
  };

  const icons: Record<string, ReactNode> = {
    info: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    success: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    ),
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px",
        borderRadius: "8px",
        border: `1px solid ${variantStyles[variant].borderColor}`,
        backgroundColor: variantStyles[variant].backgroundColor,
        color: variantStyles[variant].color,
      }}
    >
      <div style={{ flexShrink: 0, marginTop: "2px" }}>{icons[variant]}</div>
      <div style={{ flex: 1 }}>
        {title && (
          <h4 style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "15px" }}>{title}</h4>
        )}
        <div style={{ fontSize: "14px", lineHeight: 1.5 }}>{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: "4px",
            opacity: 0.7,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}