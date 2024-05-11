import type { Metadata } from "next";
import { Kablammo } from "next/font/google";
import "./globals.css";

const kablammo = Kablammo({ subsets: ["latin"] });

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
      <body className={kablammo.className}>{children}</body>
    </html>
  );
}
