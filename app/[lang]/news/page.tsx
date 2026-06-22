import { getDictionary, hasLocale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NewsNavbar from '@/components/NewsNavbar'
import { newsArticleImages } from '@/data/data'

type NewsItem = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  source: string
  sourceUrl: string
  category: string
}

function NewsCard({
  item,
  lang,
  className = '',
  titleSize = 'text-sm',
}: {
  item: NewsItem
  lang: string
  className?: string
  titleSize?: string
}) {
  const imgSrc = newsArticleImages[item.slug]

  return (
    <Link
      href={`/${lang}/news/${item.slug}`}
      className={`group relative overflow-hidden bg-gray-300 block ${className}`}
    >
      {imgSrc ? (
        <Image src={imgSrc} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 bg-gray-400" />
      )}

      {/* dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

      {/* text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-3 md:p-4">
        <span className="inline-block bg-white/25 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">
          {item.category}
        </span>
        <h2
          className={`text-white font-semibold leading-snug line-clamp-3 group-hover:underline ${titleSize}`}
        >
          {item.title}
        </h2>
      </div>
    </Link>
  )
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const news = dict.news
  const links = dict.nav.links

  const featured = news.items.slice(0, 3)
  const rest = news.items.slice(3)

  return (
    <>
      <NewsNavbar lang={lang} homeLabel={links[0]} newsLabel={links[6]} />

      <main className="min-h-screen bg-white pt-28">

        {/* News grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">

          {/* Featured row: 1 big + 2 stacked */}
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
              {/* Big card — spans 2 cols */}
              <NewsCard
                item={featured[0]}
                lang={lang}
                className="md:col-span-2 h-[260px] md:h-[460px]"
                titleSize="text-base md:text-xl"
              />

              {/* 2 stacked cards */}
              <div className="flex flex-row md:flex-col gap-3 md:h-[460px]">
                {featured[1] && (
                  <NewsCard
                    item={featured[1]}
                    lang={lang}
                    className="flex-1 min-h-[140px]"
                  />
                )}
                {featured[2] && (
                  <NewsCard
                    item={featured[2]}
                    lang={lang}
                    className="flex-1 min-h-[140px]"
                  />
                )}
              </div>
            </div>
          )}

          {/* 3-column grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {rest.map((item) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  lang={lang}
                  className="h-[220px]"
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
