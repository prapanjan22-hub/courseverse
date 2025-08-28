"use client";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { courses as allCourses, type Course } from "@/data/courses";
import { Search } from "lucide-react";

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
      <div className="relative">
        <input
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search courses, tags, levels..."
          className="w-full h-12 rounded-xl border border-border bg-card text-card-foreground px-4 pl-12 outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-300 placeholder:text-muted-foreground"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground animate-float" />
      </div>
    </div>
  );
}


