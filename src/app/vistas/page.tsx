"use client";

import { useState } from "react";
import { Card, SidebarItem } from "@/app/components";
import { useAuth } from "../context/AuthContext";

// ============================================
// ICONOS SVG MINIMALISTAS
// ============================================
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const DollarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const ShareIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const TrendingDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ActivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const AlertCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const MoreVerticalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

// ============================================
// TIPOS Y DATOS
// ============================================
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  colorScheme: "green" | "blue" | "red" | "amber" | "dark";
}

interface ActivityItem {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

interface TaskItem {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "pending" | "review";
  priority: "high" | "medium" | "low";
  dueDate: string;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

// Datos mock - reemplazar con llamadas a API
const MOCK_STATS = {
  earnings: { value: "$6,284", trend: 12.5, label: "vs mes anterior" },
  shares: { value: "2,434", trend: 8.2, label: "vs semana anterior" },
  likes: { value: "1,259", trend: -3.1, label: "vs mes anterior" },
  rating: { value: "8.5", trend: 1.2, label: "vs mes anterior" },
  users: { value: "342", trend: 15.3, label: "nuevos este mes" },
  tasks: { value: "28", trend: 5.7, label: "pendientes" },
};

const MOCK_ACTIVITIES: ActivityItem[] = [
  { id: 1, user: "María G.", action: "completó la tarea", target: "Reporte Q4", time: "hace 5 min", avatar: "MG" },
  { id: 2, user: "Carlos R.", action: "subió archivos a", target: "Proyecto Alpha", time: "hace 12 min", avatar: "CR" },
  { id: 3, user: "Ana P.", action: "comentó en", target: "Diseño UI", time: "hace 1 hora", avatar: "AP" },
  { id: 4, user: "Lucas M.", action: "creó el proyecto", target: "Dashboard 2026", time: "hace 2 horas", avatar: "LM" },
];

const MOCK_TASKS: TaskItem[] = [
  { id: 1, title: "Revisar métricas de rendimiento", status: "in-progress", priority: "high", dueDate: "Hoy" },
  { id: 2, title: "Actualizar documentación API", status: "pending", priority: "medium", dueDate: "Mañana" },
  { id: 3, title: "Reunión con equipo de diseño", status: "completed", priority: "high", dueDate: "Ayer" },
  { id: 4, title: "Corregir bugs en login", status: "review", priority: "high", dueDate: "25 Abr" },
  { id: 5, title: "Optimizar consultas database", status: "pending", priority: "low", dueDate: "28 Abr" },
];

const NAV_ITEMS: NavItem[] = [
  { icon: <HomeIcon />, label: "Dashboard", active: true },
  { icon: <ChartIcon />, label: "Analíticas" },
  { icon: <FileIcon />, label: "Proyectos" },
  { icon: <UsersIcon />, label: "Equipo", badge: 3 },
  { icon: <MailIcon />, label: "Mensajes", badge: 12 },
  { icon: <BellIcon />, label: "Notificaciones" },
  { icon: <LocationIcon />, label: "Ubicaciones" },
  { icon: <SettingsIcon />, label: "Configuración" },
];

// ============================================
// COMPONENTES
// ============================================

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendLabel, colorScheme }) => {
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
    <Card style={{
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
    </Card>
  );
};

const ActivityFeed: React.FC<{ activities: ActivityItem[] }> = ({ activities }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
    {activities.map((activity, index) => (
      <div
        key={activity.id}
        style={{
          padding: "12px 16px",
          borderBottom: index < activities.length - 1 ? "1px solid #f3f4f6" : "none",
          display: "flex",
          alignItems: "center",
          gap: 12,
          transition: "background 0.2s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#f9fafb")}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6b8e23, #556b2f)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: "#fff",
          flexShrink: 0,
        }}>
          {activity.avatar}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 13, color: "#374151", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <span style={{ fontWeight: 500 }}>{activity.user}</span>{" "}
            <span style={{ color: "#6b7280" }}>{activity.action}</span>{" "}
            <span style={{ fontWeight: 500, color: "#6b8e23" }}>{activity.target}</span>
          </p>
          <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 0 0" }}>{activity.time}</p>
        </div>
      </div>
    ))}
  </div>
);

const TaskList: React.FC<{ tasks: TaskItem[] }> = ({ tasks }) => {
  const statusConfig = {
    completed: { color: "#6b8e23", bg: "rgba(107, 142, 35, 0.12)", icon: <CheckCircleIcon /> },
    "in-progress": { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", icon: <ClockIcon /> },
    pending: { color: "#9ca3af", bg: "rgba(156, 163, 175, 0.12)", icon: <AlertCircleIcon /> },
    review: { color: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)", icon: <ActivityIcon /> },
  };

  const priorityConfig = {
    high: { color: "#ef4444", label: "Alta" },
    medium: { color: "#f59e0b", label: "Media" },
    low: { color: "#9ca3af", label: "Baja" },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {tasks.map((task) => {
        const status = statusConfig[task.status];
        const priority = priorityConfig[task.priority];
        return (
          <div
            key={task.id}
            style={{
              padding: "12px 14px",
              borderRadius: "10px",
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: 12,
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#6b8e23";
              e.currentTarget.style.background = "#f0f5eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.background = "#f9fafb";
            }}
          >
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: status.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: status.color,
              flexShrink: 0,
            }}>
              {status.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, color: "#1f2937", margin: 0, fontWeight: 500 }}>
                {task.title}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <span style={{
                  fontSize: 10,
                  color: priority.color,
                  background: `${priority.color}15`,
                  padding: "2px 6px",
                  borderRadius: 4,
                  fontWeight: 500,
                }}>
                  {priority.label}
                </span>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>{task.dueDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SimpleBarChart: React.FC = () => {
  const data = [
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

const ProgressBar: React.FC<{ value: number; label?: string; color?: "green" | "amber" | "blue" }> = ({
  value,
  label,
  color = "green"
}) => {
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

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function Dashboard() {
  const { logout } = useAuth();
  const [activeNav, setActiveNav] = useState("Dashboard");

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f5f7f4",
    }}>
      {/* SIDEBAR */}
      <aside style={{
        width: 260,
        background: "linear-gradient(180deg, #1a2f23 0%, #0d1f17 100%)",
        color: "white",
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
        position: "fixed" as const,
        top: 0,
        left: 0,
        height: "100vh",
        overflowY: "auto" as const,
        zIndex: 100,
      }}>
        {/* User Profile */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          padding: "16px 12px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          width: "100%",
          marginBottom: 20,
        }}>
          <div style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6b8e23, #556b2f)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 600,
            color: "#fff",
            boxShadow: "0 4px 12px rgba(107, 142, 35, 0.4)",
          }}>
            JD
          </div>
          <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.2px" }}>John Don</div>
          <div style={{ fontSize: 12, color: "#9ca3af" }}>johndon@company.com</div>
        </div>

        {/* Navigation */}
        <nav style={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "11px 12px",
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                color: activeNav === item.label ? "#fff" : "#9ca3af",
                background: activeNav === item.label ? "rgba(255,255,255,0.1)" : "transparent",
                fontSize: 14,
                fontWeight: activeNav === item.label ? 500 : 400,
                position: "relative" as const,
              }}
              onMouseOver={(e) => {
                if (activeNav !== item.label) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }
              }}
              onMouseOut={(e) => {
                if (activeNav !== item.label) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {item.icon}
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#6b8e23",
                  color: "#fff",
                  padding: "2px 6px",
                  borderRadius: 10,
                  minWidth: 20,
                  textAlign: "center" as const,
                }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            marginTop: "auto",
            width: "100%",
            padding: "11px 14px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "#fca5a5",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 500,
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          <LogoutIcon />
          <span>Cerrar sesión</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{
        flex: 1,
        padding: "28px 32px 28px calc(260px + 32px)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        minHeight: "100vh",
      }}>
        {/* Header */}
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
              {activeNav}
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

        {/* Stats Grid - Responsive */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}>
          <StatCard
            title="Ingresos"
            value={MOCK_STATS.earnings.value}
            icon={<DollarIcon />}
            trend={MOCK_STATS.earnings.trend}
            trendLabel={MOCK_STATS.earnings.label}
            colorScheme="dark"
          />
          <StatCard
            title="Compartidos"
            value={MOCK_STATS.shares.value}
            icon={<ShareIcon />}
            trend={MOCK_STATS.shares.trend}
            trendLabel={MOCK_STATS.shares.label}
            colorScheme="green"
          />
          <StatCard
            title="Likes"
            value={MOCK_STATS.likes.value}
            icon={<HeartIcon />}
            trend={MOCK_STATS.likes.trend}
            trendLabel={MOCK_STATS.likes.label}
            colorScheme="red"
          />
          <StatCard
            title="Rating"
            value={MOCK_STATS.rating.value}
            icon={<StarIcon />}
            trend={MOCK_STATS.rating.trend}
            trendLabel={MOCK_STATS.rating.label}
            colorScheme="amber"
          />
        </section>

        {/* Main Content Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 20,
        }}>
          {/* Chart Section - 8 columns */}
          <Card style={{
            gridColumn: "span 8",
            padding: 24,
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1f2937", margin: 0 }}>
                  Rendimiento Semestral
                </h3>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: "4px 0 0 0" }}>
                  Comparativa de ingresos por mes
                </p>
              </div>
              <button style={{
                padding: "8px 12px",
                borderRadius: 6,
                border: "1px solid #e5e7eb",
                background: "#f9fafb",
                color: "#6b7280",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}>
                <MoreVerticalIcon />
              </button>
            </div>
            <SimpleBarChart />
          </Card>

          {/* Progress Section - 4 columns */}
          <Card style={{
            gridColumn: "span 4",
            padding: 24,
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1f2937", margin: "0 0 20px 0" }}>
              Progreso del Proyecto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ProgressBar value={75} label="Desarrollo" color="green" />
              <ProgressBar value={45} label="Diseño" color="amber" />
              <ProgressBar value={60} label="Testing" color="blue" />
            </div>
            <div style={{
              marginTop: 20,
              padding: "14px",
              borderRadius: 10,
              background: "linear-gradient(135deg, rgba(107, 142, 35, 0.1) 0%, rgba(85, 107, 47, 0.1) 100%)",
              border: "1px solid rgba(107, 142, 35, 0.2)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1a2f23" }}>Total Completado</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#6b8e23" }}>67%</span>
              </div>
            </div>
          </Card>

          {/* Activity Feed - 6 columns */}
          <Card style={{
            gridColumn: "span 6",
            padding: 0,
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1f2937", margin: 0 }}>
                Actividad Reciente
              </h3>
              <p style={{ fontSize: 12, color: "#9ca3af", margin: "2px 0 0 0" }}>
                Últimas acciones del equipo
              </p>
            </div>
            <ActivityFeed activities={MOCK_ACTIVITIES} />
          </Card>

          {/* Tasks - 6 columns */}
          <Card style={{
            gridColumn: "span 6",
            padding: 0,
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1f2937", margin: 0 }}>
                  Tareas Pendientes
                </h3>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "2px 0 0 0" }}>
                  {MOCK_TASKS.filter(t => t.status !== "completed").length} tareas activas
                </p>
              </div>
              <button style={{
                padding: "6px 12px",
                borderRadius: 6,
                border: "1px solid #6b8e23",
                background: "transparent",
                color: "#6b8e23",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
              }}>
                Ver todas
              </button>
            </div>
            <div style={{ padding: 16, maxHeight: 280, overflowY: "auto" as const }}>
              <TaskList tasks={MOCK_TASKS} />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
