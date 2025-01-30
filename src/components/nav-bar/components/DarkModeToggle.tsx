"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkModeIcon from "../../icons/DarkModeIcon";
import LightModeIcon from "../../icons/LightModeIcon";

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
      <DarkModeIcon />
      <LightModeIcon />
    </button>
  );
}
