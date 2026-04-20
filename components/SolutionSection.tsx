'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { solutionMeta } from '@/data/data'

type SolutionItem = {
  title: string
  content?: string
  description?: string
  bulletPoints?: string[]
  goal?: string
}

type SolutionDict = {
  title: string
  items: SolutionItem[]
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay: i * 0.08 },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function SolutionSection({ dict }: { dict: SolutionDict }) {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="text-4xl md:text-5xl font-semibold text-coral text-center mb-12"
        >
          {dict.title}
        </motion.h2>
        {solutionMeta.map((meta, index) => {
          const text = dict.items[index]
          if (!text) return null
          const isTeal = meta.cardColor === 'teal'

          return (
            <motion.div
              key={meta.id}
              id={`service-${meta.id}`}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-10 md:mb-14 last:mb-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className={`flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-2xl flex flex-col items-center justify-center gap-4 p-5 mx-auto md:mx-0 ${
                  isTeal ? 'bg-teal' : 'bg-coral'
                }`}
              >
                <div className="relative w-14 h-14 md:w-16 md:h-16">
                  <Image
                    src={meta.image}
                    alt={text.title.replace('\n', ' ')}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-white font-bold text-center text-sm leading-tight whitespace-pre-line">
                  {text.title}
                </h3>
              </motion.div>

              <div className="flex-1 pt-0 md:pt-4">
                {(
                  <>
                    {text.description && (
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{text.description}</p>
                    )}
                    {text.bulletPoints && (
                      <ul className="space-y-1.5 mb-3">
                        {text.bulletPoints.map((point, i) => (
                          <li key={i} className="text-gray-700 text-sm leading-relaxed flex gap-2">
                            <span className="text-gray-500 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {text.goal && (
                      <p className="text-gray-700 text-sm leading-relaxed">{text.goal}</p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
