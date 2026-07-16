'use client'

import Image from 'next/image'
import { contactInfo } from '@/data/data'
import { motion } from 'framer-motion'
import { LinkedinLogo } from '@phosphor-icons/react'

type ContactDict = {
  form: {
    label: string
    subtitle: string
    namePlaceholder: string
    emailPlaceholder: string
    titlePlaceholder: string
    messagePlaceholder: string
    uploadLabel: string
    privacyText: string
    privacyLink: string
    sendButton: string
  }
  info: { heading: string }
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.1 },
  }),
}

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const f = dict.form

  return (
    <section
      id="contact"
      className="bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BACKGROUND LOGO.png')" }}
    >
      {/* Contact Form */}
      <div className="py-16 md:py-20 px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mx-auto border border-coral rounded-2xl p-6 md:p-10"
        >
          <div className="text-center mb-8">
            <p className="text-black text-2xl font-semibold mb-2">— {f.label}</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={f.namePlaceholder}
                className="border border-coral rounded px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-coral"
              />
              <input
                type="email"
                placeholder={f.emailPlaceholder}
                className="border border-coral rounded px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-coral"
              />
            </div>

            <input
              type="text"
              placeholder={f.titlePlaceholder}
              className="w-full border border-coral rounded px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-coral"
            />

            <textarea
              placeholder={f.messagePlaceholder}
              rows={5}
              className="w-full border border-coral rounded px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-coral resize-none"
            />

            <div>
              <p className="text-sm text-gray-600 mb-1">{f.uploadLabel}</p>
              <input type="file" className="text-sm text-gray-500" />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="privacy" className="accent-coral w-4 h-4" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                {f.privacyText}{' '}
                <span className="text-teal underline cursor-pointer">{f.privacyLink}</span>
              </label>
            </div>

            <div className="text-right pt-2">
              <button
                type="submit"
                className="text-navy font-medium text-sm tracking-wide hover:text-coral transition-colors"
              >
                {f.sendButton} →
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-coral to-teal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Medivara
          </p>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-navy transition-colors"
          >
            <LinkedinLogo size={22} weight="fill" />
          </a>
        </div>
      </div>
    </section>
  )
}
