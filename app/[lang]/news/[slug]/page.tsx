import { getDictionary, hasLocale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NewsNavbar from '@/components/NewsNavbar'
import { newsArticleImages } from '@/data/data'

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const article = dict.news.items.find((item) => item.slug === slug)
  if (!article) notFound()

  const links = dict.nav.links
  const paragraphs = article.content.split('\n\n').filter(Boolean)
  const imgSrc = newsArticleImages[article.slug]

  return (
    <>
      <NewsNavbar lang={lang} homeLabel={links[0]} newsLabel={links[6]} />

      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">

          {/* Back link */}
          <Link
            href={`/${lang}/news`}
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-teal transition-colors mb-6"
          >
            ← {lang === 'id' ? 'Kembali' : 'Back'}
          </Link>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          {/* Author · Date */}
          <p className="text-sm text-gray-400 mb-6">
            {article.slug !== 'transforming-hospitals-from-the-inside-out' && (
              <>
                {lang === 'id' ? 'Oleh' : 'By'}:{' '}
                <span className="text-gray-600 font-medium">{article.author}</span>
                {' · '}
              </>
            )}
            {article.date}
          </p>

          {/* Hero image */}
          <div className="w-full aspect-video rounded-sm mb-8 overflow-hidden relative bg-gray-200">
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width:768px) 100vw, 768px"
              />
            )}
          </div>

          {/* Article body */}
          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Source */}
          <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
            {lang === 'id' ? 'Sumber' : 'Source'}:{' '}
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              {article.source}
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
