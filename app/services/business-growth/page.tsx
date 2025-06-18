"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Target,
  Users,
  BarChart,
  Zap,
  Shield,
  ArrowRight,
  FileText,
  Search,
  Lightbulb,
  CheckCircle,
  Globe,
  Rocket,
} from "lucide-react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { NotificationStack } from "@/components/notification"

export default function BusinessGrowth() {
  const { t } = useTranslation()
  const router = useRouter()

  const growthStrategies = [
    {
      icon: <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Marketing Automation"),
      description: t("Automated marketing solutions to reach and engage your target audience effectively."),
      image: "/digital-2.jpg",
      imageAlt: "Marketing automation dashboard with campaign management",
      features: [
        t("Email marketing automation"),
        t("Social media management"),
        t("Lead generation"),
        t("Customer segmentation"),
        t("Campaign analytics"),
        t("Content scheduling"),
        t("Performance tracking"),
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Customer Experience"),
      description: t("Enhanced customer experience strategies to improve satisfaction and retention."),
      image: "/digital-3.webp",
      imageAlt: "Customer journey mapping and experience optimization",
      features: [
        t("User journey mapping"),
        t("Feedback collection"),
        t("Service optimization"),
        t("Support automation"),
        t("Loyalty programs"),
        t("Customer analytics"),
        t("Satisfaction monitoring"),
      ],
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/#contact');
    }
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
                {t("Business Growth")}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t(
                  "We help small and medium-sized businesses achieve sustainable growth through digital transformation and innovative strategies. Discover our growth solutions or contact us for a personalized strategy.",
                )}
              </p>
            </motion.div>

            {/* Growth Strategies */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-12 text-center">
                {t("Growth Strategies")}
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                {growthStrategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.2,
                      opacity: { duration: 0.5, delay: 0.2 + index * 0.1 }
                    }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl border border-slate-100 dark:border-slate-700"
                    whileHover={{
                      scale: 1.00,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <Image
                        src={strategy.image || "/placeholder.svg"}
                        alt={strategy.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute z-20 bottom-0 left-0 p-4 text-white">
                        <h1 className="text-2xl font-bold bg-gradient-to-r text-white dark:text-white bg-clip-text text-transparent drop-shadow">
                          {strategy.title}
                        </h1>
                      </div>
                      <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                        <div className="text-center">
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm p-4 rounded-full inline-block mb-4"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {strategy.icon}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg">{strategy.description}</p>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-4">
                        {t("Key Features")}:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {strategy.features.map((feature, featureIndex) => (
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


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-12 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t("Ready to Accelerate Your Business Growth?")}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                {t(
                  "Contact us today for a free growth consultation and discover how we can help your business reach new heights.",
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
        <NotificationStack />
      </div>
      <Footer />
    </>
  )
}
