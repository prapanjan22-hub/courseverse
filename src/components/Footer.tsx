export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} CourseVerse. All rights reserved.</p>
        <p>
          Built with Next.js + Tailwind.
        </p>
      </div>
    </footer>
  );
}


