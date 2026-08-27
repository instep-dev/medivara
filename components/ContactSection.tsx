"use client";

import { contactInfo } from "@/data/data";
import { motion } from "framer-motion";
import {
  Envelope,
  Globe,
  LinkedinLogo,
  Phone,
  WhatsappLogoIcon
} from "@phosphor-icons/react";

type ContactDict = {
  form: {
    label: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    titlePlaceholder: string;
    messagePlaceholder: string;
    uploadLabel: string;
    privacyText: string;
    privacyLink: string;
    sendButton: string;
  };
  info: {
    heading: string;
    companyName: string;
    website: string;
    phone: string;
    email: string;
    linkedinLabel: string;
    copyright: string;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 }
  })
};

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const f = dict.form;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080d0f] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/new-images/BACKGROUND CONTACT.jpg')" }}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-[2fr_3.5fr] md:gap-3 md:px-12 md:py-30">
        <div className="flex flex-col justify-center text-white">
          <h2 className="mb-4 text-lg font-bold sm:text-xl md:mb-5 md:text-2xl">
            {dict.info.companyName}
          </h2>
          <div className="space-y-3 text-sm font-semibold sm:text-md md:text-lg">
            <p className="flex items-center gap-3 transition-colors sm:gap-4">
              <Globe size={28} weight="bold" />
              <span>{dict.info.website}</span>
            </p>
            <p className="flex items-center gap-3 transition-colors sm:gap-4">
              <WhatsappLogoIcon size={28} weight="bold" />
              <span>{dict.info.phone}</span>
            </p>
            <p className="flex items-center gap-3 transition-colors sm:gap-4">
              <Envelope size={28} weight="bold" />
              <span>{dict.info.email}</span>
            </p>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="border border-teal px-4 py-4 sm:px-5 md:px-20 md:py-7"
        >
          <div className="mb-5 text-center text-white">
            <p className="mb-2 text-xs font-bold lowercase">— {f.label}</p>
            <p className="text-lg font-bold sm:text-xl">{f.subtitle}</p>
          </div>

          <form className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <input
                type="text"
                placeholder={f.namePlaceholder}
                className="border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
              />
              <input
                type="email"
                placeholder={f.emailPlaceholder}
                className="border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
              />
            </div>

            <input
              type="text"
              placeholder={f.titlePlaceholder}
              className="w-full border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
            />

            <textarea
              placeholder={f.messagePlaceholder}
              rows={5}
              className="w-full resize-none border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
            />

            <div>
              <p className="mb-1 text-xs text-white">{f.uploadLabel}</p>
              <input
                type="file"
                className="text-xs text-white file:mr-3 file:rounded file:border-0 file:bg-teal file:px-2 file:py-1 file:text-xs file:font-medium file:text-black file:transition-colors hover:file:bg-teal/80"
              />
            </div>

            <div className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                id="privacy"
                className="appearance-none h-4 w-4 accent-teal bg-transparent border border-teal checked:bg-teal checked:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
              />
              <label htmlFor="privacy" className="text-xs">
                {f.privacyText}{" "}
                <span className="cursor-pointer text-teal underline">
                  {f.privacyLink}
                </span>
              </label>
            </div>

            <div className="pt-2 text-right">
              <button
                type="submit"
                className="text-xs font-medium tracking-wide text-teal transition-colors hover:text-white"
              >
                {f.sendButton} →
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="relative z-10 bg-linear-to-r from-coral to-teal">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2.5 sm:py-3 md:px-8">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} {dict.info.copyright}
          </p>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.info.linkedinLabel}
            className="text-white hover:text-navy transition-colors"
          >
            <LinkedinLogo size={22} weight="fill" />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black/35" aria-hidden="true" />
    </section>
  );
}
