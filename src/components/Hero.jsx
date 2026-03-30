import React, { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HiPlay,
  HiCalendar,
  HiCheckCircle,
  HiAcademicCap,
  HiShieldCheck,
} from 'react-icons/hi'
import { HiBolt } from 'react-icons/hi2'
import useTranslation from '../hooks/useTranslation'
import photoHero from '../assets/img-1.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: 'easeOut',
    },
  }),
}

function CountUp({ end, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(end * eased)
      setValue(current)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [end, duration])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const bullets = Array.isArray(t('hero.bullets')) ? t('hero.bullets') : []

  const stats = useMemo(
    () => [
      {
        icon: <HiAcademicCap className="w-5 h-5" />,
        value: <CountUp end={11} suffix="+" />,
        label: t('hero.stat1') || '1–11 классы',
      },
      {
        icon: <HiShieldCheck className="w-5 h-5" />,
        value: <CountUp end={2} />,
        label: t('hero.stat2') || '2 языковые группы',
      },
      {
        icon: <HiBolt className="w-5 h-5" />,
        value: <CountUp end={17} suffix=":00" duration={1500} />,
        label: t('hero.stat3') || 'До 17:00',
      },
    ],
    [t]
  )

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 18 })

  const imageRotateX = useTransform(springY, [-30, 30], [8, -8])
  const imageRotateY = useTransform(springX, [-30, 30], [-8, 8])
  const badgeX = useTransform(springX, [-30, 30], [-10, 10])
  const badgeY = useTransform(springY, [-30, 30], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    mouseX.set((x - centerX) / 18)
    mouseY.set((y - centerY) / 18)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-white dark:from-[#07102a] dark:via-[#0b1736] dark:to-[#07102a]"
    >
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* soft grid */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(59,130,246,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative mx-auto px-4 py-16 md:py-20 xl:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-900/40 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-sm text-fsBlue dark:text-blue-200 text-sm font-semibold"
            >
              <HiCheckCircle className="w-4 h-4" />
              {t('site.title')}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.02] tracking-tight text-gray-900 dark:text-white"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-2xl text-base md:text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/video"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-fsBlue text-white font-semibold shadow-xl shadow-blue-200/50 dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <HiPlay className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {t('hero.ctaVideo') || 'Смотреть видео'}
              </Link>

              <Link
                to="/schedule"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-white/5 text-gray-800 dark:text-white font-semibold shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                <HiCalendar className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                {t('nav.schedule') || 'Расписание'}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-8 flex flex-wrap gap-3"
            >
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/85 dark:bg-white/5 border border-gray-200 dark:border-gray-700 shadow-sm text-sm text-gray-700 dark:text-gray-300 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-fsBlue" />
                  {b}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mt-10 grid sm:grid-cols-3 gap-4"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-white/5 p-5 shadow-sm backdrop-blur-md"
                >
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-fsBlue dark:text-blue-200 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900 dark:text-white">
                    {item.value}
                  </div>
                  <p className="mt-1 text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="relative perspective-[1200px]"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-300/20 via-cyan-200/15 to-indigo-300/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-indigo-500/10 blur-3xl rounded-[2.5rem]" />

            <motion.div
              style={{ rotateX: imageRotateX, rotateY: imageRotateY }}
              className="relative rounded-[2rem] overflow-hidden border border-white/60 dark:border-gray-700 bg-white/70 dark:bg-[#0b1736]/70 shadow-2xl backdrop-blur-md will-change-transform"
            >
              <img
                src={photoHero}
                alt={t('site.title')}
                className="w-full h-[340px] md:h-[440px] xl:h-[540px] object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

              <motion.div
                style={{ x: badgeX, y: badgeY }}
                className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6"
              >
                <div className="rounded-3xl bg-white/85 dark:bg-[#07102a]/85 backdrop-blur-xl border border-white/40 dark:border-gray-700 shadow-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {t('site.title')}
                      </h3>
                      <p className="mt-1 text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {t('site.subtitle')}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-fsBlue text-white shadow-lg">
                      <HiAcademicCap className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ x: badgeX, y: badgeY }}
                className="absolute top-5 left-5 md:top-6 md:left-6"
              >
                <div className="px-4 py-2 rounded-2xl bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg">
                  <p className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {t('hero.stat1') || '1–11 классы'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                style={{
                  x: useTransform(badgeX, (v) => -v),
                  y: useTransform(badgeY, (v) => -v),
                }}
                className="absolute top-20 right-5 md:top-24 md:right-6"
              >
                <div className="px-4 py-2 rounded-2xl bg-white/85 dark:bg-[#07102a]/80 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg">
                  <p className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {t('hero.stat3') || 'До 17:00'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="hidden md:flex justify-center mt-12"
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-fsBlue transition"
          >
            <span className="text-sm font-medium">Scroll</span>
            <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-gray-300 dark:border-gray-600 p-1">
              <motion.span
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="block h-2 w-2 rounded-full bg-fsBlue"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}