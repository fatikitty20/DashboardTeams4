import {
  LayoutDashboard,
  CreditCard,
  ShoppingBag,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Store,
  Smartphone,
} from "lucide-react";
import { useAuth } from "@/features/auth/useAuth";
import { useNavigate } from "react-router-dom";

const menu = [
  { icon: LayoutDashboard, label: "Panel",       active: true },
  { icon: CreditCard,      label: "Pagos",       badge: "12" },
  { icon: ShoppingBag,     label: "Pedidos" },
  { icon: BarChart3,       label: "Reportes" },
  { icon: Users,           label: "Clientes" },
];

const general = [
  { icon: Settings,   label: "Configuración" },
  { icon: HelpCircle, label: "Ayuda" },
];

export const Sidebar = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 shrink-0 bg-donezo-cream border-r border-border flex flex-col p-5 h-screen sticky top-0">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <Store className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-foreground">Tiendanube</span>
      </div>

      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 px-2">Menú</p>
      <nav className="space-y-1 mb-6">
        {menu.map((it) => (
          <button
            key={it.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
              it.active
                ? "bg-secondary text-primary font-medium border-l-2 border-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <it.icon className="w-4 h-4" />
            <span className="flex-1 text-left">{it.label}</span>
            {it.badge && (
              <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded">{it.badge}</span>
            )}
          </button>
        ))}
      </nav>

      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 px-2">General</p>
      <nav className="space-y-1 flex-1">
        {general.map((it) => (
          <button
            key={it.label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted transition"
          >
            <it.icon className="w-4 h-4" />
            <span>{it.label}</span>
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      </nav>

      <div className="donezo-card-deep p-4 mt-4 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-accent/20" />
        <Smartphone className="w-6 h-6 mb-2 text-accent" />
        <p className="text-sm font-semibold mb-1">App Tiendanube móvil</p>
        <p className="text-[10px] text-primary-foreground/60 mb-3">Gestioná desde el celular</p>
        <button className="w-full h-8 rounded-md bg-accent text-accent-foreground text-xs font-medium hover:brightness-95 transition">
          Descargar
        </button>
      </div>
    </aside>
  );
};
