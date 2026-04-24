"use client";

import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Toolbar from '@/components/dashboard/Toolbar';
import DashboardContent from '@/components/dashboard/DashboardContent';
import styles from './DashboardLayout.module.css';

export default function DashboardLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Toolbar />
        <DashboardContent />
      </div>
    </div>
  );
}