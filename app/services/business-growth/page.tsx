"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, Users, BarChart, Globe, Rocket } from "lucide-react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BusinessGrowth() {
  const { t } = useTranslation()
  const router = useRouter()

  const growthStrategies = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Digital Strategy"),
      description: t("Comprehensive digital transformation strategy to modernize your business operations."),
      features: [
        t("Market analysis"),
        t("Competitor research"),
        t("Growth opportunities identification"),
        t("Technology stack assessment"),
        t("Digital roadmap creation"),
        t("ROI projections"),
        t("Implementation timeline"),
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Marketing Automation"),
      description: t("Automated marketing solutions to reach and engage your target audience effectively."),
      features: [
        t("Email marketing automation"),
        t("Social media management"),
        t("Lead generation"),
        t("Customer segmentation"),
        t("Campaign analytics"),
        t("Content scheduling"),
        t("Performance tracking"),
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Customer Experience"),
      description: t("Enhanced customer experience strategies to improve satisfaction and retention."),
      features: [
        t("User journey mapping"),
        t("Feedback collection"),
        t("Service optimization"),
        t("Support automation"),
        t("Loyalty programs"),
        t("Customer analytics"),
        t("Satisfaction monitoring"),
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Business Intelligence"),
      description: t("Data-driven insights to make informed business decisions and identify growth opportunities."),
      features: [
        t("Performance analytics"),
        t("Market trends analysis"),
        t("Competitive intelligence"),
        t("Revenue optimization"),
        t("Growth forecasting"),
        t("Risk assessment"),
        t("Opportunity identification"),
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Market Expansion"),
      description: t("Strategies and tools for entering new markets and expanding your business reach."),
      features: [
        t("Market research"),
        t("Entry strategy"),
        t("Localization support"),
        t("Partnership development"),
        t("Risk mitigation"),
        t("Compliance management"),
        t("Growth planning"),
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Innovation & Scaling"),
      description: t("Innovation strategies and scaling solutions for sustainable business growth."),
      features: [
        t("Innovation assessment"),
        t("Technology adoption"),
        t("Process optimization"),
        t("Capacity planning"),
        t("Resource allocation"),
        t("Growth modeling"),
        t("Success metrics"),
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
              {t("Business Growth")}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("We help small and medium-sized businesses achieve sustainable growth through digital transformation and innovative strategies. Discover our growth solutions or contact us for a personalized strategy.")}
            </p>
          </motion.div>

          {/* Growth Strategies */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-12 text-center">
              {t("Growth Strategies")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {growthStrategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {strategy.icon}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {strategy.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {strategy.description}
                  </p>
                  <ul className="space-y-3">
                    {strategy.features.map((feature, featureIndex) => (
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