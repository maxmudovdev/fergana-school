// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import useTranslation from '../hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      <section id="about" className="py-12">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">{t('nav.about')}</h2>
          <Features />
        </div>
      </section>

      <section id="programs" className="py-12 bg-gray-50 dark:bg-[#061127]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">{t('nav.programs')}</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t('hero.description')}
          </p>
        </div>
      </section>

      <section id="gallery" className="py-12">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">{t('gallery.title')}</h2>
          <Carousel />
        </div>
      </section>

      <section id="testimonials" className="py-12 bg-gray-50 dark:bg-[#061127]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">{t('testimonials.title')}</h2>
          <Testimonials />
        </div>
      </section>
    </>
  )
}
