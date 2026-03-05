"use client"

import { useState, useEffect, memo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  updated_at: string
  topics: string[]
  homepage: string | null
  readme_description?: string
}

const GitHubRepos = memo(function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleRepos, setVisibleRepos] = useState(6)

  const fetchReadmeDescription = useCallback(async (owner: string, repo: string): Promise<string | null> => {
    try {
      const readmeFiles = ["README.md", "readme.md", "README.MD", "README.txt", "README"]

      for (const filename of readmeFiles) {
        try {
          const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filename}`)
          if (response.ok) {
            const data = await response.json()
            if (data.content) {
              const content = atob(data.content)
              const lines = content.split("\n").filter((line) => line.trim())

              let description = ""
              for (const line of lines) {
                const trimmed = line.trim()
                if (trimmed && !trimmed.startsWith("#") && !trimmed.startsWith("![") && !trimmed.startsWith("[")) {
                  description = trimmed
                  break
                }
              }

              if (!description) {
                const afterFirstHeading = content
                  .split("\n")
                  .slice(1)
                  .find(
                    (line) =>
                      line.trim() &&
                      !line.trim().startsWith("#") &&
                      !line.trim().startsWith("![") &&
                      !line.trim().startsWith("[") &&
                      line.trim().length > 20,
                  )
                description = afterFirstHeading?.trim() || ""
              }

              description = description
                .replace(/\*\*/g, "")
                .replace(/\*/g, "")
                .replace(/`/g, "")
                .replace(/\[([^\]]+)\]$$[^)]+$$/g, "$1")
                .trim()

              return description.length > 150 ? description.substring(0, 150) + "..." : description
            }
          }
        } catch (err) {
          continue
        }
      }
      return null
    } catch (error) {
      return null
    }
  }, [])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/TonnyKamau/repos?sort=updated&per_page=20")
        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data = await response.json()

        const reposWithReadme = await Promise.all(
          data.map(async (repo: GitHubRepo) => {
            const readmeDescription = await fetchReadmeDescription("TonnyKamau", repo.name)
            return {
              ...repo,
              readme_description: readmeDescription,
            }
          }),
        )

        setRepos(reposWithReadme)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [fetchReadmeDescription])

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }, [])

  const getLanguageColor = useCallback((language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-100 text-yellow-800",
      TypeScript: "bg-blue-100 text-blue-800",
      Python: "bg-green-100 text-green-800",
      Dart: "bg-cyan-100 text-cyan-800",
      Java: "bg-orange-100 text-orange-800",
      PHP: "bg-purple-100 text-purple-800",
      HTML: "bg-red-100 text-red-800",
      CSS: "bg-pink-100 text-pink-800",
    }
    return colors[language || ""] || "bg-gray-100 text-gray-800"
  }, [])

  const getDescription = useCallback((repo: GitHubRepo) => {
    return repo.readme_description || repo.description || "No description available"
  }, [])

  const loadMoreRepos = useCallback(() => {
    setVisibleRepos((prev) => Math.min(prev + 6, repos.length))
  }, [repos.length])

  if (loading) {
    return (
      <div className="mt-12 md:mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-2 fade-in-up">
          <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
          GitHub Repositories
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <CardHeader className="p-4">
                <div className="h-4 bg-slate-200 rounded w-3/4 shimmer"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2 mt-2 shimmer"></div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="h-3 bg-slate-200 rounded w-full mb-2 shimmer"></div>
                <div className="h-3 bg-slate-200 rounded w-2/3 shimmer"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-slate-500 mt-4 text-sm fade-in">
          Loading repositories and README descriptions...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-12 md:mt-16">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-2 fade-in-up">
          <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
          GitHub Repositories
        </h3>
        <Card className="border-red-200 fade-in">
          <CardContent className="p-4 md:p-6 text-center">
            <p className="text-red-600 text-sm md:text-base">Failed to load repositories: {error}</p>
            <Button
              variant="outline"
              className="mt-4 text-xs md:text-sm hover-lift"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mt-12 md:mt-16">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-2 fade-in-up">
        <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
        GitHub Repositories
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {repos.slice(0, visibleRepos).map((repo, index) => (
          <Card
            key={repo.id}
            className={`overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover-lift fade-in-up stagger-${(index % 4) + 1}`}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base md:text-lg flex items-center gap-1.5 truncate pr-2">
                  <Github className="w-4 h-4 md:w-5 md:h-5 text-slate-600 flex-shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </CardTitle>
                {repo.language && (
                  <Badge
                    variant="outline"
                    className={`text-xs ${getLanguageColor(repo.language)} whitespace-nowrap ml-1 flex-shrink-0 hover-scale`}
                  >
                    {repo.language}
                  </Badge>
                )}
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3">{getDescription(repo)}</p>
              {repo.readme_description && (
                <Badge variant="secondary" className="text-xs w-fit mt-1 scale-in">
                  📖 From README
                </Badge>
              )}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className={`text-xs py-0 px-1.5 hover-scale fade-in stagger-${topicIndex + 1}`}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover-scale">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 hover-scale">
                    <GitFork className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1 hover-scale">
                    <Eye className="w-3 h-3" />
                    {repo.watchers_count}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-3">Updated {formatDate(repo.updated_at)}</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 flex items-center gap-1 text-xs h-8 hover-lift transition-all duration-300"
                  asChild
                >
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    View Code
                  </a>
                </Button>
                {repo.homepage && (
                  <Button
                    size="sm"
                    className="flex items-center gap-1 text-xs h-8 hover-lift transition-all duration-300"
                    asChild
                  >
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {repos.length > visibleRepos && (
        <div className="text-center mt-6 md:mt-8 fade-in">
          <Button
            variant="outline"
            size="sm"
            onClick={loadMoreRepos}
            className="text-xs md:text-sm hover-lift transition-all duration-300"
          >
            Load More Repositories
          </Button>
        </div>
      )}

      <div className="text-center mt-6 md:mt-8 fade-in">
        <Button
          variant="outline"
          size="lg"
          className="flex items-center gap-2 text-xs md:text-sm h-10 hover-lift transition-all duration-300"
          asChild
        >
          <a href="https://github.com/TonnyKamau" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            View All Repositories on GitHub
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  )
})

export { GitHubRepos }
