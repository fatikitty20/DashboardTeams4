import React from "react";
import { TrendingUpIcon, TrendingDownIcon } from "./Icons";
import { StatCardProps } from "../../interfaces/dashboard.interface";

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendLabel, colorScheme }) => {
  const colorConfig = {
    green: {
      bg: "rgba(107, 142, 35, 0.12)",
      icon: "#6b8e23",
      trend: "#6b8e23",
    },
    blue: {
      bg: "rgba(59, 130, 246, 0.12)",
      icon: "#3b82f6",
      trend: "#3b82f6",
    },
    red: {
      bg: "rgba(239, 68, 68, 0.12)",
      icon: "#ef4444",
      trend: "#ef4444",
    },
    amber: {
      bg: "rgba(245, 158, 11, 0.12)",
      icon: "#f59e0b",
      trend: "#f59e0b",
    },
    dark: {
      bg: "rgba(107, 142, 35, 0.25)",
      icon: "#a3c956",
      trend: "#9ca3af",
    },
  };

  const config = colorConfig[colorScheme];

  return (
    <div style={{
      padding: 20,
      background: colorScheme === "dark"
        ? "linear-gradient(135deg, #1a2f23 0%, #2d4a35 100%)"
        : "#ffffff",
      borderRadius: "14px",
      border: colorScheme === "dark" ? "none" : "1px solid #e5e7eb",
      boxShadow: colorScheme === "dark"
        ? "0 4px 16px rgba(26, 47, 35, 0.4)"
        : "0 2px 8px rgba(0,0,0,0.04)",
      color: colorScheme === "dark" ? "#ffffff" : undefined,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          background: config.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: config.icon,
        }}>
          {icon}
        </div>
        {trend !== undefined && (
          <span style={{
            fontSize: 12,
            color: trend >= 0 ? config.trend : "#ef4444",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}>
            {trend >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div style={{
        fontSize: 13,
        color: colorScheme === "dark" ? "#d1d5db" : "#6b7280",
        marginBottom: 4,
        fontWeight: 500,
      }}>
        {title}
      </div>
      <div style={{
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.5px",
        color: colorScheme === "dark" ? "#ffffff" : "#1f2937",
      }}>
        {value}
      </div>
      {trendLabel && (
        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 4 }}>{trendLabel}</div>
      )}
    </div>
  );
};

export default StatCard;
