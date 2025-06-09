"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/hooks/useTranslation"

const COOKIE_CONSENT_KEY = "cookie-consent-status"

const COOKIE_MESSAGES = {
  DESCRIPTION: "Използваме бисквитки, за да подобрим вашето сърфиране, да предоставяме персонализирано съдържание и да анализираме нашия трафик.",
  ACCEPT: "Приемам всички",
  REJECT: "Само необходимите",
} as const

export default function CookieConsent() {
  const { t } = useTranslation()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consentStatus) {
      setShowBanner(true)
    }
  }, [])

  const handleConsent = (accepted: boolean) => {
    // Save user's choice
    localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? "accepted" : "rejected")
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-200 dark:border-slate-700"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-700 dark:text-slate-300 text-center md:text-left">
                <p className="text-sm">
                  {COOKIE_MESSAGES.DESCRIPTION}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  {COOKIE_MESSAGES.REJECT}
                </Button>
                <Button
                  onClick={() => handleConsent(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white whitespace-nowrap"
                >
                  {COOKIE_MESSAGES.ACCEPT}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 