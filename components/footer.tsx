import { Github, Linkedin, Mail } from "lucide-react"
import { memo } from "react"

const Footer = memo(function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 fade-in-up">
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-xs sm:text-sm md:text-base text-slate-300">
              <li className="fade-in-left stagger-1">
                <a href="#about" className="hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li className="fade-in-left stagger-2">
                <a href="#resume" className="hover:text-white transition-colors duration-300">
                  Resume
                </a>
              </li>
              <li className="fade-in-left stagger-3">
                <a href="#projects" className="hover:text-white transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li className="fade-in-left stagger-4">
                <a href="#lab-challenges" className="hover:text-white transition-colors duration-300">
                  Lab Challenges
                </a>
              </li>
              <li className="fade-in-left stagger-1">
                <a href="#contact" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Connect</h4>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <a
                href="https://github.com/TonnyKamau"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover-scale"
                aria-label="GitHub"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tonny-kamau-mwangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="mailto:tonnykamau6@gmail.com"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover-scale"
                aria-label="Email"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-slate-400 fade-in">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Tonny Kamau Mwangi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
})

export { Footer }
