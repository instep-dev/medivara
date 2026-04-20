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
  index,
  imageClass,
  nameClass,
  roleClass,
}: {
  member: { image: string; name: string; role: string }
  index: number
  imageClass: string
  nameClass: string
  roleClass: string
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className="flex flex-col items-center"
    >
      <div className={`relative shadow-xl rounded-md overflow-hidden mb-3 ring-2 ring-gray-100 ${imageClass}`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <h3 className={`text-teal font-semibold text-center leading-tight ${nameClass}`}>
        {member.name}
      </h3>
      <p className={`text-gray-500 text-center text-xs mt-1 leading-tight ${roleClass}`}>
        {member.role}
      </p>
    </motion.div>
  )
}

export default function TeamsSection({ dict }: { dict: TeamsDict }) {
  const members = teamImages.map((image, i) => ({
    image,
    name: dict.members[i]?.name ?? '',
    role: dict.members[i]?.role ?? '',
  }))

  const row1 = members.slice(0, 4)
  const row2 = members.slice(4, 7)

  return (
    <section id="teams" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-coral text-center mb-12">{dict.title}</h2>
        {/* Mobile & tablet */}
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
              index={i}
              imageClass="w-full h-44"
              nameClass="text-base mt-2"
              roleClass="w-full"
            />
          ))}
        </motion.div>

        {/* Desktop: original two-row layout */}
        <div className="hidden lg:block">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex justify-center gap-12"
          >
            {row1.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                index={i}
                imageClass="w-64 h-50"
                nameClass="text-xl mt-3"
                roleClass="w-52"
              />
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex justify-center gap-12 mt-12"
          >
            {row2.map((member, i) => (
              <MemberCard
                key={member.name}
                member={member}
                index={i}
                imageClass="w-64 h-50"
                nameClass="text-xl mt-3"
                roleClass="w-46"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
