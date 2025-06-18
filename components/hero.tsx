"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useState, useEffect } from "react"
import { trackCTAClick, trackButtonClick } from "@/lib/analytics"
import { motion, AnimatePresence } from "framer-motion"
import { MotionWrapper } from "@/components/motion-wrapper"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const { t } = useTranslation()

  const rotatingTexts = [
    t("Expert Solutions"),
    t("Digital Innovation"),
    t("Business Growth"),
    t("Creative Design")
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -50,
      opacity: 0
    }
  }

  const scrollToContact = () => {
    trackCTAClick("Send Inquiry", "hero")
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    trackButtonClick("Our Services", "hero")
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  // const handleWatchDemo = () => {
  //   trackButtonClick("Watch Demo", "hero")
  //   setIsVideoPlaying(true)
  // }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40 dark:opacity-10"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-0 md:px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper delay={0.2} direction="fade">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-full text-sm font-medium mb-4">
                {t("Trusted by 500+ Businesses")}
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              {t("Transform Your Business with")}
              <div className="h-[1.2em] relative overflow-hidden mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.5 
                    }}
                    className="text-emerald-600 dark:text-emerald-400 absolute w-full left-0 right-0 text-center block"
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.6} direction="up">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("We deliver professional services that drive real results. From strategy to execution, we're your partner in achieving exceptional growth and success.")}
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.8} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Изпрати Запитване
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={scrollToServices}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Нашите Услуги
                </Button>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* Trust Indicators */}
          <MotionWrapper delay={1.0} direction="up">
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 dark:text-slate-400 text-sm">
              {[t("Free Consultation"), t("24/7 Support"), t("Money-Back Guarantee")].map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: index * 0.3 }}
                  />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 dark:bg-emerald-900 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}
