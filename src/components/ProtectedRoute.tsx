"use client";

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 50%, #e8f5e8 100%)'
      }}>
        <div style={{
          padding: '20px',
          borderRadius: '12px',
          background: 'white',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', color: '#2f4f2f', marginBottom: '10px' }}>
            🔒 Acceso Restringido
          </div>
          <div style={{ color: '#6b8e23' }}>
            Redirigiendo al login...
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}