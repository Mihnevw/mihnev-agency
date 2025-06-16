"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

declare global {
  interface Window {
    $crisp: any[]
    CRISP_WEBSITE_ID: string
    CRISP_RUNTIME_CONFIG: {
      session_merge: boolean
      socket_timeout: number
      locale: string
    }
  }
}

export default function CrispChat() {
  const { theme } = useTheme()

  useEffect(() => {
    // Initialize Crisp with optimized configuration
    window.$crisp = []
    window.CRISP_WEBSITE_ID = "6c9c3603-cd61-483b-b54a-cc2d295f21a3"
    
    // Add runtime configuration for better performance
    window.CRISP_RUNTIME_CONFIG = {
      session_merge: true,
      socket_timeout: 5000, // Reduced timeout for faster connection
      locale: "bg"
    }

    // Load Crisp script with high priority
    const loadCrisp = () => {
      const script = document.createElement("script")
      script.src = "https://client.crisp.chat/l.js"
      script.async = true
      script.setAttribute("importance", "high") // Priority hint
      document.head.appendChild(script)

      // Configure as soon as script loads
      script.onload = () => {
        // Initial configuration
        window.$crisp.push([
          "safe", true // Enable safe mode for better stability
        ])

        window.$crisp.push([
          "config", "position:left"
        ])

        // Set language to Bulgarian
        window.$crisp.push([
          "set", "user:locale", "bg"
        ])

        // Set color to match website theme (emerald-600: #059669)
        window.$crisp.push([
          "set", "website:theme", theme === "dark" ? "dark" : "default:dark"
        ])

        // Set welcome message with a slight delay to ensure chat is ready
        setTimeout(() => {
          window.$crisp.push([
            "do", "message:show", ["text", "Здравейте! 👋 Как мога да Ви помогна днес?"]
          ])
        }, 1000)
      }
    }

    // Load Crisp immediately
    loadCrisp()

    // Cleanup function
    return () => {
      // Remove Crisp on component unmount if needed
      if (window.$crisp) {
        window.$crisp.push(["do", "chat:hide"])
      }
    }
  }, []) // Remove theme dependency to prevent reinitialization

  // Handle theme changes separately
  useEffect(() => {
    if (window.$crisp) {
      window.$crisp.push([
        "set", "website:theme", theme === "dark" ? "dark" : "default:dark"
      ])
    }
  }, [theme])

  return null
} 