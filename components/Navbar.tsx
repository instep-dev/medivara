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
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const sectionIds = ['home', 'about', 'solution', 'teams', 'clients', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(navLabels[index])
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [navLabels])

  useEffect(() => {
    const hero = document.getElementById('home')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const otherLang = lang === 'en' ? 'id' : 'en'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHeroVisible
          ? 'bg-white shadow-sm'
          : 'bg-gradient-to-r from-coral to-teal'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 p-4 flex items-center justify-between">
        <a href="#home" onClick={() => setMenuOpen(false)}>
          <Image
            src={
              isHeroVisible
                ? '/LOGO MEDIVARA WEBSITE.png'
                : '/LOGO MEDIVARA PUTIH WEBSITE.png'
            }
            alt="Medivara"
            width={130}
            height={46}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLabels.map((label, index) => {
            const href = navHrefs[index]
            const isPageLink = href && !href.startsWith('#')
            const isActive = activeSection === label
            const linkClass = `relative text-sm tracking-wide pb-2 flex flex-col items-center transition-colors duration-300 ${
              isHeroVisible
                ? isActive
                  ? 'text-teal font-bold'
                  : 'text-gray-600 font-medium'
                : isActive
                ? 'text-white font-bold'
                : 'text-white font-medium'
            }`
            return isPageLink ? (
              <Link
                key={label}
                href={`/${lang}/${href}`}
                className={linkClass}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className={linkClass}
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

          <div className="relative group flex items-center pb-2">
            <button
              className={`text-sm font-medium flex items-center gap-1 transition-colors duration-300 ${
                isHeroVisible ? 'text-gray-600' : 'text-white'
              }`}
            >
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

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-4">
          <Link
            href={`/${otherLang}`}
            className={`text-sm font-medium transition-colors duration-300 ${
              isHeroVisible ? 'text-gray-600' : 'text-white'
            }`}
          >
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-300 origin-center ${
                isHeroVisible ? 'bg-gray-700' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 ${
                isHeroVisible ? 'bg-gray-700' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-300 origin-center ${
                isHeroVisible ? 'bg-gray-700' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            isHeroVisible ? 'bg-white' : 'bg-gradient-to-b from-coral to-teal'
          }`}
        >
          {navLabels.map((label, index) => {
            const href = navHrefs[index]
            const isPageLink = href && !href.startsWith('#')
            const mobileClass = `block text-sm font-medium py-3 border-b last:border-0 transition-colors ${
              isHeroVisible
                ? 'text-gray-700 border-gray-100'
                : 'text-white border-white/20'
            }`
            return isPageLink ? (
              <Link
                key={label}
                href={`/${lang}/${href}`}
                onClick={() => setMenuOpen(false)}
                className={mobileClass}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={mobileClass}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
