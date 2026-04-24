import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fuentePrincipal = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fuenteCodigo = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard PSP",
  description: "Base del dashboard en Next.js con pantalla de acceso.",
};

export default function DisenoRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fuentePrincipal.variable} ${fuenteCodigo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
