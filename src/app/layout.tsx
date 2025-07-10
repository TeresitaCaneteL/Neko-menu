import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Neko Ramen",
  description: "Menú digital japonés",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Agrega esta línea 👇 */}
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
