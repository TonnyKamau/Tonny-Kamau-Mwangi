"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Smartphone, MonitorDown, ShieldCheck, Leaf, Code2
} from "lucide-react"

const ventures = [
  { n: "01", title: "KIT IFMS", tag: "Live", tone: "lime", description: "An integrated financial management system helping businesses, Saccos, and cooperatives manage savings, lending, inventory, analytics, POS, and financial communication.", detail: ["Java", "Android", "Python", "Next.js", "Firebase", "Paystack", "MPESA", "Flutter"], href: "http://kit-ifms.com/" },
  { n: "02", title: "PikaNini", tag: "Live", tone: "blue", description: "Helping people make smarter food decisions through meal intelligence, budget-aware choices, healthier eating, and reduced food waste.", detail: ["Flutter", "Supabase", "Next.js"], href: "https://pikanini.greenon.online/" },
  // { n: "03", title: "Kipepeo Business", tag: "Live", tone: "mint", description: "A business operating system for African trade and service companies, connecting sales, stock, finance, payments, tax, and field operations.", detail: ["Flutter", "Supabase"], href: "https://kipepeobusiness.greenon.online/" },
  { n: "04", title: "Exora", tag: "Live", tone: "orange", description: "A life execution platform helping people overcome procrastination, build discipline, and improve productivity.", detail: ["Flutter", "Supabase"], href: "https://exora-focus.greenon.online/" },
  { n: "05", title: "Universal Folder", tag: "Soon", tone: "violet", description: "A new way of thinking about compression and access: fold more, fetch less, and save locally.", detail: ["Flutter", "Supabase"], href: "https://universal-folder.greenon.online/" },
  { n: "06", title: "VisionStudy", tag: "Soon", tone: "mint", description: "A smarter learning platform designed to improve how people study, retain information, and succeed academically.", detail: ["Flutter", "Supabase"], href: "https://visionstudy.greenon.online/" },
  { n: "07", title: "Songa", tag: "Soon", tone: "yellow", description: "A fair and affordable mobility platform focused on better experiences for both riders and drivers.", detail: ["Flutter", "Supabase"], href: "https://songa.greenon.online/" },
  { n: "08", title: "Vanish", tag: "Building", tone: "orange", description: "A file-deletion experience that turns cleanup into a physical, satisfying moment through expressive Rive animations, sound, and haptics.", detail: ["Flutter", "Supabase"], href: "http://vanish.greenon.online/" },
  { n: "09", title: "Coin", tag: "Building", tone: "blue", description: "A simple savings app built around a living digital jar you can shake and tap to watch your money grow.", detail: ["Flutter", "Supabase"], href: "" },
  { n: "10", title: "Voice Capsule", tag: "Building", tone: "mint", description: "A voice time-capsule app for recording messages, sealing them away, and reopening them in the future.", detail: ["Flutter", "Supabase"], href: "" },
]

const capabilities = [
  ["01", "Product engineering", "Flutter and React Native applications built around real users, operational realities and reliable delivery."],
  ["02", "Full-stack systems", "Next.js, Node.js, PostgreSQL and Prisma—designed as coherent products, not disconnected screens."],
  ["03", "Implementation", "Translating complex workflows into adoptable software, from stakeholder alignment to rollout and support."],
  ["04", "Security", "Cloud and network security practices informed by hands-on ethical hacking and traffic analysis."],
]

const labs = [
  "Cisco Packet Tracer OSI Analysis", "Wireshark Traffic Deep-Dive", "HTB Academy: Traffic Analysis", "DNS In-Depth Exploration", "Web Request Manipulation"
]

const certs = [
  ["Claude Code in Action", "Anthropic", "Jan 2026"], ["Claude 101", "Anthropic", "Jan 2026"],
  ["Explore Course", "54 Collective", "Sep 2024"],
]

const education = [
  {
    title: "Cisco Ethical Hacking Certification",
    institution: "Cybershujaa Academy",
    location: "Nairobi, Kenya",
    completed: "April 2026",
    topics: [
      "Information gathering and OSINT reconnaissance",
      "Vulnerability scanning using Nmap and GVM",
      "Exploitation techniques with Metasploit and SQLmap",
      "Social engineering attacks using SEToolkit and Zphisher",
      "Network protocol attacks on SMB, SNMP, and DNS",
      "Scripting and automation with Python, Bash, and PowerShell",
      "Penetration testing reporting and mitigation strategies",
      "Capture the Flag (CTF) real-world scenario challenges",
    ],
  },
  {
    title: "Cloud & Network Security Certification",
    institution: "Cybershujaa Academy",
    location: "Nairobi, Kenya",
    completed: "August 2025",
    topics: [
      "Network security, threat detection, and system hardening",
      "Vulnerability assessment and risk analysis",
      "Cloud security and secure system architecture",
      "Cybersecurity and ethical hacking principles",
    ],
  },
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "Kisii University",
    location: "Kisii, Kenya",
    completed: "December 2022",
    topics: [
      "Software development, system design, and data structures",
      "Java, PHP, and modern web technologies",
      "Database design, optimization, and SQL querying",
      "Agile and SDLC methodologies",
      "Full-stack and application architecture projects",
    ],
  },
]

export function Portfolio() {
  const [open, setOpen] = useState(false)
  const nav = [["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Contact", "#contact"]]

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".section-heading, .featured-project, .venture-card, .opensource > a, .about-statement, .capability-grid > article, .timeline > article, .education-heading, .education-card, .learning-grid > div, .contact-new > div, .contact-mail"
    )
    targets.forEach((target) => target.classList.add("scroll-reveal"))

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tonny Kamau home"><span>TK</span><small>Software engineer<br/>Nakuru, Kenya</small></a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="mailto:tonnykamau6@gmail.com">Let’s talk <ArrowUpRight/></a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </header>

      <section id="top" className="hero-new">
        <div className="hero-kicker"><span className="status-dot"/> Available for collaboration</div>
        <h1>I build digital<br/>systems that <em>move</em><br/>ideas forward.</h1>
        <div className="hero-bottom">
          <div className="portrait-wrap"><Image src="/images/profile.jpg" alt="Tonny Kamau Mwangi" fill priority sizes="(max-width: 700px) 42vw, 210px"/></div>
          <p>Tonny Kamau Mwangi is a software developer and implementation lead creating useful products across fintech, climate and public-good technology.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowDownRight/></a>
        </div>
        <div className="hero-marquee" aria-hidden="true"><span>FLUTTER</span><i>✦</i><span>NEXT.JS</span><i>✦</i><span>PRODUCT DELIVERY</span><i>✦</i><span>SECURE SYSTEMS</span></div>
      </section>

      <section id="work" className="section-block work-section">
        <div className="section-heading"><p>Selected work / 2022—26</p><h2>Products with<br/><em>purpose.</em></h2></div>
        <div className="featured-project">
          <div className="project-copy"><div className="eyebrow"><Leaf/> Flagship product</div><h3>KIT—IFMS</h3><p>Building the financial infrastructure that informal groups and growing businesses deserve.</p><div className="project-actions"><a href="https://www.kit-ifms.com/" target="_blank">Visit product <ArrowUpRight/></a><a href="https://play.google.com/store/apps/details?id=com.kit.kitifms.kitifms" target="_blank"><Smartphone/> Android app</a><a href="https://www.kit-ifms.com/download/KIT-IFMS%20MSI.exe"><MonitorDown/> Windows app</a></div></div>
          <div className="product-visual">
            <div className="visual-top"><span>KIT / FINANCIAL OS</span><ShieldCheck/></div>
            <div className="visual-stat"><b>KES 10M+</b><span>Transactions supported</span></div>
            <div className="visual-grid"><div><b>100+</b><span>Active chamas</span></div><div><b>3</b><span>Countries live</span></div></div>
            <div className="visual-tags"><span>Chama & SACCO</span><span>P2P lending</span><span>Inventory & POS</span><span>Smart savings</span><span>Instant transfers</span><span>Messaging</span></div>
          </div>
        </div>
        <div className="venture-list">
          {ventures.slice(1).map((v) => (
            <a className={`venture-card ${v.tone}`} href={v.href || undefined} target={v.href ? "_blank" : undefined} rel={v.href ? "noopener noreferrer" : undefined} aria-label={v.href ? `Visit ${v.title}` : `${v.title} coming soon`} key={v.title}>
              <div className="venture-meta"><span>{v.n}</span><span>{v.tag}</span></div>
              <h3>{v.title}</h3><p>{v.description}</p>
              <div className="chips">{v.detail.map(x => <span key={x}>{x}</span>)}</div>
              <ArrowUpRight className="venture-arrow" />
            </a>
          ))}
        </div>
        <div className="opensource"><p>Open source / experiments</p>{[["Market Wizard","AI-powered market analysis and trading application.","https://github.com/TonnyKamau/market_wizard"],["Expense Tracker","Offline-first Flutter finance summaries with SQLite.","https://github.com/TonnyKamau/expense-tracker"],["COVID Control","Violation detection using machine learning and OpenCV.","https://github.com/TonnyKamau/covid-control-system"]].map(([t,d,h],i)=><a href={h} target="_blank" key={t}><span>0{i+1}</span><b>{t}</b><small>{d}</small><ArrowUpRight/></a>)}</div>
      </section>

      <section id="about" className="section-block about-new">
        <div className="section-index">02 / ABOUT</div>
        <div className="about-statement"><p className="lead">I sit at the intersection of <em>engineering, implementation</em> and real-world impact.</p><div className="about-copy"><p>As Product Implementation Lead at Primesoft Solutions and a contributor to Greenon, I turn complex requirements into products people can actually use.</p><p>My work spans mobile and web development, database architecture, enterprise security and product rollout—with a focus on Africa’s financial and climate challenges.</p><a href="https://greenon.online/" target="_blank">Explore Greenon <ArrowUpRight/></a></div></div>
        <div className="capability-grid">{capabilities.map(([n,t,d])=><article key={n}><span>{n}</span><Code2/><h3>{t}</h3><p>{d}</p></article>)}</div>
      </section>

      <section id="experience" className="section-block experience-new">
        <div className="section-heading light"><p>Experience / learning</p><h2>Built through<br/><em>doing.</em></h2></div>
        <div className="timeline">
          <article><time>2023—Present</time><div><h3>Product Implementation Lead</h3><p>Primesoft Solutions Ltd</p><small>Leading the architecture and implementation of KIT-IFMS across desktop, web and mobile; aligning product, infrastructure and operational delivery.</small></div></article>
          <article><time>2022—2023</time><div><h3>Mobile Developer (Junior)</h3><p>TrueCode Solutions</p><small>Architected responsive Flutter interfaces and optimized application state-management flows.</small></div></article>
          <article><time>Graduated 2022</time><div><h3>BSc. Software Engineering</h3><p>Kisii University</p><small>A foundation in software design, architecture, development and applied problem solving.</small></div></article>
        </div>
        <div className="education-heading"><span>Education & certifications</span><h3>Technical foundations,<br/><em>applied in practice.</em></h3></div>
        <div className="education-grid">
          {education.map((item, index) => (
            <article className="education-card" key={item.title}>
              <div className="education-number">0{index + 1}</div>
              <div className="education-meta"><span>{item.institution}</span><span>{item.location}</span><time>Completed {item.completed}</time></div>
              <h3>{item.title}</h3>
              <ul>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="learning-grid"><div><h3>Professional certificates</h3>{certs.map(([t,o,d])=><div className="row" key={t}><b>{t}</b><span>{o}</span><time>{d}</time></div>)}</div><div><h3>Security fieldwork</h3>{labs.map((x,i)=><div className="row labs" key={x}><span>0{i+1}</span><b>{x}</b></div>)}</div></div>
        <div className="expertise-strip">{["Flutter","React Native","Next.js","Cloud Security","Node.js","PostgreSQL","Prisma","Tailwind"].map(x=><span key={x}>{x}</span>)}</div>
      </section>

      <section id="contact" className="contact-new">
        <div><p>Have something meaningful in mind?</p><h2>Let’s build it<br/><em>together.</em></h2></div>
        <a className="contact-mail" href="mailto:tonnykamau6@gmail.com">tonnykamau6@gmail.com <ArrowUpRight/></a>
        <footer><div><span>© {new Date().getFullYear()} Tonny Kamau Mwangi</span><span><MapPin/> Nakuru, Kenya</span></div><div><a href="https://github.com/TonnyKamau" target="_blank"><Github/> GitHub</a><a href="https://www.linkedin.com/in/tonny-kamau-mwangi/" target="_blank"><Linkedin/> LinkedIn</a><a href="mailto:tonnykamau6@gmail.com"><Mail/> Email</a></div></footer>
      </section>
    </main>
  )
}
