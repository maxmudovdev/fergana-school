import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import useTranslation from '../hooks/useTranslation'
import { scheduleData } from '../data/schedule'

const dayKeys = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const getTodayKey = () => {
  const map = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  return map[new Date().getDay()]
}

export default function SchedulePage() {
  const { t } = useTranslation()
  const [groupType, setGroupType] = useState('ru')
  const [selectedDay, setSelectedDay] = useState(getTodayKey())

  const classes = useMemo(
    () => Object.keys(scheduleData[groupType] || {}),
    [groupType]
  )

  const classesForDay = useMemo(() => {
    return classes.map((className) => ({
      className,
      lessons: scheduleData[groupType]?.[className]?.[selectedDay] || [],
    }))
  }, [classes, groupType, selectedDay])

  return (
    <section className="relative py-12 md:py-16 min-h-[70vh] bg-gradient-to-b from-gray-50 to-white dark:from-[#061127] dark:to-[#07102a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative container max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-fsBlue text-sm font-semibold mb-4">
            {t('nav.schedule')}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
            {t('schedule.title')}
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-8">
            {t('schedule.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-5xl mx-auto rounded-[28px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-4 md:p-6 mb-10">
          <div className="flex flex-col gap-5">
            {/* Group type */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setGroupType('ru')}
                className={`px-5 py-2.5 rounded-2xl font-medium transition ${
                  groupType === 'ru'
                    ? 'bg-fsBlue text-white shadow'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {t('schedule.russianGroups')}
              </button>

              <button
                onClick={() => setGroupType('uz')}
                className={`px-5 py-2.5 rounded-2xl font-medium transition ${
                  groupType === 'uz'
                    ? 'bg-fsBlue text-white shadow'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                {t('schedule.uzbekGroups')}
              </button>
            </div>

            {/* Days */}
            <div className="flex flex-wrap justify-center gap-2">
              {dayKeys.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`min-w-[72px] px-4 py-2.5 rounded-2xl text-sm font-medium transition ${
                    selectedDay === day
                      ? 'bg-fsBlue text-white shadow'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {t(`schedule.days.${day}`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All classes for selected day */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {classesForDay.map((item, index) => (
            <motion.div
              key={item.className}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-[28px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              {/* Card header */}
              <div className="px-5 md:px-6 py-4 border-b border-gray-100 dark:border-white/10 bg-white/60 dark:bg-white/5">
                <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.className}
                </h2>
              </div>

              {/* Card body */}
              {item.lessons.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-blue-50 dark:bg-blue-950/20">
                        <th className="px-5 md:px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {t('schedule.time')}
                        </th>
                        <th className="px-5 md:px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {t('schedule.subject')}
                        </th>
                        <th className="px-5 md:px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {t('schedule.room')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.lessons.map((lesson, i) => (
                        <tr
                          key={i}
                          className="border-t border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition"
                        >
                          <td className="px-5 md:px-6 py-3 text-sm md:text-base font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
                            {lesson.time}
                          </td>
                          <td className="px-5 md:px-6 py-3 text-sm md:text-base text-gray-800 dark:text-gray-100">
                            {lesson.subject}
                          </td>
                          <td className="px-5 md:px-6 py-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
                            {lesson.room || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="px-5 md:px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                  {t('schedule.noLessons')}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}