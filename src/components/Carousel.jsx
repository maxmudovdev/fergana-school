import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from '../hooks/useTranslation'

import photo1 from '../assets/img-1.jpg'
import photo2 from '../assets/img-2.jpg'
import photo3 from '../assets/img-3.jpg'
import photo4 from '../assets/application.png'
import photo5 from '../assets/img-4.jpg'

export default function Carousel() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const slides = [
    { src: photo4, alt: t('gallery.slide1') || 'Школьное пространство' },
    { src: photo1, alt: t('gallery.slide2') || 'Учебный класс' },
    { src: photo2, alt: t('gallery.slide3') || 'Зона активности' },
    { src: photo3, alt: t('gallery.slide4') || 'Приём заявок' },
    { src: photo5, alt: t('gallery.slide5') || 'Школьная атмосфера' }
  ]

  useEffect(() => {
    startAutoSlide()
    return stopAutoSlide
  }, [])

  function startAutoSlide() {
    stopAutoSlide()
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4500)
  }

  function stopAutoSlide() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function prevSlide() {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoSlide()
  }

  function nextSlide() {
    setDirection(1)
    setIndex((prev) => (prev + 1) % slides.length)
    startAutoSlide()
  }

  function goToSlide(i) {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
    startAutoSlide()
  }

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 1.03
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.98
    })
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div className="relative h-[300px] sm:h-[380px] lg:h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].alt}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

          {/* top badge */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6">
            <div className="px-4 py-2 rounded-2xl bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                {t('gallery.title') || 'Галерея'}
              </span>
            </div>
          </div>

          {/* bottom caption */}
          <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6">
            <div className="flex items-end justify-between gap-4 rounded-3xl bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg p-4 md:p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">
                  {t('gallery.title') || 'Gallery'}
                </p>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                  {slides[index].alt}
                </h3>
              </div>

              <div className="shrink-0 text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-105 transition"
          >
            <HiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-md border border-white/40 dark:border-white/10 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-105 transition"
          >
            <HiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* dots */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`${t('gallery.goToSlide') || 'Go to slide'} ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'w-8 h-3 bg-fsBlue'
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* thumbnails */}
      <div className="mt-6 grid grid-cols-5 gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => goToSlide(i)}
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              i === index
                ? 'border-fsBlue ring-2 ring-fsBlue/30 scale-[1.02]'
                : 'border-gray-200 dark:border-gray-700 opacity-80 hover:opacity-100'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-20 md:h-24 object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </button>
        ))}
      </div>
    </div>
  )
}