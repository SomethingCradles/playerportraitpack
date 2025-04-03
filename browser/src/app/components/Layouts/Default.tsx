'use client';

import { useEffect, useState } from "react";

import Header, { ColorModes } from "../Header";
import Footer from "../Footer";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [colormode, setColormode] = useState<'system' | 'dark' | 'light'>('system');

  useEffect(() => {
    const preset = localStorage?.getItem('colorPreference') as ColorModes;

    console.log(preset);

    if (preset) setColormode(preset)
  }, [])

  useEffect(() => {
    localStorage.setItem('colorPreference', colormode);
  }, [colormode])

  return (
    <html lang="en" className={colormode}>
      <body>
        <Header mode={colormode} setMode={setColormode} />

        {children}

        <Footer />
      </body>
    </html>
  );
}
