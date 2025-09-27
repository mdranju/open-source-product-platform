import { Header } from "@/components/header"
import { UserProfile } from "@/components/profile/user-profile"
import { UserProjects } from "@/components/profile/user-projects"
import { UserActivity } from "@/components/profile/user-activity"

// Mock user data - in a real app, this would come from an API
const mockUser = {
  id: "1",
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  avatar: "/placeholder.svg?height=120&width=120&text=JD",
  bio: "Full-stack developer passionate about open source. Building tools that make developers' lives easier. Always learning, always sharing.",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  githubUrl: "https://github.com/johndoe",
  twitterUrl: "https://twitter.com/johndoe",
  joinedAt: "2024-01-15",
  stats: {
    projects: 12,
    contributions: 156,
    upvotes: 2340,
    followers: 89,
  },
  projects: [
    {
      id: 1,
      name: "React Flow",
      description: "A highly customizable library for building interactive node-based UIs",
      stars: 18500,
      language: "TypeScript",
      upvotes: 342,
      status: "active",
    },
    {
      id: 2,
      name: "Dev Tools Pro",
      description: "Enhanced developer tools for modern web development",
      stars: 2400,
      language: "JavaScript",
      upvotes: 89,
      status: "active",
    },
    {
      id: 3,
      name: "CSS Grid Helper",
      description: "Visual tool for creating CSS Grid layouts",
      stars: 1200,
      language: "CSS",
      upvotes: 45,
      status: "archived",
    },
  ],
  recentActivity: [
    {
      type: "project_submitted",
      project: "React Flow",
      timestamp: "2 days ago",
    },
    {
      type: "contribution",
      project: "Supabase",
      description: "Fixed authentication bug",
      timestamp: "1 week ago",
    },
    {
      type: "upvote_received",
      project: "Dev Tools Pro",
      count: 5,
      timestamp: "2 weeks ago",
    },
  ],
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <UserProfile user={mockUser} />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <UserProjects projects={mockUser.projects} />
            <UserActivity activity={mockUser.recentActivity} />
          </div>
        </div>
      </main>
    </div>
  )
}
