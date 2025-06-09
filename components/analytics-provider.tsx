"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { initGA, trackPageView, trackScrollDepth, trackTimeOnPage } from "@/lib/analytics"

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Google Analytics
    initGA()
  }, [])

  useEffect(() => {
    // Track page views on route changes
    trackPageView(pathname)
  }, [pathname])

  useEffect(() => {
    // Track scroll depth
    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      // Track at 25%, 50%, 75%, and 100% milestones
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        if (scrollPercent >= 25 && scrollPercent < 50 && maxScroll < 50) {
          trackScrollDepth(25)
        } else if (scrollPercent >= 50 && scrollPercent < 75 && maxScroll < 75) {
          trackScrollDepth(50)
        } else if (scrollPercent >= 75 && scrollPercent < 100 && maxScroll < 100) {
          trackScrollDepth(75)
        } else if (scrollPercent >= 100) {
          trackScrollDepth(100)
        }
      }
    }

    // Track time on page
    const startTime = Date.now()
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      trackTimeOnPage(timeSpent)
    }

    // Set up scroll tracking
    window.addEventListener("scroll", trackScroll, { passive: true })

    // Track time milestones (30s, 60s, 120s, 300s)
    const timeouts = [
      setTimeout(() => trackTimeOnPage(30), 30000),
      setTimeout(() => trackTimeOnPage(60), 60000),
      setTimeout(() => trackTimeOnPage(120), 120000),
      setTimeout(() => trackTimeOnPage(300), 300000),
    ]

    // Track time when user leaves
    window.addEventListener("beforeunload", trackTime)

    return () => {
      window.removeEventListener("scroll", trackScroll)
      window.removeEventListener("beforeunload", trackTime)
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return <>{children}</>
}
