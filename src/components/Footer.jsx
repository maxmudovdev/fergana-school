// src/components/Footer.jsx
import React from 'react'
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import useTranslation from '../hooks/useTranslation'
import MapThumb from '../assets/map.jpg'   // если у вас SVG или другой файл, поменяйте путь
import logo from '../assets/logo.png'     // ваш логотип

export default function Footer() {
  const { t } = useTranslation()

  const phonePrimary = t('footer.phonePrimary') || '+998 94 202 43 00'
  const phoneSecondary = t('footer.phoneSecondary') || '+998 90 001 50 18'
  const addressLine1 = t('footer.addressLine1') || "Farg'ona shahar Mushtarak ko'chasi 5-uy"
  const addressLine2 = t('footer.addressLine2') || "Mo'ljal: Aeroport yo'li, Yusuf ota choyxonasi yonida"
  const workHours = t('footer.workHours') || "Darslar 8:30 dan 17:00 gacha"

  const mapHref = 'https://maps.app.goo.gl/Y4SV7Gqqg7TbwGcRA'

  return (
    <footer id="contacts" className="bg-white dark:bg-[#07102a] border-t border-gray-100 dark:border-gray-700">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-20">
              <img src={logo} alt="Fergana School logo" className="w-full h-auto" />
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t('site.title') || 'Fergana School'}</div>
              <div className="text-sm text-fsGray dark:text-gray-400">{t('site.subtitle') || 'Частная школа — современное образование'}</div>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-sm">
            {t('footer.description') || t('site.subtitle') || 'Индивидуальные программы, безопасность и творческая атмосфера.'}
          </p>

          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.instagram.com/fergana.school2" aria-label="Instagram" target="_blank" rel="noreferrer"
               className="p-2 rounded-md bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 text-white shadow hover:scale-105 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579003506802" aria-label="Facebook" target="_blank" rel="noreferrer"
               className="p-2 rounded-md bg-blue-600 text-white shadow hover:scale-105 transition-transform">
              <FaFacebookF />
            </a>
            <a href="https://t.me/fer_school" aria-label="Telegram" target="_blank" rel="noreferrer"
               className="p-2 rounded-md bg-sky-500 text-white shadow hover:scale-105 transition-transform">
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Contacts + Map */}
        <div className="flex gap-6">
          <div className="w-2/3">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">{t('footer.contactTitle') || 'Contacts'}</h4>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-md bg-gray-100 text-fsBlue dark:bg-[#0b1220]">
                <FaPhoneAlt />
              </div>
              <div>
                <a href={`tel:${phonePrimary?.replace(/\s+/g, '')}`} className="block font-semibold text-gray-800 dark:text-gray-100">
                  {phonePrimary}
                </a>
                {phoneSecondary && (
                  <a href={`tel:${phoneSecondary?.replace(/\s+/g, '')}`} className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {phoneSecondary}
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 rounded-md bg-gray-100 text-fsBlue dark:bg-[#0b1220]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">{addressLine1}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{addressLine2}</div>
                <a href={mapHref} target="_blank" rel="noopener noreferrer"
                   className="inline-block mt-2 text-sm text-fsBlue dark:text-[#8fb9ff] hover:underline">
                  {t('footer.showOnMap') || "Show on map"}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-gray-100 text-fsBlue dark:bg-[#0b1220]">
                <FaClock />
              </div>
              <div>
                <div className="text-sm text-gray-800 dark:text-gray-100">{t('footer.workingHoursTitle') || 'Working hours'}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{workHours}</div>
              </div>
            </div>
          </div>

          <div className="w-1/3 hidden sm:block">
            <a href={mapHref} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <img src={MapThumb} alt="Map thumbnail" className="w-full h-28 object-cover" loading="lazy" />
            </a>
          </div>
        </div>

        {/* Quick info */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{t('footer.quickInfoTitle') || 'Quick info'}</h4>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            <div className="mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-100">{t('footer.admissions') || 'Admissions:'}</span>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {t('footer.admissionsText') || 'Consultations by phone or at the school'}
              </div>
            </div>

            <div className="mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-100">Email:</span>
              <div className="text-gray-500 dark:text-gray-400 text-sm">ferganaschool@gmail.com</div>
            </div>

            <div className="mt-4">
              <a href={`tel:${phonePrimary?.replace(/\s+/g, '')}`}
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fsBlue text-white text-sm font-semibold shadow hover:opacity-95">
                {t('footer.callNow') || 'Call now'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div>© {new Date().getFullYear()} Fergana School — {t('footer.rights') || 'All rights reserved'}</div>
          <div className="text-right">Разработка и поддержка — Maxmudov Ulug'bek • <a href={`tel:${phoneSecondary?.replace(/\s+/g, '')}`} className="text-fsBlue hover:underline">{phoneSecondary}</a></div>
        </div>
      </div>
    </footer>
  )
}
