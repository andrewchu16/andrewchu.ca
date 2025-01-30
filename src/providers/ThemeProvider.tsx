"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  return (
    <NextThemesProvider attribute="class" enableSystem defaultTheme="system" {...props}>
      {children}
    </NextThemesProvider>
  );
}
