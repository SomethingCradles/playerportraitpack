import { readdir } from "fs/promises";
import path from "path";

import styles from "./page.module.css";
import Link from "next/link";

export async function getTypes() {
  const directories = (await readdir(path.resolve('../sources'), { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return directories
}

export default async function Home() {
  const directories = await getTypes();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {directories.map((dir) => (
          <Link className={styles.card} key={dir} href={`/${dir}`}>{dir}</Link>
        ))}
      </main>
    </div>
  );
}
