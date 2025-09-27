import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronUp, Star, ExternalLink, GitFork, Clock, Users } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  name: string
  description: string
  author: string
  stars: number
  language: string
  category: string
  tags: string[]
  upvotes: number
  contributionLevel: string
  lastUpdated: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
  rank: number
}

export function ProjectCard({ project, rank }: ProjectCardProps) {
  const getContributionColor = (level: string) => {
    switch (level) {
      case "Beginner Friendly":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        {/* Rank and Upvote */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-muted-foreground">#{rank}</span>
          <Button variant="outline" size="sm" className="flex flex-col gap-1 h-auto py-2 bg-transparent">
            <ChevronUp className="w-4 h-4" />
            <span className="text-xs font-semibold">{project.upvotes}</span>
          </Button>
        </div>

        {/* Project Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <Link href={`/project/${project.id}`}>
                <h3 className="text-xl font-semibold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                  {project.name}
                </h3>
              </Link>
              <p className="text-muted-foreground text-pretty">{project.description}</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Project Stats */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{project.stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>{project.language}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{project.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>by {project.author}</span>
            </div>
          </div>

          {/* Contribution Level and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className={getContributionColor(project.contributionLevel)}>{project.contributionLevel}</Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <GitFork className="w-4 h-4 mr-2" />
                Contribute
              </Button>
              <Button size="sm" asChild>
                <Link href={`/project/${project.id}`}>View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
