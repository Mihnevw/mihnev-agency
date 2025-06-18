"use client"

import { CheckCircle } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { AnimatedNumberWithLabel, AnimatedPercentage } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import Image from "next/image"

export default function About() {
  const { t } = useTranslation()

  const benefits = [
    {
      text: t("Proven success with 500+ websites and applications delivered"),
      hasCounter: false,
    },
    {
      text: t("Specialized in helping SMBs achieve digital growth"),
      hasCounter: false,
    },
    {
      text: t("Custom solutions that fit your budget and goals"),
      hasCounter: false,
    },
    {
      text: t("Ongoing technical support with "),
      suffix: t("satisfaction rate"),
      counterValue: 99,
      hasCounter: true,
    },
    {
      text: t("Fast and reliable development with "),
      suffix: t("on-time delivery"),
      counterValue: 95,
      hasCounter: true,
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-0 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          {/* <MotionWrapper direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("Empowering SMBs Through Technology")}
            </h2>
          </MotionWrapper> */}

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <MotionWrapper direction="left">
              <div className="space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10"
                >
                  {t("About Us")}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  {t("About Agency Description")}
                </motion.p>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/about-us.webp"
                    alt="About Us"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </MotionWrapper>

            {/* Right side - Benefits */}
            <div>
              <StaggerContainer className="space-y-6">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index} direction="right">
                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-700 dark:text-slate-200">
                        {benefit.text}
                        {benefit.hasCounter && (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            <AnimatedPercentage
                              end={benefit.counterValue!}
                              duration={1.5}
                              delay={0.8 + index * 0.2}
                            />
                          </span>
                        )}
                        {benefit.hasCounter && benefit.suffix}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Stats Card */}
              <MotionWrapper direction="up" delay={0.3} className="mt-12">
                <motion.div
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="grid grid-cols-2 gap-8">
                    <AnimatedNumberWithLabel
                      end={98}
                      label={t("Client Satisfaction Rate")}
                      suffix="%"
                      duration={2}
                      delay={0.5}
                      numberClassName="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
                      labelClassName="text-slate-600 dark:text-slate-300"
                    />
                    <AnimatedNumberWithLabel
                      end={100}
                      label={t("Projects Completed")}
                      suffix="+"
                      duration={2.5}
                      delay={0.8}
                      numberClassName="text-4xl font-bold text-slate-900 dark:text-white mb-2"
                      labelClassName="text-slate-600 dark:text-slate-300"
                    />
                  </div>
                </motion.div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
