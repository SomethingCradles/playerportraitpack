'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import styles from './component.module.css';

const colormodes = ['system', 'dark', 'light'] as const;

export type ColorModes = typeof colormodes[number];

const Header = ({mode, setMode}: {
  mode: ColorModes,
  setMode: Dispatch<SetStateAction<ColorModes>>,
}) => {
  const {type} = useParams();

  return (
    <nav className={styles.Header}>
      <span>
        <Link href="/">Enhanced Player Portrait Pack</Link>
        {type && (
          ` / ${type}`
        )}
      </span>

      <select
        className={styles.switcher}
        onChange={(e) => setMode(e.target.value as ColorModes)}
        value={mode}
      >
        {colormodes.map((colormode) => (
          <option key={colormode} value={colormode}>
            {colormode}
          </option>
        ))}
      </select>
    </nav>
  )
};

export default Header;
