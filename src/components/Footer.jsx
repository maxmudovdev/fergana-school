import React, { useEffect, useState } from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import useTranslation from '../hooks/useTranslation'
import MapThumb from '../assets/map.jpg'
import logo from '../assets/logo.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const hero = document.getElementById('hero')
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-2xl flex items-center justify-center backdrop-blur-md"
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  const phonePrimary = t('footer.phonePrimary') || '+998 94 202 43 00'
  const phoneSecondary = t('footer.phoneSecondary') || '+998 94 001 50 18'
  const addressLine1 =
    t('footer.addressLine1') || "Farg'ona shahar Mushtarak ko'chasi 5-uy"
  const addressLine2 =
    t('footer.addressLine2') ||
    "Mo'ljal: Aeroport yo'li, Yusuf ota choyxonasi yonida"
  const workHours = t('footer.workHours') || 'Darslar 8:30 dan 17:00 gacha'

  const mapHref = 'https://maps.app.goo.gl/Y4SV7Gqqg7TbwGcRA'

  const socials = [
    {
      href: 'https://www.instagram.com/fergana.school2',
      icon: FaInstagram,
      label: 'Instagram',
      className:
        'from-pink-500 via-purple-500 to-yellow-400 text-white shadow-lg',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61579003506802',
      icon: FaFacebookF,
      label: 'Facebook',
      className: 'bg-blue-600 text-white shadow-lg',
    },
    {
      href: 'https://t.me/fer_school',
      icon: FaTelegramPlane,
      label: 'Telegram',
      className: 'bg-sky-500 text-white shadow-lg',
    },
  ]

  return (
    <>
      <footer
        id="contacts"
        className="relative overflow-hidden pt-20 pb-10 bg-gradient-to-br from-[#07102a] via-[#0b1736] to-[#07102a]"
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px]" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Main premium block */}
          <div className="relative rounded-[40px] p-8 md:p-12 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left side */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-5">
                  <motion.div
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl"
                  >
                    <img
                      src={logo}
                      alt="Fergana School logo"
                      className="w-full h-full object-contain p-2"
                    />
                  </motion.div>

                  <div>
                    <h2 className="text-3xl font-black text-white">
                      {t('site.title')}
                    </h2>
                    <p className="text-gray-400">
                      {t('site.subtitle')}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-300 max-w-xl leading-7">
                  {t('footer.description')}
                </p>

                <div className="flex gap-4 mt-6">
                  {socials.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -6, scale: 1.1 }}
                        whileTap={{ scale: 0.96 }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          social.className.includes('from-')
                            ? `bg-gradient-to-br ${social.className}`
                            : social.className
                        }`}
                      >
                        <Icon />
                      </motion.a>
                    )
                  })}
                </div>

                <div className="mt-8">
                  <a
                    href={`tel:${phonePrimary?.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-[1.03] transition"
                  >
                    <FaPhoneAlt />
                    {t('footer.callNow')}
                  </a>
                </div>
              </motion.div>

              {/* Right side */}
              <motion.div
                custom={1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <FaPhoneAlt className="text-blue-400 mb-3" />
                    <div className="text-white font-semibold">{phonePrimary}</div>
                    <div className="text-gray-400 text-sm">{phoneSecondary}</div>
                  </div>

                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <FaClock className="text-blue-400 mb-3" />
                    <div className="text-white font-semibold">
                      {t('footer.workingHoursTitle')}
                    </div>
                    <div className="text-gray-400 text-sm">{workHours}</div>
                  </div>

                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl sm:col-span-2">
                    <FaMapMarkerAlt className="text-blue-400 mb-3" />
                    <div className="text-white font-semibold">{addressLine1}</div>
                    <div className="text-gray-400 text-sm">{addressLine2}</div>
                  </div>

                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl sm:col-span-2">
                    <FaEnvelope className="text-blue-400 mb-3" />
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">
                      ferganaschool@gmail.com
                    </div>
                  </div>
                </div>

                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={MapThumb}
                      alt="Map thumbnail"
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-4 left-4 text-white font-semibold">
                      {t('footer.showOnMap')}
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col md:flex-row justify-between gap-3 text-gray-400 text-sm">
            <div>
              © {new Date().getFullYear()} Fergana School — {t('footer.rights')}
            </div>

            <div>
              Developer
              <a
                href="https://t.me/maxmudovdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 ml-1 hover:underline"
              >
                Ulugbek
              </a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  )
}