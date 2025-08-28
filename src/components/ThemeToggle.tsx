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
      className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer group"
    >
      <div className="relative">
        {dark ? (
          <Sun className="size-5 text-yellow-500 animate-float group-hover:animate-pulse transition-all duration-200" />
        ) : (
          <Moon className="size-5 text-blue-500 animate-float group-hover:animate-pulse transition-all duration-200" />
        )}
      </div>
    </button>
  );
}


