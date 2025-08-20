// src/pages/NewsArticle.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'
import newsData from '../data/news'

export default function NewsArticle() {
  const { id } = useParams()
  const { lang, t } = useTranslation()
  const item = newsData.find(n => n.id === id)

  if (!item) {
    return (
      <div className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">{t('news.notFound') || 'News not found'}</h2>
        <Link to="/news" className="text-fsBlue">{t('news.backToList') || 'Back to news'}</Link>
      </div>
    )
  }

  return (
    <article className="container py-12">
      <div className="max-w-3xl mx-auto">
        {/* Large image */}
        {item.image && (
          <div className="mb-6 overflow-hidden rounded-lg shadow">
            <img src={item.image} alt={item.title[lang] || item.title.en} className="w-full h-64 object-cover" loading="lazy" />
          </div>
        )}

        <div className="text-sm text-gray-400 mb-3">{new Date(item.date).toLocaleDateString()}</div>
        <h1 className="text-3xl font-semibold mb-4">{item.title[lang] || item.title.en}</h1>
        <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
          <p>{item.content[lang] || item.content.en}</p>
        </div>

        <div className="mt-6">
          <Link to="/news" className="text-fsBlue">{t('news.backToList') || 'Back to news'}</Link>
        </div>
      </div>
    </article>
  )
}
