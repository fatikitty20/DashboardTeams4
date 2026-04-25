import { analyticsBars } from "../data";

export const AnalyticsChart = () => (
  <div className="donezo-card-cream p-6">
    <h3 className="text-lg font-semibold text-foreground mb-6">Project Analytics</h3>

    {/* Pista del gráfico: las barras se posicionan con altura % relativa a este alto */}
    <div className="flex items-end justify-between gap-3 h-44">
      {analyticsBars.map((b, i) => (
        <div
          key={i}
          className={`relative flex-1 rounded-full origin-bottom animate-grow-bar ${
            b.active
              ? "bg-donezo-leaf"
              : i % 2
              ? "stripe-pattern bg-secondary"
              : "bg-primary"
          }`}
          style={{ height: `${b.value}%`, animationDelay: `${i * 60}ms` }}
        >
          {b.active && (
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-foreground text-background px-2 py-0.5 rounded-md whitespace-nowrap">
              {b.value}%
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Etiquetas de los días, alineadas con cada barra */}
    <div className="flex justify-between gap-3 mt-3">
      {analyticsBars.map((b, i) => (
        <span
          key={i}
          className={`flex-1 text-center text-[11px] font-medium ${
            b.active ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {b.day}
        </span>
      ))}
    </div>
  </div>
);
