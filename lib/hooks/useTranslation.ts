import { translations } from '../translations'

export function useTranslation() {
  const t = (key: keyof typeof translations): string => {
    return translations[key] || key
  }

  return { t }
} 