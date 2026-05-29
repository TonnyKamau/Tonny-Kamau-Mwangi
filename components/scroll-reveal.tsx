"use client"

import { useEffect, useRef, forwardRef } from "react"

type Variant = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "zoom-in"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  variant?: Variant
  delay?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1"
      el.style.transform = "none"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("sr-visible"), delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={`sr-base sr-${variant} ${className}`}>
      {children}
    </div>
  )
}
