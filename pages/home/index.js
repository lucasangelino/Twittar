import styles from "./styles.module.css";
import AppLayout from "../../components/applayout";
export default function HomePage() {
  return (
    <>
      <AppLayout>
        <section className={styles.section}>
          <header className={styles.header}>
            <h2 className={styles.h2}>Inicio</h2>
          </header>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))}
          <nav className={styles.nav}>Nav bar</nav>
        </section>
      </AppLayout>
    </>
  );
}
