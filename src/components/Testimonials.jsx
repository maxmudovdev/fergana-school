// src/components/Testimonials.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import useTranslation from '../hooks/useTranslation'

export default function Testimonials() {
  const { t } = useTranslation()

  // Попробуем получить testimonials из локали
  const rawItems = t('testimonials.items') || t('testimonials')

  let items = []
  if (Array.isArray(rawItems)) {
    items = rawItems
  } else if (rawItems && Array.isArray(rawItems.items)) {
    items = rawItems.items
  } else {
    // fallback
    items = [
      { name: `${t('site.title') || 'Fergana School'} parent`, text: t('testimonials.sample1') || 'Great school!' },
      { name: 'Dilfuza', text: t('testimonials.sample2') || 'Прекрасные учителя и внимание к каждому ребёнку.' },
      { name: 'Mohira', text: t('testimonials.sample3') || 'Дети приходят домой вдохновлёнными.' }
    ]
  }

  return (
    <div className="container">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 dark:bg-[#07142a] dark:border-gray-700"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl text-gray-300"><FaQuoteLeft /></div>
              <div>
                <p className="text-gray-700 dark:text-gray-200">{it.text}</p>
                <div className="mt-4 text-sm text-fsGray dark:text-gray-400 font-semibold">{it.name}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
