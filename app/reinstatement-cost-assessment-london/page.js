import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '../components/Breadcrumbs'
import StepIcon from '../components/StepIcon'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment London | RICS Surveyors',
  description:
    'London‑based RICS reinstatement cost assessments for homes, blocks and commercial property. BCIS‑indexed, insurer-accepted rebuild costs typically delivered within 48 hours across London.',
  alternates: { canonical: '/reinstatement-cost-assessment-london' },
  openGraph: {
    title: 'Reinstatement Cost Assessment London | RICS Surveyors',
    description:
      'London‑based RICS reinstatement cost assessments for homes, blocks and commercial property. BCIS‑indexed, insurer-accepted rebuild costs typically delivered within 48 hours across London.',
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
  '@id': `${SITE_URL}/#organization`,
  url: SITE_URL,
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
    answer: 'Standard assessments are typically delivered within 48 hours of instruction. Being based in London means our surveyors can also arrange on‑site visits quickly for period, listed, or complex buildings that need a physical inspection.',
  },
  {
    question: 'Do you cover listed and period buildings in London?',
    answer: 'Yes. London has a large stock of period, converted, and listed buildings with non‑standard construction. Our surveyors are experienced with these, and an on‑site survey captures the specialist detail that a desktop assessment or online calculator would miss.',
  },
  {
    question: 'Why does rebuilding in London cost more?',
    answer: 'London build costs are among the highest in the UK, and rebuilding on a busy London street adds costs of its own: restricted access and parking, scaffolding and skip licences, protecting neighbouring buildings and shared party walls, and higher labour rates. An accurate assessment needs to reflect these rather than a national average.',
  },
  {
    question: 'Should I insure my London property for its market value?',
    answer: 'No. Market value includes the land and location, which buildings insurance does not cover, while the reinstatement cost is what it would take to rebuild the structure. The two figures can be very different, so your sum insured should be based on a reinstatement cost assessment rather than the market value or purchase price.',
  },
  {
    question: 'Do I need one assessment for the whole building or one for each flat?',
    answer: 'It depends on how the building is insured. If one policy covers the whole building, the assessment needs to cover the entire structure, including the common parts. Your lease, managing agent or broker can confirm how your building is insured.',
  },
  {
    question: 'Does a basement, loft conversion or extension change my rebuild cost?',
    answer: 'Yes. Basements, loft conversions and extensions add floor area and often complex structural work, which can raise the rebuild cost considerably. If any were added after your last assessment, your sum insured is likely to be too low and should be reassessed.',
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
    answer: 'Our office is at 17 Hanover Square, London W1S 1BN, in the heart of the West End.',
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
    desc: <>London rebuild costs are among the highest in the country, driven by labour rates, restricted access, and complex logistics: BCIS location factors put building costs in central London around <strong className="font-semibold text-primary">20–30% above the UK average</strong> (<a href="https://www.bcis.co.uk/insight/bcis-basics-using-location-factors-in-construction/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900">BCIS</a>). They also move quickly, so a figure set a few years ago can already be well behind.</>,
  },
  {
    img: '/rca-calculators-miss-detail.webp',
    title: 'Period and non‑standard buildings',
    desc: <>The capital is full of Victorian terraces, mansion-block flats, and listed conversions: <strong className="font-semibold text-primary">more than a quarter of London’s homes were built before 1919</strong> (<a href="https://www.london.gov.uk/sites/default/files/2024-11/London%27s%20Housing%20Stock%20-%20Research%20Unit%20-%20November%202024.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900">London Assembly</a>), rising to around two‑thirds in Kensington and Chelsea. Their materials and construction rarely fit a standard template, and generic calculators consistently under‑count them.</>,
  },
  {
    img: '/rca-verified-rics-figure.webp',
    title: 'High-value cover, close scrutiny',
    desc: <>With high property values, London insurers look closely at the sum insured, and with an estimated <strong className="font-semibold text-primary">76% of UK buildings underinsured</strong> (<a href="https://www.insuranceage.co.uk/insight/7955419/six-year-low-but-76-of-uk-properties-still-underinsured" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900">Insurance Age</a>) that scrutiny is warranted. A verifiable, RICS‑regulated figure keeps renewals smooth and protects owners and leaseholders from underinsurance.</>,
  },
]

const propertyTypes = [
  { icon: 'home', title: 'Victorian & Edwardian terraces', desc: 'Solid brick walls, timber floors, sash windows and decorative mouldings cost more to rebuild like‑for‑like than modern construction, so period detail has to be counted properly.', href: '/residential-reinstatement-cost-assessments', linkLabel: 'Residential assessments' },
  { icon: 'domain', title: 'Converted houses & flats', desc: 'Where one policy covers the whole building, the figure has to include the shared roof, walls and common parts, not just the individual flats.' },
  { icon: 'apartment', title: 'Mansion blocks', desc: 'Large period blocks, often with lifts, stairwells, basements and communal areas, each adding to the cost of a rebuild.', href: '/block-managers-reinstatement-cost-assessments', linkLabel: 'Block assessments' },
  { icon: 'account_balance', title: 'Listed buildings & conservation areas', desc: 'Rebuilding often has to match the original materials and appearance, with council consent and specialist trades. These are best assessed with an on‑site survey.', href: '/on-site-reinstatement-cost-assessment-london', linkLabel: 'On‑site surveys' },
  { icon: 'foundation', title: 'Basements, lofts & extensions', desc: 'Basement digs, loft conversions and rear extensions add floor area and structural work, and they are easy to miss when an old figure is simply rolled forward.' },
  { icon: 'storefront', title: 'Mixed‑use & commercial', desc: 'Shops, restaurants and offices with flats above are common on London high streets. Each part is costed differently, so the figure has to reflect both.', href: '/commercial-reinstatement-costs', linkLabel: 'Commercial assessments' },
]

const help = [
  { icon: 'place', title: 'London‑based RICS surveyors', desc: 'Based at 17 Hanover Square in the West End, working across every London borough.' },
  { icon: 'bolt', title: '48‑hour turnaround', desc: 'Fast delivery, with quick on‑site visits arranged when a property needs one.' },
  { icon: 'verified', title: 'Insurer‑ready reports', desc: 'RICS‑regulated and BCIS‑indexed, ready for your insurer or broker.' },
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
              London‑based, RICS‑regulated rebuild cost specialists for homes, blocks, and commercial property. BCIS‑indexed, insurer-accepted figures typically delivered within 48 hours.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The basics, prose + image */}
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
                for. In London the two can be very different, because a sale price also reflects the land
                and location.
              </p>
              <p>
                We are a London firm, based at 17 Hanover Square in the West End. Our RICS‑regulated surveyors
                work across the capital every day, so they understand how
                local build costs, access, and the city&rsquo;s mix of period and modern buildings feed into
                an accurate rebuild figure, one your broker and insurer will accept.
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
              <div key={title} className="gold-outline-shine flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6">
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0">
                  <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* London property types */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">
              London property
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight mb-6">
              From Victorian terraces to mansion blocks.
            </h2>
            <p className="text-secondary leading-relaxed text-[1.05rem]">
              London&rsquo;s buildings rarely fit a standard template. Each of these property types affects the
              rebuild figure in its own way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {propertyTypes.map(({ icon, title, desc, href, linkLabel }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#c5ddd0]" style={{ background: '#e3efe9' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#1A6B4A' }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem' }}>{icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                  {href && (
                    <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A6B4A] hover:gap-2 transition-all mt-3">
                      {linkLabel} <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which service */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#1A6B4A' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-4">Choosing a service</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">The right assessment for your London property.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/desktop-reinstatement-cost-assessment-uk" className="group grow-card bg-white rounded-2xl p-7 flex flex-col border border-zinc-200 shadow-[0_6px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.15)] hover:-translate-y-1 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-zinc-50 ring-1 ring-zinc-100 flex items-center justify-center mb-5 p-2"><Image src="/desktop-reinstatement-cost-assessment-london.webp" alt="Desktop reinstatement cost assessment" width={40} height={40} className="w-full h-full object-contain" /></div>
              <h3 className="text-lg font-semibold text-primary mb-2">Desktop Assessment</h3>
              <p className="text-secondary text-[0.95rem] leading-relaxed flex-1">A fast, remote RICS figure for standard London flats, houses and commercial units, typically delivered within 48 hours.</p>
              <span className="inline-flex items-center self-start gap-2 bg-[#1A6B4A]/8 group-hover:bg-[#1A6B4A]/15 text-[#1A6B4A] text-sm font-semibold px-4 py-2 rounded-full mt-5 transition-all duration-300 group-hover:gap-3">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/on-site-reinstatement-cost-assessment-london" className="group grow-card bg-white rounded-2xl p-7 flex flex-col border border-zinc-200 shadow-[0_6px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.15)] hover:-translate-y-1 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-zinc-50 ring-1 ring-zinc-100 flex items-center justify-center mb-5 p-2"><Image src="/onsite-reinstatement-cost-assessment-london.webp" alt="On-site reinstatement cost assessment" width={40} height={40} className="w-full h-full object-contain" /></div>
              <h3 className="text-lg font-semibold text-primary mb-2">On‑Site Survey</h3>
              <p className="text-secondary text-[0.95rem] leading-relaxed flex-1">A full site visit for listed, period, non‑standard and high‑value London buildings.</p>
              <span className="inline-flex items-center self-start gap-2 bg-[#1A6B4A]/8 group-hover:bg-[#1A6B4A]/15 text-[#1A6B4A] text-sm font-semibold px-4 py-2 rounded-full mt-5 transition-all duration-300 group-hover:gap-3">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/three-year-reinstatement-cost-assessment-london" className="group grow-card bg-white rounded-2xl p-7 flex flex-col border border-zinc-200 shadow-[0_6px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_44px_rgba(15,23,42,0.15)] hover:-translate-y-1 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-zinc-50 ring-1 ring-zinc-100 flex items-center justify-center mb-5 p-2"><Image src="/ongoing-reinstatement-cost-protection-london.webp" alt="3-year reinstatement cost protection" width={40} height={40} className="w-full h-full object-contain" /></div>
              <h3 className="text-lg font-semibold text-primary mb-2">3‑Year Protection Plan</h3>
              <p className="text-secondary text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS‑indexed annual updates for London landlords, freeholders and managing agents.</p>
              <span className="inline-flex items-center self-start gap-2 bg-[#1A6B4A]/8 group-hover:bg-[#1A6B4A]/15 text-[#1A6B4A] text-sm font-semibold px-4 py-2 rounded-full mt-5 transition-all duration-300 group-hover:gap-3">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
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
              <div key={title} className="gold-outline-shine rounded-2xl bg-white p-8">
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
            <li className="py-4 border-t border-zinc-200">
              <Link href="/contact#contact-form" className="inline-flex items-center gap-2 text-[#1A6B4A] font-semibold hover:gap-3 transition-all">
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: '1.15rem' }}>help</span>
                Not sure we cover your area? Get in touch
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
              </Link>
            </li>
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
