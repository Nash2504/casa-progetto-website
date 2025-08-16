import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Progetto - Marbleous Creations",
  description: "Transforming Spaces with Excellence & Precision - Premium Marble and Construction Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
