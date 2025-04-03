import type { Metadata } from "next";

import DefaultLayout from "./components/Layouts/Default";

import "./globals.css";

export const metadata: Metadata = {
  title: "Enhanced Player Portrait Pack Browser",
  description: "Portraits now sorted by gender, please choose gender from drop-down menu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  );
}
