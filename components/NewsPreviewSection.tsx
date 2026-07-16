'use client'

import Image from 'next/image'
import Link from 'next/link'
import { newsArticleImages } from '@/data/data'

type NewsItem = {
  id: number
  slug: string
  title: string
  date: string
}

type NewsPreviewDict = {
  pageTitle: string
  items: NewsItem[]
}

export default function NewsPreviewSection({ dict, lang }: { dict: NewsPreviewDict; lang: string }) {
  const latest = [...dict.items]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  if (latest.length === 0) return null

  return (
    <section id="news" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href={`/${lang}/news`} className="inline-block mb-10 group">
          <h2 className="text-[28px] md:text-[34px] font-bold text-graphite group-hover:text-coral transition-colors">
            {dict.pageTitle}
          </h2>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {latest.map((item) => {
            const imgSrc = newsArticleImages[item.slug]
            return (
              <Link key={item.id} href={`/${lang}/news`} className="group block">
                <div className="relative h-44 md:h-52 rounded-lg overflow-hidden mb-4 bg-gray-200">
                  {imgSrc && (
                    <Image
                      src={imgSrc}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  )}
                </div>
                <h3 className="text-graphite font-semibold text-sm md:text-base leading-snug line-clamp-3 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
              </Link>
            )
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href={`/${lang}/news`}
            className="inline-block px-7 py-2.5 border-2 border-graphite text-graphite text-sm font-semibold rounded hover:bg-graphite hover:text-white transition-all duration-200"
          >
            More
          </Link>
        </div>
      </div>
    </section>
  )
}
