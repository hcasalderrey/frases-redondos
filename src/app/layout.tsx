import type { Metadata } from "next";

import { Fira_Sans } from "next/font/google";

import "./globals.css";


const inter = Fira_Sans( {
    subsets: ["latin"],
    weight: ["200", "300","400", "500", "600","700", "800", "900"],});


export const metadata: Metadata = {
  title: "Frases Redondos",
  description: "v1.0.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
