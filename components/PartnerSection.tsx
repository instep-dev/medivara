"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { isPartnerBulletIcons } from "@/data/data";

type PartnerSectionContent = {
  title?: string;
  intro?: string;
  bulletPoints?: string[];
  outro?: string;
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const }
  }
};

export default function PartnerSection({
  section
}: {
  section: PartnerSectionContent;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="relative w-full"
      style={{
        backgroundImage: 'url("/new-images/IMAGE TRUSTED.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div variants={fadeLeft}>
          {section.title && (
            <h2 className="mb-5 text-3xl font-bold text-white md:text-[2.5rem]">
              {section.title}
            </h2>
          )}
          {section.intro && (
            <p className="mb-6 text-lg leading-relaxed text-white">
              {section.intro}
            </p>
          )}
          {section.bulletPoints && (
            <ul className="mb-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {section.bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm leading-relaxed text-white"
                >
                  <Image
                    src={
                      isPartnerBulletIcons[index % isPartnerBulletIcons.length]
                    }
                    alt=""
                    width={80}
                    height={80}
                    className="mt-0.5 h-12 w-12 shrink-0 object-contain"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          {section.outro && (
            <p className="text-lg font-semibold leading-relaxed text-white">
              {section.outro}
            </p>
          )}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
    </motion.div>
  );
}
