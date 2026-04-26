// Datos mock para el Dashboard
export const MOCK_STATS = {
  earnings: { value: "$6,284", trend: 12.5, label: "vs mes anterior" },
  shares: { value: "2,434", trend: 8.2, label: "vs semana anterior" },
  likes: { value: "1,259", trend: -3.1, label: "vs mes anterior" },
  rating: { value: "8.5", trend: 1.2, label: "vs mes anterior" },
  users: { value: "342", trend: 15.3, label: "nuevos este mes" },
  tasks: { value: "28", trend: 5.7, label: "pendientes" },
};

export const MOCK_ACTIVITIES = [
  { id: 1, user: "María G.", action: "completó la tarea", target: "Reporte Q4", time: "hace 5 min", avatar: "MG" },
  { id: 2, user: "Carlos R.", action: "subió archivos a", target: "Proyecto Alpha", time: "hace 12 min", avatar: "CR" },
  { id: 3, user: "Ana P.", action: "comentó en", target: "Diseño UI", time: "hace 1 hora", avatar: "AP" },
  { id: 4, user: "Lucas M.", action: "creó el proyecto", target: "Dashboard 2026", time: "hace 2 horas", avatar: "LM" },
];

export const MOCK_TASKS = [
  { id: 1, title: "Revisar métricas de rendimiento", status: "in-progress" as const, priority: "high" as const, dueDate: "Hoy" },
  { id: 2, title: "Actualizar documentación API", status: "pending" as const, priority: "medium" as const, dueDate: "Mañana" },
  { id: 3, title: "Reunión con equipo de diseño", status: "completed" as const, priority: "high" as const, dueDate: "Ayer" },
  { id: 4, title: "Corregir bugs en login", status: "review" as const, priority: "high" as const, dueDate: "25 Abr" },
  { id: 5, title: "Optimizar consultas database", status: "pending" as const, priority: "low" as const, dueDate: "28 Abr" },
];