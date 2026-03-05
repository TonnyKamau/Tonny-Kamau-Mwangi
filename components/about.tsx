"use client"

import { Shield, Database } from "lucide-react"
import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const About = memo(function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="responsive-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-none font-bold px-4 py-1">Strategy & Execution</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Architecting <br /><span className="text-orange-500">Robust Systems</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              <p>
                I am a high-impact <span className="text-slate-900 dark:text-white font-black">IT Support Professional, Software Implementation Lead & Flutter/Next.js Developer</span> with extensive experience in database architecture, system deployment, and end-to-end technical solutions.
              </p>
              <p>
                My approach combines deep technical knowledge with a passion for <span className="text-blue-600 dark:text-blue-400 font-bold underline decoration-2 underline-offset-4">premium user experiences</span>. I specialize in building <span className="text-slate-900 dark:text-white font-black">appealing, scalable, and highly responsive</span> web and cross-platform applications for **Windows and Android**.
              </p>
              <p>
                Whether it&apos;s managing complex database clusters or leading the flagship implementation of **KIT-IFMS**, I focus on delivering useful systems that are secure, scalable, and intuitive across all devices.
              </p>
              <p>
                Equipped with certifications in Cloud Security and Ethical Hacking, I bring a security-first mindset to every project I undertake.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <Card className="glass border-none rounded-2xl p-4">
                <div className="bg-blue-500/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Enterprise Security</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Certified Operations</p>
              </Card>
              <Card className="glass border-none rounded-2xl p-4">
                <div className="bg-orange-500/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                  <Database className="w-5 h-5 text-orange-500" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">DB Architecture</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Scalable Logic</p>
              </Card>
            </div>
          </div>

          <div className="relative animate-fade-in-up stagger-2">
            <div className="absolute inset-0 bg-orange-500/10 blur-[80px] rounded-full" />
            <div className="mobile-card p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Professional Core</h3>
              <div className="space-y-8">
                {[
                  { label: "Implementation Lead", desc: "Flagship Lead for KIT-IFMS deployment/architecture." },
                  { label: "Systems & Security", desc: "Cloud Defense, Network Ops, & System Lifecycle Mgmt." },
                  { label: "Database Mastery", desc: "High-performance MySQL, MongoDB, & Data Integrity." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-orange-500 font-black text-xl italic opacity-50">0{i+1}</div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-1">{item.label}</h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export { About }
