"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { LoginView } from './Login';

export const LoginContainer = () => {
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    // Simular login exitoso
    login();
    router.push('/dashboard');
  };

  return <LoginView onLogin={handleLogin} />;
};

export default LoginContainer;
