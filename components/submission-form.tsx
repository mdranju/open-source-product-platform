"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Plus, Github, ExternalLink, Upload, ImageIcon } from "lucide-react"

const categories = [
  "Web Development",
  "Mobile Apps",
  "Developer Tools",
  "Databases",
  "Machine Learning",
  "Design Systems",
  "Security",
  "Performance",
  "DevOps",
  "Gaming",
  "Education",
  "Other",
]

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Go",
  "Rust",
  "C++",
  "C#",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Dart",
  "CSS",
  "HTML",
  "Other",
]

const contributionLevels = ["Beginner Friendly", "Intermediate", "Advanced"]

export function SubmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    githubUrl: "",
    websiteUrl: "",
    category: "",
    language: "",
    contributionLevel: "",
    tags: [] as string[],
    features: [] as string[],
    hasDocumentation: false,
    hasTests: false,
    hasContributingGuide: false,
    isActivelyMaintained: false,
    logoUrl: "",
    screenshots: [] as string[],
  })

  const [currentTag, setCurrentTag] = useState("")
  const [currentFeature, setCurrentFeature] = useState("")

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const addFeature = () => {
    if (currentFeature.trim() && !formData.features.includes(currentFeature.trim())) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, currentFeature.trim()],
      }))
      setCurrentFeature("")
    }
  }

  const removeFeature = (featureToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((feature) => feature !== featureToRemove),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Project submitted successfully! It will be reviewed and published soon.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., React Flow"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe what your project does and why it's useful..."
              rows={4}
              required
            />
          </div>
        </div>
      </Card>

      {/* Links */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="githubUrl">GitHub Repository *</Label>
            <div className="relative">
              <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="githubUrl"
                value={formData.githubUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))}
                placeholder="https://github.com/username/repo"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="websiteUrl">Website/Demo (Optional)</Label>
            <div className="relative">
              <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="websiteUrl"
                value={formData.websiteUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, websiteUrl: e.target.value }))}
                placeholder="https://yourproject.com"
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Technical Details */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Technical Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="language">Primary Language *</Label>
            <Select
              value={formData.language}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, language: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select primary language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contributionLevel">Contribution Level *</Label>
            <Select
              value={formData.contributionLevel}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, contributionLevel: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="How easy is it to contribute?" />
              </SelectTrigger>
              <SelectContent>
                {contributionLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Tags */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Tags</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              placeholder="Add a tag (e.g., react, ui, components)"
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
            />
            <Button type="button" onClick={addTag} variant="outline">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <button type="button" onClick={() => removeTag(tag)} className="ml-1 hover:text-destructive">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* Key Features */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Key Features</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={currentFeature}
              onChange={(e) => setCurrentFeature(e.target.value)}
              placeholder="Add a key feature (e.g., Drag and drop interface)"
              onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
            />
            <Button type="button" onClick={addFeature} variant="outline">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm">{feature}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(feature)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Project Quality */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Project Quality</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasDocumentation"
              checked={formData.hasDocumentation}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasDocumentation: !!checked }))}
            />
            <Label htmlFor="hasDocumentation">Has comprehensive documentation</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasTests"
              checked={formData.hasTests}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasTests: !!checked }))}
            />
            <Label htmlFor="hasTests">Has test coverage</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasContributingGuide"
              checked={formData.hasContributingGuide}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasContributingGuide: !!checked }))}
            />
            <Label htmlFor="hasContributingGuide">Has contributing guidelines</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActivelyMaintained"
              checked={formData.isActivelyMaintained}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isActivelyMaintained: !!checked }))}
            />
            <Label htmlFor="isActivelyMaintained">Is actively maintained</Label>
          </div>
        </div>
      </Card>

      {/* Media */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Media (Optional)</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="logoUrl">Project Logo URL</Label>
            <div className="relative">
              <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="logoUrl"
                value={formData.logoUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, logoUrl: e.target.value }))}
                placeholder="https://example.com/logo.png"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Screenshots</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Drag and drop screenshots here, or click to browse</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB each</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Submit */}
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Save as Draft
        </Button>
        <Button type="submit" size="lg">
          Submit Project
        </Button>
      </div>
    </form>
  )
}
