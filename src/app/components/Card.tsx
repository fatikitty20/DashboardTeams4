"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  footer?: ReactNode;
  variant?: "default" | "bordered" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Card({
  children,
  title,
  subtitle,
  footer,
  variant = "default",
  padding = "md",
  style,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    },
    bordered: {
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      border: "1px solid #374151",
    },
    elevated: {
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    },
  };

  const paddingStyles: Record<string, string> = {
    none: "0",
    sm: "12px",
    md: "20px",
    lg: "28px",
  };

  return (
    <div 
      style={{ ...variantStyles[variant], overflow: "hidden", ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {(title || subtitle) && (
        <div style={{ padding: paddingStyles[padding], paddingBottom: "0" }}>
          {title && (
            <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: "white" }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#9ca3af" }}>
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