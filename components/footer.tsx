import { Github, Linkedin, Mail, Leaf, ExternalLink } from "lucide-react"
import { memo } from "react"

const Footer = memo(function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 md:py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-white">Tonny Kamau</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Software developer & implementation lead at Greenon — building technology that restores balance.
            </p>
            <a
              href="https://greenon.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Leaf className="w-3 h-3" />
              Greenon
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-slate-300 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {["about", "resume", "projects", "lab-challenges", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-emerald-400 transition-colors capitalize">
                    {id.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 text-sm text-slate-300 uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://github.com/TonnyKamau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tonny-kamau-mwangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:tonnykamau6@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">Nakuru, Kenya</p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Tonny Kamau Mwangi. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Leaf className="w-3 h-3 text-emerald-500" />
            <span>Part of the Greenon ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

export { Footer }
