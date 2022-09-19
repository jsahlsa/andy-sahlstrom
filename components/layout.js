import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      {children}
      <footer className={styles.footer}>
        <p>Andy Sahlstrom &copy;{year}</p>
      </footer>
    </div>
  );
}
