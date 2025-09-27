"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Users, ImageIcon, Activity } from "lucide-react"
import { useState } from "react"

interface ProjectContentProps {
  project: any
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)

  return (
    <div className="space-y-6">
      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Screenshots
          </h2>
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={project.screenshots[selectedScreenshot] || "/placeholder.svg"}
                alt={`${project.name} screenshot ${selectedScreenshot + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {project.screenshots.map((screenshot: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedScreenshot(index)}
                  className={`flex-shrink-0 w-20 h-12 rounded border-2 overflow-hidden ${
                    selectedScreenshot === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Main Content Tabs */}
      <Tabs defaultValue="readme" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="readme">
            <FileText className="w-4 h-4 mr-2" />
            README
          </TabsTrigger>
          <TabsTrigger value="contributors">
            <Users className="w-4 h-4 mr-2" />
            Contributors
          </TabsTrigger>
          <TabsTrigger value="activity">
            <Activity className="w-4 h-4 mr-2" />
            Activity
          </TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>

        <TabsContent value="readme">
          <Card className="p-6">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: project.longDescription
                    .replace(/\n/g, "<br>")
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
                    .replace(/## (.*)/g, "<h2>$1</h2>"),
                }}
              />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="contributors">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Contributors ({project.contributors.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.contributors.map((contributor: any) => (
                <div key={contributor.username} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                    <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{contributor.name}</div>
                    <div className="text-sm text-muted-foreground">@{contributor.username}</div>
                  </div>
                  <Badge variant="secondary">{contributor.contributions} commits</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-medium">johndoe</span> merged pull request
                    <span className="font-medium"> #234: Add new node types</span>
                  </div>
                  <div className="text-xs text-muted-foreground">2 hours ago</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-medium">janesmith</span> opened issue
                    <span className="font-medium"> #235: Performance optimization for large graphs</span>
                  </div>
                  <div className="text-xs text-muted-foreground">5 hours ago</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm">
                    <span className="font-medium">bobwilson</span> pushed 3 commits to
                    <span className="font-medium"> main branch</span>
                  </div>
                  <div className="text-xs text-muted-foreground">1 day ago</div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="discussions">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Community Discussions</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=AB" alt="Alice Brown" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Alice Brown</span>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <h4 className="font-medium mb-2">How to implement custom node shapes?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      I'm trying to create custom node shapes for my flow diagram. Has anyone successfully implemented
                      triangular or diamond-shaped nodes?
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm">
                        Reply
                      </Button>
                      <span className="text-muted-foreground">5 replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
