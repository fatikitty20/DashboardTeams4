"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Modal({ isOpen, onClose, title, children, size = "md" }: ModalProps) {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { maxWidth: "400px" },
    md: { maxWidth: "560px" },
    lg: { maxWidth: "720px" },
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          ...sizeStyles[size],
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {title && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #374151",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: "white" }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
                padding: "4px",
                fontSize: "20px",
              }}
            >
              ✕
            </button>
          </div>
        )}
        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}