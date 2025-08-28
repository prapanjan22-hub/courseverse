export type Lesson = {
  title: string;
  durationMinutes?: number;
  videoId?: string;
};

export type Module = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  heroVideoId?: string;
  playlistId?: string;
  curriculum: Module[];
};

export const courses: Course[] = [
  {
    slug: "python",
    title: "Python",
    description:
      "Learn Python from basics to building applications: syntax, data structures, OOP, and popular libraries.",
    level: "Beginner",
    tags: ["backend", "data", "automation", "ai"],
    heroVideoId: "rfscVS0vtbw",
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Setup and Hello World", durationMinutes: 10, videoId: "oDUwbt8n79k" },
          { title: "Variables and Types", durationMinutes: 15 },
          { title: "Control Flow", durationMinutes: 18 },
        ],
      },
      {
        title: "Core Python",
        lessons: [
          { title: "Functions", durationMinutes: 20 },
          { title: "Modules and Packages", durationMinutes: 15 },
          { title: "File I/O", durationMinutes: 15 },
        ],
      },
    ],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "Master modern JavaScript: ES6+, asynchronous programming, DOM, and tooling for the web.",
    level: "Beginner",
    tags: ["frontend", "backend", "node", "web"],
    heroVideoId: "PkZNo7MFNFg",
    curriculum: [
      {
        title: "Foundations",
        lessons: [
          { title: "Language Basics", durationMinutes: 25 },
          { title: "Functions and Scope", durationMinutes: 20 },
          { title: "Arrays and Objects", durationMinutes: 20 },
        ],
      },
      {
        title: "Asynchronous JS",
        lessons: [
          { title: "Promises", durationMinutes: 20 },
          { title: "Async/Await", durationMinutes: 20 },
        ],
      },
    ],
  },
  {
    slug: "java",
    title: "Java",
    description:
      "Strongly-typed OOP for large-scale systems. Learn JVM, collections, and concurrency.",
    level: "Intermediate",
    tags: ["backend", "enterprise", "android"],
    heroVideoId: "grEKMHGYyns",
    curriculum: [
      { title: "Basics", lessons: [{ title: "JDK Setup" }, { title: "Classes and Objects" }] },
      { title: "Advanced", lessons: [{ title: "Streams" }, { title: "Concurrency" }] },
    ],
  },
  {
    slug: "cpp",
    title: "C++",
    description:
      "Systems programming, memory management, and modern C++ (11/14/17/20).",
    level: "Advanced",
    tags: ["systems", "performance", "games"],
    heroVideoId: "vLnPwxZdW4Y",
    curriculum: [
      { title: "Core", lessons: [{ title: "Pointers" }, { title: "Templates" }] },
      { title: "STL", lessons: [{ title: "Containers" }, { title: "Algorithms" }] },
    ],
  },
  {
    slug: "go",
    title: "Go",
    description: "Fast, simple, and concurrent: build cloud services with Go.",
    level: "Intermediate",
    tags: ["backend", "cloud", "devops"],
    heroVideoId: "YS4e4q9oBaU",
    curriculum: [
      { title: "Intro", lessons: [{ title: "Tooling" }, { title: "Goroutines" }] },
      { title: "Web", lessons: [{ title: "HTTP Servers" }, { title: "JSON" }] },
    ],
  },
  {
    slug: "rust",
    title: "Rust",
    description: "Fearless concurrency and memory safety for systems programming.",
    level: "Advanced",
    tags: ["systems", "safety", "cli"],
    heroVideoId: "n8l7oD3Yv1E",
    curriculum: [
      { title: "Ownership", lessons: [{ title: "Borrowing" }, { title: "Lifetimes" }] },
      { title: "Ecosystem", lessons: [{ title: "Cargo" }, { title: "Crates" }] },
    ],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description: "Typed superset of JavaScript for scalable applications.",
    level: "Intermediate",
    tags: ["frontend", "backend", "types"],
    heroVideoId: "gp5H0Vw39yw",
    curriculum: [
      { title: "Types", lessons: [{ title: "Generics" }, { title: "Utility Types" }] },
      { title: "Tooling", lessons: [{ title: "tsconfig" }, { title: "Build" }] },
    ],
  },
  {
    slug: "kotlin",
    title: "Kotlin",
    description: "Modern language for Android and server-side with concise syntax.",
    level: "Intermediate",
    tags: ["android", "backend"],
    heroVideoId: "F9UC9DY-vIU",
    curriculum: [
      { title: "Basics", lessons: [{ title: "Null Safety" }, { title: "Coroutines" }] },
    ],
  },
  {
    slug: "swift",
    title: "Swift",
    description: "Apple's language for iOS and macOS apps.",
    level: "Intermediate",
    tags: ["ios", "macos"],
    heroVideoId: "comQ1-x2a1Q",
    curriculum: [
      { title: "SwiftUI", lessons: [{ title: "Views" }, { title: "State" }] },
    ],
  },
  {
    slug: "csharp",
    title: "C#",
    description: "Build with .NET across desktop, web, and games.",
    level: "Intermediate",
    tags: ["dotnet", "unity", "backend"],
    heroVideoId: "GhQdlIFylQ8",
    curriculum: [
      { title: ".NET", lessons: [{ title: "LINQ" }, { title: "ASP.NET" }] },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}


