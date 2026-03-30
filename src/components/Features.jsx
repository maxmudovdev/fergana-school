import React from 'react'
import { motion } from 'framer-motion'
import {
  FaChalkboardTeacher,
  FaShieldAlt,
  FaLightbulb,
} from 'react-icons/fa'
import useTranslation from '../hooks/useTranslation'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: 'easeOut',
    },
  }),
}

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: FaChalkboardTeacher,
      title: t('features.f1.title'),
      desc: t('features.f1.desc'),
    },
    {
      icon: FaShieldAlt,
      title: t('features.f2.title'),
      desc: t('features.f2.desc'),
    },
    {
      icon: FaLightbulb,
      title: t('features.f3.title'),
      desc: t('features.f3.desc'),
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-[28px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-none p-6 md:p-7 overflow-hidden"
              >
                {/* hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50/70 via-transparent to-cyan-50/60 dark:from-blue-500/5 dark:to-cyan-500/5" />

                {/* top */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/30 text-fsBlue dark:text-blue-200 flex items-center justify-center shadow-sm text-xl">
                    <Icon />
                  </div>

                  <div className="text-5xl font-black text-gray-100 dark:text-white/5 leading-none select-none">
                    0{i + 1}
                  </div>
                </div>

                {/* title */}
                <div className="relative z-10 mt-5">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* description */}
                <div className="relative z-10 mt-4">
                  <p className="text-[15px] md:text-base leading-7 text-gray-600 dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>

                {/* bottom line */}
                <div className="relative z-10 mt-6 pt-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-fsBlue dark:text-blue-200">
                    {t('site.title')}
                  </span>

                  <span className="w-10 h-[2px] rounded-full bg-fsBlue/70" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}