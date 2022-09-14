import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <footer>
        <p>coming soon…</p>
      </footer>
    </div>
  );
}
