"use client";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Avatar({ src, alt = "Avatar", name, size = "md" }: AvatarProps) {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { width: "32px", height: "32px", fontSize: "12px" },
    md: { width: "40px", height: "40px", fontSize: "14px" },
    lg: { width: "56px", height: "56px", fontSize: "18px" },
    xl: { width: "80px", height: "80px", fontSize: "24px" },
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getColorFromName = (name: string) => {
    const colors = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          ...sizeStyles[size],
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        ...sizeStyles[size],
        borderRadius: "50%",
        backgroundColor: name ? getColorFromName(name) : "#4b5563",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
      }}
    >
      {name ? getInitials(name) : "?"}
    </div>
  );
}