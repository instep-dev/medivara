import Image from 'next/image'
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

type AboutDict = { sections: Section[] }

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

export default function AboutSection({ dict }: { dict: AboutDict }) {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 mt-42">
        {aboutSectionMeta.map((meta, index) => {
          const section = dict.sections[index]
          if (!section) return null

          return (
            <div
              key={meta.id}
              className="grid grid-cols-2 gap-12 items-start py-16 border-b border-gray-100 last:border-0"
            >
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image src={meta.image} alt={meta.imageAlt} fill className="object-cover" />
              </div>

              <div>
                {meta.type === 'paragraphs' && section.title && (
                  <>
                    <h2 className={`text-2xl font-bold mb-5 ${meta.titleColor === 'coral' ? 'text-coral' : 'text-teal'}`}>
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
                    <h2 className={`text-2xl font-bold mb-5 ${meta.titleColor === 'coral' ? 'text-coral' : 'text-teal'}`}>
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
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
