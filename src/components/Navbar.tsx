"use client";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 dark:border-white/10 bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
            <Menu className="size-5" />
          </button>
          <Link href="/" className="font-semibold tracking-tight text-lg">CourseVerse</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:opacity-80">Home</Link>
          <Link href="/#courses" className="hover:opacity-80">Courses</Link>
          <Link href="https://github.com" target="_blank" className="hover:opacity-80">GitHub</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Search className="size-5" />
          <ThemeToggle />
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="px-4 py-3 flex flex-col gap-2">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/#courses" onClick={() => setOpen(false)}>Courses</Link>
          </div>
        </div>
      )}
    </header>
  );
}


