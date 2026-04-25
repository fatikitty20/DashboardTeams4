"use client";

import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export default function Input({
  label,
  error,
  icon,
  style,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {label && (
        <label style={{ fontSize: "14px", fontWeight: 500, color: "#d1d5db" }}>
          {label}
        </label>
      )}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon && (
          <div
            style={{
              position: "absolute",
              left: "12px",
              display: "flex",
              alignItems: "center",
              color: "#6b7280",
            }}
          >
            {icon}
          </div>
        )}
        <input
          style={{
            width: "100%",
            padding: icon ? "12px 12px 12px 40px" : "12px",
            fontSize: "14px",
            backgroundColor: "#374151",
            border: `2px solid ${error ? "#ef4444" : isFocused ? "#3b82f6" : "#4b5563"}`,
            borderRadius: "8px",
            color: "white",
            outline: "none",
            transition: "border-color 0.2s ease",
            ...style,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
      {error && (
        <span style={{ fontSize: "12px", color: "#ef4444" }}>{error}</span>
      )}
    </div>
  );
}