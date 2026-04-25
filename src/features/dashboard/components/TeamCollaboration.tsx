import { Plus } from "lucide-react";
import { teamMembers } from "../data";

const avatars = [
  "from-blue-300 to-blue-500",
  "from-sky-300 to-sky-500",
  "from-indigo-300 to-indigo-500",
  "from-cyan-300 to-cyan-500",
];

export const TeamCollaboration = () => (
  <div className="donezo-card-cream p-6">
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-base font-semibold text-foreground">Equipo PSP</h3>
      <button className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-muted transition">
        <Plus className="w-3 h-3" /> Invitar
      </button>
    </div>
    <ul className="space-y-4">
      {teamMembers.map((m, i) => (
        <li key={m.id} className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatars[i % avatars.length]}`} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{m.name}</p>
            <p className="text-[11px] text-muted-foreground truncate">{m.task}</p>
          </div>
          <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${m.tone}`}>{m.status}</span>
        </li>
      ))}
    </ul>
  </div>
);
