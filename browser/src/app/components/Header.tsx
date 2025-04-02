'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

const Header = () => {
  const {type} = useParams();

  return (
    <nav>
      <span>
        <Link href="/">Enhanced Player Portrait Pack</Link>
        {type && (
          ` / ${type}`
        )}
      </span>
    </nav>
  )
};

export default Header;
