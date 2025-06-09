"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { AnimatedNumberWithLabel, AnimatedPercentage } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function Reviews() {
  const { t } = useTranslation()

  const reviews = [
    {
      name: "Мария Иванова",
      position: "Изпълнителен директор, ТехСтарт ООД",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Абсолютно изключителна услуга! Те трансформираха нашата бизнес стратегия и ни помогнаха да постигнем растеж само за 8 месеца. Експертизата и отдадеността на екипа са несравними.",
      growthPercentage: 100,
    },
    {
      name: "Георги Петров",
      position: "Основател, ГроуКо ЕООД",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Работата с тях беше повратна точка. Техните стратегически прозрения и подкрепа при изпълнението ни помогнаха да се развием от стартъп до лидер на пазара. Горещо препоръчвам!",
      growthPercentage: 90,
    },
    {
      name: "Елена Димитрова",
      position: "Директор, ИноватЛаб",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Професионални, надеждни и ориентирани към резултати. Те доставиха точно това, което обещаха и надминаха очакванията ни. Нашата възвръщаемост на инвестицията се увеличи в рамките на 6 месеца.",
      growthPercentage: 87,
    },
    {
      name: "Димитър Тодоров",
      position: "Оперативен директор, СкейлТех",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Най-добрата инвестиция, която сме правили за нашия бизнес. Тяхната програма за развитие на екипа подобри нашата продуктивност и създаде много по-добра работна култура.",
      growthPercentage: 96,
    },
  ]

  const stats = [
    {
      number: 500,
      label: t("Happy Clients"),
      suffix: "+",
      delay: 0,
    },
    {
      number: 98,
      label: t("Satisfaction Rate"),
      suffix: "%",
      delay: 0.2,
    },
    {
      number: 250,
      label: t("Average ROI"),
      suffix: "%",
      delay: 0.4,
    },
    {
      number: 24,
      label: t("Support Available"),
      suffix: "/7",
      delay: 0.6,
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <MotionWrapper direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("What Our Clients Say")}
            </h2>
            <div className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t("Don't just take our word for it. Here's what business leaders say about working with us and the results they've achieved.")}
            </div>
          </MotionWrapper>

          {/* Reviews Grid */}
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-16">
            {reviews.map((review, index) => (
              <StaggerItem key={index} direction="up">
                <motion.div
                  className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{review.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{review.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 dark:text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-emerald-600/20 dark:text-emerald-400/20 absolute -top-2 -left-2" />
                    <p className="text-slate-700 dark:text-slate-200 relative z-10">{review.text}</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <span className="font-semibold">
                      <AnimatedPercentage end={review.growthPercentage} duration={2} delay={0.5 + index * 0.2} />
                    </span>
                    <span className="text-sm">растеж</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Stats */}
          <MotionWrapper direction="up" delay={0.3}>
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-3xl p-8 md:p-12 text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      delay: stat.delay,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <AnimatedNumberWithLabel
                      end={stat.number}
                      label={stat.label}
                      suffix={stat.suffix}
                      duration={2.5}
                      delay={stat.delay}
                      numberClassName="text-3xl md:text-4xl font-bold mb-2 block"
                      labelClassName="text-emerald-100"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
