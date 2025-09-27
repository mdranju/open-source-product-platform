import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Shield, CheckCircle, XCircle, AlertCircle, Users, Code, BookOpen } from "lucide-react"

interface ProjectSidebarProps {
  project: any
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Project Info */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Project Information</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Category</span>
            <Badge variant="outline">{project.category}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">License</span>
            <Badge variant="secondary">{project.license}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Created</span>
            <span className="text-sm">{new Date(project.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Language</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">{project.language}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Project Health */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Project Health
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {project.hasDocumentation ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 text-red-500" />
            )}
            <span className="text-sm">Documentation</span>
          </div>
          <div className="flex items-center gap-3">
            {project.hasTests ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 text-red-500" />
            )}
            <span className="text-sm">Test Coverage</span>
          </div>
          <div className="flex items-center gap-3">
            {project.hasContributingGuide ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <XCircle className="w-4 h-4 text-red-500" />
            )}
            <span className="text-sm">Contributing Guide</span>
          </div>
          <div className="flex items-center gap-3">
            {project.isActivelyMaintained ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-yellow-500" />
            )}
            <span className="text-sm">Active Maintenance</span>
          </div>
        </div>
      </Card>

      {/* Contribution Guide */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          How to Contribute
        </h3>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            This project welcomes contributions from developers of all skill levels.
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Fork the repository</div>
                <div className="text-xs text-muted-foreground">Create your own copy to work on</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Find an issue</div>
                <div className="text-xs text-muted-foreground">Look for "good first issue" labels</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Submit a PR</div>
                <div className="text-xs text-muted-foreground">Follow the contribution guidelines</div>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button className="w-full" size="sm">
              <Code className="w-4 h-4 mr-2" />
              View Open Issues
            </Button>
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Contributing Guide
            </Button>
          </div>
        </div>
      </Card>

      {/* Community Stats */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Community</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Contributors</span>
              <span className="text-sm font-medium">{project.contributors.length}</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Activity Level</span>
              <span className="text-sm font-medium">High</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Response Time</span>
              <span className="text-sm font-medium">&lt; 24h</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
        </div>
      </Card>
    </div>
  )
}
