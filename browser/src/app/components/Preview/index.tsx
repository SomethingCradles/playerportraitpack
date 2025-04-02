import Image from "next/image";

import styles from "./component.module.css";

const Preview = ({
  source, tag
}: {
  source: string,
  tag: string,
}) => {
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
          />
        </div>
      </div>

      <div className={styles.tag}>{tag}</div>
    </div>
  );
}

export default Preview;
