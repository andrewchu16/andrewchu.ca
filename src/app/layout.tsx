import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import Navbar from "@/components/nav-bar/Navbar";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${hankenGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <main id="content">{children}</main>
            <div
            className="fixed top-9 left-1/2 transform -translate-x-1/2"
            id="navbar-container"
            >
            <Navbar />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
