import { Header } from "@/components/header"
import { SubmissionForm } from "@/components/submission-form"

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Submit Your Open Source Project</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Share your project with the community and help other developers discover amazing open source tools
          </p>
        </div>
        <SubmissionForm />
      </main>
    </div>
  )
}
