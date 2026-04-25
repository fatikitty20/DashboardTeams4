import { Plus } from "lucide-react";
import { projects } from "../data";

export const ProjectsList = () => (
  <div className="donezo-card-cream p-6">
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-base font-semibold text-foreground">Proyectos</h3>
      <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition">
        <Plus className="w-3 h-3" /> Nuevo
      </button>
    </div>
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.id} className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${p.color}`}>
            {p.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
            <p className="text-[11px] text-muted-foreground">Vence: {p.due}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
