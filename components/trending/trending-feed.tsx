"use client"

import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Calendar } from "lucide-react"
import { useState } from "react"

// Mock trending data with additional metrics
const trendingProjects = [
  {
    id: 1,
    name: "Shadcn/UI",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    author: "shadcn",
    stars: 45200,
    language: "TypeScript",
    category: "Design Systems",
    tags: ["react", "tailwind", "components", "ui"],
    upvotes: 2847,
    contributionLevel: "Beginner Friendly",
    lastUpdated: "6 hours ago",
    githubUrl: "https://github.com/shadcn-ui/ui",
    trendingScore: 98,
    weeklyGrowth: "+1.2k stars",
    discussions: 234,
  },
  {
    id: 2,
    name: "Bun",
    description: "Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one",
    author: "oven-sh",
    stars: 67800,
    language: "Zig",
    category: "Developer Tools",
    tags: ["javascript", "runtime", "bundler", "performance"],
    upvotes: 3421,
    contributionLevel: "Advanced",
    lastUpdated: "2 hours ago",
    githubUrl: "https://github.com/oven-sh/bun",
    trendingScore: 95,
    weeklyGrowth: "+2.1k stars",
    discussions: 567,
  },
  {
    id: 3,
    name: "Excalidraw",
    description: "Virtual whiteboard for sketching hand-drawn like diagrams",
    author: "excalidraw",
    stars: 72100,
    language: "TypeScript",
    category: "Design Tools",
    tags: ["drawing", "whiteboard", "collaboration", "diagrams"],
    upvotes: 1923,
    contributionLevel: "Intermediate",
    lastUpdated: "1 day ago",
    githubUrl: "https://github.com/excalidraw/excalidraw",
    trendingScore: 92,
    weeklyGrowth: "+890 stars",
    discussions: 189,
  },
  {
    id: 4,
    name: "Astro",
    description: "The web framework for content-driven websites. Build fast with less client-side JavaScript.",
    author: "withastro",
    stars: 42300,
    language: "TypeScript",
    category: "Web Frameworks",
    tags: ["static-site", "performance", "islands", "framework"],
    upvotes: 1567,
    contributionLevel: "Intermediate",
    lastUpdated: "8 hours ago",
    githubUrl: "https://github.com/withastro/astro",
    trendingScore: 89,
    weeklyGrowth: "+743 stars",
    discussions: 312,
  },
]

const timeFilters = [
  { label: "Today", value: "today", icon: Clock },
  { label: "This Week", value: "week", icon: Calendar },
  { label: "This Month", value: "month", icon: Calendar },
]

export function TrendingFeed() {
  const [selectedTime, setSelectedTime] = useState("today")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Trending Now</h2>
          </div>
          <span className="text-sm text-muted-foreground">{trendingProjects.length} projects</span>
        </div>

        <div className="flex items-center gap-2">
          {timeFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={selectedTime === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTime(filter.value)}
              className="gap-2"
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {trendingProjects.map((project, index) => (
          <div key={project.id} className="relative">
            <ProjectCard project={project} rank={index + 1} />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {project.weeklyGrowth}
              </div>
              <div className="bg-green-500/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {project.trendingScore}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
