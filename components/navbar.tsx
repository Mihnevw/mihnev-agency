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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const isDark = theme !== "light"
  const router = useRouter()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (sectionId: string, sectionName: string) => {
    trackButtonClick(`nav_${sectionName}`, "navbar")
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${sectionId}`)
    }
    setIsOpen(false)
  }

  const handleCTAClick = () => {
    trackCTAClick("Get Started", "navbar")
    if (isHome) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/#contact")
    }
    setIsOpen(false)
  }

  const handlePhoneClick = () => {
    trackButtonClick("phone_call", "navbar")
  }

  const handleEmailClick = () => {
    trackButtonClick("email_click", "navbar")
  }

  const navItems = [
    { name: "Начало", id: "hero", label: "home" },
    { name: "За нас", id: "about", label: "about" },
    { name: "Услуги", id: "services", label: "services" },
    { name: "Отзиви", id: "reviews", label: "reviews" },
    { name: "Защо нас", id: "why-choose-us", label: "why-choose-us" },
    { name: "Контакт", id: "contact", label: "contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="bg-emerald-600 dark:bg-emerald-800 text-white py-3 px-4 text-sm"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Phone className="h-4 w-4" />
              <a
                href="tel:+15551234567"
                onClick={handlePhoneClick}
                className="hover:text-emerald-200 transition-colors"
              >
                +359 888888888
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
              : "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        style={{ top: isScrolled ? "0" : "40px" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <motion.div
                  className="w-8 h-8 bg-emerald-600 dark:bg-emerald-500 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <span className="text-white font-bold text-lg">S</span>
                </motion.div>
                <span
                  className={cn(
                    "font-bold text-xl",
                    isDark ? "text-white" : "text-slate-900"
                  )}
                >
                  Mihnev Agency
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.id, item.label)}
                  className={`font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                    isScrolled
                      ? isDark
                        ? "text-slate-200"
                        : "text-slate-700"
                      : isDark
                        ? "text-white"
                        : "text-slate-900 hover:text-emerald-600"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
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
                className={`p-2 rounded-md ${isScrolled ? (isDark ? "text-white" : "text-slate-700") : "text-white"}`}
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

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-14"></div>
    </>
  )
}
