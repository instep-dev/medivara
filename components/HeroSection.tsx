'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { useState } from 'react'
import 'swiper/css'

type ServiceCard = { label: string; desc: string }
type HeroDict = { heading: string; description: string; learnMore: string; serviceCards: ServiceCard[] }

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

function NavButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-coral hover:text-white transition-all duration-200 active:scale-95 flex-shrink-0"
    >
      {children}
    </button>
  )
}

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-6 px-5 rounded-xl h-full bg-[#808185] text-center">
      <h3 className="text-white text-lg font-bold leading-tight">{card.label}</h3>
      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{card.desc}</p>
    </div>
  )
}

export default function HeroSection({ dict }: { dict: HeroDict }) {
  const [mobileSwiper, setMobileSwiper] = useState<SwiperType | null>(null)
  const [desktopSwiper, setDesktopSwiper] = useState<SwiperType | null>(null)

  const cards = dict.serviceCards

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/IMAGE HOME.png"
          alt="Healthcare professionals"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-8 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4"
          >
            {dict.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.25 }}
            className="text-white/90 text-sm leading-relaxed"
          >
            {dict.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.45 }}
            className="mt-6"
          >
            <a
              href="#about"
              className="inline-block px-7 py-2.5 border-2 border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-gray-800 transition-all duration-200"
            >
              {dict.learnMore}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile & tablet swiper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 px-4 pb-10 lg:hidden"
      >
        <Swiper
          onSwiper={setMobileSwiper}
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 14 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} style={{ height: 'auto' }}>
              <ServiceCardItem card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4 mt-4">
          <NavButton onClick={() => mobileSwiper?.slidePrev()}>
            <ArrowLeft />
          </NavButton>
          <NavButton onClick={() => mobileSwiper?.slideNext()}>
            <ArrowRight />
          </NavButton>
        </div>
      </motion.div>

      {/* Desktop swiper — absolute overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl px-8 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <NavButton onClick={() => desktopSwiper?.slidePrev()}>
            <ArrowLeft />
          </NavButton>

          <div className="flex-1 min-w-0">
            <Swiper
              onSwiper={setDesktopSwiper}
              slidesPerView={4}
              spaceBetween={24}
              breakpoints={{
                1280: { slidesPerView: 4, spaceBetween: 28 },
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index} style={{ height: 'auto' }}>
                  <ServiceCardItem card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <NavButton onClick={() => desktopSwiper?.slideNext()}>
            <ArrowRight />
          </NavButton>
        </div>
      </motion.div>
    </section>
  )
}
