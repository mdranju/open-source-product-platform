import { Header } from "@/components/header"
import { LoginForm } from "@/components/auth/login-form"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center p-6 min-h-[calc(100vh-80px)]">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your OpenSource account</p>
          </div>
          <LoginForm />
        </Card>
      </main>
    </div>
  )
}
