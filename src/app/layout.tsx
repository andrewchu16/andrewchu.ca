import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import DarkModeToggle from "@/components/DarkModeToggle";

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
          <div className="fixed bottom-6 right-6 z-10">
            <DarkModeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
