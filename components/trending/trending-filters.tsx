import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Star, GitFork, MessageSquare } from "lucide-react"

const trendingCategories = [
  { name: "AI & Machine Learning", count: 234, growth: "+15%" },
  { name: "Web Development", count: 189, growth: "+12%" },
  { name: "Developer Tools", count: 156, growth: "+18%" },
  { name: "Mobile Apps", count: 98, growth: "+8%" },
  { name: "Design Systems", count: 87, growth: "+22%" },
  { name: "Blockchain", count: 76, growth: "+25%" },
]

const trendingLanguages = [
  { name: "TypeScript", count: 342, color: "bg-blue-500" },
  { name: "Python", count: 298, color: "bg-green-500" },
  { name: "JavaScript", count: 267, color: "bg-yellow-500" },
  { name: "Rust", count: 156, color: "bg-orange-500" },
  { name: "Go", count: 134, color: "bg-cyan-500" },
]

export function TrendingFilters() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
            Trending Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingCategories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div>
                <div className="font-medium text-sm">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} projects</div>
              </div>
              <Badge variant="secondary" className="text-green-600 bg-green-500/10">
                {category.growth}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="w-5 h-5 text-primary" />
            Hot Languages
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingLanguages.map((language) => (
            <div
              key={language.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <div className={`w-3 h-3 rounded-full ${language.color}`} />
              <div className="flex-1">
                <div className="font-medium text-sm">{language.name}</div>
                <div className="text-xs text-muted-foreground">{language.count} trending</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Trending Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Stars This Week</span>
            </div>
            <span className="font-semibold">+12.4k</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4 text-blue-500" />
              <span className="text-sm">New Forks</span>
            </div>
            <span className="font-semibold">+3.2k</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-green-500" />
              <span className="text-sm">Discussions</span>
            </div>
            <span className="font-semibold">+1.8k</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
