"use client";

import React, { useState } from "react";
import {
  HomeIcon,
  ChartIcon,
  FileIcon,
  UsersIcon,
  MailIcon,
  BellIcon,
  LocationIcon,
  SettingsIcon,
  LogoutIcon,
} from "./Icons";
import { NavItem } from "../../interfaces/dashboard.interface";

interface SidebarProps {
  activeNav?: string;
  onNavChange?: (label: string) => void;
  onLogout?: () => void;
}

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

export const Sidebar: React.FC<SidebarProps> = ({
  activeNav: controlledActiveNav,
  onNavChange,
  onLogout
}) => {
  const [internalActiveNav, setInternalActiveNav] = useState("Dashboard");
  const activeNav = controlledActiveNav ?? internalActiveNav;

  const handleNavClick = (label: string) => {
    if (onNavChange) {
      onNavChange(label);
    } else {
      setInternalActiveNav(label);
    }
  };

  const handleLogout = () => {
    onLogout?.();
  };

  return (
    <aside style={{
      width: 260,
      background: "linear-gradient(180deg, #1a2f23 0%, #0d1f17 100%)",
      color: "white",
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "4px 0 24px rgba(0,0,0,0.15)",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      overflowY: "auto",
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
            onClick={() => handleNavClick(item.label)}
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
              position: "relative",
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
                textAlign: "center",
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
  );
};

export default Sidebar;
