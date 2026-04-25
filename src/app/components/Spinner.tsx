"use client";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function Spinner({ size = "md", color = "#3b82f6" }: SpinnerProps) {
  const sizeMap: Record<string, number> = {
    sm: 16,
    md: 24,
    lg: 40,
  };

  const spinnerSize = sizeMap[size];

  return (
    <svg
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: "spin 1s linear infinite" }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.4 31.4"
        style={{ opacity: 0.3 }}
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.4 31.4"
        strokeDashoffset="23.5"
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
}