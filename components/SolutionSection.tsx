import Image from 'next/image'
import { solutionMeta } from '@/data/data'

type SolutionDict = {
  title: string
  content?: string
  bulletPoints?: string[]
  goal?: string
}

export default function SolutionSection({ dict }: { dict: SolutionDict[] }) {
  return (
    <section id="solution" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {solutionMeta.map((meta, index) => {
          const text = dict[index]
          if (!text) return null
          const isTeal = meta.cardColor === 'teal'

          return (
            <div key={meta.id} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start mb-10 md:mb-14 last:mb-0">
              <div
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
              </div>

              <div className="flex-1 pt-0 md:pt-4">
                {meta.type === 'lorem' && text.content && (
                  <p className="text-gray-700 text-sm leading-relaxed">{text.content}</p>
                )}
                {meta.type === 'bullets' && (
                  <>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
