'use client';

import Image from "next/image";

import styles from "./component.module.css";
import { Dispatch, SetStateAction } from "react";

const Preview = ({
  source, tag, index, activate
}: {
  source: string,
  tag: string,
  index: number,
  activate: Dispatch<SetStateAction<number | false>>

}) => {
  const onTagClick = () => {
    try {
      navigator.clipboard.writeText(tag);
    } catch {
      document.execCommand('copy', false, tag);
    }
  }

  return (
    <div className={styles.Preview}>
      <div className={styles.portraitWrapper}>
        <div className={styles.portraitShifter}>
          <Image
            className={styles.portrait}
            src={source}
            alt={tag}
            width={130}
            height={260}
            priority
            onClick={() => activate(index)}
          />
        </div>
      </div>

      <div onClick={onTagClick} className={styles.tag}>{tag}</div>
    </div>
  );
}

export default Preview;
