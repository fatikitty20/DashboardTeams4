import React from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', cursor: 'pointer' }}>
      <span>{icon}</span>
      <span style={{ textTransform: 'capitalize' }}>{label}</span>
    </div>
  );
};

export default SidebarItem;