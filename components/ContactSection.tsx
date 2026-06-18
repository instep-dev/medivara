'use client'

import Image from 'next/image'
import { contactInfo } from '@/data/data'
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

      {/* Footer — Contact Info */}
      <div className="relative min-h-[70vh] md:min-h-screen flex flex-col justify-center overflow-hidden">

        <Image
          src="/gedung.jpeg"
          alt="Medivara Office"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay gelap sisi kiri */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-16">

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="text-white font-light text-3xl sm:text-4xl md:text-6xl mb-6 tracking-wide"
          >
            {dict.info.heading}
          </motion.h2>

          {/* Address */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-8 space-y-0.5"
          >
            {contactInfo.address.map((line, i) => (
              <p key={i} className="text-white/85 text-sm md:text-base leading-relaxed">
                {line}
              </p>
            ))}
          </motion.div>

          {/* Contact rows */}
          <div className="space-y-4">
            {/* Website */}
            <motion.div
              custom={0}
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className="text-white/85 text-sm md:text-base">{contactInfo.web}</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              custom={1}
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-white/85 text-sm md:text-base">{contactInfo.phone}</p>
            </motion.div>

            {/* Email */}
            <motion.div
              custom={2}
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white/85 text-sm md:text-base">{contactInfo.email}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
