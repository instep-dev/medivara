"use client";

import { useState } from "react";
import { contactInfo } from "@/data/data";
import { motion } from "framer-motion";
import {
  Envelope,
  Globe,
  LinkedinLogo,
  MapPin,
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
    sendingLabel: string;
    successMessage: string;
    errorMessage: string;
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

export default function ContactSection({ dict }: { dict: ContactDict }) {
  const f = dict.form;
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form)
      });

      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#080d0f] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/new-images/BACKGROUND CONTACT.jpg')" }}
    >
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-16 pb-24 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[2fr_3.5fr] lg:gap-3">
          <div className="flex flex-col justify-center text-white">
            <h2 className="mb-4 text-lg font-bold sm:text-xl lg:mb-5 lg:text-2xl">
              {dict.info.companyName}
            </h2>
            <div className="space-y-3 text-sm font-semibold sm:text-lg lg:text-lg">
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
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.info.linkedinLabel}
                className="flex items-center gap-3 transition-colors hover:text-teal sm:gap-4"
              >
                <LinkedinLogo size={28} weight="bold" />
                <span>{dict.info.linkedinLabel}</span>
              </a>
              <div className="flex items-start gap-3 transition-colors sm:gap-4">
                <MapPin size={28} weight="bold" className="shrink-0" />
                <address className="not-italic">
                {contactInfo.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))} 
                </address>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="border border-teal px-4 py-4 sm:px-5 lg:px-20 lg:py-7"
          >
            <div className="mb-5 text-center text-white">
              <p className="mb-2 text-xs font-bold lowercase">— {f.label}</p>
              <p className="text-lg font-bold sm:text-xl">{f.subtitle}</p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={f.namePlaceholder}
                  className="border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={f.emailPlaceholder}
                  className="border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
                />
              </div>

              <input
                type="text"
                name="subject"
                required
                placeholder={f.titlePlaceholder}
                className="w-full border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
              />

              <textarea
                placeholder={f.messagePlaceholder}
                name="message"
                required
                rows={5}
                className="w-full resize-none border border-teal bg-transparent px-3 py-2.5 text-xs text-white outline-none placeholder:text-white focus:ring-1 focus:ring-teal"
              />

              <div>
                <p className="mb-1 text-xs text-white">{f.uploadLabel}</p>
                <input
                  type="file"
                  name="file"
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
                  disabled={status === "sending"}
                  className="text-xs font-medium tracking-wide text-teal transition-colors hover:text-white"
                >
                  {status === "sending" ? f.sendingLabel : f.sendButton} →
                </button>
              </div>
              {status === "success" && (
                <p className="text-xs text-teal">{f.successMessage}</p>
              )}
              {status === "error" && (
                <p className="text-xs text-coral">{f.errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} {dict.info.copyright}
          </p>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.info.linkedinLabel}
            className="text-white transition-colors hover:text-teal"
          >
            <LinkedinLogo size={40} weight="fill" />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black/35" aria-hidden="true" />
    </section>
  );
}
