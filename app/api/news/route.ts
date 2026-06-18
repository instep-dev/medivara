import { NextRequest, NextResponse } from 'next/server'
import enMessages from '@/messages/en.json'
import idMessages from '@/messages/id.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') ?? 'en'

  const messages = lang === 'id' ? idMessages : enMessages
  return NextResponse.json(messages.news.items)
}
