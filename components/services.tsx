"use client"

import { ExternalLink, Target, Zap, Users } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { useRouter } from "next/navigation"

export default function Portfolio() {
  const { t } = useTranslation()
  const router = useRouter()

  const services = [
    {
      icon: <Target className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
      title: t("Website Development"),
      description: t("Custom websites and web applications tailored to your business needs and growth goals."),
      href: "/services/website-development"
    },
    {
      icon: <Zap className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
      title: t("Software Solutions"),
      description: t("Scalable software solutions that automate processes and boost your business efficiency."),
      href: "/services/software-solutions"
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />,
      title: t("Business Growth"),
      description: t("Digital strategies and tools that help small and medium businesses reach their full potential."),
      href: "/services/business-growth"
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <MotionWrapper direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("Our Services")}
            </h2>
            <div className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("Discover our comprehensive range of services designed to help your business thrive in the digital age.")}
            </div>
          </MotionWrapper>

          {/* Services Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index} direction="up">
                <motion.div
                  className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg group p-8"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0 }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                  <motion.button
                    onClick={() => router.push(service.href)}
                    className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span>{t("Learn More")}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                    >
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
