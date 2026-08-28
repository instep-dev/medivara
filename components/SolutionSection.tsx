"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { solutionMeta } from "@/data/data";

type SolutionItem = {
  title: string;
  content?: string;
  description?: string;
  bulletPoints?: string[];
  goal?: string;
};

type SolutionDict = {
  title: string;
  items: SolutionItem[];
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: i * 0.08 }
  })
};

export default function SolutionSection({ dict }: { dict: SolutionDict }) {
  return (
    <section
      id="solutions"
      className="bg-slate-700 py-10 sm:py-12 md:py-14 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/new-images/BACKGROUND BIRU.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {dict.title}
          </h2>
          <Image
            src="/underline.png"
            alt=""
            width={220}
            height={30}
            className="mt-1 h-1 w-24 object-fill md:h-1.5 md:w-36"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-20 gap-y-8 md:gap-y-10">
          {solutionMeta.map((meta, index) => {
            const text = dict.items[index];
            if (!text) return null;

            return (
              <motion.div
                key={meta.id}
                id={`service-${meta.id}`}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="min-w-0 flex flex-col justify-start items-start"
              >
                <div className="relative aspect-[16/9] w-full max-w-[32rem] overflow-hidden rounded-[1.5rem] bg-gray-200">
                  <Image
                    src={meta.image}
                    alt={text.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="pt-4 sm:pt-5">
                  <h3 className="text-teal font-bold text-xl sm:text-2xl leading-tight mb-2">
                    {text.title.replace("\n", " ")}
                  </h3>
                  {text.description && (
                    <p className="text-white text-sm sm:text-base leading-relaxed mb-2">
                      {text.description}
                    </p>
                  )}
                  {text.bulletPoints && (
                    <ul className="space-y-1 mb-2">
                      {text.bulletPoints.map((point, i) => (
                        <li
                          key={i}
                          className="text-white text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-white">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {text.goal && (
                    <p className="text-white text-sm leading-relaxed mt-2">
                      {text.goal}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/*
UNUSED JSON DATA

EN: 

{
  "title": "Quality &\nAccreditation Service",
  "bulletPoints": [
    "KARS & JCI Accreditation Advisory",
    "Patient Safety & Quality Programs",
    "Workforce Development & Clinical Training"
  ],
  "goal": "Goal: hospitals achieve higher standards of healthcare quality, governance and compliance"
},
{
  "title": "Strategic &\nbusiness development",
  "bulletPoints": [
    "Feasibility study",
    "Land banking & hospital planning",
    "Business plan & financial modelling",
    "Strategic marketing planning",
    "Investment structuring & capital funding"
  ],
  "goal": "Goal: Your hospital is built on clear numbers and realistic expectations."
}

ID:

{
  "title": "Layanan Kualitas &\nAkreditasi",
  "bulletPoints": [
    "Konsultasi Akreditasi KARS & JCI",
    "Program Keselamatan Pasien & Kualitas",
    "Pengembangan Tenaga Kerja & Pelatihan Klinis"
  ],
  "goal": "Tujuan: Rumah sakit mencapai standar yang lebih tinggi dalam kualitas layanan kesehatan, tata kelola, dan kepatuhan."
},
{
  "title": "Strategi &\nPengembangan Bisnis",
  "bulletPoints": [
    "Studi kelayakan",
    "Perbankan lahan & perencanaan rumah sakit",
    "Rencana bisnis & pemodelan keuangan",
    "Perencanaan pemasaran strategis",
    "Strukturisasi investasi & pendanaan modal"
  ],
  "goal": "Tujuan: Rumah sakit Anda dibangun di atas angka yang jelas dan ekspektasi yang realistis."
}

*/
