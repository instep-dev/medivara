"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutSectionMeta, partnerBulletIcons } from "@/data/data";
import FramedImage from "./ImageFrame";

type Subsection = {
  title: string;
  content?: string;
  intro?: string;
  bulletPoints?: string[];
  outro?: string;
};

type Section = {
  title?: string;
  content?: string[];
  intro?: string;
  bulletPoints?: string[];
  outro?: string;
  subsections?: Subsection[];
};

type AboutDict = { title: string; sections: Section[] };

function BulletContent({
  intro,
  bulletPoints,
  outro,
  partner
}: {
  intro?: string;
  bulletPoints?: string[];
  outro?: string;
  partner?: boolean;
}) {
  return (
    <>
      {intro && (
        <p
          className={
            "text-gray-700 text-lg leading-relaxed mb-6" +
            (partner ? " text-white" : "")
          }
        >
          {intro}
        </p>
      )}
      {bulletPoints && (
        <ul
          className={
            partner ? "grid grid-cols-2 gap-x-6 gap-y-2 mb-6" : "space-y-1 mb-6"
          }
        >
          {bulletPoints.map((point, i) => (
            <li
              key={i}
              className={
                "text-gray-700 leading-relaxed flex gap-2" +
                (partner ? " text-sm" : " text-lg") +
                (partner ? " text-white" : "")
              }
            >
              {partner ? (
                <Image
                  src={partnerBulletIcons[i % partnerBulletIcons.length]}
                  alt=""
                  width={80}
                  height={80}
                  className="mt-0.5 h-12 w-12 shrink-0 object-contain"
                />
              ) : (
                <span className="text-gray-500 mt-0.5">•</span>
              )}
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {outro && (
        <p
          className={
            "text-gray-700 text-lg leading-relaxed font-semibold" +
            (partner ? " text-white" : "")
          }
        >
          {outro}
        </p>
      )}
    </>
  );
}

function SubsectionBlock({ sub }: { sub: Subsection }) {
  return (
    <div className="mb-8">
      <h3 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-graphite">
        {sub.title}
      </h3>
      {sub.content && (
        <p className="text-gray-700 text-lg leading-relaxed">{sub.content}</p>
      )}
      {!sub.content && (
        <BulletContent
          intro={sub.intro}
          bulletPoints={sub.bulletPoints}
          outro={sub.outro}
        />
      )}
    </div>
  );
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" as const }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
};

export default function AboutSection({ dict }: { dict: AboutDict }) {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-8 lg:mt-42">
        <div className="">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-graphite">
            {dict.title}
          </h1>
          <Image
            src="/underline.png"
            alt=""
            width={120}
            height={16}
            className="h-2 w-40 object-fill sm:h-2.5"
          />
        </div>
      </div>

      {aboutSectionMeta.map((meta, index) => {
        const section = dict.sections[index];
        if (!section) return null;

        const isEven = index % 2 === 0;
        const partner = index === 3;

        return (
          <motion.div
            key={meta.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative w-full border-b border-gray-100 last:border-0"
            style={
              !isEven
                ? {
                    backgroundImage: `url("${partner ? "/new-images/IMAGE TRUSTED.jpg" : "/BACKGROUND LOGO panjang.png"}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }
                : undefined
            }
          >
            <div
              className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 ${partner ? "md:grid-cols-2" : "md:grid-cols-[8fr_7fr]"} gap-6 md:gap-8 items-start ${
                index === 0 ? "py-4 md:py-8" : "py-8 md:py-24"
              }`}
            >
              <motion.div
                variants={isEven ? fadeLeft : fadeRight}
                className={
                  "relative mx-auto aspect-9/10 w-full md:order-last flex justify-end " +
                  (partner ? "hidden" : "")
                }
              >
                <FramedImage src={meta.image} alt={meta.imageAlt} />
              </motion.div>

              <motion.div variants={isEven ? fadeRight : fadeLeft}>
                {meta.type === "paragraphs" && section.title && (
                  <>
                    <h2 className="text-3xl md:text-[2.5rem] font-bold mb-5 text-graphite">
                      {section.title}
                    </h2>
                    {section.content?.map((para, i) => (
                      <p
                        key={i}
                        className="text-gray-700 text-lg font-medium leading-relaxed mb-4 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </>
                )}

                {meta.type === "bullets" && section.title && (
                  <>
                    <h2
                      className={
                        "text-3xl md:text-[2.5rem] font-bold mb-5 text-graphite" +
                        (partner ? " text-white" : "")
                      }
                    >
                      {section.title}
                    </h2>
                    <BulletContent
                      intro={section.intro}
                      bulletPoints={section.bulletPoints}
                      outro={section.outro}
                      partner={partner}
                    />
                  </>
                )}

                {meta.type === "subsections" && section.subsections && (
                  <>
                    {section.subsections.map((sub, i) => (
                      <SubsectionBlock key={i} sub={sub} />
                    ))}
                  </>
                )}
              </motion.div>
            </div>
            {partner && (
              <div
                className="absolute inset-0 bg-black/25"
                aria-hidden="true"
              />
            )}
          </motion.div>
        );
      })}
    </section>
  );
}
