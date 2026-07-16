import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato-var',
})

export const metadata: Metadata = {
  title: 'Medivara - Your Healthcare Business Partner',
  description:
    'Medivara adalah firma konsultan, manajemen, dan pengembangan layanan kesehatan yang membantu rumah sakit dan organisasi kesehatan — dari strategi dan desain sistem hingga operasional nyata.',
  keywords: [
    'Medivara',
    'medivara.co.id',
    'konsultan rumah sakit',
    'manajemen rumah sakit',
    'pengembangan rumah sakit',
    'healthcare consulting Indonesia',
    'hospital management Indonesia',
    'hospital development',
    'healthcare business partner',
    'hospital turnaround',
    'business plan rumah sakit',
    'akreditasi rumah sakit',
    'KARS JCI accreditation',
  ],
  authors: [{ name: 'Medivara' }],
  creator: 'Medivara',
  publisher: 'Medivara',
  metadataBase: new URL('https://www.medivara.co.id'),
  alternates: {
    canonical: 'https://www.medivara.co.id',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: 'https://www.medivara.co.id',
    siteName: 'Medivara',
    title: 'Medivara - Your Healthcare Business Partner',
    description:
      'Medivara membantu rumah sakit dan institusi kesehatan berkembang — dari strategi bisnis, operasional, hingga akreditasi.',
    images: [
      {
        url: '/LOGO MEDIVARA WEBSITE.png',
        width: 1200,
        height: 630,
        alt: 'Medivara - Healthcare Business Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medivara - Your Healthcare Business Partner',
    description:
      'Firma konsultan dan manajemen kesehatan terpercaya untuk pengembangan rumah sakit di Indonesia.',
    images: ['/LOGO MEDIVARA WEBSITE.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={lato.variable}>
      <body>{children}</body>
    </html>
  )
}
