import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import useTranslation from '../hooks/useTranslation'

function SectionHeading({ badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
      {badge && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-fsBlue text-sm font-semibold mb-4">
          {badge}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const section = document.getElementById(id)

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    }
  }, [location])

  return (
    <>
      <Hero />

      {/* ABOUT / FEATURES */}
      <section id="about" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <SectionHeading
            badge={t('site.title')}
            title={t('nav.about')}
            description={t('video.description')}
          />
          <Features />
        </div>
      </section>

      {/* PROGRAMS / ADVANTAGES */}
      <section
        id="programs"
        className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#061127] dark:via-[#07102a] dark:to-[#061127] overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <SectionHeading
            badge={t('nav.programs')}
            title={t('nav.programs')}
            description={t('hero.description')}
          />

          <div className="max-w-5xl mx-auto rounded-[32px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-5">
              {Array.isArray(t('hero.bullets')) &&
                t('hero.bullets').map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-5 text-center shadow-sm"
                  >
                    <div className="w-10 h-10 mx-auto mb-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-fsBlue font-bold">
                      0{index + 1}
                    </div>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                      {item}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <SectionHeading
            badge={t('gallery.title')}
            title={t('gallery.title')}
            description={t('site.subtitle')}
          />
          <Carousel />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#061127] dark:via-[#07102a] dark:to-[#061127] overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <SectionHeading
            badge={t('testimonials.title')}
            title={t('testimonials.title')}
            description={t('footer.description')}
          />
          <Testimonials />
        </div>
      </section>
    </>
  )
}