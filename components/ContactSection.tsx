import { contactInfo } from '@/data/data'
import Image from 'next/image'

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

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const f = dict.form

  return (
    <section id="contact" className="bg-white">
      {/* Contact Form */}
      <div className="py-20 px-8">
        <div className="max-w-2xl mx-auto border border-coral rounded-2xl p-10">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm mb-2">— {f.label}</p>
            <h2 className="text-2xl text-gray-700 italic">{f.subtitle}</h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-br from-coral via-[#c46060] h-[90vh] relative to-navy py-16 px-8 flex flex-col justify-center">
        <Image
          src="/IMAGE HOME.png"
          alt="Healthcare professionals"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <div className="w-[1152px] mx-auto relative z-20">
          <h2 className="text-white font-light text-5xl mb-8 tracking-wide">
            {dict.info.heading}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <p className="text-white text-xl w-96 leading-relaxed font-semibold">{contactInfo.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white text-sm">{contactInfo.web}</p>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-white text-sm">{contactInfo.email}</p>
            </div>
            {contactInfo.phones.map((phone, i) => (
              <div key={i} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-white">{phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
