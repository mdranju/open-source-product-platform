import { Header } from "@/components/header"
import { CollectionGrid } from "@/components/collections/collection-grid"
import { FeaturedCollections } from "@/components/collections/featured-collections"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Project Collections</h1>
          <p className="text-muted-foreground">
            Curated collections of open source projects organized by theme, technology, and use case
          </p>
        </div>

        <FeaturedCollections />
        <CollectionGrid />
      </main>
    </div>
  )
}
