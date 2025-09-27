import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronUp, ExternalLink } from "lucide-react"
import Link from "next/link"

interface UserProjectsProps {
  projects: any[]
}

export function UserProjects({ projects }: UserProjectsProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Projects ({projects.length})</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <Link href={`/project/${project.id}`}>
                  <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                    {project.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3 text-pretty">{project.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChevronUp className="w-4 h-4" />
                    <span>{project.upvotes} upvotes</span>
                  </div>
                  <Badge variant={project.status === "active" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
              </div>

              <Button variant="ghost" size="sm" asChild>
                <Link href={`/project/${project.id}`}>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
