"use client";

import React from 'react';
import styles from './Toolbar.module.css';

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <div className={styles.profile}>
        <div className={styles.icon}>👤</div>
        <div>
          <div>Nombre Usuario</div>
          <div>usuario@email.com</div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.icon}>🔔</div>
        <div className={styles.icon}>💬</div>
        <input type="text" placeholder="Buscar..." className={styles.search} />
      </div>
    </div>
  );
}