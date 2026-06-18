'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type NewsNavbarProps = {
  lang: string
  homeLabel: string
  newsLabel: string
}

export default function NewsNavbar({ lang, homeLabel, newsLabel }: NewsNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const otherLang = lang === 'en' ? 'id' : 'en'
  const pathname = usePathname()

  // pathname: /{lang}/news  OR  /{lang}/news/{slug}
  const segments = pathname.split('/').filter(Boolean)
  const slug = segments.length > 2 ? segments[2] : null
  const switchHref = slug ? `/${otherLang}/news/${slug}` : `/${otherLang}/news`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-coral to-teal">
      <div className="max-w-7xl mx-auto px-4 md:px-8 p-4 flex items-center justify-between">
        <Link href={`/${lang}`}>
          <Image
            src="/LOGO MEDIVARA PUTIH WEBSITE.png"
            alt="Medivara"
            width={130}
            height={46}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* BERANDA */}
          <Link
            href={`/${lang}`}
            className="relative text-sm tracking-wide pb-2 flex flex-col items-center text-white font-medium transition-colors duration-300 hover:font-bold"
          >
            {homeLabel}
          </Link>

          {/* NEWS — active with underline */}
          <Link
            href={`/${lang}/news`}
            className="relative text-sm tracking-wide pb-2 flex flex-col items-center text-white font-bold transition-colors duration-300"
          >
            {newsLabel}
            <span className="absolute bottom-0 left-0 right-0 flex justify-center">
              <Image
                src="/underline.png"
                alt=""
                width={60}
                height={6}
                className="object-contain"
              />
            </span>
          </Link>

          {/* Language switcher */}
          <div className="relative group flex items-center pb-2">
            <button className="text-sm font-medium flex items-center gap-1 text-white">
              {lang.toUpperCase()} <span className="text-xs">▼</span>
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-50">
              <div className="bg-white rounded shadow-lg py-1 min-w-[60px]">
                <Link
                  href={switchHref}
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
          <Link href={switchHref} className="text-sm font-medium text-white">
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-b from-coral to-teal">
          <Link
            href={`/${lang}`}
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium py-3 border-b border-white/20 text-white"
          >
            {homeLabel}
          </Link>
          <Link
            href={`/${lang}/news`}
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-bold py-3 text-white"
          >
            {newsLabel}
          </Link>
        </div>
      )}
    </nav>
  )
}
