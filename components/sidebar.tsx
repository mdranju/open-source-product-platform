import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Smartphone, Globe, Database, Cpu, Palette, Shield, Zap, TrendingUp, Star, Clock } from "lucide-react"

const categories = [
  { name: "Web Development", icon: Globe, count: 1247 },
  { name: "Mobile Apps", icon: Smartphone, count: 892 },
  { name: "Developer Tools", icon: Code, count: 756 },
  { name: "Databases", icon: Database, count: 543 },
  { name: "Machine Learning", icon: Cpu, count: 432 },
  { name: "Design Systems", icon: Palette, count: 321 },
  { name: "Security", icon: Shield, count: 298 },
  { name: "Performance", icon: Zap, count: 267 },
]

const filters = [
  { name: "Trending Today", icon: TrendingUp },
  { name: "Most Starred", icon: Star },
  { name: "Recently Added", icon: Clock },
]

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card p-6">
      <div className="space-y-6">
        {/* Filters */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Filters</h3>
          <div className="space-y-2">
            {filters.map((filter) => (
              <button
                key={filter.name}
                className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left"
              >
                <filter.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <category.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{category.name}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Collection */}
        <Card className="p-4">
          <h4 className="font-semibold text-foreground mb-2">Featured Collection</h4>
          <p className="text-sm text-muted-foreground mb-3">Best React Components for 2024</p>
          <Badge variant="outline" className="text-xs">
            42 projects
          </Badge>
        </Card>
      </div>
    </aside>
  )
}
