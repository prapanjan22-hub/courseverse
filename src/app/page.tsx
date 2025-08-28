"use client";
import { useEffect, useState } from "react";
import { courses as allCourses, type Course } from "@/data/courses";
import SearchBox from "@/components/SearchBox";
import { CourseCard } from "@/components/CourseCard";
import { BookOpen, Code, Zap } from "lucide-react";

export default function Home() {
  const [results, setResults] = useState<Course[]>(allCourses);
  
  useEffect(() => {
    setResults(allCourses);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <section className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <BookOpen className="size-8 text-primary animate-float" />
          <Code className="size-8 text-primary animate-float-slow" />
          <Zap className="size-8 text-primary animate-float-fast" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Learn top programming languages
        </h1>
        <p className="mt-3 text-muted-foreground text-lg">
          Curated curriculums, interactive search, and YouTube tutorials.
        </p>
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
