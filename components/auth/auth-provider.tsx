"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  username: string
  email: string
  avatar?: string
  githubUrl?: string
  bio?: string
  joinedAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (userData: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const checkAuth = async () => {
      try {
        // Simulate checking for existing session
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        username: "johndoe",
        email: email,
        avatar: "/diverse-user-avatars.png",
        githubUrl: "https://github.com/johndoe",
        bio: "Full-stack developer passionate about open source",
        joinedAt: "2024-01-15",
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: any) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user creation
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        username: userData.username,
        email: userData.email,
        avatar: "/diverse-user-avatars.png",
        bio: "",
        joinedAt: new Date().toISOString().split("T")[0],
      }

      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
    } catch (error) {
      throw new Error("Signup failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, signup }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
