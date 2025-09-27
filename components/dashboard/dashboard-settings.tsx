"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth/auth-provider"
import { useState } from "react"

export function DashboardSettings() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    bio: user?.bio || "",
    website: "",
    location: "",
    emailNotifications: true,
    projectUpdates: true,
    weeklyDigest: false,
  })

  const handleSave = () => {
    console.log("[v0] Saving settings:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">Settings</h2>

      {/* Profile Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Avatar</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={settings.name}
                onChange={(e) => setSettings((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={settings.username}
                onChange={(e) => setSettings((prev) => ({ ...prev, username: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={settings.email}
              onChange={(e) => setSettings((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={settings.bio}
              onChange={(e) => setSettings((prev) => ({ ...prev, bio: e.target.value }))}
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={settings.website}
                onChange={(e) => setSettings((prev) => ({ ...prev, website: e.target.value }))}
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={settings.location}
                onChange={(e) => setSettings((prev) => ({ ...prev, location: e.target.value }))}
                placeholder="City, Country"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Email Notifications</div>
              <div className="text-sm text-muted-foreground">Receive notifications via email</div>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, emailNotifications: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Project Updates</div>
              <div className="text-sm text-muted-foreground">Get notified about your project activity</div>
            </div>
            <Switch
              checked={settings.projectUpdates}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, projectUpdates: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Weekly Digest</div>
              <div className="text-sm text-muted-foreground">Receive a weekly summary of platform activity</div>
            </div>
            <Switch
              checked={settings.weeklyDigest}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, weeklyDigest: checked }))}
            />
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}
