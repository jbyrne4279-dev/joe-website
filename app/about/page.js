import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'About Us | RICS-Regulated RCA Specialists',
  description:
    'A RICS-regulated practice focused solely on reinstatement cost assessments, with chartered surveyors carrying over 50 years of combined experience. London-based, working across the whole UK.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | RICS-Regulated RCA Specialists',
    description:
      'A RICS-regulated practice focused solely on reinstatement cost assessments, working across the whole UK from a London base.',
    url: '/about',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: `${SITE_URL}/about`,
  inLanguage: 'en-GB',
  mainEntity: { '@id': `${SITE_URL}/` },
}

const values = [
  { icon: 'verified', title: 'RICS-regulated', desc: 'Every assessment is produced under RICS regulation, to the professional standard insurers and brokers expect.' },
  { icon: 'target', title: 'A single specialism', desc: 'We do reinstatement cost assessments and nothing else — not valuation as a sideline to general surveying.' },
  { icon: 'schedule', title: 'Delivered in 48 hours', desc: 'A focused practice means fast turnaround: most desktop assessments land within 48 hours of instruction.' },
  { icon: 'public', title: 'UK-wide coverage', desc: 'London-based, working across England, Scotland, Wales and Northern Ireland.' },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <main>
        <Breadcrumbs items={[{ name: 'About' }]} accent="#1A6B4A" />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 px-6" style={{ background: '#0f3d28' }}>
          <div className="relative z-10 w-full max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">About us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              Reinstatement cost, <span style={{ color: '#d4af37' }}>done properly</span>.
            </h1>
            <p className="text-base text-white/75 leading-relaxed max-w-xl mx-auto">
              We are a RICS‑regulated practice that does one thing: work out what it would cost to rebuild your property,
              accurately, so you are never caught underinsured.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Who we are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">A focused practice, not a general one.</h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                Reinstatement Cost Assessment Ltd is a RICS‑regulated firm built around a single specialism. Our chartered
                surveyors carry more than 50 years of combined experience, focused entirely on establishing accurate
                rebuild costs for buildings insurance &mdash; residential, commercial, listed and complex property alike.
              </p>
              <p>
                That focus is deliberate. When reinstatement cost assessment is the whole of what a practice does, rather
                than a sideline to valuation or general surveying, the figures are quicker to produce and stand up better
                to an insurer&rsquo;s scrutiny. It is why brokers and managing agents across the UK trust our reports at
                renewal.
              </p>
              <p>
                We are based at 17 Hanover Square in central London and work across the whole of the UK &mdash; remotely
                for standard property, and on site where a building&rsquo;s complexity or value calls for it.
              </p>
              <p className="text-sm text-secondary/80">
                Reinstatement Cost Assessment Limited is registered in England &amp; Wales, company number 17101918.
              </p>
            </div>
          </div>
        </section>

        {/* What we stand for */}
        <section className="scroll-reveal py-24 px-6" style={{ background: '#f4f1e8' }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What we stand for</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Four things we don&rsquo;t compromise on.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-black/5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(26,107,74,0.1)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.4rem', color: '#1A6B4A' }}>{icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                    <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learn more */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">New to reinstatement cost?</h2>
            <p className="text-secondary mb-8 max-w-lg leading-relaxed">Start with our plain‑English guide to what a building reinstatement cost is and how it is calculated.</p>
            <Link href="/building-reinstatement-cost" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block">Read the guide</Link>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  )
}
