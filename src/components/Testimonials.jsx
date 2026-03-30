import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import useTranslation from '../hooks/useTranslation'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: 'easeOut',
    },
  }),
}

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join('')
}

export default function Testimonials() {
  const { t } = useTranslation()

  const rawItems = t('testimonials.items') || t('testimonials')

  let items = []
  if (Array.isArray(rawItems)) {
    items = rawItems
  } else if (rawItems && Array.isArray(rawItems.items)) {
    items = rawItems.items
  } else {
    items = [
      {
        name: `${t('site.title') || 'Fergana School'} Parent`,
        text: t('testimonials.sample1') || 'Great school!',
      },
      {
        name: 'Dilfuza',
        text:
          t('testimonials.sample2') ||
          'Прекрасные учителя и внимание к каждому ребёнку.',
      },
      {
        name: 'Mohira',
        text:
          t('testimonials.sample3') ||
          'Дети приходят домой вдохновлёнными.',
      },
    ]
  }

  return (
    <section className="relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-[28px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-none p-6 md:p-7 overflow-hidden"
            >
              {/* decorative gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50/60 via-transparent to-cyan-50/50 dark:from-blue-500/5 dark:to-cyan-500/5" />

              {/* quote icon */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/30 text-fsBlue dark:text-blue-200 flex items-center justify-center shadow-sm">
                  <FaQuoteLeft className="text-lg" />
                </div>

                <div className="text-5xl font-black text-gray-100 dark:text-white/5 select-none leading-none">
                  ”
                </div>
              </div>

              {/* text */}
              <div className="relative z-10 mt-5">
                <p className="text-[15px] md:text-base leading-7 text-gray-700 dark:text-gray-200">
                  {it.text}
                </p>
              </div>

              {/* footer */}
              <div className="relative z-10 mt-6 pt-5 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fsBlue to-cyan-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {getInitials(it.name)}
                </div>

                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {it.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t('site.title')}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}