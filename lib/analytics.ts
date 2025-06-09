// Google Analytics and tracking utilities

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "GA_MEASUREMENT_ID"

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag("js", new Date())
    window.gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions
export const trackConversion = (conversionId: string, value?: number, currency = "USD") => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
      value: value,
      currency: currency,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string, formData?: any) => {
  trackEvent("form_submit", "engagement", formName)

  // Track as conversion
  trackConversion("AW-CONVERSION_ID/CONVERSION_LABEL")

  // Custom conversion event
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "form",
      event_label: formName,
      value: 1,
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("click", "button", `${buttonName}_${location}`)
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll", "engagement", `${percentage}%`, percentage)
}

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent("timing_complete", "engagement", "time_on_page", seconds)
}

// Track section views (for scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent("section_view", "engagement", sectionName)
}

// Track CTA interactions
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent("cta_click", "conversion", `${ctaText}_${location}`)

  // Track as potential conversion
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "begin_checkout", {
      event_category: "cta",
      event_label: `${ctaText}_${location}`,
    })
  }
}

// Track portfolio item views
export const trackPortfolioView = (projectName: string) => {
  trackEvent("portfolio_view", "engagement", projectName)
}

// Track pricing plan interest
export const trackPricingInterest = (planName: string) => {
  trackEvent("pricing_interest", "conversion", planName)
}
