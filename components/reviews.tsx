"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { MotionWrapper } from "@/components/motion-wrapper"
import { AnimatedNumberWithLabel, AnimatedPercentage } from "@/components/animated-counter"
import { motion } from "framer-motion"
import { useTranslation } from "@/lib/hooks/useTranslation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Reviews() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const reviews = [
    {
      name: "Мария Иванова",
      position: "Изпълнителен директор, ТехСтарт ООД",
      avatar: "/girl-1.jpg?height=80&width=80",
      rating: 5,
      text: "Абсолютно изключителна услуга! Те трансформираха нашата бизнес стратегия и ни помогнаха да постигнем растеж само за 2 месеца. Експертизата и отдадеността на екипа са несравними.",
      growthPercentage: 100,
      company: "ТехСтарт ООД",
      industry: "Технологии",
    },
    {
      name: "Георги Петров",
      position: "Основател, ГроуКо ЕООД",
      avatar: "/men-1.avif?height=80&width=80",
      rating: 5,
      text: "Работата с тях беше повратна точка. Техните стратегически прозрения и подкрепа при изпълнението ни помогнаха да се развием от стартъп до лидер на пазара. Горещо препоръчвам!",
      growthPercentage: 90,
      company: "ГроуКо ЕООД",
      industry: "Консултиране",
    },
    {
      name: "Елена Димитрова",
      position: "Директор, ИноватЛаб",
      avatar: "/girl-2.avif?height=80&width=80",
      rating: 5,
      text: "Професионални, надеждни и ориентирани към резултати. Те доставиха точно това, което обещаха и надминаха очакванията ни. Нашата възвръщаемост на инвестицията се увеличи в рамките на 4 месеца.",
      growthPercentage: 87,
      company: "ИноватЛаб",
      industry: "Иновации",
    },
    {
      name: "Димитър Тодоров",
      position: "Оперативен директор, СкейлТех",
      avatar: "/men-2.avif?height=80&width=80",
      rating: 5,
      text: "Най-добрата инвестиция, която сме правили за нашия бизнес. Тяхната програма за развитие на екипа подобри нашата продуктивност и създаде много по-добра работна култура.",
      growthPercentage: 96,
      company: "СкейлТех",
      industry: "Технологии",
    },
    {
      name: "Анна Стоянова",
      position: "Маркетинг директор, БрандПро",
      avatar: "/girl-3.jpg?height=80&width=80",
      rating: 5,
      text: "Изключително професионален подход и впечатляващи резултати. Те ни помогнаха да удвоим нашите продажби. Определено ще продължим сътрудничеството.",
      growthPercentage: 100,
      company: "БрандПро",
      industry: "Маркетинг",
    },
    {
      name: "Петър Николов",
      position: "Главен изпълнителен директор, ДигиталПлюс",
      avatar: "/men-3.avif?height=80&width=80",
      rating: 5,
      text: "Невероятен екип с дълбоки познания и практичен опит. Благодарение на тях успяхме да оптимизираме процесите си и да намалим разходите с 30%, като същевременно подобрихме качеството.",
      growthPercentage: 85,
      company: "ДигиталПлюс",
      industry: "Дигитални услуги",
    },
  ]

  const stats = [
    {
      number: 100,
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
      number: 90,
      label: t("Average ROI"),
      suffix: "%",
      delay: 0.4,
    },
    {
      number: 100,
      label: t("Support Available"),
      suffix: "%",
      delay: 0.6,
    },
  ]

  const nextSlide = () => {
    if (isMobile) {
      if (currentIndex < reviews.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      }
    } else {
      if (currentIndex < reviews.length - 3) {
        setCurrentIndex((prev) => prev + 1)
      }
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Calculate visible reviews (show 3 at a time on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const reviewsToShow = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length
      reviewsToShow.push({ ...reviews[index], displayIndex: i })
    }
    return reviewsToShow
  }

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40 dark:opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <MotionWrapper direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t("What Our Clients Say")}
            </h2>
            <div className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t(
                "Don't just take our word for it. Here's what business leaders say about working with us and the results they've achieved.",
              )}
            </div>
          </MotionWrapper>

          {/* Carousel Container */}
          <div className="relative mb-16">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`h-12 w-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-lg ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={isMobile ? currentIndex >= reviews.length - 1 : currentIndex >= reviews.length - 3}
                className={`h-12 w-12 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-lg ${
                  (isMobile ? currentIndex >= reviews.length - 1 : currentIndex >= reviews.length - 3) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Reviews Carousel */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `${-currentIndex * (isMobile ? 100 : 100 / 3)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl h-full border border-slate-100 dark:border-slate-700 shadow-sm"
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <Quote className="h-8 w-8 text-emerald-600/30 dark:text-emerald-400/30 mb-4" />
                      </motion.div>

                      {/* Review Text */}
                      <p className="text-slate-700 dark:text-slate-200 mb-6 text-lg leading-relaxed">{review.text}</p>

                      {/* Growth Percentage */}
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-6">
                        <span className="font-bold text-2xl">
                          <AnimatedPercentage end={review.growthPercentage} duration={2} delay={0.5} />
                        </span>
                        <span className="text-sm font-medium">растеж</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 0.5 + i * 0.1,
                              type: "spring",
                              stiffness: 500,
                              damping: 15,
                            }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 dark:text-yellow-500 fill-current" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={60}
                            height={60}
                            className="rounded-full border-2 border-emerald-100 dark:border-emerald-900"
                          />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">{review.name}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{review.position}</p>
                          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                            {review.industry}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.slice(0, isMobile ? reviews.length : reviews.length - 2).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-emerald-600 dark:bg-emerald-400 scale-125"
                      : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <MotionWrapper direction="up" delay={0.3}>
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
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
