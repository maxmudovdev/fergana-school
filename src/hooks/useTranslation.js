import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    return { t: (k) => k, lang: 'uz', setLang: () => {} }
  }
  return { t: ctx.t, lang: ctx.lang, setLang: ctx.setLang }
}
