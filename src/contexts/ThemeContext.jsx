import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

const THEME_KEY = 'fs_theme'
const defaultTheme = 'light' // дефолт — светлая

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored)
    } else {
      setTheme(defaultTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
