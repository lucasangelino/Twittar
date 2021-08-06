import { useState, useEffect } from "react";

import styles from "./styles.module.css";
import AppLayout from "../../components/applayout";
import Avatar from "../../components/avatar/";

export default function HomePage() {
  const [twities, setTwities] = useState([]);

  useEffect(() => {
    fetch("/api/statuses/home_timeline")
      .then((res) => res.json())
      .then((data) => setTwities(data.timeline));
    return () => {};
  }, []);

  return (
    <>
      <AppLayout>
        <section className={styles.section}>
          <header className={styles.header}>
            <h2 className={styles.h2}>Inicio</h2>
          </header>
          {twities.map((twity) => (
            <article key={twity.id}>
              <Avatar src={twity.avatar} height={21} alt={twity.username} />
            </article>
          ))}
          <nav className={styles.nav}>Nav bar</nav>
        </section>
      </AppLayout>
    </>
  );
}
