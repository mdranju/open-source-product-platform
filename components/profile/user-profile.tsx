import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Globe, Github, Twitter, Calendar, Users, Star, TrendingUp } from "lucide-react"

interface UserProfileProps {
  user: any
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <Card className="p-6">
        <div className="text-center mb-6">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-foreground mb-1">{user.name}</h1>
          <p className="text-muted-foreground mb-4">@{user.username}</p>
          <Button className="w-full">Follow</Button>
        </div>

        {user.bio && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground text-pretty">{user.bio}</p>
          </div>
        )}

        <div className="space-y-3">
          {user.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{user.location}</span>
            </div>
          )}
          {user.website && (
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {user.website.replace("https://", "")}
              </a>
            </div>
          )}
          {user.githubUrl && (
            <div className="flex items-center gap-2 text-sm">
              <Github className="w-4 h-4 text-muted-foreground" />
              <a
                href={user.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          )}
          {user.twitterUrl && (
            <div className="flex items-center gap-2 text-sm">
              <Twitter className="w-4 h-4 text-muted-foreground" />
              <a
                href={user.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Twitter
              </a>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>
              Joined {new Date(user.joinedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </Card>

      {/* Stats Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.stats.projects}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.stats.contributions}</div>
            <div className="text-sm text-muted-foreground">Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.stats.upvotes.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Upvotes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{user.stats.followers}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
              <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <div className="text-sm font-medium">Rising Star</div>
              <div className="text-xs text-muted-foreground">First project reached 1K stars</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-sm font-medium">Community Builder</div>
              <div className="text-xs text-muted-foreground">Helped 50+ developers contribute</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-medium">Trending Creator</div>
              <div className="text-xs text-muted-foreground">Project featured on trending page</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
