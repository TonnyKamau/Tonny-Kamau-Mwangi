"use client"

import { Shield, Database, Leaf, Globe } from "lucide-react"
import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const About = memo(function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="responsive-container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <ScrollReveal variant="fade-up" delay={0}>
              <Badge className="w-fit bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none font-bold px-4 py-1">
                Strategy &amp; Execution
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3 leading-tight">
                Architecting <br /><span className="text-gradient">Greener Systems</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                <p>
                  I am a high-impact <span className="text-slate-900 dark:text-white font-black">IT Support Professional, Software Implementation Lead &amp; Flutter/Next.js Developer</span> with extensive experience in database architecture, system deployment, and end-to-end technical solutions.
                </p>
                <p>
                  As a core contributor to the{" "}
                  <a href="https://greener-earth.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-2 underline-offset-4 hover:text-emerald-700 transition-colors">
                    Greener Earth Foundation
                  </a>
                  , I believe technology should restore balance — not create more imbalance.
                </p>
                <p>
                  Equipped with certifications in Cloud Security and Ethical Hacking, I bring a security-first mindset to every project — from the flagship KIT-IFMS implementation to the broader Greener Earth ecosystem.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { icon: Shield,   color: "text-emerald-500", bg: "bg-emerald-500/10", title: "Enterprise Security",  sub: "Certified Operations"     },
                  { icon: Database, color: "text-green-500",   bg: "bg-green-500/10",   title: "DB Architecture",     sub: "Scalable Logic"           },
                  { icon: Leaf,     color: "text-teal-500",    bg: "bg-teal-500/10",    title: "Greener Earth",       sub: "Foundation Contributor"   },
                  { icon: Globe,    color: "text-lime-600",    bg: "bg-lime-500/10",    title: "Cross-Platform",      sub: "Mobile & Web"             },
                ].map(({ icon: Icon, color, bg, title, sub }) => (
                  <Card key={title} className="glass border-none rounded-2xl p-4 hover-glow transition-all duration-300">
                    <div className={`${bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">{sub}</p>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right */}
          <ScrollReveal variant="fade-left" delay={150}>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full" />
              <div className="mobile-card p-5 sm:p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                    <Leaf className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Professional Core</h3>
                </div>
                <div className="space-y-7">
                  {[
                    { label: "Implementation Lead",  desc: "Flagship Lead for KIT-IFMS deployment & Greener Earth ecosystem architecture." },
                    { label: "Systems & Security",   desc: "Cloud Defense, Network Ops, & System Lifecycle Management." },
                    { label: "Database Mastery",     desc: "High-performance MySQL, MongoDB, & Data Integrity at scale." },
                    { label: "Mission-Driven Dev",   desc: "Building tech that restores balance — Greener Earth Foundation philosophy." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="text-emerald-500 font-black text-xl italic opacity-40 shrink-0">0{i + 1}</div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{item.label}</h4>
                        <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
})

export { About }
