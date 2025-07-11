import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnalyticsProvider from "@/components/analytics-provider"
import Script from "next/script"
import { Suspense } from "react"
import { translations } from "@/lib/translations"
import CookieConsent from "@/components/cookie-consent"
import CrispChat from "@/components/crisp-chat"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: translations["Mihnev Agency | Експертни решения за вашия бизнес."],
  description: translations["Трансформирайте бизнеса си с нашите експертни услуги. Получете професионални решения, съобразени с вашите нужди. Свържете се с нас за безплатна консултация."],
  keywords: translations["професионални услуги, бизнес решения, консултации, експертни съвети."],
  openGraph: {
    title: translations["Mihnev Agency | Експертни решения за вашия бизнес."],
    description: translations["Трансформирайте бизнеса си с нашите експертни услуги. Получете професионални решения, съобразени с вашите нужди. Свържете се с нас за безплатна консултация."],
    type: "website",
  },
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="bg" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        {/* Google Analytics - Only load the gtag script, initialization handled by AnalyticsProvider */}
        {GA_TRACKING_ID && (
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
        )}

        {/* Google Ads Conversion Tracking */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
        )}

        {/* Facebook Pixel */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        <link rel="preconnect" href="https://client.crisp.chat" crossOrigin="anonymous" />
        <link rel="preload" href="https://client.crisp.chat/l.js" as="script" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnalyticsProvider>
            <Suspense fallback={null}>
              {children}
              <CookieConsent />
              <CrispChat />
            </Suspense>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
