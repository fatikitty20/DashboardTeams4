import React from "react";

interface ChartData {
  label: string;
  value: number;
}

export const SimpleBarChart: React.FC = () => {
  const data: ChartData[] = [
    { label: "Ene", value: 65 },
    { label: "Feb", value: 78 },
    { label: "Mar", value: 85 },
    { label: "Abr", value: 72 },
    { label: "May", value: 90 },
    { label: "Jun", value: 88 },
  ];

  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", height: 140, padding: "0 8px" }}>
      {data.map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{
            width: 32,
            height: `${item.value}%`,
            background: i === data.length - 1
              ? "linear-gradient(180deg, #6b8e23 0%, #556b2f 100%)"
              : "linear-gradient(180deg, #a3c956 0%, #6b8e23 100%)",
            borderRadius: "6px 6px 0 0",
            transition: "all 0.3s ease",
            cursor: "pointer",
            opacity: i === data.length - 1 ? 1 : 0.7,
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = "1"}
          onMouseOut={(e) => e.currentTarget.style.opacity = i === data.length - 1 ? "1" : "0.7"}
          />
          <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SimpleBarChart;
