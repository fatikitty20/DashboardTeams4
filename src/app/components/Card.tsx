"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  variant?: "default" | "bordered" | "elevated" | "dark";
  padding?: "none" | "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export default function Card({
  children,
  title,
  subtitle,
  footer,
  variant = "default",
  padding = "md",
  style,
}: CardProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #e5e7eb",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    },
    bordered: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      border: "1.5px solid #6b8e23",
    },
    elevated: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    },
    dark: {
      backgroundColor: "#1a2f23",
      borderRadius: "12px",
      color: "#ffffff",
      boxShadow: "0 4px 16px rgba(26, 47, 35, 0.3)",
    },
  };

  const paddingStyles: Record<string, string> = {
    none: "0",
    sm: "12px",
    md: "20px",
    lg: "28px",
  };

  return (
    <div style={{ ...variantStyles[variant], overflow: "hidden", ...style }}>
      {(title || subtitle) && (
        <div style={{ padding: paddingStyles[padding], paddingBottom: "0" }}>
          {title && (
            <h3 style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 600,
              color: variant === "dark" ? "#ffffff" : "#1f2937"
            }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p style={{
              margin: "4px 0 0",
              fontSize: "14px",
              color: variant === "dark" ? "#9ca3af" : "#6b7280"
            }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div style={{ padding: paddingStyles[padding] }}>{children}</div>
      {footer && (
        <div
          style={{
            padding: paddingStyles[padding],
            paddingTop: "12px",
            borderTop: "1px solid #374151",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}