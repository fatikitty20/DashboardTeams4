import React from "react";

interface ProgressBarProps {
  value: number;
  label?: string;
  color?: "green" | "amber" | "blue";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, color = "green" }) => {
  const colors = {
    green: "linear-gradient(90deg, #6b8e23, #8ab344)",
    amber: "linear-gradient(90deg, #f59e0b, #fbbf24)",
    blue: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  };

  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{label}</span>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>{value}%</span>
        </div>
      )}
      <div style={{
        height: 8,
        background: "#e5e7eb",
        borderRadius: 4,
        overflow: "hidden",
      }}>
        <div style={{
          width: `${value}%`,
          height: "100%",
          background: colors[color],
          borderRadius: 4,
          transition: "width 0.5s ease",
        }} />
      </div>
    </div>
  );
};

export default ProgressBar;
