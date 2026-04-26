import React from "react";
import { CheckCircleIcon, ClockIcon, AlertCircleIcon, ActivityIcon } from "./Icons";
import { TaskItem } from "../../interfaces/dashboard.interface";

interface TaskListProps {
  tasks: TaskItem[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const statusConfig = {
    completed: { color: "#6b8e23", bg: "rgba(107, 142, 35, 0.12)", icon: <CheckCircleIcon /> },
    "in-progress": { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", icon: <ClockIcon /> },
    pending: { color: "#9ca3af", bg: "rgba(156, 163, 175, 0.12)", icon: <AlertCircleIcon /> },
    review: { color: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)", icon: <ActivityIcon /> },
  };

  const priorityConfig = {
    high: { color: "#ef4444", label: "Alta" },
    medium: { color: "#f59e0b", label: "Media" },
    low: { color: "#9ca3af", label: "Baja" },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {tasks.map((task) => {
        const status = statusConfig[task.status];
        const priority = priorityConfig[task.priority];
        return (
          <div
            key={task.id}
            style={{
              padding: "12px 14px",
              borderRadius: "10px",
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: 12,
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#6b8e23";
              e.currentTarget.style.background = "#f0f5eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.background = "#f9fafb";
            }}
          >
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: status.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: status.color,
              flexShrink: 0,
            }}>
              {status.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, color: "#1f2937", margin: 0, fontWeight: 500 }}>
                {task.title}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <span style={{
                  fontSize: 10,
                  color: priority.color,
                  background: `${priority.color}15`,
                  padding: "2px 6px",
                  borderRadius: 4,
                  fontWeight: 500,
                }}>
                  {priority.label}
                </span>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>{task.dueDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
