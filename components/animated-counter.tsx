"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 } // Start animation when 20% of the element is visible
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let animationFrame: number
    let startTime: number | null = null
    let currentCount = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      if (progress < 1) {
        currentCount = Math.floor(progress * end)
        setCount(currentCount)
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    if (isInView) {
      // Add delay before starting animation
      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate)
      }, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, end, duration, delay])

  return (
    <motion.div
      ref={counterRef}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.div>
  )
}

interface AnimatedPercentageProps {
  end: number
  duration?: number
  delay?: number
  className?: string
  showBar?: boolean
}

export function AnimatedPercentage({
  end,
  duration = 2,
  delay = 0,
  className = "",
  showBar = false
}: AnimatedPercentageProps) {
  const [isInView, setIsInView] = useState(false)
  const percentageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (percentageRef.current) {
      observer.observe(percentageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={percentageRef} className="flex items-center gap-4">
      <AnimatedCounter
        end={end}
        duration={duration}
        delay={delay}
        suffix="%"
        className={className}
      />
      {showBar && (
        <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all duration-2000 ease-out"
            style={{
              width: isInView ? `${end}%` : '0%',
              transitionDelay: `${delay}s`,
            }}
          />
        </div>
      )}
    </div>
  )
}

interface AnimatedNumberWithLabelProps {
  end: number
  label: string
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  numberClassName?: string
  labelClassName?: string
}

export function AnimatedNumberWithLabel({
  end,
  label,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  numberClassName = "",
  labelClassName = "",
}: AnimatedNumberWithLabelProps) {
  const [isInView, setIsInView] = useState(false)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (labelRef.current) {
      observer.observe(labelRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={labelRef}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <AnimatedCounter
        end={end}
        duration={duration}
        delay={delay + 0.2}
        suffix={suffix}
        prefix={prefix}
        className={numberClassName}
      />
      <motion.div
        className={labelClassName}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.4 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}
