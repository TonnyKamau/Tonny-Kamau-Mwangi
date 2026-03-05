"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  MessageSquare, 
  Wallet, 
  Send, 
  ArrowRight,
  Database,
  HandCoins,
  Package,
  LineChart,
  Globe
} from "lucide-react"

export function KitIfms() {
  const features = [
    {
      title: "Chama & SACCO",
      description: "Dedicated tools for informal and cooperative group savings, loans, and investment flows.",
      icon: Users,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "P2P Lending",
      description: "Direct lending between members with secure, flexible repayment terms and tracking.",
      icon: HandCoins,
      accent: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Inventory & POS",
      description: "Integrated point-of-sale and stock management for SMEs and cooperative traders.",
      icon: Package,
      accent: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      title: "Financial Messaging",
      description: "Built-in communication hub for seamless financial coordination within the workflow.",
      icon: MessageSquare,
      accent: "text-violet-500",
      bg: "bg-violet-500/10"
    },
    {
      title: "Smart Savings",
      description: "Track individual and group goals with real-time balance monitoring and growth stress-free.",
      icon: Wallet,
      accent: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      title: "Instant Transfers",
      description: "Secure, real-time money transfers across East Africa's banking and mobile networks.",
      icon: Send,
      accent: "text-rose-500",
      bg: "bg-rose-500/10"
    }
  ]

  const solutions = [
    { icon: Users, label: "User Management" },
    { icon: HandCoins, label: "P2P Lending" },
    { icon: Globe, label: "Communication Hub" },
    { icon: Package, label: "Inventory Management" },
    { icon: Wallet, label: "Chama & Sacco Management" },
    { icon: LineChart, label: "POS & Analytics" }
  ]

  return (
    <section id="features" className="section-padding bg-white dark:bg-slate-950">
      <div className="responsive-container">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none font-bold px-4 py-1">Experience KIT-IFMS</Badge>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Comprehensive <br /><span className="text-emerald-500">Financial Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
            See how our platform transforms financial management for African businesses, saccos, and informal sector players.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <Card key={i} className="glass border-none rounded-[2rem] p-8 hover-glow group transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className={`w-7 h-7 ${feature.accent}`} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats & Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Solving Africa&apos;s Financial Challenges</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {solutions.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <item.icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6">
              {[
                { val: "100+", label: "Active Chamas" },
                { val: "KES 10M+", label: "Transactions" },
                { val: "3", label: "Countries Live" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-emerald-500 mb-1">{stat.val}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up stagger-3">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] animate-pulse" />
            <div className="relative glass rounded-[2.5rem] p-10 border-white/40 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-all duration-700" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xl text-slate-900 dark:text-white">Secure Ecosystem</h4>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter">Unite • Grow • Prosper</p>
                </div>
              </div>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Unite informal sector players digitally",
                  "Improve operational efficiency via automation",
                  "Enable peer-to-peer lending with flexible terms",
                  "Enhance transparency with real-time data"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <p className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-14 rounded-2xl bg-slate-900 dark:bg-white dark:text-slate-900 font-bold group" asChild>
                  <a href="https://www.kit-ifms.com/" target="_blank" rel="noopener noreferrer">
                    Visit Official Site
                    <Globe className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-2xl border-slate-200 dark:border-slate-800 font-bold group" asChild>
                  <a href="https://play.google.com/store/apps/details?id=com.kit.kitifms.kitifms" target="_blank" rel="noopener noreferrer">
                    Download App
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
