import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick And Morty Fun",
  description: "Rick And Morty Fun using Rick and Morty API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
