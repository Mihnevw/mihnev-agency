"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { trackButtonClick, trackCTAClick } from "@/lib/analytics"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { name: "Начало", id: "hero", label: "home" },
  { name: "За нас", id: "about", label: "about" },
  { name: "Услуги", id: "services", label: "services" },
  { name: "Защо нас", id: "why-choose-us", label: "why-choose-us" },
  { name: "Отзиви", id: "reviews", label: "reviews" },
  { name: "Контакт", id: "contact", label: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, resolvedTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine theme after mounting to avoid hydration mismatch
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      // Always show navbar at the top
      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  // Return a transparent navbar initially
  if (!mounted) {
    return (
      <nav className="fixed left-0 right-0 z-40 bg-transparent" style={{ top: "0px" }}>
        <div className="container mx-auto px-0 md:px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/mihnev-logo.png"
                  alt="Mihnev Agency Logo"
                  width={512}
                  height={512}
                  className="h-60 w-60 object-contain"
                  style={{ filter: 'invert(41%) sepia(94%) saturate(747%) hue-rotate(116deg) brightness(93%) contrast(92%)' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden initially */}
            <div className="hidden md:flex items-center space-x-8 opacity-0">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="font-medium transition-colors text-transparent"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Calculate offset based on navbar height and top bar
      const navbarHeight = isScrolled ? 64 : 96 // 96px when scrolled (24px * 4), 136px when not scrolled (includes top bar)
      const sectionPosition = section.offsetTop - navbarHeight

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
      })
    }
  }

  const handleNavigation = (sectionId: string, sectionName: string) => {
    trackButtonClick(`nav_${sectionName}`, "navbar")

    // Close mobile menu first
    setIsOpen(false)

    if (isHome) {
      // Add a small delay to allow the mobile menu to close smoothly
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  const handleCTAClick = () => {
    trackCTAClick("Get Started", "navbar")
    setIsOpen(false)

    if (isHome) {
      setTimeout(() => {
        scrollToSection("contact")
      }, 100)
    } else {
      router.push("/#contact")
    }
  }

  const handlePhoneClick = () => {
    trackButtonClick("phone_call", "navbar")
  }

  const handleEmailClick = () => {
    trackButtonClick("email_click", "navbar")
  }

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-emerald-600 dark:bg-emerald-800 text-white py-2 px-4 text-xs fixed w-full z-50"
        initial={{ y: -40 }}
        animate={{
          y: isVisible ? 0 : -100
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Phone className="h-4 w-4" />
              <a
                href="tel:+15551234567"
                onClick={handlePhoneClick}
                className="hover:text-emerald-200 transition-colors"
              >
                +359 882851151
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hello@yourservice.com"
                onClick={handleEmailClick}
                className="hover:text-emerald-200 transition-colors"
              >
                stilianmihnev@gmail.com
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-emerald-100">🎉 Безплатна консултация - ограничено време!</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={cn(
          "fixed left-0 right-0 z-40",
          isScrolled
            ? isDark
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
              : "bg-white/95 backdrop-blur-md shadow-lg"
            : isDark
              ? "bg-transparent"
              : "bg-white/80 backdrop-blur-sm"
        )}
        style={{
          top: isScrolled ? "20px" : "20px",
          transform: `translateY(${isVisible ? "0" : "-150%"})`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <div className="container mx-auto px-0 md:px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  <Image
                    src="/mihnev-logo.png"
                    alt="Mihnev Agency Logo"
                    width={512}
                    height={512}
                    className="h-52 w-52 object-contain"
                    style={{ filter: 'invert(41%) sepia(94%) saturate(747%) hue-rotate(116deg) brightness(93%) contrast(92%)' }}
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.id, item.label)}
                  className={cn(
                    "font-medium transition-colors hover:text-emerald-600",
                    mounted && isDark
                      ? isScrolled
                        ? "text-slate-200"
                        : "text-white"
                      : isScrolled
                        ? "text-slate-900"
                        : "text-slate-700"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    initial: { delay: 0.4 + index * 0.1, duration: 0.5 },
                    hover: { duration: 0 }
                  }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA and Theme Toggle */}
            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <ThemeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={handleCTAClick}
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Свържете се сега
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-md",
                  isScrolled
                    ? isDark
                      ? "text-white"
                      : "text-slate-900"
                    : isDark
                      ? "text-white"
                      : "text-slate-900"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-slate-800 border-t dark:border-slate-700 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.id, item.label)}
                    className="block w-full text-left py-2 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  className="pt-4 border-t dark:border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Button
                    onClick={handleCTAClick}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Свържете се сега
                  </Button>
                </motion.div>

                {/* Mobile Contact Info */}
                <motion.div
                  className="pt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a
                      href="tel:+15551234567"
                      onClick={handlePhoneClick}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      +359 888888888
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href="mailto:hello@yourservice.com"
                      onClick={handleEmailClick}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      stilianmihnev@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  )
}
