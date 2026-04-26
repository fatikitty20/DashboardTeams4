import React from "react";
import { ActivityItem } from "../../interfaces/dashboard.interface";

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
    {activities.map((activity, index) => (
      <div
        key={activity.id}
        style={{
          padding: "12px 16px",
          borderBottom: index < activities.length - 1 ? "1px solid #f3f4f6" : "none",
          display: "flex",
          alignItems: "center",
          gap: 12,
          transition: "background 0.2s ease",
          cursor: "pointer",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#f9fafb")}
        onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <div style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6b8e23, #556b2f)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: "#fff",
          flexShrink: 0,
        }}>
          {activity.avatar}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 13, color: "#374151", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <span style={{ fontWeight: 500 }}>{activity.user}</span>{" "}
            <span style={{ color: "#6b7280" }}>{activity.action}</span>{" "}
            <span style={{ fontWeight: 500, color: "#6b8e23" }}>{activity.target}</span>
          </p>
          <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 0 0" }}>{activity.time}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ActivityFeed;
