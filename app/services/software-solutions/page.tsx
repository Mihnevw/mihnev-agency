"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Database, Cloud, Lock, Smartphone, Bot, BarChart, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SoftwareSolutions() {
  const { t } = useTranslation()
  const router = useRouter()

  const solutionTypes = [
    {
      icon: <Database className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Custom Business Software"),
      description: t("Tailored software solutions designed specifically for your business processes and needs."),
      image: "/software-1.jpg",
      imageAlt: "Software development and coding interface illustration",
      features: [
        t("Process automation"),
        t("Data management"),
        t("Reporting tools"),
        t("User access control"),
        t("Integration capabilities"),
        t("Scalable architecture"),
        t("Custom workflows"),
      ],
    },
    {
      icon: <Cloud className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Reservation Solution"),
      description: t("Cloud-based solutions for improved accessibility, scalability, and collaboration."),
      image: "/software-2.png",
      imageAlt: "Cloud application architecture and services",
      features: [
        t("Real-time data sync"),
        t("Multi-device access"),
        t("Automatic backups"),
        t("Team collaboration tools"),
        t("Resource optimization"),
        t("Elastic scaling"),
        t("High availability"),
      ],
    },
    // {
    //   icon: <Smartphone className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    //   title: t("Mobile Applications"),
    //   description: t("Native and cross-platform mobile apps for iOS and Android devices."),
    //   image: "/images/solutions/mobile-application.png",
    //   imageAlt: "Mobile application interfaces on different devices",
    //   features: [
    //     t("Cross-platform compatibility"),
    //     t("Offline functionality"),
    //     t("Push notifications"),
    //     t("Location services"),
    //     t("Secure data storage"),
    //     t("Performance optimization"),
    //     t("Analytics integration"),
    //   ],
    // },
    // {
    //   icon: <Bot className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    //   title: t("Automation Solutions"),
    //   description: t("Automated systems to streamline operations and increase efficiency."),
    //   image: "/images/solutions/automation-solution.png",
    //   imageAlt: "Business process automation workflow diagram",
    //   features: [
    //     t("Task automation"),
    //     t("Workflow optimization"),
    //     t("Integration with existing systems"),
    //     t("Custom triggers and actions"),
    //     t("Performance monitoring"),
    //     t("Error handling"),
    //     t("Audit trails"),
    //   ],
    // },
    // {
    //   icon: <Lock className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    //   title: t("Security Solutions"),
    //   description: t("Robust security implementations to protect your business data and operations."),
    //   image: "/images/solutions/security-solution.png",
    //   imageAlt: "Cybersecurity protection system visualization",
    //   features: [
    //     t("Access control"),
    //     t("Data encryption"),
    //     t("Security auditing"),
    //     t("Threat detection"),
    //     t("Compliance management"),
    //     t("Backup solutions"),
    //     t("Incident response"),
    //   ],
    // },
    // {
    //   icon: <BarChart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
    //   title: t("Analytics & Reporting"),
    //   description: t("Data analytics and reporting tools for informed decision-making."),
    //   image: "/images/solutions/analytics-dashboard.png",
    //   imageAlt: "Business analytics dashboard with charts and graphs",
    //   features: [
    //     t("Custom dashboards"),
    //     t("Real-time analytics"),
    //     t("Data visualization"),
    //     t("Automated reporting"),
    //     t("KPI tracking"),
    //     t("Trend analysis"),
    //     t("Export capabilities"),
    //   ],
    // },
  ]

  const scrollToContact = () => {
    router.push("/#contact")
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
                {t(
                  "We develop custom software solutions that automate processes, improve efficiency, and drive business growth. Explore our range of software services or contact us for a tailored solution.",
                )}
              </p>
            </motion.div>

            {/* Solution Types */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-12 text-center">
                {t("Solution Types")}
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                {solutionTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <Image
                        src={type.image || "/placeholder.svg"}
                        alt={type.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute z-20 bottom-0 left-0 p-4 text-white">
                        <h1 className="text-2xl font-bold bg-gradient-to-r text-white dark:text-white bg-clip-text text-transparent drop-shadow">
                          {type.title}
                        </h1>
                      </div>
                      <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                        <div className="text-center">
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-block mb-4"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {type.icon}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">{type.description}</p>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                        {t("Key Features")}:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                            <div className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        className="mt-4 text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => scrollToContact()}
                      >
                        {t("Learn More")}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-20 mb-16"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                {t("Why Choose Our Software Solutions")}
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: t("Customized for Your Business"),
                    description: t("We develop solutions tailored specifically to your unique business requirements."),
                  },
                  {
                    step: "02",
                    title: t("Scalable Architecture"),
                    description: t("Our solutions grow with your business, adapting to changing needs over time."),
                  },
                  {
                    step: "03",
                    title: t("Cutting-Edge Technology"),
                    description: t("We use the latest technologies and best practices to ensure optimal performance."),
                  },
                  {
                    step: "04",
                    title: t("Ongoing Support"),
                    description: t(
                      "We provide continuous maintenance and support to keep your software running smoothly.",
                    ),
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold text-emerald-600/20 dark:text-emerald-400/20 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{phase.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{phase.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-12 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t("Ready to Start Your Software Project?")}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                {t(
                  "Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.",
                )}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  {t("Make an Inquiry")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
