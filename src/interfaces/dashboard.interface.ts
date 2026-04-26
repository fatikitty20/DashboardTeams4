// Tipos para el Dashboard
export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  colorScheme: "green" | "blue" | "red" | "amber" | "dark";
}

export interface ActivityItem {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface TaskItem {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "pending" | "review";
  priority: "high" | "medium" | "low";
  dueDate: string;
}

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}