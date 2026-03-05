import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { KitIfms } from "@/components/kit-ifms"
import { About } from "@/components/about"
import { Resume } from "@/components/resume"
import { Projects } from "@/components/projects"
import { LabChallenges } from "@/components/lab-challenges"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation />
      <Hero />
      <KitIfms />
      <About />
      <Resume />
      <Projects />
      <LabChallenges />
      <Contact />
      <Footer />
    </main>
  )
}
