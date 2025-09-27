"use client"

import { Header } from "@/components/header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { DashboardProjects } from "@/components/dashboard/dashboard-projects"
import { DashboardActivity } from "@/components/dashboard/dashboard-activity"
import { DashboardSettings } from "@/components/dashboard/dashboard-settings"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth/auth-provider"
import { redirect } from "next/navigation"
import { BarChart3, FolderOpen, Activity, Settings } from "lucide-react"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Welcome back, {user.name}! Here's what's happening with your projects.
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="projects">
              <FolderOpen className="w-4 h-4 mr-2" />
              My Projects
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Activity className="w-4 h-4 mr-2" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <DashboardStats />
          </TabsContent>

          <TabsContent value="projects">
            <DashboardProjects />
          </TabsContent>

          <TabsContent value="activity">
            <DashboardActivity />
          </TabsContent>

          <TabsContent value="settings">
            <DashboardSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
