import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew's Portfolio",
  description: "The things I do",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
