import { Card } from "@/components/ui/card"
import { Upload, GitPullRequest, ChevronUp } from "lucide-react"

interface UserActivityProps {
  activity: any[]
}

export function UserActivity({ activity }: UserActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "project_submitted":
        return <Upload className="w-4 h-4 text-blue-500" />
      case "contribution":
        return <GitPullRequest className="w-4 h-4 text-green-500" />
      case "upvote_received":
        return <ChevronUp className="w-4 h-4 text-purple-500" />
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-500" />
    }
  }

  const getActivityDescription = (item: any) => {
    switch (item.type) {
      case "project_submitted":
        return `Submitted project "${item.project}"`
      case "contribution":
        return `Contributed to "${item.project}": ${item.description}`
      case "upvote_received":
        return `Received ${item.count} upvotes on "${item.project}"`
      default:
        return "Unknown activity"
    }
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activity.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
            <div className="mt-1">{getActivityIcon(item.type)}</div>
            <div className="flex-1">
              <div className="text-sm text-foreground">{getActivityDescription(item)}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
