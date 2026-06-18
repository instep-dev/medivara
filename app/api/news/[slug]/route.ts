import { NextRequest, NextResponse } from 'next/server'
import enMessages from '@/messages/en.json'
import idMessages from '@/messages/id.json'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') ?? 'en'

  const messages = lang === 'id' ? idMessages : enMessages
  const article = messages.news.items.find((item) => item.slug === slug)

  if (!article) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(article)
}
