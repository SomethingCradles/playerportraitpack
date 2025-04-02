import path from "path";
import { readdirSync } from "fs";
import { readdir } from "fs/promises";

import styles from "./page.module.css";
import Viewer from "./components/Viewer";

export async function generateStaticParams() {
  const directories = (await readdir(path.resolve('../sources'), { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return directories.map((directory) => ({
    type: directory,
  }));
}

export async function getImages(slug: string) {
  const images = readdirSync(path.resolve(`../sources/${slug}`), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.match(/\**.*_l.png/))
    .map(dirent => dirent.name);

  return images
}

export default async function Type({
  params
}: {
  params: Promise<{ type: string }>,
}) {
  const type = (await params).type;

  const images = await getImages(type);

  return (
    <main className={styles.Inset}>
      <Viewer images={images} type={type} />
    </main>
  );
}
