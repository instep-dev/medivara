import { getDictionary, hasLocale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SolutionSection from '@/components/SolutionSection'
import TeamsSection from '@/components/TeamsSection'
import ClientsSection from '@/components/ClientsSection'
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
        <ClientsSection title={dict.clients.title} />
        <ContactSection dict={dict.contact} />
      </main>
    </>
  )
}

// Sekarang saya lihat gambaran lengkapnya. Ini situasinya:

//   - Nameserver → Cloudflare milik vendor (kamu tidak punya akses)
//   - Rumahweb DNS → sudah ada MX + TXT Google Workspace, tapi tidak aktif karena nameserver
//   mengarah ke Cloudflare  - Vercel → minta DNS diubah di Cloudflare, tapi kamu tidak bisa akses
//   Solusinya: Switch nameserver ke Rumahweb — dan ini AMAN karena MX + TXT Google sudah ada di 
//   sana.

//   ---
//   Langkah-langkahnya:

//   Step 1 — Tambah record Vercel di Rumahweb DNS dulu (sebelum switch)

//   Klik "Add New Record" di Rumahweb DNS, tambahkan 4 record ini:

//   ┌───────┬─────────────┬───────────────────────────────────────────────────────┐
//   │ Type  │ Domain/Name │                      Destination                      │
//   ├───────┼─────────────┼───────────────────────────────────────────────────────┤
//   │ CNAME │ www         │ 7d0d5ac803d5e7c8.vercel-dns-017.com                   │
//   ├───────┼─────────────┼───────────────────────────────────────────────────────┤
//   │ TXT   │ _vercel     │ vc-domain-verify=medivara.id,40cb448bac7f393d915f     │
//   ├───────┼─────────────┼───────────────────────────────────────────────────────┤
//   │ TXT   │ _vercel     │ vc-domain-verify=www.medivara.id,67669992abd37464a4d0 │
//   ├───────┼─────────────┼───────────────────────────────────────────────────────┤
//   │ A     │ @           │ 76.76.21.21                                           │
//   └───────┴─────────────┴───────────────────────────────────────────────────────┘

//   Step 2 — Ganti nameserver di Rumahweb

//   Di panel Rumahweb, ubah nameserver dari:
//   greg.ns.cloudflare.com
//   marissa.ns.cloudflare.com
//   ke nameserver Rumahweb (kosongkan saja field-nya, klik Change Nameserver → otomatis pakai
//   Rumahweb NS).

//   Step 3 — Tunggu propagasi (1–24 jam)

//   Setelah propagasi selesai, kembali ke Vercel dan klik Refresh — domain akan terverifikasi
//   otomatis.

//   ---
//   Google Workspace tetap aman karena MX dan TXT verification sudah ada di Rumahweb DNS dan
//   langsung aktif begitu nameserver switch.

// ✻ Cooked for 39s
