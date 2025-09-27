import { ProjectCard } from "@/components/project-card"

interface RelatedProjectsProps {
  currentProjectId: string
}

// Mock related projects data
const relatedProjects = [
  {
    id: 2,
    name: "D3.js",
    description: "A JavaScript library for manipulating documents based on data using HTML, SVG, and CSS",
    author: "d3",
    stars: 108000,
    language: "JavaScript",
    category: "Web Development",
    tags: ["javascript", "visualization", "svg", "data"],
    upvotes: 892,
    contributionLevel: "Advanced",
    lastUpdated: "1 day ago",
    githubUrl: "https://github.com/d3/d3",
  },
  {
    id: 3,
    name: "Cytoscape.js",
    description: "Graph theory (network) library for visualisation and analysis",
    author: "cytoscape",
    stars: 9800,
    language: "JavaScript",
    category: "Web Development",
    tags: ["graph", "network", "visualization", "analysis"],
    upvotes: 234,
    contributionLevel: "Intermediate",
    lastUpdated: "3 days ago",
    githubUrl: "https://github.com/cytoscape/cytoscape.js",
  },
]

export function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Related Projects</h2>
      <div className="grid gap-4">
        {relatedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}
