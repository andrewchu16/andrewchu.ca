"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-5 h-5"></div>;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-5 h-5 fill-secondary hover:fill-primary"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Moon />
      <Sun />
    </button>
  );
}
