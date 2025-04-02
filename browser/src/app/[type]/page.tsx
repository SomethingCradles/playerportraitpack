import styles from "./page.module.css";
import { readdir } from "fs/promises";
import path from "path";
import { readdirSync } from "fs";
import Preview from "../components/Preview";

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

  console.log(type, images);

  return (
    <main className={styles.Inset}>
      {images.map((image) => (
        <Preview
          key={image}
          source={`https://raw.githubusercontent.com/RegnantPhoenix/playerportraitpack/refs/heads/master/sources/${type}/${image}`}
          tag={image.replace('l.png', '')}
        />
      ))}
    </main>
  );
}
