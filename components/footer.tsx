"use client"

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/hooks/useTranslation"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const sections = [
    { id: "about", label: t("About") },
    { id: "services", label: t("Services") },
    { id: "reviews", label: t("Reviews") },
    { id: "why-choose-us", label: t("Why Choose Us") },
    { id: "contact", label: t("Contact") },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Mihnev Agency</h3>
              <p className="text-slate-300 mb-6 max-w-md">
                {t("Footer Description")}
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/officialblackidea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 dark:bg-slate-800/50 p-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/stilian-mihnev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 dark:bg-slate-800/50 p-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/mihnevw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 dark:bg-slate-800/50 p-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("Quick Links")}</h4>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => handleSectionClick(e, section.id)}
                      className="text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t("Contact")}</h4>
              <div className="space-y-3">
                <a
                  href="mailto:stilianmihnev@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">stilianmihnev@gmail.com</span>
                </a>
                <a
                  href="tel:+359888888888"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm">+359 882851151</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">© {currentYear} Mihnev Agency. {t("All rights reserved")}.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t("Privacy Policy")}
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t("Terms of Service")}
                </Link>
                <Link href="/gdpr" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  {t("GDPR Compliance")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
