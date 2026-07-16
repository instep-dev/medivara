'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { teamImages } from '@/data/data'

type Member = { name: string; role: string }
type TeamsDict = { title: string; members: Member[] }

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: i * 0.09 },
  }),
}

function MemberCard({
  member,
  image,
  index,
  compact = false,
}: {
  member: Member
  image: string
  index: number
  compact?: boolean
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="flex flex-col items-center"
    >
      <div
        className={`relative overflow-hidden rounded-md shadow-md ring-2 ring-gray-100 flex-shrink-0 ${
          compact ? 'w-full aspect-[3/2]' : 'lg:w-52 lg:h-44 xl:w-64 xl:h-52'
        }`}
      >
        <Image
          src={image}
          alt={member.name}
          fill
          className="object-cover object-top z-10"
        />
        <div className="absolute top-6 left-0 right-0 bottom-0">
          <Image src="/SHADOW PHOTO.png" alt="shadow" fill className="object-cover object-bottom" />
        </div>
      </div>
      <h3
        className={`text-teal font-semibold text-center leading-tight mt-6 ${
          compact ? 'text-sm' : 'text-base lg:text-lg'
        }`}
      >
        {member.name}
      </h3>
      <p
        className={`text-gray-500 text-center leading-tight mt-1 max-w-[160px] ${
          compact ? 'text-[11px]' : 'text-xs'
        }`}
      >
        {member.role}
      </p>
    </motion.div>
  )
}

export default function TeamsSection({ dict }: { dict: TeamsDict }) {
  const members = dict.members.map((member, i) => ({
    ...member,
    image: teamImages[i] ?? '',
  }))

  const row1 = members.slice(0, 4)
  const row2 = members.slice(4, 7)

  return (
    <section id="teams" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-[28px] md:text-[34px] font-bold text-graphite text-center mb-12">
          {dict.title}
        </h2>

        {/* Mobile & tablet: 2-3 column grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6"
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
            viewport={{ once: true, margin: '-60px' }}
            className="flex justify-center gap-4 xl:gap-6"
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
            viewport={{ once: true, margin: '-60px' }}
            className="flex justify-center gap-6 xl:gap-8 mt-10"
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
  )
}
