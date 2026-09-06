import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'
import StepIcon from '../components/StepIcon'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment London | RICS Rebuild Cost Surveyors',
  description:
    'London‑based RICS reinstatement cost assessments for homes, blocks and commercial property. BCIS‑indexed, insurer-accepted rebuild costs delivered in 48 hours across London.',
  alternates: { canonical: '/reinstatement-cost-assessment-london' },
  openGraph: {
    title: 'Reinstatement Cost Assessment London | RICS Rebuild Cost Surveyors',
    description:
      'London‑based RICS reinstatement cost assessments for homes, blocks and commercial property. BCIS‑indexed, insurer-accepted rebuild costs delivered in 48 hours across London.',
    url: '/reinstatement-cost-assessment-london',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Reinstatement Cost Assessment London', item: `${SITE_URL}/reinstatement-cost-assessment-london` },
  ],
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Reinstatement Cost Assessment Ltd',
  image: `${SITE_URL}/rebuild-cost-assessment-london.jpeg`,
  '@id': `${SITE_URL}/reinstatement-cost-assessment-london`,
  url: `${SITE_URL}/reinstatement-cost-assessment-london`,
  telephone: '+44-20-3178-8099',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Hanover Square',
    addressLocality: 'London',
    postalCode: 'W1S 1BN',
    addressCountry: 'GB',
  },
  areaServed: { '@type': 'City', name: 'London' },
}

const faqItems = [
  {
    question: 'Do you carry out reinstatement cost assessments across London?',
    answer: 'Yes. We are a London‑based, RICS‑regulated firm working across Central London and every London borough, from the City and Westminster to the outer boroughs and the wider Greater London area. We cover houses, flats, blocks of flats, and commercial property.',
  },
  {
    question: 'How quickly can you assess a London property?',
    answer: 'Standard assessments are delivered within 48 hours of instruction. Being based in London means our surveyors can also arrange on‑site visits quickly for period, listed, or complex buildings that need a physical inspection.',
  },
  {
    question: 'Do you cover listed and period buildings in London?',
    answer: 'Yes. London has a large stock of period, converted, and listed buildings with non‑standard construction. Our surveyors are experienced with these, and an on‑site survey captures the specialist detail that a desktop assessment or online calculator would miss.',
  },
  {
    question: 'Are your London reports accepted by insurers?',
    answer: 'Yes. Every assessment is RICS‑regulated and BCIS‑indexed, and is prepared to be broker-ready and accepted by UK insurers as evidence of an accurate sum insured at renewal.',
  },
  {
    question: 'How much does a reinstatement cost assessment cost in London?',
    answer: 'The fee depends on the type and size of the property and whether a desktop assessment or an on‑site survey is required. Contact us with a few details about your London property and we will provide a tailored quote.',
  },
  {
    question: 'Where are you based?',
    answer: 'Our office is at 17 Hanover Square, London W1S 1BN, in the heart of the West End. We are part of the RiskSTOP Group.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const challenges = [
  {
    img: '/rca-index-linking-drift.webp',
    title: 'High, fast-moving build costs',
    desc: 'London rebuild costs are among the highest in the country, driven by labour rates, restricted access, and complex logistics. They also move quickly, so a figure set a few years ago can already be well behind.',
  },
  {
    img: '/rca-calculators-miss-detail.webp',
    title: 'Period and non‑standard buildings',
    desc: 'The capital is full of Victorian terraces, mansion-block flats, and listed conversions. Their materials and construction rarely fit a standard template, and generic calculators consistently under‑count them.',
  },
  {
    img: '/rca-verified-rics-figure.webp',
    title: 'High-value cover, close scrutiny',
    desc: 'With high property values, London insurers look closely at the sum insured. A verifiable, RICS‑regulated figure keeps renewals smooth and protects owners and leaseholders from underinsurance.',
  },
]

const help = [
  { icon: 'place', title: 'London‑based RICS surveyors', desc: 'Based at 17 Hanover Square in the West End, working across every London borough.' },
  { icon: 'bolt', title: '48‑hour turnaround', desc: 'Fast delivery, with quick on‑site visits arranged when a property needs one.' },
  { icon: 'verified', title: 'Insurer‑accepted reports', desc: 'RICS‑regulated and BCIS‑indexed, accepted by UK insurers without challenge.' },
]

const areas = [
  'City of London',
  'Westminster & the West End',
  'Kensington & Chelsea',
  'Camden & Islington',
  'Hackney & Tower Hamlets',
  'Canary Wharf & Docklands',
  'Southwark & Lambeth',
  'Wandsworth & Battersea',
  'Hammersmith & Fulham',
  'Richmond & Greenwich',
  'Barnet & North London',
  'Greater London',
]

export default function LondonReinstatementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: 'Reinstatement Cost Assessment London' }]} accent="#1A6B4A" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/commercial-reinstatement-cost-assessment.webp"
          alt="Reinstatement cost assessment for London property"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Reinstatement cost assessments in <span className="text-[#1A6B4A]">London</span>.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              London‑based, RICS‑regulated rebuild cost specialists for homes, blocks, and commercial property. BCIS‑indexed, insurer-accepted figures delivered within 48 hours.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The basics — prose + image */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4 text-center lg:text-left">
              London specialists
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8 text-center lg:text-left">
              Rebuild costs, assessed properly for London property.
            </h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                A reinstatement cost assessment sets the figure your buildings insurance should be based on:
                what it would cost to rebuild a property from the ground up, rather than what it would sell
                for. In London the two are worlds apart, because so much of a property&rsquo;s value sits in
                the land and location.
              </p>
              <p>
                We are a London firm, based at 17 Hanover Square in the West End and part of the RiskSTOP
                Group. Our RICS‑regulated surveyors work across the capital every day, so they understand how
                local build costs, access, and the city&rsquo;s mix of period and modern buildings feed into
                an accurate rebuild figure &mdash; one your broker and insurer will accept.
              </p>
            </div>
          </div>
          <div className="relative hidden lg:block rounded-3xl overflow-hidden sovereign-shadow min-h-[420px]">
            <Image
              src="/reinstatement-cost-assessment-uk.webp"
              alt="London property assessed for its rebuild cost"
              fill
              sizes="(max-width: 1024px) 0px, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why London differs */}
      <section className="scroll-reveal py-24 px-6 bg-[#0f3d28]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80 mb-4">
              Why London is different
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              London property carries its own risks.
            </h2>
          </div>
          <div className="space-y-5">
            {challenges.map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white/[0.04] rounded-2xl p-5 sm:p-6 border border-white/10">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0">
                  <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">{title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="scroll-reveal py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              Why choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              A trusted, London‑based partner.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {help.map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white p-8 border border-zinc-200/80">
                <div className="w-11 h-11 rounded-xl bg-[#1A6B4A]/10 flex items-center justify-center mb-5">
                  <StepIcon name={icon} size={24} className="text-[#1A6B4A]" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">{title}</h3>
                <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <img loading="lazy" decoding="async" src="/rics-logo.webp" alt="Regulated by RICS" className="h-16 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              Where we work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Assessments across London.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10">
            {areas.map((area) => (
              <li key={area} className="py-4 border-t border-zinc-200 flex gap-3 items-center">
                <span className="material-symbols-outlined text-[#1A6B4A] shrink-0" style={{ fontSize: '1.15rem' }}>place</span>
                <span className="text-primary font-medium">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />

      <FaqSection
        description="Common questions about reinstatement cost assessments for property in London."
        items={faqItems}
      />
    </main>
    </>
  )
}
