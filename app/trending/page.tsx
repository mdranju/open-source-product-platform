import { Header } from "@/components/header"
import { TrendingFeed } from "@/components/trending/trending-feed"
import { TrendingFilters } from "@/components/trending/trending-filters"

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Trending Projects</h1>
              <p className="text-muted-foreground">
                Discover the hottest open source projects gaining momentum in the community
              </p>
            </div>
            <TrendingFeed />
          </div>
          <aside className="w-80">
            <TrendingFilters />
          </aside>
        </div>
      </main>
    </div>
  )
}
