"use client";

import { Card, Avatar, Progress, Button } from "@/app/components";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

// ============================================
// 📝 DATOS CONFIGURABLES - MODIFICA AQUÍ
// ============================================

// Datos del usuario
const USER_DATA = {
  name: "Admin User",
  email: "admin@dashboard.com",
  avatar: "Admin User"
};

// Datos financieros - Balance
const FINANCIAL_DATA = {
  totalBalance: 12450.00,
  balanceChange: 320,
  income: 5450.00,
  incomeChange: 12,
  expenses: 1850.00,
  expensesChange: -5,
  savings: 3600.00,
  savingsPercentage: 28.9
};

// Datos para el gráfico de barras (gastos por día)
const WEEKLY_EXPENSES = [
  { day: "Lun", amount: 65 },
  { day: "Mar", amount: 45 },
  { day: "Mié", amount: 80 },
  { day: "Jue", amount: 55 },
  { day: "Vie", amount: 90 },
  { day: "Sáb", amount: 70 },
  { day: "Dom", amount: 85 }
];

// Datos para el gráfico circular (categorías de gastos)
const EXPENSE_CATEGORIES = [
  { name: "Vivienda", amount: 1200, color: "#22c55e" },
  { name: "Transporte", amount: 350, color: "#16a34a" },
  { name: "Alimentación", amount: 420, color: "#4ade80" },
  { name: "Entretenimiento", amount: 180, color: "#86efac" },
  { name: "Otros", amount: 150, color: "#bbf7d0" }
];

// Transacciones recientes
const TRANSACTIONS_DATA = [
  { id: 1, type: "income", description: "Salario Mensual", amount: 4250.00, date: "26 Abr" },
  { id: 2, type: "expense", description: "Netflix Subscription", amount: 15.99, date: "25 Abr" },
  { id: 3, type: "expense", description: "Supermercado", amount: 89.50, date: "24 Abr" },
  { id: 4, type: "income", description: "Freelance Project", amount: 1200.00, date: "23 Abr" },
  { id: 5, type: "expense", description: "Gasolina", amount: 45.00, date: "22 Abr" },
];

// Presupuesto por categoría
const BUDGET_DATA = [
  { name: "Vivienda", spent: 1200, total: 1500 },
  { name: "Transporte", spent: 350, total: 500 },
  { name: "Alimentación", spent: 420, total: 600 },
  { name: "Entretenimiento", spent: 180, total: 300 },
];

// ============================================
// 🔧 COMPONENTES DE INTERFAZ
// ============================================

// Iconos SVG
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
    <path d="M1 10h22" />
    <circle cx="17" cy="14" r="2" />
  </svg>
);

const TrendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const PiggyBankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
    <path d="M2 9v1c0 1.1.9 2 2 2h1" />
    <circle cx="16" cy="11" r="1" />
  </svg>
);

const TransactionIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        borderRadius: "12px",
        cursor: "pointer",
        background: active ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" : (isHovered ? "rgba(34, 197, 94, 0.15)" : "transparent"),
        color: active ? "#ffffff" : "#166534",
        transition: "all 0.3s ease",
        fontWeight: active ? "600" : "500",
        transform: (active || isHovered) ? "scale(1.02)" : "scale(1)",
        boxShadow: active ? "0 4px 15px rgba(34, 197, 94, 0.4)" : "none",
      }}
    >
      {icon}
      <span style={{ fontSize: "16px", fontWeight: 700 }}>{label}</span>
    </div>
  );
};

// Componente de tarjeta con hover interactivo
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
  gradient?: boolean;
}

const StatCard = ({ title, value, change, changeType, icon, gradient }: StatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        background: gradient ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" : "white", 
        color: gradient ? "white" : "#000000", 
        padding: 24,
        border: gradient ? "none" : "2px solid #dcfce7",
        boxShadow: isHovered ? "0 12px 40px rgba(34, 197, 94, 0.4)" : (gradient ? "0 8px 30px rgba(34, 197, 94, 0.3)" : "none"),
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 14, opacity: gradient ? 0.9 : 1, marginBottom: 8, color: gradient ? "white" : "#166534" }}>{title}</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: gradient ? "white" : (changeType === "positive" ? "#22c55e" : "#dc2626") }}>{value}</div>
          <div style={{ fontSize: 12, marginTop: 8, color: gradient ? "rgba(255,255,255,0.8)" : (changeType === "positive" ? "#22c55e" : "#dc2626") }}>{change}</div>
        </div>
        <div style={{ 
          width: 48, 
          height: 48, 
          borderRadius: 12, 
          background: gradient ? "rgba(255,255,255,0.2)" : "rgba(34, 197, 94, 0.1)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: gradient ? "white" : "#22c55e",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

// Componente de gráfico de barras interactivo
const BarChart = ({ data }: { data: { day: string; amount: number }[] }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const maxAmount = Math.max(...data.map(d => d.amount));
  
  return (
    <div style={{ height: 200, display: "flex", alignItems: "flex-end", gap: 16, padding: "0 8px" }}>
      {data.map((item, i) => (
        <div 
          key={i}
          style={{ 
            flex: 1, 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: 8,
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoveredBar(i)}
          onMouseLeave={() => setHoveredBar(null)}
        >
          <div style={{ 
            width: "100%", 
            height: `${(item.amount / maxAmount) * 100}%`, 
            background: hoveredBar === i 
              ? "linear-gradient(to top, #22c55e, #4ade80)" 
              : (i === data.length - 1 ? "linear-gradient(to top, #16a34a, #22c55e)" : "rgba(34, 197, 94, 0.5)"),
            borderRadius: 8,
            minHeight: 20,
            transition: "all 0.3s ease",
            transform: hoveredBar === i ? "scaleY(1.05)" : "scaleY(1)",
            transformOrigin: "bottom",
          }} />
          <span style={{ fontSize: 11, color: "#166534" }}>{item.day}</span>
          {hoveredBar === i && (
            <div style={{ 
              position: "absolute", 
              background: "#166534", 
              color: "white", 
              padding: "4px 8px", 
              borderRadius: 4, 
              fontSize: 11,
              marginTop: "-30px"
            }}>
              ${item.amount}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Componente de gráfico circular (pie chart)
const PieChart = ({ data }: { data: { name: string; amount: number; color: string }[] }) => {
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const total = data.reduce((sum, item) => sum + item.amount, 0);
  
  // Calcular segmentos del círculo
  let currentAngle = -90;
  const slices = data.map((item, i) => {
    const percentage = (item.amount / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    
    return { ...item, percentage, startAngle, endAngle };
  });
  
  // Función para convertir ángulo a coordenadas
  const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };
  
  // Función para crear path de arco
  const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", cx, cy,
      "L", start.x, start.y,
      "A", r, r, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        {slices.map((slice, i) => (
          <path
            key={i}
            d={describeArc(90, 90, 70, slice.startAngle, slice.endAngle)}
            fill={slice.color}
            stroke="white"
            strokeWidth="2"
            style={{
              cursor: "pointer",
              transform: hoveredSlice === i ? "scale(1.05)" : "scale(1)",
              transformOrigin: "center",
              transition: "all 0.3s ease",
              filter: hoveredSlice === i ? "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" : "none",
            }}
            onMouseEnter={() => setHoveredSlice(i)}
            onMouseLeave={() => setHoveredSlice(null)}
          />
        ))}
        {/* Centro del círculo */}
        <circle cx="90" cy="90" r="30" fill="white" />
        <text x="90" y="85" textAnchor="middle" fontSize="12" fontWeight="600" fill="#166534">Total</text>
        <text x="90" y="100" textAnchor="middle" fontSize="10" fill="#166534">${total}</text>
      </svg>
      
      {/* Leyenda */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {slices.map((slice, i) => (
          <div 
            key={i}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 8,
              cursor: "pointer",
              padding: "4px 8px",
              borderRadius: 6,
              background: hoveredSlice === i ? "rgba(34, 197, 94, 0.1)" : "transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setHoveredSlice(i)}
            onMouseLeave={() => setHoveredSlice(null)}
          >
            <div style={{ width: 12, height: 12, borderRadius: 3, background: slice.color }} />
            <span style={{ fontSize: 13, color: "#000000" }}>{slice.name}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#166534", marginLeft: "auto" }}>${slice.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { logout } = useAuth();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [selectedPeriod, setSelectedPeriod] = useState("Mes");
  const [hoveredTransaction, setHoveredTransaction] = useState<number | null>(null);

  const handleLogout = () => {
    logout();
  };

  // Función para formatear moneda
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f0fdf4" }}>
      {/* Sidebar - Verde */}
      <aside style={{ 
        width: 260, 
        background: "linear-gradient(180deg, #22c55e 0%, #16a34a 100%)", 
        color: "white", 
        padding: 24, 
        display: "flex", 
        flexDirection: "column",
        boxShadow: "4px 0 20px rgba(34, 197, 94, 0.3)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <WalletIcon />
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}>FinanceHub</span>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 32, padding: 20, background: "rgba(255,255,255,0.15)", borderRadius: 16, backdropFilter: "blur(10px)" }}>
          <Avatar name={USER_DATA.avatar} size="lg" />
          <div style={{ fontWeight: 600, fontSize: 16, color: "#ffffff" }}>{USER_DATA.name}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{USER_DATA.email}</div>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <NavItem 
            icon={<DashboardIcon />} 
            label="Dashboard" 
            active={activeNav === "dashboard"} 
            onClick={() => setActiveNav("dashboard")}
          />
          <NavItem 
            icon={<WalletIcon />} 
            label="Mi Billetera" 
            active={activeNav === "wallet"} 
            onClick={() => setActiveNav("wallet")}
          />
          <NavItem 
            icon={<TrendIcon />} 
            label="Inversiones" 
            active={activeNav === "investments"} 
            onClick={() => setActiveNav("investments")}
          />
          <NavItem 
            icon={<CreditCardIcon />} 
            label="Tarjetas" 
            active={activeNav === "cards"} 
            onClick={() => setActiveNav("cards")}
          />
          <NavItem 
            icon={<PiggyBankIcon />} 
            label="Presupuesto" 
            active={activeNav === "budget"} 
            onClick={() => setActiveNav("budget")}
          />
          <NavItem 
            icon={<TransactionIcon />} 
            label="Transacciones" 
            active={activeNav === "transactions"} 
            onClick={() => setActiveNav("transactions")}
          />
        </nav>
        
        <Button 
          onClick={handleLogout}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          style={{ 
            marginTop: "auto", 
            width: "100%",
            background: "rgba(255,255,255,0.2)",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "all 0.3s ease",
          }}
        >
          <LogoutIcon />
          Cerrar Sesión
        </Button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: 32, display: "flex", flexDirection: "column", gap: 24, overflowY: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#000000", margin: 0 }}>Dashboard Financiero</h2>
            <p style={{ fontSize: 14, color: "#166534", margin: "4px 0 0 0" }}>Bienvenido de nuevo, {USER_DATA.name}</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ 
              padding: "10px 16px", 
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", 
              borderRadius: 12, 
              color: "white", 
              fontSize: 14, 
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)",
            }}>
              +2.5% este mes
            </div>
            <button style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "white",
              border: "1px solid #dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#166534",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(34, 197, 94, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
            >
              <BellIcon />
            </button>
            <button style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "white",
              border: "1px solid #dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#166534",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(34, 197, 94, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
            }}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>

        {/* Top Cards - Financial Overview */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          <StatCard 
            title="Balance Total"
            value={formatCurrency(FINANCIAL_DATA.totalBalance)}
            change={`↑ $${FINANCIAL_DATA.balanceChange} este mes`}
            changeType="positive"
            icon={<WalletIcon />}
            gradient
          />
          <StatCard 
            title="Ingresos"
            value={formatCurrency(FINANCIAL_DATA.income)}
            change={`↑ ${FINANCIAL_DATA.incomeChange}% vs mes anterior`}
            changeType="positive"
            icon={<TrendIcon />}
          />
          <StatCard 
            title="Gastos"
            value={formatCurrency(FINANCIAL_DATA.expenses)}
            change={`↓ ${Math.abs(FINANCIAL_DATA.expensesChange)}% vs mes anterior`}
            changeType="negative"
            icon={<CreditCardIcon />}
          />
          <StatCard 
            title="Ahorros"
            value={formatCurrency(FINANCIAL_DATA.savings)}
            change={`${FINANCIAL_DATA.savingsPercentage}% de ingresos`}
            changeType="positive"
            icon={<PiggyBankIcon />}
          />
        </div>

        {/* Charts Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Bar Chart Card */}
          <Card 
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(34, 197, 94, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{ 
              background: "white", 
              color: "#000000", 
              padding: 24, 
              border: "2px solid #dcfce7",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontWeight: 600, fontSize: 18, color: "#000000" }}>Resumen de Gastos</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Semana", "Mes", "Año"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: 13,
                      background: selectedPeriod === period ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" : "#f0fdf4",
                      color: selectedPeriod === period ? "white" : "#166534",
                      cursor: "pointer",
                      fontWeight: selectedPeriod === period ? "600" : "400",
                      transition: "all 0.3s ease",
                      border: selectedPeriod === period ? "none" : "1px solid #dcfce7",
                    }}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <BarChart data={WEEKLY_EXPENSES} />
          </Card>
          
          {/* Pie Chart Card */}
          <Card 
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(34, 197, 94, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{ 
              background: "white", 
              color: "#000000", 
              padding: 24, 
              border: "2px solid #dcfce7",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 20, color: "#000000" }}>Gastos por Categoría</div>
            <PieChart data={EXPENSE_CATEGORIES} />
          </Card>
        </div>

        {/* Budget and Transactions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
          {/* Budget Card */}
          <Card 
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(34, 197, 94, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{ 
              background: "white", 
              color: "#000000", 
              padding: 24, 
              border: "2px solid #dcfce7",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 20, color: "#000000" }}>Presupuesto</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {BUDGET_DATA.map((cat, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 14, color: "#000000", fontWeight: 500 }}>{cat.name}</span>
                    <span style={{ fontSize: 14, color: "#22c55e", fontWeight: 600 }}>${cat.spent}/${cat.total}</span>
                  </div>
                  <Progress value={(cat.spent / cat.total) * 100} showLabel variant="success" size="md" />
                </div>
              ))}
            </div>
          </Card>
          
          {/* Transactions Table */}
          <Card 
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(34, 197, 94, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{ 
              background: "white", 
              color: "#000000", 
              padding: 24, 
              border: "2px solid #dcfce7",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontWeight: 600, fontSize: 18, color: "#000000" }}>Transacciones Recientes</div>
              <button style={{ 
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)", 
                border: "none", 
                color: "white", 
                padding: "10px 20px", 
                borderRadius: 10,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(34, 197, 94, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(34, 197, 94, 0.3)";
              }}
              >
                Ver Todas
              </button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #dcfce7" }}>
                  <th style={{ textAlign: "left", padding: "12px 0", color: "#166534", fontSize: 13, fontWeight: 600 }}>Descripción</th>
                  <th style={{ textAlign: "left", padding: "12px 0", color: "#166534", fontSize: 13, fontWeight: 600 }}>Fecha</th>
                  <th style={{ textAlign: "right", padding: "12px 0", color: "#166534", fontSize: 13, fontWeight: 600 }}>Monto</th>
                  <th style={{ textAlign: "right", padding: "12px 0", color: "#166534", fontSize: 13, fontWeight: 600 }}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS_DATA.map((tx) => (
                  <tr 
                    key={tx.id}
                    onMouseEnter={() => setHoveredTransaction(tx.id)}
                    onMouseLeave={() => setHoveredTransaction(null)}
                    style={{ 
                      borderBottom: "1px solid #f0fdf4",
                      background: hoveredTransaction === tx.id ? "#f0fdf4" : "transparent",
                      transition: "background 0.2s ease",
                      cursor: "pointer",
                    }}
                  >
                    <td style={{ padding: "16px 0", fontSize: 14, color: "#000000", fontWeight: 500 }}>{tx.description}</td>
                    <td style={{ padding: "16px 0", fontSize: 14, color: "#166534" }}>{tx.date}</td>
                    <td style={{ 
                      padding: "16px 0", 
                      fontSize: 14, 
                      fontWeight: 600, 
                      textAlign: "right",
                      color: tx.type === "income" ? "#22c55e" : "#dc2626" 
                    }}>
                      {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
                    </td>
                    <td style={{ padding: "16px 0", textAlign: "right" }}>
                      <span style={{ 
                        padding: "6px 12px", 
                        borderRadius: 20, 
                        fontSize: 12,
                        fontWeight: 600,
                        background: tx.type === "income" ? "rgba(34, 197, 94, 0.15)" : "rgba(220, 38, 38, 0.1)",
                        color: tx.type === "income" ? "#16a34a" : "#dc2626",
                      }}>
                        {tx.type === "income" ? "Ingreso" : "Gasto"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </main>
    </div>
  );
}
