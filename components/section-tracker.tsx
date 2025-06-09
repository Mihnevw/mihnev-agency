"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { trackSectionView } from "@/lib/analytics"

interface SectionTrackerProps {
  sectionName: string
  children: React.ReactNode
  threshold?: number
}

export default function SectionTracker({ sectionName, children, threshold = 0.5 }: SectionTrackerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const hasTracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          trackSectionView(sectionName)
          hasTracked.current = true
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [sectionName, threshold])

  return <div ref={ref}>{children}</div>
}
