import { Search, Mail, Bell } from "lucide-react";
import { dashboardUser } from "../data";

export const Topbar = () => (
  <header className="flex items-center gap-4 px-8 py-5 border-b border-border bg-background">
    <div className="flex-1 max-w-md relative">
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder="Buscar pedidos, pagos o clientes…"
        className="w-full h-10 pl-9 pr-16 rounded-lg bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-background px-1.5 py-0.5 rounded border border-border text-muted-foreground">
        ⌘ K
      </kbd>
    </div>

    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary transition">
      <Mail className="w-4 h-4" />
    </button>
    <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary transition">
      <Bell className="w-4 h-4" />
    </button>

    <div className="flex items-center gap-3 pl-4 border-l border-border">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-600" />
      <div className="text-right">
        <p className="text-sm font-medium text-foreground">{dashboardUser.name}</p>
        <p className="text-[11px] text-muted-foreground">{dashboardUser.email}</p>
      </div>
    </div>
  </header>
);
