"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, User, Settings, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/auth/auth-provider";
import Link from "next/link";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  OS
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                OpenSource
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Discover
              </Link>
              <Link
                href="/trending"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Trending
              </Link>
              <Link
                href="/collections"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Collections
              </Link>
              <Link
                href="/submit"
                className="text-foreground hover:text-primary transition-colors"
              >
                Submit
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-background"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {user ? (
              <>
                <Button size="sm" asChild>
                  <Link href="/submit">
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Project
                  </Link>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.name}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard">
                        <Settings className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/auth/login">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/auth/signup">
                    <Plus className="w-4 h-4 mr-2" />
                    Join Now
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
