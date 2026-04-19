import { getDictionary, hasLocale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SolutionSection from '@/components/SolutionSection'
import TeamsSection from '@/components/TeamsSection'
import ContactSection from '@/components/ContactSection'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <>
      <Navbar lang={lang} navLabels={dict.nav.links} />
      <main>
        <HeroSection dict={dict.hero} />
        <AboutSection dict={dict.about} />
        <SolutionSection dict={dict.solutions} />
        <TeamsSection dict={dict.teams} />
        <ContactSection dict={dict.contact} />
      </main>
    </>
  )
}
