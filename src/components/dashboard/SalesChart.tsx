"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './SalesChart.module.css';

const data = [
  { day: 'Lun', sales: 1200 },
  { day: 'Mar', sales: 1800 },
  { day: 'Mié', sales: 1500 },
  { day: 'Jue', sales: 2200 },
  { day: 'Vie', sales: 2800 },
  { day: 'Sáb', sales: 1900 },
  { day: 'Dom', sales: 1600 },
];

export default function SalesChart() {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.title}>Ventas por Día</h3>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(107, 142, 35, 0.2)" />
          <XAxis dataKey="day" stroke="#2f4f2f" fontSize={12} />
          <YAxis stroke="#2f4f2f" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%)',
              border: '1px solid rgba(107, 142, 35, 0.3)',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              fontSize: '12px'
            }}
          />
          <Bar dataKey="sales" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6b8e23" />
              <stop offset="100%" stopColor="#556b2f" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}