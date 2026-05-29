"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "projects", "lab-challenges", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = [
    { id: "home",           label: "Home"           },
    { id: "about",          label: "About"          },
    { id: "resume",         label: "Resume"         },
    { id: "projects",       label: "Projects"       },
    { id: "lab-challenges", label: "Lab Challenges" },
    { id: "contact",        label: "Contact"        },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-emerald-100/50 dark:border-emerald-900/30 py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
            onClick={() => scrollToSection("home")}
          >
            <div
              className={`w-9 h-9 rounded-xl transition-all duration-500 flex items-center justify-center overflow-hidden shrink-0 ${
                scrolled
                  ? "bg-emerald-600 shadow-lg shadow-emerald-500/20"
                  : "bg-white/10 backdrop-blur-md border border-white/20"
              }`}
            >
              <img src="/favicon.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="tracking-tight font-black text-sm sm:text-base text-slate-900 dark:text-white">
                Tonny Kamau
              </span>
              <span className="hidden sm:block text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Greener Earth • Flutter &amp; Next.js
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
            <div className="ml-2 pl-3 border-l border-slate-200 dark:border-slate-800">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 p-0 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 animate-fade-in shadow-xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                    activeSection === item.id
                      ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
