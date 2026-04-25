import { Clock, Video } from "lucide-react";
import { reminder } from "../data";

export const ReminderCard = () => (
  <div className="donezo-card-cream p-6 flex flex-col">
    <h3 className="text-base font-semibold text-foreground mb-4">Recordatorios</h3>
    <p className="text-lg font-semibold text-foreground leading-snug mb-3">{reminder.title}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
      <Clock className="w-3.5 h-3.5" />
      Hoy · {reminder.time}
    </div>
    <button className="mt-auto h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition flex items-center justify-center gap-2">
      <Video className="w-4 h-4" />
      Iniciar reunión
    </button>
  </div>
);
