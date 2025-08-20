import React, { createContext, useState, useEffect } from 'react'
import uz from '../locales/uz'
import ru from '../locales/ru'
import en from '../locales/en'

export const LanguageContext = createContext()

const LOCALE_KEY = 'fs_lang'
const defaultLang = 'uz' // дефолт — узбекский

const locales = { uz, ru, en }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(defaultLang)

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_KEY)
    if (stored && locales[stored]) setLang(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALE_KEY, lang)
  }, [lang])

  const t = (key) => {
    // key: 'nav.about' etc.
    const parts = key.split('.')
    let cur = locales[lang] || {}
    for (const p of parts) {
      cur = cur?.[p]
      if (cur == null) return key // fallback: вернуть ключ
    }
    return cur
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
