// src/pages/VideoPage.jsx
import React from 'react'
import useTranslation from '../hooks/useTranslation'

export default function VideoPage() {
  const { t } = useTranslation()

  // YouTube id — замените на реальное видео вашей школы fr https://youtu.be/p_d_y7h_jjI 
  const youtubeId = 'p_d_y7h_jjI'

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">{t('video.title') || 'About Fergana School — Video'}</h1>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Fergana School Video"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              allowFullScreen
              className="w-full h-96 rounded-lg shadow-md"
            />
          </div>

          <div className="mt-6 bg-white dark:bg-[#07142a] p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-2">{t('video.heading') || 'О школе'}</h2>
            <p className="text-gray-700 dark:text-gray-300">{t('video.description') || t('hero.description')}</p>
            {/* Можно добавить кнопки или ссылки на программы */}
          </div>
        </div>
      </div>
    </section>
  )
}
