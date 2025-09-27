"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp, Star, GitFork, ExternalLink, Github, Share, Heart } from "lucide-react"
import { useState } from "react"

interface ProjectHeaderProps {
  project: any
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const handleUpvote = () => {
    setIsUpvoted(!isUpvoted)
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard!")
  }

  const getContributionColor = (level: string) => {
    switch (level) {
      case "Beginner Friendly":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Project Title and Actions */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-foreground">{project.name}</h1>
            <Badge className={getContributionColor(project.contributionLevel)}>{project.contributionLevel}</Badge>
          </div>

          <p className="text-xl text-muted-foreground mb-4 text-pretty">{project.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>by {project.author.name}</span>
            </div>
            <span>•</span>
            <span>Updated {project.lastUpdated}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>{project.language}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant={isUpvoted ? "default" : "outline"}
            onClick={handleUpvote}
            className="flex flex-col gap-1 h-auto py-3 px-4"
          >
            <ChevronUp className="w-5 h-5" />
            <span className="text-sm font-semibold">{project.upvotes + (isUpvoted ? 1 : 0)}</span>
          </Button>

          <Button variant={isFavorited ? "default" : "outline"} size="sm" onClick={handleFavorite}>
            <Heart className={`w-4 h-4 mr-2 ${isFavorited ? "fill-current" : ""}`} />
            {isFavorited ? "Favorited" : "Favorite"}
          </Button>

          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="flex items-center gap-8 p-4 bg-muted rounded-lg">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="font-semibold">{project.stats.stars.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">stars</span>
        </div>
        <div className="flex items-center gap-2">
          <GitFork className="w-4 h-4" />
          <span className="font-semibold">{project.stats.forks.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">forks</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{project.stats.issues}</span>
          <span className="text-sm text-muted-foreground">open issues</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{project.stats.pullRequests}</span>
          <span className="text-sm text-muted-foreground">open PRs</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Button size="lg" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </a>
        </Button>

        {project.websiteUrl && (
          <Button variant="outline" size="lg" asChild>
            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Website
            </a>
          </Button>
        )}

        <Button variant="outline" size="lg">
          <GitFork className="w-5 h-5 mr-2" />
          Start Contributing
        </Button>
      </div>
    </div>
  )
}
