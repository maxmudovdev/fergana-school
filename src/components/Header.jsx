// src/components/Header.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import useTranslation from '../hooks/useTranslation'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const links = [
    { to: '/', label: t('nav.home') || t('site.title') },
    { to: '/video', label: t('nav.video') || 'Video' },
    { to: '/news', label: t('nav.news') || 'News' },
    { to: '/#gallery', label: t('nav.gallery') || 'Gallery' } // anchor fallback
  ]

  return (
    <header className="bg-white dark:bg-[#07102a] shadow-sm sticky top-0 z-30">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-20">
            <img src={logo} alt="Fergana School logo" className="w-full h-auto" />
        </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('site.title')}</h1>
            <p className="text-xs text-fsGray dark:text-gray-400">{t('site.subtitle')}</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-fsBlue font-semibold' : 'text-gray-600 dark:text-gray-300'} hover:text-fsBlue transition`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button onClick={() => setOpen(true)} aria-label="Открыть меню" className="p-2 rounded-md border border-gray-100 dark:border-gray-700">
            <HiMenu size={22} className="text-gray-700 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* Mobile slide-over */}
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/30">
          <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-[#07102a] p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-fsBlue to-fsGreen text-white flex items-center justify-center font-bold">FS</div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">Fergana School</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Частная школа</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Закрыть меню" className="p-2 rounded-md border border-gray-100 dark:border-gray-700">
                <HiX size={20} className="text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200 font-medium py-2">
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 flex items-center justify-between">
              <div><LanguageSwitcher /></div>
              <div><ThemeToggle /></div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </header>
  )
}
