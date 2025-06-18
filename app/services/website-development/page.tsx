"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Building2, Newspaper, Store, Users, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function WebsiteDevelopment() {
  const { t } = useTranslation()
  const router = useRouter()

  const websiteTypes = [
    {
      icon: <Store className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("E-commerce Website"),
      description: t(
        "Full-featured online store with secure payment processing, user accounts, shopping cart, and inventory management.",
      ),
      image: "/e-commers.webp",
      imageAlt: "E-commerce website interface showing product listings and shopping cart",
      features: [
        t("Secure payment gateway integration"),
        t("User profiles and authentication"),
        t("Shopping cart functionality"),
        t("Order management system"),
        t("Product catalog with categories"),
        t("Email notifications"),
        t("Inventory tracking"),
      ],
      color: "from-emerald-400 to-lime-400",
    },
    {
      icon: <Building2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Company website"),
      description: t(
        "Professional business presence with modern design and essential features for company presentation.",
      ),
      image: "/business.png",
      imageAlt: "Professional business website with company information and services",
      features: [
        t("Responsive modern design"),
        t("Service/Product showcase"),
        t("Contact forms"),
        t("About us section"),
        t("Team presentation"),
        t("Portfolio gallery"),
        t("Social media integration"),
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Newspaper className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Blog/News Website"),
      description: t("Content-focused website with easy content management and reader engagement features."),
      image: "/blog.png",
      imageAlt: "Blog website showing articles and content categories",
      features: [
        t("Content management system"),
        t("Category organization"),
        t("Comment system"),
        t("Search functionality"),
        t("Social sharing"),
        t("Newsletter integration"),
        t("RSS feeds"),
      ],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      title: t("Business card website"),
      description: t("Interactive platform for community building and user engagement."),
      image: "/card.jpg",
      imageAlt: "Social platform interface showing user profiles and activity feed",
      features: [
        t("User profiles"),
        t("Activity feeds"),
        t("Private messaging"),
        t("Group creation"),
        t("Content sharing"),
        t("Notification system"),
        t("Member directory"),
      ],
      color: "from-orange-500 to-red-600",
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
                {t("Website Development")}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {t(
                  "We create custom websites tailored to your specific needs. Choose from our range of specialized website types or contact us for a custom solution.",
                )}
              </p>
            </motion.div>

            {/* Website Types */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-12 text-center">
                {t("Website Types")}
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                {websiteTypes.map((type, index) => (
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
                        src={type.image || "/placeholder.svg"}
                        alt={type.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute z-20 bottom-0 left-0 p-4 text-white">
                        <h1 className="text-2xl font-bold bg-gradient-to-r text-white dark:text-white bg-clip-text text-transparent drop-shadow">{type.title}</h1>
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
                          {/* <h3 className="text-3xl font-bold bg-gradient-to-r text-black dark:text-white bg-clip-text text-transparent drop-shadow">{type.title}</h3> */}
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
                {t("Why should we make your website")}
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: t("Responsive design for all devices"),
                    description: t("We create a design that automatically optimizes for the device it is viewed on."),
                  },
                  {
                    step: "02",
                    title: t("Multi-language support"),
                    description: t("Integration of a second language module on your website."),
                  },
                  {
                    step: "03",
                    title: t("SEO"),
                    description: t("SEO optimization from the start."),
                  },
                  {
                    step: "04",
                    title: t("Next generation technologies."),
                    description: t("All websites created by us are built with the most modern technologies."),
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
              {t("Ready to Start Your Website Project?")}
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
