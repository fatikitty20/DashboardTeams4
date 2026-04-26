import React from "react";
import { ActivityIcon } from "./Icons";

interface DashboardHeaderProps {
  title: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title }) => {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 8,
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div>
        <h1 style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#1a2f23",
          margin: 0,
          letterSpacing: "-0.5px",
        }}>
          {title}
        </h1>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0 0 0" }}>
          {new Date().toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          padding: "8px 14px",
          borderRadius: 8,
          background: "linear-gradient(135deg, #6b8e23, #556b2f)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: "0 2px 8px rgba(107, 142, 35, 0.3)",
        }}>
          <ActivityIcon />
          <span>Rendimiento: +12.5%</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
