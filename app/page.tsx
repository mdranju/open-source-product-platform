import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ProjectFeed } from "@/components/project-feed"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
                Discover Amazing Open Source Projects
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Find, contribute to, and share the best open source projects from the community
              </p>
            </div>
            <ProjectFeed />
          </div>
        </main>
      </div>
    </div>
  )
}
