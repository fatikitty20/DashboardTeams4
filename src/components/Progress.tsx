"use client";

interface ProgressProps {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "danger";
  showLabel?: boolean;
  size?: "sm" | "md";
}

export default function Progress({
  value,
  max = 100,
  variant = "default",
  showLabel = false,
  size = "md",
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variantColors: Record<string, string> = {
    default: "#3b82f6",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444",
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { height: "4px" },
    md: { height: "8px" },
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "#374151",
          borderRadius: "9999px",
          overflow: "hidden",
          ...sizeStyles[size],
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: variantColors[variant],
            borderRadius: "9999px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
      {showLabel && (
        <div style={{ marginTop: "6px", fontSize: "12px", color: "#9ca3af", textAlign: "right" }}>
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
}