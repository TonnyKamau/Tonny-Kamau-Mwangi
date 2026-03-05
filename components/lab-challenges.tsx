"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, PenToolIcon as Tool, Lightbulb, FileText } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LabChallenges() {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedChallenge(expandedChallenge === index ? null : index)
  }

  const challenges = [
    {
      title: "Cisco Packet Tracer OSI Analysis",
      category: "Networking",
      difficulty: "Beginner",
      accent: "text-blue-500",
      problem: "Examine TCP/IP and OSI models in action by creating a network topology and analyzing real-time protocol flow.",
      tools: ["Packet Tracer", "CLI", "Protocol Analysis"]
    },
    {
      title: "Wireshark Traffic Deep-Dive",
      category: "Analysis",
      difficulty: "Intermediate",
      accent: "text-emerald-500",
      problem: "Capture and analyze live network traffic to identify potential security issues and understand packet-level communication.",
      tools: ["Wireshark", "Tshark", "Network Filters"]
    },
    {
      title: "HTB Academy: Traffic Analysis",
      category: "Security",
      difficulty: "Intermediate",
      accent: "text-orange-500",
      problem: "Completed comprehensive module on network monitoring and security incident detection via traffic patterns.",
      tools: ["HTB Academy", "tcpdump", "Zeek"]
    },
    {
      title: "DNS In-Depth Exploration",
      category: "Protocols",
      difficulty: "Beginner",
      accent: "text-indigo-500",
      problem: "Detailed analysis of DNS hierarchy, record types, and security vulnerabilities like DNS tunneling.",
      tools: ["dig", "nslookup", "TryHackMe"]
    },
    {
      title: "Web Request Manipulation",
      category: "Web Security",
      difficulty: "Beginner",
      accent: "text-rose-500",
      problem: "Learning HTTP/HTTPS protocol mechanics and identifying vulnerabilities in web request structures.",
      tools: ["Burp Suite", "curl", "DevTools"]
    }
  ]

  return (
    <section id="lab-challenges" className="section-padding bg-white dark:bg-slate-950">
      <div className="responsive-container">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none font-bold px-4 py-1">Cyber Labs & CTFs</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Security <span className="text-emerald-500">Challenges</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">Hands-on experience in networking, penetration testing, and forensic analysis.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, i) => (
            <div 
              key={i} 
              className="group cursor-pointer mobile-card p-6 hover-glow animate-fade-in-up" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => toggleExpand(i)}
            >
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-500 border-none font-bold text-[10px] uppercase tracking-wider">{challenge.category}</Badge>
                <div className={`w-8 h-8 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center`}>
                  <Target className={`w-4 h-4 ${challenge.accent}`} />
                </div>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-blue-500 transition-colors">{challenge.title}</h3>
              <p className={`text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed transition-all duration-500 ${expandedChallenge === i ? "max-h-96 opacity-100" : "max-h-24 opacity-100"}`}>
                {challenge.problem}
              </p>
              
              <div className={`mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2 transition-opacity duration-500 ${expandedChallenge === i ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                {challenge.tools.map(tool => (
                  <Badge key={tool} variant="secondary" className="bg-white dark:bg-slate-900 text-[10px] font-bold border-none px-2">{tool}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
