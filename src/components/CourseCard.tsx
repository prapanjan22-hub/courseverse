import Link from "next/link";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group rounded-xl border border-black/5 dark:border-white/10 p-5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 bg-white/60 dark:bg-white/5 hover-lift"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <span className="text-xs rounded-full px-2 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/80 animate-float-slow">
          {course.level}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
        {course.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {course.tags.map((t) => (
          <span 
            key={t} 
            className="text-[11px] rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground animate-float-slow"
            style={{ animationDelay: `${Math.random() * 2}s` }}
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}


