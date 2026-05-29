"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Smartphone,
  Monitor,
  Download,
  Leaf,
  ArrowRight,
  TrendingUp,
  Globe,
  ExternalLink,
} from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex items-center w-full overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 md:min-h-screen"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(16,185,129,0.07)_0%,_transparent_65%)]" />
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-0 -z-10 w-52 h-52 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-green-500/10 rounded-full blur-[60px] sm:blur-[100px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-5">

            {/* Badges */}
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <a href="https://greener-earth.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Badge variant="outline" className="px-2.5 py-1 text-[10px] bg-emerald-50/80 border-emerald-300 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-700 dark:text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-emerald-100 transition-colors cursor-pointer">
                    <Leaf className="w-2.5 h-2.5" />
                    Greener Earth Foundation
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </Badge>
                </a>
                <Badge variant="outline" className="px-2.5 py-1 text-[10px] bg-emerald-50/50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider">
                  Flutter &amp; Next.js Developer
                </Badge>
              </div>
            </ScrollReveal>

            {/* Availability */}
            <ScrollReveal variant="fade-up" delay={80}>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight">Available for Collaboration</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight">Available for Hiring</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Profile photo */}
            <ScrollReveal variant="zoom-in" delay={160}>
              <div className="relative group w-fit">
                <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-600 to-green-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                  <img src="/images/profile.jpg" alt="Tonny Kamau" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-6 h-6 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-lg flex items-center justify-center">
                  <Leaf className="w-3 h-3 text-white" />
                </div>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal variant="fade-up" delay={240}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                Building <br />
                <span className="text-gradient">Greener Tech</span>
              </h1>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal variant="fade-up" delay={320}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                I am <strong className="text-slate-900 dark:text-white font-black">Tonny Kamau</strong>, a software developer &amp; implementation lead at{" "}
                <a href="https://greener-earth.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-black underline decoration-2 underline-offset-4 hover:text-emerald-700 transition-colors">
                  Greener Earth Foundation
                </a>
                , building digital products that restore balance through technology.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div>
                <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] mb-3">
                  Flagship Project: KIT-IFMS
                </p>
                <div className="flex flex-col xs:flex-row flex-wrap gap-3">
                  <Button size="lg" className="h-12 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 font-bold group text-sm" asChild>
                    <a href="https://play.google.com/store/apps/details?id=com.kit.kitifms.kitifms" target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      Play Store App
                      <Download className="ml-2 w-3.5 h-3.5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 px-6 rounded-2xl border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-bold group text-emerald-700 dark:text-emerald-300 text-sm" asChild>
                    <a href="https://www.kit-ifms.com/download/KIT-IFMS%20MSI.exe" target="_blank" rel="noopener noreferrer">
                      <Monitor className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      Windows App
                      <Download className="ml-2 w-3.5 h-3.5 text-emerald-400" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Explore link */}
            <ScrollReveal variant="fade-up" delay={480}>
              <Button variant="ghost" className="text-emerald-600 dark:text-emerald-400 font-bold p-0 hover:bg-transparent group w-fit text-sm" onClick={scrollToProjects}>
                Explore Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollReveal>

            {/* Platform icons */}
            <ScrollReveal variant="fade-up" delay={540}>
              <div className="flex items-center gap-3 pt-1 flex-wrap">
                <div className="flex gap-2 shrink-0">
                  {[Smartphone, Monitor, Globe].map((Icon, i) => (
                    <div key={i} className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                      <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold whitespace-nowrap">
                  Android &amp; Windows •{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">iOS Coming Soon</span>
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* ── Right column ── */}
          <ScrollReveal variant="fade-left" delay={200} className="hidden md:block relative">
            <div className="absolute inset-0 bg-emerald-500/15 blur-[80px] animate-pulse rounded-full" />
            <div className="relative glass rounded-[2rem] p-6 lg:p-10 overflow-hidden shadow-2xl border border-emerald-100/30 dark:border-emerald-900/30">

              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-emerald-50/70 dark:bg-emerald-900/30 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <Leaf className="w-2.5 h-2.5" />
                  GREENER EARTH ECOSYSTEM
                </div>
              </div>

              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed mb-5 border-l-2 border-emerald-400 pl-3">
                "Technology should help restore balance and not create more imbalance."
              </p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { name: "KIT-IFMS",  status: "Live", color: "bg-emerald-500" },
                  { name: "NutriNest", status: "Live", color: "bg-green-500"   },
                  { name: "Exora",     status: "Soon", color: "bg-teal-400"    },
                  { name: "EchoTrail", status: "Soon", color: "bg-emerald-400" },
                  { name: "Rayzen",    status: "Soon", color: "bg-lime-500"    },
                  { name: "MelaScan",  status: "Soon", color: "bg-green-400"   },
                ].map((p) => (
                  <div key={p.name} className="bg-white dark:bg-slate-800 px-3 py-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${p.color}`} />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">{p.name}</span>
                    <span className={`ml-auto text-[9px] font-black uppercase tracking-wide shrink-0 ${p.status === "Live" ? "text-emerald-600" : "text-slate-400"}`}>
                      {p.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Ecosystem Growth</span>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full h-1.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-emerald-500 rounded-full" />
                  </div>
                  <div className="w-full h-1.5 bg-emerald-100 dark:bg-emerald-900/50 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
