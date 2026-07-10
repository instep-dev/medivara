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

export default function SolutionSection({ dict }: { dict: SolutionDict }) {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutionMeta.map((meta, index) => {
            const text = dict.items[index]
            if (!text) return null

            return (
              <motion.div
                key={meta.id}
                id={`service-${meta.id}`}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="flex gap-5 items-start rounded-2xl border-3 border-gray-200 p-6 md:p-8"
              >
                <div className="relative w-14 h-14 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src={meta.image}
                    alt={text.title.replace('\n', ' ')}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-gray-700 font-bold text-lg leading-tight mb-2">
                    {text.title.replace('\n', ' ')}
                  </h3>
                  {text.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{text.description}</p>
                  )}
                  {text.bulletPoints && (
                    <ul className="space-y-1 mb-2">
                      {text.bulletPoints.map((point, i) => (
                        <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                          <span className="text-gray-500">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {text.goal && (
                    <p className="text-gray-600 text-sm leading-relaxed">{text.goal}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
