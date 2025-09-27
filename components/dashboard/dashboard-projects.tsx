import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronUp, Edit, Trash2, Plus } from "lucide-react"
import Link from "next/link"

export function DashboardProjects() {
  const projects = [
    {
      id: 1,
      name: "React Flow",
      description: "A highly customizable library for building interactive node-based UIs",
      stars: 18500,
      upvotes: 342,
      status: "published",
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Dev Tools Pro",
      description: "Enhanced developer tools for modern web development",
      stars: 2400,
      upvotes: 89,
      status: "published",
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "CSS Grid Helper",
      description: "Visual tool for creating CSS Grid layouts",
      stars: 1200,
      upvotes: 45,
      status: "archived",
      lastUpdated: "2 months ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">My Projects</h2>
        <Button asChild>
          <Link href="/submit">
            <Plus className="w-4 h-4 mr-2" />
            Submit New Project
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                  <Badge variant={project.status === "published" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChevronUp className="w-4 h-4" />
                    <span>{project.upvotes} upvotes</span>
                  </div>
                  <span>Updated {project.lastUpdated}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
