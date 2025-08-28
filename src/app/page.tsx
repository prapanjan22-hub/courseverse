"use client";
import { useEffect, useState } from "react";
import { courses as allCourses, type Course } from "@/data/courses";
import SearchBox from "@/components/SearchBox";
import { CourseCard } from "@/components/CourseCard";

export default function Home() {
  const [results, setResults] = useState<Course[]>(allCourses);
  useEffect(() => {
    setResults(allCourses);
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Learn top programming languages</h1>
        <p className="mt-3 text-foreground/70">Curated curriculums, interactive search, and YouTube tutorials.</p>
        <div className="mt-6">
          <SearchBox onResults={setResults} />
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
