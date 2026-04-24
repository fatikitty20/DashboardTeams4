"use client";

import React from 'react';
import styles from './Login.module.css';
import { SocialButton } from '@/components/SocialButton';
import { Separator } from '@/components/Separator';
import { CustomInput } from '@/components/CustomInput';

interface LoginViewProps {
  onLogin: () => void;
}

export const LoginView = ({ onLogin }: LoginViewProps) => {
  return (
    <div className={styles.screen}>
      <div className={styles.card}>
        <div className={styles.logo}>Nombre empresa</div>

        <h2 className={styles.title}>¡Hola mundo!</h2>

        <SocialButton text="Ingresar con Google" icon="G" provider="google" />
        <SocialButton text="Ingresar con Apple" icon="a" provider="apple" />

        <Separator />

        <CustomInput label="E-mail" type="email" placeholder="nombre@ejemplo.com" />
        <CustomInput label="Contraseña" type="password" placeholder="Tu contraseña" />

        <button className={styles.mainButton} onClick={onLogin}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};