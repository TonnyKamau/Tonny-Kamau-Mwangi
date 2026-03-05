import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="responsive-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-none font-bold px-4 py-1">Let&apos;s Connect</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              Ready to <br /><span className="text-indigo-500">Collaborate?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-xl">
              I&apos;m always looking for new challenges and opportunities to build something extraordinary. Whether it&apos;s a high-growth startup or a secure enterprise project — let&apos;s talk.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "tonnykamau6@gmail.com", href: "mailto:tonnykamau6@gmail.com", color: "text-blue-500" },
                { icon: Phone, label: "Phone", value: "+254 798 428 931", href: "tel:+254798428931", color: "text-emerald-500" },
                { icon: MapPin, label: "Location", value: "Nakuru, Kenya", href: "#", color: "text-rose-500" }
              ].map((item, i) => (
                <a key={i} href={item.href} className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-slate-900 dark:text-white font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up stagger-2">
            <Card className="glass border-none rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Professional Links</h3>
                </div>

                <div className="grid gap-4">
                  <Button size="lg" className="h-16 rounded-2xl bg-slate-900 dark:bg-white dark:text-slate-900 hover:scale-[1.02] transition-transform font-bold group" asChild>
                    <a href="https://www.linkedin.com/in/tonny-kamau-mwangi/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 w-5 h-5" />
                      LinkedIn Profile
                      <ExternalLink className="ml-auto w-4 h-4 opacity-50" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="h-16 rounded-2xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:scale-[1.02] transition-transform font-bold group" asChild>
                    <a href="https://github.com/TonnyKamau" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 w-5 h-5" />
                      GitHub Profile
                      <ExternalLink className="ml-auto w-4 h-4 opacity-50" />
                    </a>
                  </Button>
                </div>

                <div className="mt-12 p-6 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Send className="w-5 h-5 text-indigo-500" />
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 font-medium leading-relaxed">
                      Typically responds within 24 hours. Looking forward to discussing how we can build the future together.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
