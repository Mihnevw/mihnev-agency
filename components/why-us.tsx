"use client"

import { Shield, Clock, Users, TrendingUp, Award, Headphones, Target, Zap } from "lucide-react"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function WhyChooseUs() {
  const { t } = useTranslation()
  const reasons = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Доказан Опит",
      message: "Над 500 успешни проекта с измерими резултати и дългосрочни партньорства с водещи български компании.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Бързи Резултати",
      message: "Виждате първите подобрения в рамките на 30 дни, с пълна трансформация за 3-6 месеца.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Експертен Екип",
      message: "Работим с най-добрите специалисти в България с международен опит и сертификации.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Гарантиран Растеж",
      message: "Средно 200% увеличение на ефективността и приходите в първата година от сътрудничеството.",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Качество и Стандарти",
      message: "ISO сертифицирани процеси и международни стандарти за качество, адаптирани за българския пазар.",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Поддръжка",
      message: "Непрекъсната поддръжка на български език с гарантирано време за отговор под 4 часа.",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Персонализиран Подход",
      message: "Всяко решение е създадено специално за вашия бизнес и индустрия с фокус върху вашите цели.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Иновативни Технологии",
      message: "Използваме най-новите технологии и методологии за максимална ефективност и конкурентно предимство.",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40 dark:opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <MotionWrapper direction="up" className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Защо да Изберете Нас?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Открийте защо над 500 български компании се доверяват на нашия експертен опит и иновативни решения за
                трансформация на техния бизнес.
              </p>
            </motion.div>
          </MotionWrapper>

          {/* Reasons Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <StaggerItem key={index} direction="up">
                <motion.div
                  className={`${reason.bgColor} rounded-2xl p-6 lg:p-8 text-center h-full flex flex-col justify-center items-center space-y-4 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon with Gradient Background */}
                  <motion.div
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  >
                    {reason.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {reason.title}
                  </motion.h3>

                  {/* Message */}
                  <motion.p
                    className="text-slate-600 dark:text-slate-300 leading-relaxed text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {reason.message}
                  </motion.p>

                  {/* Decorative Element */}
                  <motion.div
                    className={`w-12 h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 48, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom CTA */}
          <MotionWrapper direction="up" delay={0.8} className="text-center mt-16">
            <motion.div
              className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-3xl p-8 lg:p-12 border border-emerald-200/50 dark:border-emerald-700/50"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t("Ready to Start Your Website Project?")}
              </motion.h3>
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t("Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.")}
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("Make an Inquiry")}
              </motion.button>
            </motion.div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
