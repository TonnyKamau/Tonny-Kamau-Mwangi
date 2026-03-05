import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Code, Shield, ShieldCheck } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="responsive-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Product Highlight / Latest Focus */}
        <div className="mb-12 glass rounded-[2.5rem] p-8 md:p-12 hover-glow border-none relative overflow-hidden group animate-fade-in-up">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40">
                <Code className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-xl shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-none font-bold px-4 py-1">Current Implementation Focus</Badge>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">Scaling KIT-IFMS Architecture</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                Architecting an integrated financial management ecosystem for cooperatives across Africa. Specialized in creating high-performance, secure mobile & web interfaces.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work & Education Bento */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass border-none rounded-[2.5rem] overflow-hidden animate-fade-in-up stagger-1">
              <div className="p-8 md:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/40">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Experience</h3>
              </div>
              <CardContent className="p-8 md:p-10 space-y-12">
                <div className="relative pl-10 border-l-2 border-blue-500 group">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 shadow-xl shadow-blue-500/40" />
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">Product Implementation Lead</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mb-3">Primesoft Solutions Ltd • 2023 - Present</p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 font-medium text-sm">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Spearheading deployment of MALIPLUS enterprise systems.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>Managing high-stakes database migrations and KRA integrations.</span>
                    </li>
                  </ul>
                </div>

                <div className="relative pl-10 border-l-2 border-slate-200 dark:border-slate-800 group">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-400 transition-colors" />
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">Mobile Developer (Junior)</h4>
                  <p className="text-slate-600 dark:text-slate-300 font-bold mb-3">TrueCode Solutions • 2022 - 2023</p>
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-sm">Architected responsive mobile interfaces with Flutter and optimized state management flows.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-none rounded-[2.5rem] overflow-hidden animate-fade-in-up stagger-2">
              <div className="p-8 md:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/40">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Education</h3>
              </div>
              <CardContent className="p-8 md:p-10 space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">BSc. Software Engineering</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">Kisii University • Graduated 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Sidebar */}
          <div className="space-y-8 animate-fade-in-up stagger-3">
            <Card className="bg-slate-900 text-white rounded-[2.5rem] overflow-hidden border-none p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/10">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-black">Professional Certs</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Claude Code in Action", org: "Anthropic", date: "Jan 2026", id: "to9xkinhs8q8" },
                  { title: "Claude 101", org: "Anthropic", date: "Jan 2026", id: "mrvtewhiguo3" },
                  { title: "Ethical Hacker", org: "Cisco", date: "Dec 2025", type: "Security" },
                  { title: "Cloud & Network Security", org: "Cyber Shujaa", date: "Aug 2025" },
                  { title: "Explore Course", org: "54 Collective", date: "Sep 2024" }
                ].map((cert, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{cert.org} • {cert.date}</p>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-2">{cert.title}</h4>
                    {cert.id && <Badge className="bg-white/5 text-slate-400 border-none text-[10px] font-mono">ID: {cert.id}</Badge>}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass border-none rounded-[2.5rem] p-8 md:p-10">
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "React Native", "Next.js", "Cloud Security", "Node.js", "PostgreSQL", "Prisma", "Tailwind"].map(skill => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-none">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
