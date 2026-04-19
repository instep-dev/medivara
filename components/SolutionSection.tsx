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
      <div className="max-w-6xl mx-auto px-8">
        {solutionMeta.map((meta, index) => {
          const text = dict[index]
          if (!text) return null
          const isTeal = meta.cardColor === 'teal'

          return (
            <div key={meta.id} className="flex gap-10 items-start mb-14 last:mb-0">
              <div
                className={`flex-shrink-0 w-52 h-52 rounded-2xl flex flex-col items-center justify-center gap-4 p-5 ${
                  isTeal ? 'bg-teal' : 'bg-coral'
                }`}
              >
                <div className="relative w-16 h-16">
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

              <div className="flex-1 pt-4">
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
