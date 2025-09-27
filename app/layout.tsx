import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/components/auth/auth-provider"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "OpenSource - Discover Amazing Open Source Projects",
  description: "Find, contribute to, and share the best open source projects from the community",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <Suspense>{children}</Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
