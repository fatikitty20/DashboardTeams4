import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 14px',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#d1d5db',
      fontSize: 14,
      fontWeight: 500,
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
      e.currentTarget.style.color = '#fff';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = '#d1d5db';
    }}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <span style={{ textTransform: 'capitalize' }}>{label}</span>
    </div>
  );
};

export default SidebarItem;