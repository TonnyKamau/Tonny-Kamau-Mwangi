"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Rocket, Leaf, Clock } from "lucide-react"
import { GitHubRepos } from "./github-repos"
import { ScrollReveal } from "@/components/scroll-reveal"
import { memo } from "react"

const greenonProjects = [
  {
    title: "PikaNini",
    role: "Founder",
    description: "Helping people make smarter food decisions through meal intelligence, budget-aware choices, healthier eating, and reduced food waste.",
    technologies: ["Flutter", "Supabase", "Next.js"],
    status: "live",
    link: "https://pikanini.greenon.online/",
    accent: "from-green-500 to-emerald-500",
  },
  {
    title: "Fixi",
    role: "Co-Founder",
    description: "A trusted local services marketplace connecting households and businesses with verified plumbers, electricians, cleaners, and handymen across Kenya.",
    technologies: ["Flutter", "Supabase", "Next.js", "M-PESA"],
    status: "live",
    link: "https://fixi.greenon.online/",
    accent: "from-cyan-500 to-sky-500",
  },
  {
    title: "KIT IFMS",
    role: "CTO",
    description: "An integrated financial management system helping businesses, Saccos, and cooperatives manage savings, lending, inventory, analytics, POS, and financial communication.",
    technologies: ["Java", "Android", "Python", "Next.js", "Firebase", "Paystack", "MPESA", "Flutter"],
    status: "live",
    link: "http://kit-ifms.com/",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Kipepeo Business",
    role: "Founder",
    description: "A business operating system for African trade and service companies, connecting sales, stock, finance, payments, tax, and field operations.",
    technologies: ["Flutter", "Supabase"],
    status: "live",
    link: "https://kipepeobusiness.greenon.online/",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Exora",
    role: "Founder",
    description: "A life execution platform helping people overcome procrastination, build discipline, and improve productivity.",
    technologies: ["Flutter", "Supabase"],
    status: "live",
    link: "https://exora-focus.greenon.online/",
    accent: "from-teal-500 to-cyan-500",
  },
  {
    title: "Universal Folder",
    role: "Founder",
    description: "A new way of thinking about compression and access: fold more, fetch less, and save locally.",
    technologies: ["Flutter", "Supabase"],
    status: "coming-soon",
    link: "https://universal-folder.greenon.online/",
    accent: "from-green-400 to-teal-500",
  },
  {
    title: "VisionStudy",
    role: "Founder",
    description: "A smarter learning platform designed to improve how people study, retain information, and succeed academically.",
    technologies: ["Flutter", "Supabase"],
    status: "coming-soon",
    link: "https://visionstudy.greenon.online/",
    accent: "from-indigo-400 to-blue-500",
  },
  {
    title: "Songa",
    role: "Co-Founder",
    description: "A fair and affordable mobility platform focused on better experiences for both riders and drivers.",
    technologies: ["Flutter", "Supabase"],
    status: "coming-soon",
    link: "https://songa.greenon.online/",
    accent: "from-orange-400 to-amber-500",
  },
  {
    title: "Vanish",
    role: "Founder",
    description: "A file-deletion experience that turns cleanup into a physical, satisfying moment through expressive Rive animations, sound, and haptics.",
    technologies: ["Flutter", "Supabase"],
    status: "in-dev",
    link: "http://vanish.greenon.online/",
    accent: "from-yellow-400 to-lime-500",
  },
  {
    title: "Coin",
    role: "Founder",
    description: "A simple savings app built around a living digital jar you can shake and tap to watch your money grow.",
    technologies: ["Flutter", "Supabase"],
    status: "in-dev",
    accent: "from-orange-400 to-amber-500",
  },
  {
    title: "Voice Capsule",
    role: "Founder",
    description: "A voice time-capsule app for recording messages, sealing them away, and reopening them in the future.",
    technologies: ["Flutter", "Supabase"],
    status: "in-dev",
    accent: "from-cyan-400 to-blue-500",
  },
]

const completedProjects = [
  {
    title: "Market Wizard",
    description: "AI-powered market analysis and trading application.",
    technologies: ["Flutter", "Dart", "AI"],
    github: "https://github.com/TonnyKamau/market_wizard",
    accent: "bg-emerald-600",
  },
  {
    title: "Expense Tracker",
    description: "Flutter application with SQLite for offline financial summaries.",
    technologies: ["Flutter", "SQLite", "Charts"],
    github: "https://github.com/TonnyKamau/expense-tracker",
    accent: "bg-green-600",
  },
  {
    title: "COVID Control",
    description: "Violation detection using ML and computer vision (OpenCV).",
    technologies: ["Python", "OpenCV", "ML"],
    github: "https://github.com/TonnyKamau/covid-control-system",
    accent: "bg-teal-600",
  },
]

const statusConfig = {
  live: { label: "Live", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  "in-dev": { label: "In Development", color: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400" },
  "coming-soon": { label: "Coming Soon", color: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400" },
}

const Projects = memo(function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="responsive-container">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center mb-20">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none font-bold px-4 py-1">Portfolio Showcase</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Engineering <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Digital products built under the Greenon ecosystem and personal projects — all driven by the mission to restore balance through technology.
          </p>
        </ScrollReveal>

        {/* Greenon Projects */}
        <div className="mb-24">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 shrink-0">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Greenon Ecosystem</h3>
            <a href="https://greenon.online/" target="_blank" rel="noopener noreferrer" className="sm:ml-auto">
              <Button variant="outline" size="sm" className="rounded-full border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-bold text-xs">
                Visit Foundation
                <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {greenonProjects.map((project, i) => {
              const status = statusConfig[project.status as keyof typeof statusConfig]
              return (
                <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                  <div
                    className="group relative mobile-card overflow-hidden hover-glow h-full"
                  >
                    <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${project.accent} opacity-10 rounded-full blur-3xl -mr-14 -mt-14 group-hover:scale-150 transition-transform duration-700`} />
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${status.color} border-none text-[10px] font-bold uppercase tracking-wide`}>
                          {status.label}
                        </Badge>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-emerald-500 hover:text-emerald-700 transition-colors" />
                          </a>
                        ) : (
                          <Clock className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">{project.role}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-[9px] uppercase font-bold tracking-tight border-none">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Completed Open Source */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
              <Github className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Open Source</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {completedProjects.map((project, i) => (
              <ScrollReveal key={i} variant="zoom-in" delay={i * 100}>
                <Card className="glass border-none rounded-3xl p-6 hover-glow h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${project.accent} flex items-center justify-center text-white shadow-lg`}>
                      <Rocket className="w-6 h-6" />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs font-medium leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-emerald-100 dark:border-emerald-900/30">
          <GitHubRepos />
        </div>
      </div>
    </section>
  )
})

export { Projects }
