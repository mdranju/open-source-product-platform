import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, Plus, Filter } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    id: 3,
    title: "Backend Frameworks 2024",
    description: "Modern backend frameworks for building scalable APIs and services",
    curator: "Mike Johnson",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 15,
    followers: 634,
    tags: ["Backend", "API", "Framework"],
    lastUpdated: "2 days ago",
  },
  {
    id: 4,
    title: "CSS Animation Libraries",
    description: "Beautiful animation libraries to bring your interfaces to life",
    curator: "Emma Wilson",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 22,
    followers: 445,
    tags: ["CSS", "Animation", "UI"],
    lastUpdated: "1 week ago",
  },
  {
    id: 5,
    title: "Data Visualization Tools",
    description: "Powerful tools for creating stunning data visualizations and charts",
    curator: "David Park",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 19,
    followers: 723,
    tags: ["Data", "Visualization", "Charts"],
    lastUpdated: "3 days ago",
  },
  {
    id: 6,
    title: "Mobile Development Essentials",
    description: "Must-have tools and libraries for mobile app development",
    curator: "Lisa Zhang",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 28,
    followers: 891,
    tags: ["Mobile", "React Native", "Flutter"],
    lastUpdated: "5 days ago",
  },
  {
    id: 7,
    title: "DevOps & Deployment",
    description: "Tools and platforms for modern DevOps workflows and deployment",
    curator: "Tom Anderson",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 31,
    followers: 567,
    tags: ["DevOps", "Deployment", "CI/CD"],
    lastUpdated: "1 day ago",
  },
  {
    id: 8,
    title: "Testing Frameworks",
    description: "Comprehensive testing solutions for modern web applications",
    curator: "Rachel Green",
    curatorAvatar: "/placeholder.svg?height=32&width=32",
    projectCount: 16,
    followers: 389,
    tags: ["Testing", "QA", "Automation"],
    lastUpdated: "4 days ago",
  },
]

export function CollectionGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">All Collections</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Create Collection
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id} className="group hover:shadow-md transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">{collection.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{collection.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {collection.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {collection.projectCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {collection.followers}
                    </div>
                  </div>
                  <span className="text-xs">Updated {collection.lastUpdated}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={collection.curatorAvatar || "/placeholder.svg"} />
                      <AvatarFallback>{collection.curator.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{collection.curator}</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/collections/${collection.id}`}>View</Link>
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
