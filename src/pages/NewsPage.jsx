import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar } from 'react-icons/hi'
import useTranslation from '../hooks/useTranslation'
import newsData from '../data/news'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
}

export default function NewsPage() {
  const { t, lang } = useTranslation()

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-fsBlue text-sm font-semibold mb-4">
            {t('nav.news') || 'News'}
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            {t('nav.news') || 'News'}
          </h1>

          <p className="mt-4 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('news.pageDescription') ||
              'Следите за новостями, событиями и обновлениями Fergana School.'}
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {newsData.map((item, i) => (
            <motion.article
              key={item.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group rounded-[28px] overflow-hidden border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-none"
            >
              {/* image */}
              {item.image ? (
                <Link to={`/news/${item.id}`} className="block relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[lang] || item.title.en}
                    loading="lazy"
                    className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </Link>
              ) : (
                <div className="w-full h-56 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  {t('news.noImage') || 'No image'}
                </div>
              )}

              {/* content */}
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <HiCalendar />
                  {new Date(item.date).toLocaleDateString()}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title[lang] || item.title.en}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7 mb-5 line-clamp-3">
                  {item.excerpt[lang] || item.excerpt.en}
                </p>

                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-fsBlue font-semibold hover:gap-3 transition-all duration-200"
                >
                  {t('news.readMore') || 'Read more'}
                  <HiArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}