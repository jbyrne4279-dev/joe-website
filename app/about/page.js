import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import LocationCarousel from '../components/LocationCarousel'

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
const PAGE_URL = `${SITE_URL}/about`

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
  ],
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: PAGE_URL,
  inLanguage: 'en-GB',
  mainEntity: { '@id': `${SITE_URL}/` },
}

const values = [
  { icon: 'verified', title: 'RICS‑regulated', desc: 'Every assessment is produced under RICS regulation, to the professional standard insurers and brokers expect.' },
  { icon: 'target', title: 'A single specialism', desc: 'We do reinstatement cost assessments and nothing else — not valuation as a sideline to general surveying.' },
  { icon: 'schedule', title: 'Delivered in 48 hours', desc: 'A focused practice means fast turnaround: most desktop assessments land within 48 hours of instruction.' },
  { icon: 'public', title: 'UK‑wide coverage', desc: 'London‑based, working across England, Scotland, Wales and Northern Ireland.' },
]

const coverageAreas = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol',
  'Sheffield', 'Newcastle', 'Nottingham', 'Leicester', 'Southampton',
  'Brighton', 'Cardiff', 'Edinburgh', 'Glasgow', 'Belfast',
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: 'About' }]} accent="#1A6B4A" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          fetchPriority="high"
          decoding="async"
          src="/surveyor-reinstatement-cost-assessment-rics.webp"
          alt="RICS-regulated surveyor preparing a reinstatement cost assessment"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-zinc-200 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="sm:whitespace-nowrap">Reinstatement cost</span>, <span style={{ color: '#1A6B4A' }}>done properly</span>.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              We are a RICS‑regulated practice that does one thing: work out what it would cost to rebuild your property,
              accurately, so you are never caught underinsured.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
                Speak to a surveyor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div>
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
        </div>
      </section>

      {/* What we stand for */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf3ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What we stand for</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">Four things we don&rsquo;t compromise on.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#c5ddd0]" style={{ background: '#e3efe9' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white">
                  <span className="material-symbols-outlined" style={{ fontSize: '1.3rem', color: '#1A6B4A' }}>{icon}</span>
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

      {/* UK coverage */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img width={384} height={384} loading="lazy" decoding="async" src="/uk-coverage-map.jpg" alt="Map of the United Kingdom" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-contain bg-white p-2 border border-black/5 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">UK‑wide coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">London‑based, working nationwide.</h2>
          <p className="text-secondary leading-relaxed mb-8 max-w-2xl text-[1.05rem]">
            From our central London base we assess property across the whole of the UK &mdash; from the South East to
            the Midlands, the North, Scotland, Wales and Northern Ireland.
          </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <LocationCarousel locations={coverageAreas} accent="#1A6B4A" />
        </div>
      </section>

      {/* Learn more */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#eaf3ee' }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">New to reinstatement cost?</h2>
          <p className="text-secondary mb-8 max-w-lg leading-relaxed">Start with our plain‑English guide to what a building reinstatement cost is and how it is calculated.</p>
          <Link href="/building-reinstatement-cost" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow inline-block" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>Read the guide</Link>
        </div>
      </section>

      <ContactSection
        accent="#1A6B4A"
        tintRgb="26,107,74"
        buttonStyle={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}
      />
    </main>
    </>
  )
}
