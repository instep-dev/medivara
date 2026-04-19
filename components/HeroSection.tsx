import Image from 'next/image'
import { heroServiceCardImages } from '@/data/data'

type ServiceCard = { label: string; desc: string }
type HeroDict = { heading: string; description: string; serviceCards: ServiceCard[] }

export default function HeroSection({ dict }: { dict: HeroDict }) {
  const cards = heroServiceCardImages.map((image, i) => ({
    image,
    label: dict.serviceCards[i]?.label ?? '',
    desc: dict.serviceCards[i]?.desc ?? '',
  }))

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/IMAGE HOME.png"
          alt="Healthcare professionals"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-8 px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            {dict.heading}
          </h1>
          <p className="text-white/90 text-sm leading-relaxed">
            {dict.description}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-x-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-xl ${
                index % 2 === 0 ? 'bg-[#3ec5be]' : 'bg-[#ffa49c]'
              }`}
            >
              <div className="relative w-12 h-12">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-sm font-semibold text-center leading-tight">
                {card.label}
              </h3>
              <p className='text-white text-sm text-center tracking-tight'>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
