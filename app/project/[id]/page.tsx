import { Header } from "@/components/header"
import { ProjectHeader } from "@/components/project/project-header"
import { ProjectContent } from "@/components/project/project-content"
import { ProjectSidebar } from "@/components/project/project-sidebar"
import { RelatedProjects } from "@/components/project/related-projects"

// Mock project data - in a real app, this would come from an API
const mockProject = {
  id: "1",
  name: "React Flow",
  description:
    "A highly customizable library for building interactive node-based UIs, editors, flow charts and diagrams",
  longDescription: `React Flow is a library for building node-based editors and interactive diagrams. It comes with a lot of useful features like zooming, panning, selecting and connecting nodes, and much more.

## Key Features

- **Easy to use**: Built with React hooks and modern patterns
- **Highly customizable**: Style nodes and edges however you want
- **TypeScript support**: Full TypeScript support out of the box
- **Plugin system**: Extend functionality with plugins
- **Performance**: Optimized for large graphs with thousands of nodes

## Getting Started

Install React Flow via npm:

\`\`\`bash
npm install reactflow
\`\`\`

Then import and use it in your React component:

\`\`\`jsx
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

function Flow() {
  return <ReactFlow />;
}
\`\`\``,
  author: {
    name: "webkid",
    username: "webkid",
    avatar: "/placeholder.svg?height=40&width=40&text=WK",
  },
  stats: {
    stars: 18500,
    forks: 1200,
    watchers: 450,
    issues: 23,
    pullRequests: 8,
  },
  language: "TypeScript",
  category: "Web Development",
  tags: ["react", "flow", "diagrams", "ui", "typescript", "nodes", "editor"],
  upvotes: 342,
  contributionLevel: "Beginner Friendly",
  lastUpdated: "2 days ago",
  createdAt: "2021-03-15",
  githubUrl: "https://github.com/wbkd/react-flow",
  websiteUrl: "https://reactflow.dev",
  license: "MIT",
  screenshots: [
    "/placeholder.svg?height=400&width=600&text=React+Flow+Screenshot+1",
    "/placeholder.svg?height=400&width=600&text=React+Flow+Screenshot+2",
    "/placeholder.svg?height=400&width=600&text=React+Flow+Screenshot+3",
  ],
  hasDocumentation: true,
  hasTests: true,
  hasContributingGuide: true,
  isActivelyMaintained: true,
  contributors: [
    {
      name: "John Doe",
      username: "johndoe",
      avatar: "/placeholder.svg?height=32&width=32&text=JD",
      contributions: 145,
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/placeholder.svg?height=32&width=32&text=JS",
      contributions: 89,
    },
    {
      name: "Bob Wilson",
      username: "bobwilson",
      avatar: "/placeholder.svg?height=32&width=32&text=BW",
      contributions: 67,
    },
    {
      name: "Alice Brown",
      username: "alicebrown",
      avatar: "/placeholder.svg?height=32&width=32&text=AB",
      contributions: 45,
    },
  ],
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <ProjectHeader project={mockProject} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ProjectContent project={mockProject} />
          </div>
          <div className="lg:col-span-1">
            <ProjectSidebar project={mockProject} />
          </div>
        </div>

        <div className="mt-12">
          <RelatedProjects currentProjectId={mockProject.id} />
        </div>
      </main>
    </div>
  )
}
