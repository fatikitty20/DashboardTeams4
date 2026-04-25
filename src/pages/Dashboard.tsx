import { Plus, Upload } from "lucide-react";
import { Sidebar } from "@/features/dashboard/components/Sidebar";
import { Topbar } from "@/features/dashboard/components/Topbar";
import { MetricCard } from "@/features/dashboard/components/MetricCard";
import { AnalyticsChart } from "@/features/dashboard/components/AnalyticsChart";
import { ReminderCard } from "@/features/dashboard/components/ReminderCard";
import { ProjectsList } from "@/features/dashboard/components/ProjectsList";
import { TeamCollaboration } from "@/features/dashboard/components/TeamCollaboration";
import { ProjectProgress } from "@/features/dashboard/components/ProjectProgress";
import { TimeTracker } from "@/features/dashboard/components/TimeTracker";
import { projectMetrics } from "@/features/dashboard/data";

const Dashboard = () => (
  <div className="min-h-screen w-full flex bg-background">
    <Sidebar />

    <div className="flex-1 flex flex-col min-w-0">
      <Topbar />

      <main className="flex-1 p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">Panel de control</h1>
            <p className="text-sm text-muted-foreground">
              Gestioná tus pagos, pedidos y el rendimiento de tu tienda.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:brightness-110 transition">
              <Plus className="w-4 h-4" /> Nuevo cobro
            </button>
            <button className="h-10 px-5 rounded-full border border-foreground text-foreground text-sm font-medium flex items-center gap-2 hover:bg-foreground hover:text-background transition">
              <Upload className="w-4 h-4" /> Exportar
            </button>
          </div>
        </div>

        {/* Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projectMetrics.map((m) => (
            <MetricCard key={m.id} {...m} />
          ))}
        </section>

        {/* Middle */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1"><AnalyticsChart /></div>
          <div className="lg:col-span-1"><ReminderCard /></div>
          <div className="lg:col-span-1"><ProjectsList /></div>
        </section>

        {/* Bottom */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1"><TeamCollaboration /></div>
          <div className="lg:col-span-1"><ProjectProgress /></div>
          <div className="lg:col-span-1"><TimeTracker /></div>
        </section>
      </main>
    </div>
  </div>
);

export default Dashboard;
