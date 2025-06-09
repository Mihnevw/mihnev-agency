"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { trackButtonClick } from "@/lib/analytics"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    trackButtonClick(`theme_select_${newTheme}`, "navbar")
  }

  // Get the current theme icon based on the resolved theme
  const getCurrentThemeIcon = () => {
    if (theme === "system") {
      // For system theme, show the icon based on what the system actually resolves to
      return resolvedTheme === "dark" ? <Monitor className="h-4 w-4" /> : <Monitor className="h-4 w-4" />
    }

    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  // Get the current theme label for accessibility
  const getCurrentThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light theme active"
      case "dark":
        return "Dark theme active"
      case "system":
        return `System theme active (${resolvedTheme})`
      default:
        return "Theme selector"
    }
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 h-9">
          {getCurrentThemeIcon()}
          <span className="sr-only">{getCurrentThemeLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => handleThemeChange("light")} className="cursor-pointer">
          <Sun className="h-4 w-4 mr-2" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")} className="cursor-pointer">
          <Moon className="h-4 w-4 mr-2" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")} className="cursor-pointer">
          <Monitor className="h-4 w-4 mr-2" />
          <span>System</span>
          {theme === "system" && (
            <span className="ml-auto text-xs text-emerald-600 dark:text-emerald-400 font-medium">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
