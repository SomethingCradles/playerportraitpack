'use client';

import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Requested page does not exist.
      </main>
    </div>
  );
}
