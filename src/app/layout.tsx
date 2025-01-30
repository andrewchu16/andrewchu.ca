import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrew Chu",
  description: "Welcome to Andrew Chu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon.svg"
          type="image/svg"
        />
      </Head>
      <body className={`${hankenGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
