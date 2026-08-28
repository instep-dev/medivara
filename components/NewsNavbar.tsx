"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";

type NewsNavbarProps = {
  lang: string;
  homeLabel: string;
  newsLabel: string;
};

export default function NewsNavbar({
  lang,
  homeLabel,
  newsLabel
}: NewsNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLang = lang === "en" ? "id" : "en";
  const pathname = usePathname();

  // pathname: /{lang}/news  OR  /{lang}/news/{slug}
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments.length > 2 ? segments[2] : null;
  const switchHref = slug ? `/${otherLang}/news/${slug}` : `/${otherLang}/news`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="absolute inset-0 border-b border-gray-200 bg-white shadow-sm" />
      <div className="relative px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <Link href={`/${lang}`}>
            <Image
              src="/LOGO MEDIVARA WEBSITE.png"
              alt="Medivara"
              width={143}
              height={48}
              className="h-10 w-auto sm:h-12"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-base font-bold text-navy lg:flex">
            <Link href={`/${lang}`} className="hover:text-teal">
              {homeLabel}
            </Link>

            <Link
              href={`/${lang}/news`}
              className="text-teal underline decoration-2 underline-offset-8"
            >
              {newsLabel}
            </Link>

            <div className="relative group flex items-center">
              <button className="flex items-center gap-1 text-base font-bold text-navy">
                {lang.toUpperCase()} <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 top-full z-50 hidden pt-3 group-hover:block">
                <div className="min-w-15 rounded-lg bg-white py-1 shadow-lg">
                  <Link
                    href={switchHref}
                    className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {otherLang.toUpperCase()}
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile right side */}
          <div className="flex items-center gap-4 text-navy lg:hidden">
            <Link href={switchHref} className="text-sm font-bold">
              {otherLang.toUpperCase()}
            </Link>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="mt-3 rounded-lg bg-navy/90 px-4 py-3 text-lg font-bold text-white backdrop-blur-sm sm:mt-4 sm:px-10 sm:py-4 lg:hidden">
              <Link
                href={`/${lang}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2"
              >
                {homeLabel}
              </Link>
              <Link
                href={`/${lang}/news`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-coral underline decoration-2 underline-offset-8"
              >
                {newsLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
