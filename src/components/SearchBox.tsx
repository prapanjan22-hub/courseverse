"use client";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { courses as allCourses, type Course } from "@/data/courses";

type Props = {
  onResults: (results: Course[]) => void;
};

export default function SearchBox({ onResults }: Props) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => {
    return new Fuse(allCourses, {
      keys: ["title", "description", "tags", "level"],
      threshold: 0.35,
    });
  }, []);

  function handleChange(value: string) {
    setQuery(value);
    if (!value) {
      onResults(allCourses);
      return;
    }
    const results = fuse.search(value).map((r) => r.item);
    onResults(results);
  }

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <input
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search courses, tags, levels..."
        className="w-full h-12 rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}


