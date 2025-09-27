import { ProjectCard } from "@/components/project-card"

// Mock data for demonstration
const mockProjects = [
  {
    id: 1,
    name: "React Flow",
    description:
      "A highly customizable library for building interactive node-based UIs, editors, flow charts and diagrams",
    author: "webkid",
    stars: 18500,
    language: "TypeScript",
    category: "Web Development",
    tags: ["react", "flow", "diagrams", "ui"],
    upvotes: 342,
    contributionLevel: "Beginner Friendly",
    lastUpdated: "2 days ago",
    githubUrl: "https://github.com/wbkd/react-flow",
  },
  {
    id: 2,
    name: "Supabase",
    description: "The open source Firebase alternative. Build a backend in less than 2 minutes.",
    author: "supabase",
    stars: 65200,
    language: "TypeScript",
    category: "Databases",
    tags: ["database", "backend", "firebase", "postgresql"],
    upvotes: 1247,
    contributionLevel: "Intermediate",
    lastUpdated: "1 day ago",
    githubUrl: "https://github.com/supabase/supabase",
  },
  {
    id: 3,
    name: "Framer Motion",
    description:
      "A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams.",
    author: "framer",
    stars: 22100,
    language: "TypeScript",
    category: "Web Development",
    tags: ["animation", "react", "motion", "ui"],
    upvotes: 567,
    contributionLevel: "Advanced",
    lastUpdated: "3 days ago",
    githubUrl: "https://github.com/framer/motion",
  },
  {
    id: 4,
    name: "Expo",
    description:
      "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web.",
    author: "expo",
    stars: 31800,
    language: "TypeScript",
    category: "Mobile Apps",
    tags: ["react-native", "mobile", "ios", "android"],
    upvotes: 892,
    contributionLevel: "Beginner Friendly",
    lastUpdated: "1 day ago",
    githubUrl: "https://github.com/expo/expo",
  },
  {
    id: 5,
    name: "Prisma",
    description: "Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, SQL Server, and more.",
    author: "prisma",
    stars: 37200,
    language: "TypeScript",
    category: "Databases",
    tags: ["orm", "database", "typescript", "nodejs"],
    upvotes: 743,
    contributionLevel: "Intermediate",
    lastUpdated: "2 days ago",
    githubUrl: "https://github.com/prisma/prisma",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    author: "tailwindlabs",
    stars: 78900,
    language: "CSS",
    category: "Design Systems",
    tags: ["css", "utility", "design", "framework"],
    upvotes: 1456,
    contributionLevel: "Beginner Friendly",
    lastUpdated: "4 days ago",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
  },
]

export function ProjectFeed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-foreground">Today's Top Projects</h2>
          <span className="text-sm text-muted-foreground">{mockProjects.length} projects</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="bg-background border border-border rounded-md px-3 py-1 text-sm">
            <option>Most Upvoted</option>
            <option>Recently Added</option>
            <option>Most Stars</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {mockProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}
