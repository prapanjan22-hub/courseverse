"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? stored === "dark" : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/5 dark:border-white/10 hover:bg-foreground/5 transition-all duration-300 hover:scale-110 hover:shadow-lg"
    >
      <div className="relative">
        {dark ? (
          <Sun className="size-5 animate-float text-yellow-500" />
        ) : (
          <Moon className="size-5 animate-float text-blue-500" />
        )}
      </div>
    </button>
  );
}


