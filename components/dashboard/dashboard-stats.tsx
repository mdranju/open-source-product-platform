import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Star, FolderOpen, ChevronUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2",
      trend: "up",
      icon: FolderOpen,
    },
    {
      title: "Total Upvotes",
      value: "2,340",
      change: "+156",
      trend: "up",
      icon: ChevronUp,
    },
    {
      title: "GitHub Stars",
      value: "22,100",
      change: "+1,200",
      trend: "up",
      icon: Star,
    },
    {
      title: "Followers",
      value: "89",
      change: "+5",
      trend: "up",
      icon: Users,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">this month</span>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <stat.icon className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Performance */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Performance Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <div className="font-medium text-foreground">React Flow</div>
              <div className="text-sm text-muted-foreground">Your top performing project</div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-foreground">18.5K stars</div>
              <div className="text-sm text-green-500">+342 upvotes</div>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <div className="font-medium text-foreground">Dev Tools Pro</div>
              <div className="text-sm text-muted-foreground">Growing steadily</div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-foreground">2.4K stars</div>
              <div className="text-sm text-green-500">+89 upvotes</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
