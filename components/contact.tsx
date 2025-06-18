"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { AnimatedNumberWithLabel, AnimatedPercentage } from "@/components/animated-counter"
import { trackCTAClick } from "@/lib/analytics"
import { useTranslation } from "@/lib/hooks/useTranslation"

// Translation keys for form messages
const FORM_MESSAGES = {
	ERROR: "Please enter a valid email address.",
	SUCCESS: "Thank you! Your message was sent successfully.",
	SENDING: "Sending...",
	CONFIRMATION: "Confirmation",
	PHONE_ERROR: "Телефонният номер трябва да е точно 10 цифри.",
} as const

export default function Contact() {
	const { t } = useTranslation()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState("")
	const [phoneError, setPhoneError] = useState("")

	const validatePhone = (phone: string): boolean => {
		if (!phone) return true // Phone is optional
		const phoneRegex = /^\d{10}$/
		return phoneRegex.test(phone)
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		// Validate phone if provided
		if (formData.phone && !validatePhone(formData.phone)) {
			setPhoneError(FORM_MESSAGES.PHONE_ERROR)
			return
		}

		setStatus("submitting")
		setErrorMessage("")
		setPhoneError("")

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				throw new Error("Failed to send message")
			}

			setStatus("success")
			trackCTAClick("Contact Form Submit", "contact")

			// Reset form after successful submission
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			})

			// Reset success message after 5 seconds
			setTimeout(() => {
				setStatus("idle")
			}, 5000)
		} catch (error) {
			console.error("Error submitting form:", error)
			setStatus("error")
			setErrorMessage(t(FORM_MESSAGES.ERROR))
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))

		// Clear phone error when user starts typing
		if (name === 'phone') {
			setPhoneError("")
		}
	}

	const contactInfo = [
		{
			icon: <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
			title: t("Email"),
			content: "stilianmihnev@gmail.com",
			delay: 0.1,
		},
		{
			icon: <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
			title: t("Phone"),
			content: "+359 882851151",
			delay: 0.2,
		},
		{
			icon: <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
			title: t("Office"),
			content: (
				<>
					Sliven, Bulgaria
				</>
			),
			delay: 0.3,
		},
	]

	return (
		<section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-[100px]">
			<div className="container mx-auto px-0 md:px-4">
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<MotionWrapper direction="up" className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
							{t("Ready to Transform Your Business?")}
						</h2>
						<div className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
							{t("Get in touch today for a free consultation. We'll discuss your goals and create a custom strategy to help you achieve exceptional results. Our clients see an average of")}{" "}
							<span className="text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center gap-2">
								<AnimatedPercentage end={90} duration={2} delay={0.5} /> {t("growth")}
							</span>{" "}
							{t("within the first year.")}
						</div>
					</MotionWrapper>

					{/* Contact Grid */}
					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Form */}
						<MotionWrapper direction="left">
							<motion.div
								className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg relative"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<AnimatePresence>
									{status === "success" && (
										<motion.div
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-slate-800/95 rounded-2xl z-10"
										>
											<div className="text-center p-8">
												<CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
												<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
													{t(FORM_MESSAGES.SUCCESS)}
												</h3>
												<p className="text-slate-600 dark:text-slate-300">
													{t(FORM_MESSAGES.CONFIRMATION)}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
										>
											{t("Name")} *
										</label>
										<Input
											id="name"
											name="name"
											placeholder={t("Your name")}
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full"
											disabled={status === "submitting"}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
										>
											{t("Email Address")} *
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder={t("Your email")}
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full"
											disabled={status === "submitting"}
										/>
									</div>
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
										>
											{t("Phone Number")} *
										</label>
										<div className="relative">
											<Input
												id="phone"
												name="phone"
												type="tel"
												placeholder={t("Your phone")}
												value={formData.phone}
												onChange={handleChange}
												className={`w-full ${phoneError ? 'border-red-500 dark:border-red-400' : ''}`}
												disabled={status === "submitting"}
												required
											/>
											{phoneError && (
												<>
													<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
														<AlertCircle className="h-5 w-5 text-red-500" />
													</div>
													<p className="mt-2 text-sm text-red-600 dark:text-red-400">{phoneError}</p>
												</>
											)}
										</div>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
										>
											{t("Message")} *
										</label>
										<Textarea
											id="message"
											name="message"
											placeholder={t("Your message")}
											value={formData.message}
											onChange={handleChange}
											required
											className="w-full min-h-[120px]"
											disabled={status === "submitting"}
										/>
									</div>

									{status === "error" && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											className="flex items-center gap-2 text-red-600 dark:text-red-400"
										>
											<AlertCircle className="h-5 w-5" />
											<span>{errorMessage}</span>
										</motion.div>
									)}

									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										transition={{ type: "spring", stiffness: 400, damping: 17 }}
									>
										<Button
											type="submit"
											className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold"
											disabled={status === "submitting"}
										>
											{status === "submitting" ? t(FORM_MESSAGES.SENDING) : t("Send Message")}
										</Button>
									</motion.div>
								</form>

								<p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
									{t("* Required fields. We respect your privacy and will never share your information.")}
								</p>
							</motion.div>
						</MotionWrapper>

						{/* Contact Information */}
						<MotionWrapper direction="right" delay={0.4}>
							<div className="space-y-8">
								<div>
									<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t("Get in touch")}</h3>
									<p className="text-slate-600 dark:text-slate-300 mb-8">
										{t("Ready to take your business to the next level? We're here to help. Reach out through any of the channels below or fill out the contact form.")}
									</p>
								</div>

								<StaggerContainer className="space-y-6">
									{contactInfo.map((item, index) => (
										<StaggerItem key={index} direction="right">
											<motion.div
												className="flex items-start gap-4"
												whileHover={{ x: 5 }}
												transition={{ type: "spring", stiffness: 300, damping: 20 }}
											>
												<div className="bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-xl">
													{item.icon}
												</div>
												<div>
													<h4 className="font-bold text-slate-900 dark:text-white mb-1">
														{item.title}
													</h4>
													<p className="text-slate-600 dark:text-slate-300">{item.content}</p>
												</div>
											</motion.div>
										</StaggerItem>
									))}
								</StaggerContainer>

								<motion.div
									className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl"
									whileHover={{ scale: 1.03 }}
									transition={{ type: "spring", stiffness: 300, damping: 20 }}
								>
									<h4 className="font-bold text-slate-900 dark:text-white mb-2">{t("Quick Response Guarantee")}</h4>
									<div className="text-slate-600 dark:text-slate-300 text-sm">
										<span>{t("We typically respond to all inquiries within")} </span>
										<AnimatedNumberWithLabel
											end={2}
											label={t("hours")}
											duration={1}
											delay={0.8}
											numberClassName="font-bold text-emerald-600 dark:text-emerald-400"
											labelClassName="text-slate-600 dark:text-slate-300"
										/>
										<span> {t("during business hours. For urgent matters, please call us directly.")}</span>
									</div>
								</motion.div>
							</div>
						</MotionWrapper>
					</div>
				</div>
			</div>
		</section>
	)
}
