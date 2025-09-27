import { Card } from "@/components/ui/card"
import { Upload, GitPullRequest, ChevronUp, MessageSquare } from "lucide-react"

export function DashboardActivity() {
  const activities = [
    {
      type: "project_submitted",
      title: "Submitted new project",
      description: "React Flow - Interactive node-based UI library",
      timestamp: "2 days ago",
      icon: Upload,
    },
    {
      type: "upvote_received",
      title: "Received upvotes",
      description: "5 new upvotes on Dev Tools Pro",
      timestamp: "3 days ago",
      icon: ChevronUp,
    },
    {
      type: "contribution",
      title: "Made contribution",
      description: "Fixed authentication bug in Supabase",
      timestamp: "1 week ago",
      icon: GitPullRequest,
    },
    {
      type: "comment",
      title: "Received comment",
      description: "New comment on React Flow project",
      timestamp: "1 week ago",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-lg">
                <activity.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
