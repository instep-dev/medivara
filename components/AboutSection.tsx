'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutSectionMeta } from '@/data/data'

type Subsection = {
  title: string
  content?: string
  intro?: string
  bulletPoints?: string[]
  outro?: string
}

type Section = {
  title?: string
  content?: string[]
  intro?: string
  bulletPoints?: string[]
  outro?: string
  subsections?: Subsection[]
}

type AboutDict = { title: string; sections: Section[] }

function BulletContent({
  intro,
  bulletPoints,
  outro,
}: {
  intro?: string
  bulletPoints?: string[]
  outro?: string
}) {
  return (
    <>
      {intro && <p className="text-gray-700 text-sm leading-relaxed mb-3">{intro}</p>}
      {bulletPoints && (
        <ul className="space-y-1 mb-3">
          {bulletPoints.map((point, i) => (
            <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-2">
              <span className="text-gray-500 mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {outro && (
        <p className="text-gray-700 text-sm leading-relaxed font-semibold">{outro}</p>
      )}
    </>
  )
}

function SubsectionBlock({ sub, titleColor }: { sub: Subsection; titleColor: 'coral' | 'teal' }) {
  return (
    <div className="mb-8">
      <h3 className={`text-xl font-bold mb-3 ${titleColor === 'coral' ? 'text-coral' : 'text-teal'}`}>
        {sub.title}
      </h3>
      {sub.content && (
        <p className="text-gray-700 text-sm leading-relaxed">{sub.content}</p>
      )}
      {!sub.content && (
        <BulletContent intro={sub.intro} bulletPoints={sub.bulletPoints} outro={sub.outro} />
      )}
    </div>
  )
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function AboutSection({ dict }: { dict: AboutDict }) {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-8 lg:mt-42">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="text-4xl md:text-5xl font-semibold text-coral text-center mb-12"
        >
          {dict.title}
        </motion.h2>
        {aboutSectionMeta.map((meta, index) => {
          const section = dict.sections[index]
          if (!section) return null

          const isEven = index % 2 === 0

          return (
            <motion.div
              key={meta.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start py-10 md:py-16 border-b border-gray-100 last:border-0"
            >
              <motion.div
                variants={isEven ? fadeLeft : fadeRight}
                className="relative h-60 md:h-72 rounded-lg overflow-hidden"
              >
                <Image src={meta.image} alt={meta.imageAlt} fill className="object-cover" />
              </motion.div>

              <motion.div variants={isEven ? fadeRight : fadeLeft}>
                {meta.type === 'paragraphs' && section.title && (
                  <>
                    <h2 className={`text-xl md:text-2xl font-bold mb-5 ${meta.titleColor === 'coral' ? 'text-coral' : 'text-teal'}`}>
                      {section.title}
                    </h2>
                    {section.content?.map((para, i) => (
                      <p key={i} className="text-gray-700 text-sm leading-relaxed mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </>
                )}

                {meta.type === 'bullets' && section.title && (
                  <>
                    <h2 className={`text-xl md:text-2xl font-bold mb-5 ${meta.titleColor === 'coral' ? 'text-coral' : 'text-teal'}`}>
                      {section.title}
                    </h2>
                    <BulletContent
                      intro={section.intro}
                      bulletPoints={section.bulletPoints}
                      outro={section.outro}
                    />
                  </>
                )}

                {meta.type === 'subsections' && section.subsections && (
                  <>
                    {section.subsections.map((sub, i) => (
                      <SubsectionBlock
                        key={i}
                        sub={sub}
                        titleColor={meta.subsectionColors[i] as 'coral' | 'teal'}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
