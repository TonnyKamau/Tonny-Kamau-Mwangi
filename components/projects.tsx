"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Rocket, CheckCircle } from "lucide-react"
import { GitHubRepos } from "./github-repos"
import { memo } from "react"

const Projects = memo(function Projects() {
  const ongoingProjects = [
    {
      title: "SqAI",
      description: "AI-powered platform for intelligent solutions and automation",
      longDescription: "Developing an AI-powered platform providing intelligent automation. Currently implementing core feature-sets and ML models.",
      technologies: ["AI/ML", "React", "Python"],
      accent: "from-amber-500 to-orange-500"
    },
    {
      title: "CallEngagePro",
      description: "Professional call engagement and customer interaction platform",
      longDescription: "Full-stack CRM for managing customer interactions and tracking high-level engagement metrics.",
      technologies: ["Node.js", "WebRTC", "PostgreSQL"],
      accent: "from-blue-500 to-indigo-500"
    },
    {
      title: "SQUAD",
      description: "Interactive challenge game platform for team building",
      longDescription: "A gamified social interaction platform featuring real-time leaderboards and team challenges.",
      technologies: ["Flutter", "Firebase", "Real-time"],
      accent: "from-rose-500 to-pink-500"
    }
  ]

  const completedProjects = [
    {
      title: "Market Wizard",
      description: "AI-powered market analysis and trading application",
      technologies: ["Flutter", "Dart", "AI"],
      github: "https://github.com/TonnyKamau/market_wizard",
      accent: "bg-blue-600"
    },
    {
      title: "Expense Tracker",
      description: "Flutter application with SQLite for offline financial summaries.",
      technologies: ["Flutter", "SQLite", "Charts"],
      github: "https://github.com/TonnyKamau/expense-tracker",
      accent: "bg-emerald-600"
    },
    {
      title: "COVID Control",
      description: "Violation detection using ML and computer vision (OpenCV).",
      technologies: ["Python", "OpenCV", "ML"],
      github: "https://github.com/TonnyKamau/covid-control-system",
      accent: "bg-indigo-600"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="responsive-container">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-none font-bold px-4 py-1">Portfolio Showcase</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Engineering <span className="text-gradient">Solutions</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Exploring the intersection of AI, Mobile experience, and secure architectures.</p>
        </div>

        {/* Ongoing Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {ongoingProjects.map((project, i) => (
            <div key={i} className="group relative mobile-card overflow-hidden hover-glow animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.accent} opacity-10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-none">Active Dev</Badge>
                  <Rocket className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed mb-6">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-[10px] uppercase font-bold tracking-tighter">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project, i) => (
            <Card key={i} className="glass border-none rounded-3xl p-6 hover-glow animate-fade-in-up stagger-3">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl ${project.accent} flex items-center justify-center text-white shadow-lg`}>
                  <Rocket className="w-6 h-6" />
                </div>
                <Button variant="ghost" size="icon" className="rounded-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a>
                </Button>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs font-medium leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tech}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-800">
          <GitHubRepos />
        </div>
      </div>
    </section>
  )
})

export { Projects }
