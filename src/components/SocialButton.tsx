import React from 'react';
import styles from './SocialButton.module.css';

interface SocialButtonProps {
  text: string;
  icon: string; // Aquí podrías pasar un componente de icono o una URL
  provider: 'google' | 'apple' | 'email';
}

export function SocialButton({ text, icon, provider }: SocialButtonProps) {
  const providerClass =
    provider === 'google'
      ? styles.google
      : provider === 'apple'
      ? styles.apple
      : styles.email;

  return (
    <button className={`${styles.button} ${providerClass}`}>
      <span className={styles.icon}>{icon}</span>
      {text}
    </button>
  );
}