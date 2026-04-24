"use client";

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebarItem} ${styles.active}`}>Dashboard</div>
      <div className={styles.sidebarItem}>Tasks</div>
      <div className={styles.sidebarItem}>Analytics</div>
      <div className={styles.settingsSection}>
        <div className={styles.sidebarItem}>Ajustes</div>
        <div className={styles.sidebarItem}>Ayuda</div>
        <div className={styles.sidebarItem} onClick={handleLogout}>Cerrar Sesión</div>
      </div>
    </div>
  );
}