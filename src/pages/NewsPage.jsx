// src/pages/NewsPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'
import newsData from '../data/news'

export default function NewsPage() {
  const { t, lang } = useTranslation()

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">{t('nav.news') || 'News'}</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map(item => (
            <article key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 dark:bg-[#07142a] dark:border-gray-700 overflow-hidden">
              {/* Thumbnail (из импорта в data) */}
              {item.image ? (
                <Link to={`/news/${item.id}`} className="block">
                  <img
                    src={item.image}
                    alt={item.title[lang] || item.title.en}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                </Link>
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  {t('news.noImage') || 'No image'}
                </div>
              )}

              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title[lang] || item.title.en}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt[lang] || item.excerpt.en}</p>
                <Link to={`/news/${item.id}`} className="text-fsBlue font-semibold">{t('news.readMore') || 'Read more'}</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
