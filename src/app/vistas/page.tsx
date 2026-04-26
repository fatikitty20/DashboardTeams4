"use client";
import { useState } from "react";
import { Card } from "@/app/components";
import { useAuth } from "../context/AuthContext";
import {
  StatCard,
  ActivityFeed,
  TaskList,
  SimpleBarChart,
  ProgressBar,
  DashboardHeader,
  Sidebar,
} from "../components";
import {
  DollarIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
  MoreVerticalIcon,
  ActivityIcon,
} from "../components/Icons";
import { MOCK_STATS, MOCK_ACTIVITIES, MOCK_TASKS } from "./mockData";
import { NAV_ITEMS } from "./constants";

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
      <Sidebar
        activeNav={activeNav}
        onNavChange={setActiveNav}
        onLogout={handleLogout}
      />

      <main style={{
        flex: 1,
        padding: "28px 32px 28px calc(260px + 32px)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        minHeight: "100vh",
      }}>
        <DashboardHeader title={activeNav} />

        {/* Stats Grid */}
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
          {/* Chart Section */}
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

          {/* Progress Section */}
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

          {/* Activity Feed */}
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

          {/* Tasks */}
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
            <div style={{ padding: 16, maxHeight: 280, overflowY: "auto" }}>
              <TaskList tasks={MOCK_TASKS} />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}