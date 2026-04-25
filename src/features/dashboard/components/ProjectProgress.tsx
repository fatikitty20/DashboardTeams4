import { projectProgress } from "../data";

export const ProjectProgress = () => {
  const radius = 70;
  const circumference = Math.PI * radius;
  const offset = circumference - (projectProgress / 100) * circumference;

  return (
    <div className="donezo-card-cream p-6 flex flex-col">
      <h3 className="text-base font-semibold text-foreground mb-2">Progreso de pagos</h3>
      <div className="flex-1 flex flex-col items-center justify-center">
        <svg width="180" height="100" viewBox="0 0 180 100" className="overflow-visible">
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700"
          />
        </svg>
        <p className="text-3xl font-bold text-foreground -mt-4">{projectProgress}%</p>
        <p className="text-xs text-muted-foreground">Procesados este mes</p>
      </div>
      <div className="flex items-center gap-4 text-[10px] text-muted-foreground mt-3 justify-center">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" /> Aprobados</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent" /> En curso</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary" /> Pendientes</span>
      </div>
    </div>
  );
};
