import React from 'react'
import { motion } from 'framer-motion'
import { HiPlay, HiAcademicCap } from 'react-icons/hi'
import useTranslation from '../hooks/useTranslation'

export default function VideoPage() {
  const { t } = useTranslation()

  const youtubeId = 'p_d_y7h_jjI'

  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-fsBlue text-sm font-semibold mb-4">
            <HiPlay />
            {t('video.title')}
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 dark:text-white">
            {t('video.heading')}
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            {t('video.description')}
          </p>
        </motion.div>

        {/* VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="relative">

            {/* VIDEO */}
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="Fergana School Video"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* OVERLAY DECOR */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-fsBlue text-white flex items-center justify-center shadow-lg">
                <HiAcademicCap />
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {t('site.title')}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-7">
              {t('video.description')}
            </p>

            {/* CTA */}
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href="/schedule"
                className="px-5 py-3 rounded-xl bg-fsBlue text-white font-semibold shadow hover:scale-105 transition"
              >
                {t('nav.schedule')}
              </a>

              <a
                href="/news"
                className="px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                {t('nav.news')}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}