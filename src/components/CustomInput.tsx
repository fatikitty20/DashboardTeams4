import styles from './CustomInput.module.css';

interface CustomInputProps {
  label: string;
  type: string;
  placeholder: string;
}

export function CustomInput({ label, type, placeholder }: CustomInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}