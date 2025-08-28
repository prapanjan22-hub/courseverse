import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/courses";

type Params = { slug: string };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course not found" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return notFound();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{course.title}</h1>
        <p className="mt-2 text-foreground/70">{course.description}</p>

        {course.heroVideoId && (
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-black/5 dark:border-white/10">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${course.heroVideoId}`}
              title={`${course.title} intro video`}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Curriculum</h2>
          <div className="mt-4 space-y-6">
            {course.curriculum.map((m) => (
              <div key={m.title} className="rounded-xl border border-black/5 dark:border-white/10 p-5">
                <h3 className="font-semibold">{m.title}</h3>
                <ol className="mt-3 list-decimal list-inside space-y-1 text-sm text-foreground/80">
                  {m.lessons.map((l) => (
                    <li key={l.title}>
                      {l.title}
                      {l.durationMinutes ? ` — ${l.durationMinutes}m` : ""}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}


