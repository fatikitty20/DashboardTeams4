"use client";

import React from 'react';
import styles from './DashboardContent.module.css';
import SalesChart from './SalesChart';

export default function DashboardContent() {
  return (
    <div className={styles.content}>
      <SalesChart />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Total Ingresado</div>
          <div className={styles.cardValue}>$12,345.67</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Ingreso por Día</div>
          <div className={styles.cardValue}>$456.78</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Transacciones Hoy</div>
          <div className={styles.cardValue}>123</div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tasa de Éxito</div>
          <div className={styles.cardValue}>98.5%</div>
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>ID Transacción</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>$100.00</td>
              <td>2024-04-24</td>
              <td>Aprobada</td>
            </tr>
            <tr>
              <td>002</td>
              <td>$50.00</td>
              <td>2024-04-24</td>
              <td>Aprobada</td>
            </tr>
            <tr>
              <td>003</td>
              <td>$200.00</td>
              <td>2024-04-24</td>
              <td>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}