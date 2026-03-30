import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiCalendar } from 'react-icons/hi'
import useTranslation from '../hooks/useTranslation'
import newsData from '../data/news'

export default function NewsArticle() {
  const { id } = useParams()
  const { lang, t } = useTranslation()

  const item = newsData.find((n) => n.id === id)

  if (!item) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('news.notFound') || 'News not found'}
        </h2>

        <Link
          to="/news"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-fsBlue text-white font-semibold shadow hover:scale-105 transition"
        >
          <HiArrowLeft />
          {t('news.backToList')}
        </Link>
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4">

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-fsBlue transition"
          >
            <HiArrowLeft />
            {t('news.backToList')}
          </Link>
        </motion.div>

        {/* MAIN CARD */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
        >

          {/* IMAGE */}
          {item.image && (
            <div className="relative h-72 md:h-[420px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title[lang] || item.title.en}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          )}

          {/* CONTENT */}
          <div className="p-6 md:p-10">

            {/* DATE */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <HiCalendar />
              {new Date(item.date).toLocaleDateString()}
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              {item.title[lang] || item.title.en}
            </h1>

            {/* TEXT */}
            <div className="prose prose-lg max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
              <p className="leading-8">
                {item.content[lang] || item.content.en}
              </p>
            </div>

            {/* BOTTOM */}
            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">

              <Link
                to="/news"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                <HiArrowLeft />
                {t('news.backToList')}
              </Link>

              <span className="text-sm text-gray-400">
                Fergana School
              </span>
            </div>

          </div>
        </motion.article>
      </div>
    </section>
  )
}