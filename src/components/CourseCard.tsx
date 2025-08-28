import Link from "next/link";
import type { Course } from "@/data/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group rounded-xl border border-black/5 dark:border-white/10 p-5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all bg-white/60 dark:bg-white/5"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold tracking-tight">{course.title}</h3>
        <span className="text-xs rounded-full px-2 py-1 bg-foreground/10 text-foreground/80">{course.level}</span>
      </div>
      <p className="mt-2 text-sm text-foreground/70 line-clamp-2">{course.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {course.tags.map((t) => (
          <span key={t} className="text-[11px] rounded-full bg-foreground/5 px-2 py-0.5 text-foreground/70">{t}</span>
        ))}
      </div>
    </Link>
  );
}


