import { Pause, Square } from "lucide-react";
import { timeTracker } from "../data";

export const TimeTracker = () => (
  <div className="donezo-card-deep p-6 relative overflow-hidden flex flex-col">
    <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-primary-foreground/10" />
    <div className="absolute right-4 bottom-4 w-24 h-24 rounded-full border border-primary-foreground/10" />
    <p className="text-sm text-primary-foreground/70 mb-2">Tiempo de sesión</p>
    <p className="text-4xl font-bold text-primary-foreground mb-5 font-mono tracking-tight tabular-nums">{timeTracker}</p>
    <div className="flex gap-3 mt-auto">
      <button className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition">
        <Pause className="w-4 h-4" />
      </button>
      <button className="w-11 h-11 rounded-full bg-accent hover:brightness-110 flex items-center justify-center text-accent-foreground transition">
        <Square className="w-3.5 h-3.5 fill-current" />
      </button>
    </div>
  </div>
);
