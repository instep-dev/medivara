'use client'

import { contactInfo } from '@/data/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

const infoItem = {
  hidden: { opacity: 0, x: -30 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const, delay: i * 0.1 },
  }),
}

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const f = dict.form

  return (
    <section id="contact" className="bg-white">
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
            {/* <h2 className="text-xl md:text-2xl text-gray-700 italic">{f.subtitle}</h2> */}
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

      {/* Contact Info */}
      <div className="bg-gradient-to-br from-coral via-[#c46060] min-h-[60vh] md:h-[90vh] relative to-navy py-16 px-4 md:px-8 flex flex-col justify-center">
        <Image
          src="/IMAGE HOME.png"
          alt="Healthcare professionals"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="w-full max-w-5xl mx-auto relative z-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-white font-light text-3xl md:text-5xl mb-8 tracking-wide"
          >
            {dict.info.heading}
          </motion.h2>
          <div className="space-y-4">
            <motion.div
              custom={0}
              variants={infoItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className="text-white text-sm">{contactInfo.web}</p>
            </motion.div>
            <motion.div
              custom={1}
              variants={infoItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white text-sm">{contactInfo.email}</p>
            </motion.div>
            <motion.div
              custom={2}
              variants={infoItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <p className="text-white text-sm">{contactInfo.linkedin}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
