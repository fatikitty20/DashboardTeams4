"use client";

import { InputHTMLAttributes } from "react";

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export default function Toggle({ label, checked, onChange, ...props }: ToggleProps) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "48px",
          height: "26px",
          backgroundColor: checked ? "#3b82f6" : "#4b5563",
          borderRadius: "9999px",
          transition: "background-color 0.2s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: checked ? "25px" : "3px",
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "left 0.2s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: "none" }}
        {...props}
      />
      {label && (
        <span style={{ fontSize: "14px", color: "#d1d5db", userSelect: "none" }}>
          {label}
        </span>
      )}
    </label>
  );
}