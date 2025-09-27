import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredCollections = [
  {
    id: 1,
    title: "AI Tools for Developers",
    description: "Essential AI-powered tools that every developer should know about",
    curator: "Sarah Chen",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 24,
    followers: 1247,
    tags: ["AI", "Developer Tools", "Productivity"],
    featured: true,
    projects: [
      { name: "GitHub Copilot", stars: "45k" },
      { name: "Cursor", stars: "12k" },
      { name: "v0", stars: "8k" },
    ],
  },
  {
    id: 2,
    title: "React Component Libraries",
    description: "The best component libraries for building modern React applications",
    curator: "Alex Rodriguez",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 18,
    followers: 892,
    tags: ["React", "Components", "UI"],
    featured: true,
    projects: [
      { name: "Shadcn/UI", stars: "45k" },
      { name: "Chakra UI", stars: "32k" },
      { name: "Mantine", stars: "24k" },
    ],
  },
]

export function FeaturedCollections() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Featured Collections</h2>
        <Button variant="outline" size="sm">
          View All Featured
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredCollections.map((collection) => (
          <Card
            key={collection.id}
            className="group hover:shadow-lg transition-all duration-200 border-2 border-primary/20"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {collection.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{collection.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {collection.projectCount} projects
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {collection.followers} followers
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {collection.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Top Projects:</div>
                  <div className="space-y-1">
                    {collection.projects.map((project) => (
                      <div key={project.name} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.name}</span>
                        <span className="text-xs text-muted-foreground">{project.stars} stars</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <Button asChild className="w-full">
                    <Link href={`/collections/${collection.id}`}>
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
