import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md border border-gray-200 bg-white dark:bg-[#0b1220] flex items-center gap-2"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
      <span className="text-xs hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
    