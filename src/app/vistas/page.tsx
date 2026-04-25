"use client";

import { Button, Card, Badge, Avatar, Progress } from "../../components";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      {/* Sidebar */}
      <aside style={{ width: 260, background: "#183153", color: "white", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Avatar name="John Don" size="xl" />
          <div style={{ fontWeight: 600, fontSize: 18 }}>Usuario</div>
          <div style={{ fontSize: 14, color: "#cbd5e1" }}>Johndon@company.com</div>
        </div>
        <nav style={{ width: "100%", marginTop: 32 }}>
          <SidebarItem icon="🏠" label="home" />
          <SidebarItem icon="📁" label="file" />
          <SidebarItem icon="✉️" label="messages" />
          <SidebarItem icon="🔔" label="notification" />
          <SidebarItem icon="📍" label="location" />
          <SidebarItem icon="📊" label="graph" />
        </nav>
        <Button 
          onClick={handleLogout} 
          variant="danger" 
          size="sm"
          style={{ marginTop: "auto", width: "100%" }}
        >
          🚪 Salir
        </Button>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: 40, display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#22223b", marginBottom: 16 }}>Dashboard User</h2>
        {/* Top Cards */}
        <div style={{ display: "flex", gap: 24 }}>
          <Card style={{ minWidth: 180, background: "#183153", color: "white" }}>
            <div style={{ fontSize: 16, marginBottom: 8 }}>Earning</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>$ 628</div>
          </Card>
          <Card style={{ minWidth: 180 }}>
            <div style={{ fontSize: 16, marginBottom: 8 }}>Share</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>2434</div>
          </Card>
          <Card style={{ minWidth: 180 }}>
            <div style={{ fontSize: 16, marginBottom: 8 }}>Likes</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>1259</div>
          </Card>
          <Card style={{ minWidth: 180 }}>
            <div style={{ fontSize: 16, marginBottom: 8 }}>Rating</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>8,5</div>
          </Card>
        </div>
        {/* Charts and Details */}
        <div style={{ display: "flex", gap: 24 }}>
          <Card style={{ flex: 2, minHeight: 220 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Result</div>
            <div style={{ height: 140, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
              {/* Aquí iría un gráfico real, placeholder */}
              <span style={{ fontSize: 18, color: "#aaa" }}>[Gráfico de barras]</span>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outline" size="sm">Check Now</Button>
            </div>
          </Card>
          <Card style={{ flex: 1, minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Progress value={45} showLabel variant="warning" size="md" />
            <div style={{ marginTop: 16, width: "100%" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#22223b" }}>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
            <Button variant="outline" size="sm" style={{ marginTop: 16 }}>Check Now</Button>
          </Card>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Card style={{ flex: 2, minHeight: 160 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Lorem Ipsum vs Dolor Amet</div>
            <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
              <span style={{ fontSize: 18, color: "#aaa" }}>[Gráfico de área]</span>
            </div>
          </Card>
          <Card style={{ flex: 1, minHeight: 160, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Calendario</div>
            <div style={{ height: 80, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>
              <span style={{ fontSize: 18, color: "#aaa" }}>[Calendario]</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0", fontSize: 16, cursor: "pointer", width: "100%" }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
