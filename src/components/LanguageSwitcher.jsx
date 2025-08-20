import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useContext(LanguageContext)

  const options = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' }
  ]

  return (
    <div className="flex items-center gap-2">
      {options.map(o => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          className={`px-2 py-1 text-xs rounded ${
            lang === o.code ? 'bg-fsBlue text-white' : 'bg-gray-100 text-gray-700'
          }`}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
