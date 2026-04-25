import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
}

const Alert: React.FC<AlertProps> = ({ children, variant = 'info' }) => {
  const colors = {
    success: '#d4edda',
    error: '#f8d7da',
    warning: '#fff3cd',
    info: '#d1ecf1',
  };

  return (
    <div style={{ padding: '12px', backgroundColor: colors[variant], borderRadius: '4px', margin: '8px 0' }}>
      {children}
    </div>
  );
};

export default Alert;