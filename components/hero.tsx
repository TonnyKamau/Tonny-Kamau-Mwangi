"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Smartphone, 
  Monitor, 
  Download, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp,
  Layout,
  Globe
} from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            {/* Branding & Status */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge variant="outline" className="px-3 py-1 bg-blue-50/50 backdrop-blur-md border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300 font-bold uppercase tracking-wider text-[10px]">
                Implementation Lead & Security Specialist
              </Badge>
              <Badge variant="outline" className="px-3 py-1 bg-blue-50/50 backdrop-blur-md border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300 font-bold uppercase tracking-wider text-[10px]">
                Flutter & Next.js Developer
              </Badge>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">Available for Collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">Available for Hiring</span>
                </div>
              </div>
            </div>

            {/* Profile & Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Tonny Kamau" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 border-2 sm:border-4 border-white dark:border-slate-900 rounded-full shadow-lg" />
              </div>
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                  Engineering <br />
                  <span className="text-gradient">Secure Futures</span>
                </h1>
              </div>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              I am <strong className="text-slate-900 dark:text-white font-black">Tonny Kamau</strong>, a multi-disciplinary software professional specialized in end-to-end technical solutions, database architecture, and mobile-first front-ends.
            </p>

            <div className="mb-6">
              <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-4">Flagship Project: KIT-IFMS</p>
              {/* Action Buttons / Platforms */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/25 group font-bold" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.kit.kitifms.kitifms" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Play Store App
                    <Download className="ml-2 w-4 h-4 text-white" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-bold group" asChild>
                  <a href="https://www.kit-ifms.com/download/KIT-IFMS%20MSI.exe" target="_blank" rel="noopener noreferrer">
                    <Monitor className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Windows App
                    <Download className="ml-2 w-4 h-4 text-slate-400" />
                  </a>
                </Button>
              </div>
            </div>

            <Button variant="ghost" className="text-blue-600 dark:text-blue-400 font-bold p-0 hover:bg-transparent group" onClick={scrollToProjects}>
              Explore Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Availability */}
            <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
              <div className="flex gap-2">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <Monitor className="w-4 h-4" />
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <Globe className="w-4 h-4" />
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-bold">Available on Android & Windows • <span className="text-blue-600 dark:text-blue-400 font-extrabold">iOS Coming Soon</span></p>
            </div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div className="relative animate-fade-in-up stagger-2 hidden lg:block">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] animate-pulse" />
            <div className="relative glass rounded-[2.5rem] p-8 md:p-12 overflow-hidden border-white/40 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-slate-600 dark:text-slate-300">
                  KIT-IFMS DASHBOARD
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Growth</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">+24.8%</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <ShieldCheck className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Security</p>
                    <p className="text-xl font-bold text-emerald-500">Active</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                      <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Smart Analytics</h4>
                      <p className="text-xs text-slate-500 font-medium tracking-tight">Efficiency • Transparency • Results</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-blue-600 rounded-full" />
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
