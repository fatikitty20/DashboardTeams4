import styles from './Separator.module.css';

export function Separator() {
  return (
    <div className={styles.separator}>
      <div className={styles.line}></div>
      <span className={styles.text}>o</span>
      <div className={styles.line}></div>
    </div>
  );
}