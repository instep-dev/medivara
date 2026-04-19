'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navHrefs } from '@/data/data'

type NavbarProps = {
  lang: string
  navLabels: string[]
}

export default function Navbar({ lang, navLabels }: NavbarProps) {
  const [activeSection, setActiveSection] = useState(navLabels[0])

  useEffect(() => {
    const sectionIds = ['home', 'about', 'solution', 'teams', 'contact']

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(navLabels[index])
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [navLabels])

  const otherLang = lang === 'en' ? 'id' : 'en'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-coral to-teal">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        <a href={`#home`}>
          <Image
            src="/LOGO MEDIVARA PUTIH WEBSITE.png"
            alt="Medivara"
            width={160}
            height={56}
            className="object-contain"
            priority
          />
        </a>

        <div className="flex items-center gap-8">
          {navLabels.map((label, index) => {
            const isActive = activeSection === label
            return (
              <a
                key={label}
                href={navHrefs[index]}
                className="relative text-white text-sm font-medium tracking-wide pb-2 flex flex-col items-center"
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <Image
                      src="/underline.png"
                      alt=""
                      width={60}
                      height={6}
                      className="object-contain"
                    />
                  </span>
                )}
              </a>
            )
          })}

          <div className="relative group">
            <button className="text-white text-sm font-medium flex items-center gap-1">
              {lang.toUpperCase()} <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
              <div className="bg-white rounded shadow-lg py-1 min-w-[60px]">
                <Link
                  href={`/${otherLang}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                >
                  {otherLang.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
