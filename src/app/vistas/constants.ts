import React from "react";
import {
  HomeIcon,
  ChartIcon,
  FileIcon,
  UsersIcon,
  MailIcon,
  BellIcon,
  LocationIcon,
  SettingsIcon,
} from "../components/Icons";
import { NavItem } from "../../interfaces/dashboard.interface";

export const NAV_ITEMS: NavItem[] = [
  { icon: React.createElement(HomeIcon), label: "Dashboard", active: true },
  { icon: React.createElement(ChartIcon), label: "Analíticas" },
  { icon: React.createElement(FileIcon), label: "Proyectos" },
  { icon: React.createElement(UsersIcon), label: "Equipo", badge: 3 },
  { icon: React.createElement(MailIcon), label: "Mensajes", badge: 12 },
  { icon: React.createElement(BellIcon), label: "Notificaciones" },
  { icon: React.createElement(LocationIcon), label: "Ubicaciones" },
  { icon: React.createElement(SettingsIcon), label: "Configuración" },
];