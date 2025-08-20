// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'
import photoHero from '../assets/img-1.jpg' // ваш файл изображения

export default function Hero() {
  const { t } = useTranslation()
  const bullets = t('hero.bullets') || []

  return (
    <section className="bg-gradient-to-r from-white via-gray-50 to-white dark:from-[#07102a] dark:via-[#07102a]">
      <div className="container grid md:grid-cols-2 gap-10 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-fsBlue dark:text-[#cfe0ff]">
            {t('hero.title')}
          </h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            {t('hero.description')}
          </p>

          <div className="mt-8 flex gap-4">
            {/* Кнопка теперь ведёт на /video */}
            <Link
              to="/video"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-fsBlue text-white font-semibold shadow hover:opacity-95"
            >
              {t('hero.ctaVideo') || 'Смотреть видео о школе'}
            </Link>

            {/* Вторая кнопка — остаётся переход к галерее (якорь) */}
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-gray-700 dark:text-gray-200 dark:border-gray-700"
            >
              {t('hero.ctaGallery')}
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {Array.isArray(bullets) && bullets.map((b, i) => (
              <span key={i} className="mr-4">• {b}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <img src={photoHero} alt={t('site.title')} className="w-full h-80 object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  )
}
