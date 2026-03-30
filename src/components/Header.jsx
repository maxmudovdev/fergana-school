import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import useTranslation from '../hooks/useTranslation'
import logo from '../assets/logo.png'

const navContainer = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.06,
    },
  },
}

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGalleryClick = (e) => {
    e.preventDefault()

    if (location.pathname === '/') {
      const section = document.getElementById('gallery')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/#gallery')
    }

    setOpen(false)
  }

  const links = useMemo(
    () => [
      { to: '/', label: t('nav.home') || t('site.title') },
      { to: '/video', label: t('nav.video') || 'Video' },
      { to: '/news', label: t('nav.news') || 'News' },
      { to: '/schedule', label: t('nav.schedule') || 'Schedule' },
      { to: '#gallery', label: t('nav.gallery') || 'Gallery', isGallery: true },
    ],
    [t]
  )

  return (
    <motion.header
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor:
            theme === 'dark'
              ? isScrolled
                ? 'rgba(7,16,42,0.94)'
                : 'rgba(7,16,42,0.88)'
              : isScrolled
                ? 'rgba(255,255,255,0.96)'
                : 'rgba(255,255,255,0.92)',
          boxShadow: isScrolled
            ? '0 16px 50px rgba(0,0,0,0.10)'
            : '0 8px 30px rgba(0,0,0,0.04)',
        }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 border-b border-gray-200/70 dark:border-white/5 backdrop-blur-xl"
      />

      <div className="relative container mx-auto px-4">
        <motion.div
          animate={{
            paddingTop: isScrolled ? 10 : 16,
            paddingBottom: isScrolled ? 10 : 16,
          }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-between gap-3"
        >
          {/* LEFT */}
          <motion.div variants={navItem} className="min-w-0 flex-1">
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1 group">
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  y: [0, -3, 0],
                  width: isScrolled ? 48 : 64,
                  height: isScrolled ? 48 : 64,
                }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                  width: { duration: 0.25 },
                  height: { duration: 0.25 },
                }}
                whileHover={{ rotate: 8, scale: 1.06 }}
                className="relative shrink-0 sm:w-20 sm:h-20"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 via-cyan-100/40 to-indigo-200/50 dark:from-blue-500/20 dark:via-cyan-400/10 dark:to-indigo-500/20 blur-md scale-110" />

                <div className="relative w-full h-full rounded-full border border-white/60 dark:border-gray-700/80 bg-white/90 dark:bg-[#0b1736]/90 shadow-lg overflow-hidden flex items-center justify-center">
                  <motion.img
                    src={logo}
                    alt="Fergana School logo"
                    className="w-full h-full object-contain p-1.5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                  />
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-1 rounded-full border border-dashed border-blue-300/40 dark:border-blue-400/20"
                />
              </motion.div>

              <div className="min-w-0 overflow-hidden">
                <motion.h1
                  animate={{
                    fontSize: isScrolled ? '1rem' : '1.25rem',
                  }}
                  transition={{ duration: 0.25 }}
                  className="font-black tracking-tight text-gray-900 dark:text-white leading-tight truncate max-w-[150px] sm:max-w-[220px] md:max-w-none md:text-[1.8rem]"
                >
                  {t('site.title')}
                </motion.h1>

                <motion.p
                  animate={{
                    fontSize: isScrolled ? '0.72rem' : '0.9rem',
                    opacity: isScrolled ? 0.9 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="hidden sm:block text-gray-500 dark:text-gray-400 truncate"
                >
                  {t('site.subtitle')}
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <motion.nav
            variants={navItem}
            className="hidden lg:flex items-center gap-2 xl:gap-3"
          >
            <motion.div
              animate={{
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
              }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-1.5 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md px-2 shadow-sm"
            >
              {links.map((link) =>
                link.isGallery ? (
                  <button
                    key={link.to}
                    onClick={handleGalleryClick}
                    className="px-4 py-2 rounded-xl text-sm xl:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-fsBlue hover:bg-white dark:hover:bg-white/10 transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl text-sm xl:text-base font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-fsBlue bg-blue-50 dark:bg-blue-950/30 shadow-sm'
                          : 'text-gray-600 dark:text-gray-300 hover:text-fsBlue hover:bg-white dark:hover:bg-white/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </motion.div>

            <motion.div
              animate={{
                paddingTop: isScrolled ? 6 : 8,
                paddingBottom: isScrolled ? 6 : 8,
              }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 ml-3 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md px-3 shadow-sm"
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </motion.div>
          </motion.nav>

          {/* MOBILE */}
          <motion.div
            variants={navItem}
            className="lg:hidden flex items-center gap-2 shrink-0"
          >
            <div className="rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md px-2 py-1.5 shadow-sm">
              <LanguageSwitcher />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2.5 rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/85 dark:bg-[#0b1736]/90 backdrop-blur-md shadow-sm shrink-0"
            >
              <HiMenu size={22} className="text-gray-700 dark:text-gray-200" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/45 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%', opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white/95 dark:bg-[#07102a]/95 backdrop-blur-2xl border-l border-gray-200/70 dark:border-white/10 shadow-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="flex items-center gap-3 min-w-0">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-14 h-14 shrink-0"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 via-cyan-100/40 to-indigo-200/50 dark:from-blue-500/20 dark:via-cyan-400/10 dark:to-indigo-500/20 blur-md scale-110" />
                    <div className="relative w-full h-full rounded-full bg-white dark:bg-[#0b1736] border border-gray-200 dark:border-gray-700 overflow-hidden flex items-center justify-center">
                      <img
                        src={logo}
                        alt="Fergana School logo"
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                  </motion.div>

                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                      {t('site.title')}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t('site.subtitle')}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-white/5"
                >
                  <HiX size={20} className="text-gray-700 dark:text-gray-200" />
                </motion.button>
              </div>

              <div className="mb-6 rounded-3xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-2 backdrop-blur-md shadow-sm">
                <nav className="flex flex-col gap-1">
                  {links.map((link) =>
                    link.isGallery ? (
                      <button
                        key={link.to}
                        onClick={handleGalleryClick}
                        className="w-full text-left px-4 py-3 rounded-2xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `px-4 py-3 rounded-2xl text-base font-medium transition ${
                            isActive
                              ? 'bg-blue-50 text-fsBlue dark:bg-blue-950/30'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )
                  )}
                </nav>
              </div>

              <div className="mt-auto rounded-3xl border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 backdrop-blur-md shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}