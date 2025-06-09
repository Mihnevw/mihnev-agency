"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Database, Cloud, Lock, Smartphone, Bot, BarChart } from "lucide-react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SoftwareSolutions() {
  const { t } = useTranslation()
  const router = useRouter()

  const solutionTypes = [
    {
      icon: <Database className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Custom Business Software"),
      description: t("Tailored software solutions designed specifically for your business processes and needs."),
      features: [
        t("Process automation"),
        t("Data management"),
        t("Reporting tools"),
        t("User access control"),
        t("Integration capabilities"),
        t("Scalable architecture"),
        t("Custom workflows"),
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Cloud Applications"),
      description: t("Cloud-based solutions for improved accessibility, scalability, and collaboration."),
      features: [
        t("Real-time data sync"),
        t("Multi-device access"),
        t("Automatic backups"),
        t("Team collaboration tools"),
        t("Resource optimization"),
        t("Elastic scaling"),
        t("High availability"),
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Mobile Applications"),
      description: t("Native and cross-platform mobile apps for iOS and Android devices."),
      features: [
        t("Cross-platform compatibility"),
        t("Offline functionality"),
        t("Push notifications"),
        t("Location services"),
        t("Secure data storage"),
        t("Performance optimization"),
        t("Analytics integration"),
      ]
    },
    {
      icon: <Bot className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Automation Solutions"),
      description: t("Automated systems to streamline operations and increase efficiency."),
      features: [
        t("Task automation"),
        t("Workflow optimization"),
        t("Integration with existing systems"),
        t("Custom triggers and actions"),
        t("Performance monitoring"),
        t("Error handling"),
        t("Audit trails"),
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Security Solutions"),
      description: t("Robust security implementations to protect your business data and operations."),
      features: [
        t("Access control"),
        t("Data encryption"),
        t("Security auditing"),
        t("Threat detection"),
        t("Compliance management"),
        t("Backup solutions"),
        t("Incident response"),
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Analytics & Reporting"),
      description: t("Data analytics and reporting tools for informed decision-making."),
      features: [
        t("Custom dashboards"),
        t("Real-time analytics"),
        t("Data visualization"),
        t("Automated reporting"),
        t("KPI tracking"),
        t("Trend analysis"),
        t("Export capabilities"),
      ]
    },
  ]

  const scrollToContact = () => {
    router.push('/#contact')
  }

  return (
    <>
    <Navbar />
    <div className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t("Software Solutions")}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("We develop custom software solutions that automate processes, improve efficiency, and drive business growth. Explore our range of software services or contact us for a tailored solution.")}
            </p>
          </motion.div>

          {/* Solution Types */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-12 text-center">
              {t("Solution Types")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {solutionTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {type.icon}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              onClick={scrollToContact}
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              {t("Make an Inquiry")}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
} 