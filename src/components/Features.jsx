import React from 'react'
import { FaChalkboardTeacher, FaShieldAlt, FaLightbulb } from 'react-icons/fa'
import useTranslation from '../hooks/useTranslation'

export default function Features() {
  const { t } = useTranslation()
  const features = [
    { icon: FaChalkboardTeacher, title: t('features.f1.title'), desc: t('features.f1.desc') },
    { icon: FaShieldAlt, title: t('features.f2.title'), desc: t('features.f2.desc') },
    { icon: FaLightbulb, title: t('features.f3.title'), desc: t('features.f3.desc') }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((f, i) => {
        const Icon = f.icon
        return (
          <article key={i} className="card-soft p-6 flex flex-col gap-4 dark:card-soft">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-fsBlue text-xl dark:bg-[#0b1220]">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold text-fsBlue dark:text-[#cfe0ff]">{f.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </article>
        )
      })}
    </div>
  )
}
