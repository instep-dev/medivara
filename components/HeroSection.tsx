"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ServiceCard = { label: string; desc: string };
type HeroDict = {
  heading: string;
  description: string;
  learnMore: string;
  serviceCards: ServiceCard[];
};

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className="flex h-full min-h-28 flex-col items-center justify-center gap-1 rounded-xl bg-[#808185] px-3 py-3 text-center sm:min-h-32 sm:px-4 sm:py-4">
      <h3 className="text-white text-base font-black uppercase tracking-wide leading-tight text-balance sm:text-lg">
        {card.label}
      </h3>
      <p className="text-white/70 text-xs leading-snug line-clamp-2 text-pretty sm:text-sm">
        {card.desc}
      </p>
    </div>
  );
}

export default function HeroSection({ dict }: { dict: HeroDict }) {
  const cards = dict.serviceCards.slice(0, 4);

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col">
      <div className="absolute inset-0">
        <Image
          src="/new-images/GEDUNG HOME copy.jpg"
          alt="Healthcare professionals"
          fill
          className="object-cover object-bottom md:object-right"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            {dict.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut" as const,
              delay: 0.25
            }}
            className="text-white/90 text-base leading-relaxed"
          >
            {dict.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut" as const,
              delay: 0.45
            }}
            className="mt-5 flex justify-start md:mt-6"
          >
            <a
              href="#about"
              className="inline-block px-9 py-2.5 bg-teal text-white text-lg font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-all duration-200"
            >
              {dict.learnMore}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile & tablet service cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 grid grid-cols-2 gap-2 px-4 pb-6 sm:gap-3 sm:px-6 sm:pb-8 lg:hidden"
      >
        {cards.map((card, index) => (
          <ServiceCardItem key={index} card={card} />
        ))}
      </motion.div>

      {/* Desktop service cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 mx-auto hidden w-full max-w-7xl grid-cols-4 gap-4 px-4 pb-6 sm:px-6 lg:grid lg:px-8"
      >
        {cards.map((card, index) => (
          <ServiceCardItem key={index} card={card} />
        ))}
      </motion.div>
    </section>
  );
}
