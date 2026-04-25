import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { Metric } from "../data";

export const MetricCard = ({ label, value, hint, variant }: Metric) => {
  const isDeep = variant === "deep";
  return (
    <div className={`p-5 rounded-2xl relative ${isDeep ? "donezo-card-deep" : "donezo-card-cream"}`}>
      <div className="flex items-start justify-between mb-6">
        <p className={`text-sm font-medium ${isDeep ? "text-primary-foreground" : "text-foreground"}`}>
          {label}
        </p>
        <button
          aria-label={`Ver ${label}`}
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            isDeep ? "bg-accent text-accent-foreground" : "bg-foreground text-background"
          }`}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className={`text-3xl lg:text-4xl font-bold mb-3 tracking-tight ${isDeep ? "text-primary-foreground" : "text-foreground"}`}>
        {value}
      </p>
      <div
        className={`inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded ${
          isDeep ? "bg-primary-foreground/10 text-primary-foreground/80" : "bg-secondary text-muted-foreground"
        }`}
      >
        <TrendingUp className="w-3 h-3" />
        {hint}
      </div>
    </div>
  );
};
