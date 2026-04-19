import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
})

export const metadata: Metadata = {
  title: 'Medivara - Your Healthcare Business Partner',
  description:
    'Medivara is a healthcare consulting, management, and development firm helping hospitals and healthcare organizations from strategy and system design to actual operations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
