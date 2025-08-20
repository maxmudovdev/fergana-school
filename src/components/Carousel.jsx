import React, { useState, useEffect, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import photo1 from '../assets/img-1.jpg'
import photo2 from '../assets/img-2.jpg'
import photo3 from '../assets/img-3.jpg'
import photo5 from '../assets/img-4.jpg'
import photo4 from '../assets/application.png'

const slides = [
  { src: photo4, alt: 'Коридор школы' },
  { src: photo1, alt: 'Классная комната' },
  { src: photo2, alt: 'Игровая зона' },
  { src: photo3, alt: 'прием заявок' },
  { src: photo5, alt: 'прием заявок' }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function start() {
    stop()
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 4000)
  }

  function stop() {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  function prev() {
    setIndex(i => (i - 1 + slides.length) % slides.length)
    start()
  }
  function next() {
    setIndex(i => (i + 1) % slides.length)
    start()
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="overflow-hidden rounded-2xl border border-gray-100 shadow"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div className="relative h-72">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].alt}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 object-cover"
            />
          </AnimatePresence>

          {/* arrows */}
          <button onClick={prev} aria-label="Prev" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow border">
            <HiChevronLeft size={22} />
          </button>
          <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow border">
            <HiChevronRight size={22} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); start() }}
            aria-label={`Перейти к слайду ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-fsBlue' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
