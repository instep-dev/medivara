import { hasLocale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import SmoothScroll from '@/components/SmoothScroll'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return <SmoothScroll>{children}</SmoothScroll>
}
