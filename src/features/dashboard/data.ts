/** Mock data centralizado del dashboard (capa de datos). */

export const dashboardUser = {
  name: "Totok Micheal",
  email: "tmicheal20@tiendanube.com",
};

export type MetricVariant = "deep" | "cream";

export interface Metric {
  id: string;
  label: string;
  value: string;
  hint: string;
  variant: MetricVariant;
}

export const projectMetrics: Metric[] = [
  { id: "sales",   label: "Ventas totales",       value: "$248K", hint: "+18% vs mes anterior",   variant: "deep" },
  { id: "orders",  label: "Pedidos completados",  value: "1,284", hint: "+12% vs mes anterior",   variant: "cream" },
  { id: "active",  label: "Pedidos en curso",     value: "86",    hint: "Procesando ahora",       variant: "cream" },
  { id: "pending", label: "Pagos pendientes",     value: "9",     hint: "Requieren atención",     variant: "cream" },
];

export const analyticsBars = [
  { day: "L", value: 38, active: false },
  { day: "M", value: 62, active: false },
  { day: "X", value: 88, active: true  },
  { day: "J", value: 54, active: false },
  { day: "V", value: 70, active: false },
  { day: "S", value: 46, active: false },
  { day: "D", value: 30, active: false },
];

export const projects = [
  { id: "1", name: "Integrar Mercado Pago",       due: "26 Nov, 2024", color: "bg-blue-100 text-blue-700" },
  { id: "2", name: "Onboarding nuevos vendedores", due: "28 Nov, 2024", color: "bg-sky-100 text-sky-700" },
  { id: "3", name: "Checkout móvil optimizado",   due: "30 Nov, 2024", color: "bg-indigo-100 text-indigo-700" },
  { id: "4", name: "Campaña Hot Sale",            due: "5 Dic, 2024",  color: "bg-cyan-100 text-cyan-700" },
  { id: "5", name: "Pruebas antifraude PSP",      due: "6 Dic, 2024",  color: "bg-violet-100 text-violet-700" },
];

export const teamMembers = [
  { id: "1", name: "Alexandra Deff",        task: "Configuración pasarela de pagos",       status: "Completado",    tone: "bg-blue-100 text-blue-700" },
  { id: "2", name: "Edwin Adenike",         task: "Integración Mercado Pago Checkout Pro", status: "En progreso",   tone: "bg-amber-100 text-amber-700" },
  { id: "3", name: "Isaac Oluwatemilorun",  task: "Reglas antifraude y validación 3DS",    status: "Pendiente",     tone: "bg-rose-100 text-rose-700" },
  { id: "4", name: "David Oshodi",          task: "Diseño checkout mobile-first",          status: "En progreso",   tone: "bg-amber-100 text-amber-700" },
];

export const reminder = {
  title: "Reunión con equipo de pagos",
  time: "02:00 pm - 04:00 pm",
};

export const projectProgress = 41;
export const timeTracker = "01:24:08";
