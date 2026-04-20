'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const clients = [
  { name: 'Dharma Nugraha', logo: '/LOGO DHARMA NUGRAHA.png' },
  { name: 'Darra Medika', logo: '/LOGO DARRA MEDIKA PNG.png' },
]

const filledClients = Array.from({ length: 8 }, () => clients).flat()

export default function ClientsSection({ title }: { title: string }) {
  return (
    <section id="clients" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="text-4xl md:text-5xl font-semibold text-coral text-center mb-16"
        >
          {title}
        </motion.h2>
      </div>

      <Marquee speed={50} gradient gradientColor="white" gradientWidth={80} pauseOnHover>
        {filledClients.map((client, i) => (
          <div key={i} className="relative h-20 w-48 mx-12">
            <Image src={client.logo} alt={client.name} fill className="object-contain" />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
