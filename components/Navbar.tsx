"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { navHrefs } from "@/data/data";

type NavbarProps = {
  lang: string;
  navLabels: string[];
};

export default function Navbar({ lang, navLabels }: NavbarProps) {
  const [activeSection, setActiveSection] = useState(navLabels[0]);
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "solutions",
      "teams",
      "news",
      "contact"
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(navLabels[index]),
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navLabels]);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const otherLang = lang === "en" ? "id" : "en";

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <motion.div
        className="absolute inset-0 border-b border-gray-200 bg-white shadow-sm"
        initial={false}
        animate={{ opacity: overHero ? 0 : 1, y: overHero ? -16 : 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
      />

      <div
        className={`relative transition-all duration-300 ${
          overHero
            ? "px-4 pt-4 pb-2 sm:px-10 lg:px-20"
            : "px-4 py-3 sm:px-10 lg:px-20"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-4 transition-all duration-300 ${
            overHero
              ? "rounded-2xl border border-white/20 bg-white/15 px-4 py-2.5 sm:px-6 sm:py-3 shadow-lg backdrop-blur-md"
              : "rounded-none border border-transparent bg-transparent px-0 py-0 shadow-none"
          }`}
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <Image
              src={
                overHero
                  ? "/LOGO MEDIVARA PUTIH WEBSITE.png"
                  : "/LOGO MEDIVARA WEBSITE.png"
              }
              alt="Medivara"
              width={143}
              height={48}
              className="h-10 w-auto sm:h-12"
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </a>

          <nav
            className={`hidden items-center gap-6 text-base font-bold transition-colors lg:flex ${
              overHero ? "text-white" : "text-navy"
            }`}
          >
            {navLabels.map((label, index) => {
              const href = navHrefs[index];
              const isPageLink = href && !href.startsWith("#");
              const isActive = activeSection === label;
              const linkClass = `underline-offset-8 decoration-2 ${
                isActive
                  ? overHero
                    ? "text-coral underline"
                    : "text-teal underline"
                  : overHero
                    ? "hover:text-coral"
                    : "hover:text-teal"
              }`;
              return isPageLink ? (
                <Link
                  key={label}
                  href={`/${lang}/${href}`}
                  className={linkClass}
                >
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className={linkClass}>
                  {label}
                </a>
              );
            })}

            <div className="relative group flex items-center">
              <button className="flex items-center gap-1 text-base font-bold">
                {lang.toUpperCase()} <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 top-full z-50 hidden pt-3 group-hover:block">
                <div className="min-w-15 rounded-lg bg-white py-1 shadow-lg">
                  <Link
                    href={`/${otherLang}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                  >
                    {otherLang.toUpperCase()}
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div
            className={`flex items-center gap-4 lg:hidden ${overHero ? "text-white" : "text-navy"}`}
          >
            <Link href={`/${otherLang}`} className="text-sm font-bold">
              {otherLang.toUpperCase()}
            </Link>
            <button
              onClick={() => setOpen((value) => !value)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-lg bg-navy/90 px-4 py-3 backdrop-blur-sm sm:mt-4 sm:px-10 sm:py-4 lg:hidden">
            <nav className="flex flex-col gap-4 text-lg font-bold text-white">
              {navLabels.map((label, index) => {
                const href = navHrefs[index];
                const isPageLink = href && !href.startsWith("#");
                const mobileClass = `underline-offset-8 decoration-2 ${
                  activeSection === label ? "text-coral underline" : ""
                }`;
                return isPageLink ? (
                  <Link
                    key={label}
                    href={`/${lang}/${href}`}
                    onClick={() => setOpen(false)}
                    className={mobileClass}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={mobileClass}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
