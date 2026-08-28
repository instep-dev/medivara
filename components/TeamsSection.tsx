"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamImages } from "@/data/data";
import FramedImage from "./ImageFrame";

type Member = { name: string; role: string };
type TeamsDict = { title: string; members: Member[] };

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.09 }
  })
};

function MemberCard({
  member,
  image,
  index,
  compact = false
}: {
  member: Member;
  image: string;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="flex flex-col items-center"
    >
      <div
        className={`relative shrink-0 ${compact ? "w-full flex flex-col gap-4" : "w-52 xl:w-60 flex flex-col gap-4"}`}
      >
        <Image
          src={image}
          alt={member.name}
          width={208}
          height={208}
          className="w-full h-full object-cover aspect-5/4 z-10 shadow-[0px_5px_10px_rgba(0,0,0,0.7)]"
        />
        <div className="curved-drop-shadow"></div>
      </div>
      <h3
        className={`text-teal font-semibold text-center leading-tight ${
          compact ? "text-md" : "text-lg lg:text-xl"
        }`}
      >
        {member.name}
      </h3>
      <p
        className={`text-gray-500 text-center leading-tight mt-1 max-w-44 ${
          compact ? "text-[10px]" : "text-xs"
        }`}
      >
        {member.role}
      </p>
    </motion.div>
  );
}

export default function TeamsSection({ dict }: { dict: TeamsDict }) {
  const members = dict.members.map((member, i) => ({
    ...member,
    image: teamImages[i] ?? ""
  }));

  const row1 = members.slice(0, 4);
  const row2 = members.slice(4, 7);

  return (
    <section id="teams" className="bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-graphite">
            {dict.title}
          </h2>
          <Image
            src="/underline.png"
            alt=""
            width={220}
            height={30}
            className="h-1 w-18 object-fill md:h-2 md:w-28"
          />
        </div>

        {/* Mobile & tablet: 2-3 column grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:hidden"
        >
          {members.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              image={member.image}
              index={i}
              compact
            />
          ))}
        </motion.div>

        {/* Desktop: row 1 (4) + row 2 (3) */}
        <div className="hidden lg:block">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex justify-between gap-10 xl:gap-14"
          >
            {row1.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                image={member.image}
                index={i}
              />
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 flex justify-center gap-8 xl:gap-10"
          >
            {row2.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                image={member.image}
                index={i + 4}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
