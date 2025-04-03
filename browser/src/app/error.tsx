'use client';

import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        An unknown error occurred.
      </main>
    </div>
  );
}
