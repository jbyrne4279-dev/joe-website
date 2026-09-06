import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'
import LocationCarousel from '../components/LocationCarousel'

export const metadata = {
  title: 'Building Reinstatement Cost | RICS Assessment UK',
  description:
    'What a building reinstatement cost is, how it is calculated and why it protects you from underinsurance. A RICS-regulated guide from a UK reinstatement cost assessment practice.',
  alternates: { canonical: '/building-reinstatement-cost' },
  openGraph: {
    title: 'Building Reinstatement Cost | RICS Assessment UK',
    description:
      'A plain-English, RICS-regulated guide to building reinstatement cost — what it means, how it is calculated and how to get an accurate figure for your buildings insurance.',
    url: '/building-reinstatement-cost',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'
const PAGE_URL = `${SITE_URL}/building-reinstatement-cost`

const faqItems = [
  {
    question: 'What is a building reinstatement cost?',
    answer: 'A building reinstatement cost is the total cost of rebuilding a property from scratch if it were destroyed — including demolition, debris removal, professional fees and compliance with current building regulations. It is not the market value or the purchase price, and it is the figure your buildings insurance sum insured should be based on.',
  },
  {
    question: 'How is a building reinstatement cost calculated?',
    answer: 'A RICS‑regulated surveyor measures the property’s gross floor area and construction type, then applies current build‑cost rates from live BCIS (Building Cost Information Service) indices. Allowances are added for demolition, professional and design fees, outbuildings, boundaries and inflation over the rebuild period to reach a defensible total.',
  },
  {
    question: 'Is the reinstatement cost the same as the market value?',
    answer: 'No. Market value reflects what someone would pay for the property, including the land and location. Reinstatement cost is purely the cost of rebuilding the structure. In many areas the two figures differ significantly — which is why insuring at market value usually leaves a property under‑ or over‑insured.',
  },
  {
    question: 'How often should a building reinstatement cost be reviewed?',
    answer: 'RICS guidance is to obtain a full assessment at least every three years and to index‑link the figure annually in between. Build costs move quickly, so a figure that was accurate at the last renewal can drift materially out of date within a year or two.',
  },
  {
    question: 'What happens if my building reinstatement cost is wrong?',
    answer: 'If the sum insured is lower than the true rebuild cost, most policies apply a “condition of average” and reduce any claim by the same proportion you are underinsured — even for a small, partial loss. An accurate RICS assessment removes that risk and gives you a figure you can stand behind at renewal.',
  },
]

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Building Reinstatement Cost', item: PAGE_URL },
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Building Reinstatement Cost Assessment',
  name: 'Building Reinstatement Cost Assessment',
  description:
    'RICS-regulated calculation of the cost to rebuild a property for buildings insurance purposes, covering demolition, professional fees, regulations and inflation. Delivered across the UK.',
  url: PAGE_URL,
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  provider: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/rca48.png` },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const steps = [
  { icon: 'instruct', title: 'Measure the building', desc: 'A surveyor establishes the gross internal floor area, construction type, age and any non‑standard features.' },
  { icon: 'gather-data', title: 'Apply live cost data', desc: 'Current BCIS build‑cost rates for the property’s location and type are applied to the measured floor area.' },
  { icon: 'calculate', title: 'Add the essentials', desc: 'Demolition, professional fees, outbuildings, boundaries and an inflation allowance are added to the base build cost.' },
  { icon: 'report', title: 'Produce the figure', desc: 'A RICS‑regulated, broker‑ready sum insured is documented and ready to present to your insurer at renewal.' },
]

const whoNeedsIt = [
  { icon: 'home', title: 'Homeowners & landlords', desc: 'Anyone whose buildings policy needs an accurate sum insured rather than a guess or an old estimate.' },
  { icon: 'apartment', title: 'Flats & blocks', desc: 'Freeholders and leaseholders who must insure the whole structure for its true rebuild cost.' },
  { icon: 'storefront', title: 'Commercial owners', desc: 'Offices, retail and industrial premises where the rebuild figure drives the premium and the cover.' },
  { icon: 'gavel', title: 'Brokers & managing agents', desc: 'Professionals needing a defensible figure to place or renew cover with confidence.' },
]

const included = [
  { label: 'The full rebuild of the property', detail: 'Rebuilding the whole structure from the ground up — foundations, walls, roof and floors — to today’s standards, not just patching up damage.' },
  { label: 'Demolition and debris removal', detail: 'Safely clearing and disposing of what’s left after a total loss, which has to happen before any rebuilding can begin.' },
  { label: 'Professional and design fees', detail: 'The architects, engineers and surveyors needed to design and sign off the rebuild — often 10–15% of the total cost.' },
  { label: 'Building‑regulation compliance', detail: 'Meeting current building regulations, which are usually stricter than when the property was first built.' },
  { label: 'Outbuildings and boundaries', detail: 'Garages, sheds, walls, fences and gates that also have to be rebuilt or replaced.' },
  { label: 'Inflation over the rebuild period', detail: 'An allowance for building costs rising while the claim is settled and the work is carried out.' },
]

const coverageAreas = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bristol',
  'Sheffield', 'Newcastle', 'Nottingham', 'Leicester', 'Southampton',
  'Brighton', 'Cardiff', 'Edinburgh', 'Glasgow', 'Belfast',
]

export default function BuildingReinstatementCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: 'Building Reinstatement Cost' }]} accent="#1A6B4A" />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          fetchPriority="high"
          decoding="async"
          src="/rebuild-cost-assessment-london.jpeg"
          alt="UK building being assessed for its reinstatement cost"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white rounded-3xl px-8 py-12 md:px-14 md:py-16 border border-zinc-200 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Building Reinstatement Cost</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              Your <span style={{ color: '#1A6B4A' }}>building</span> <span className="sm:whitespace-nowrap">reinstatement cost</span>, explained.
            </h1>
            <p className="text-base text-secondary leading-relaxed mb-9 max-w-lg mx-auto">
              The single most important figure on your buildings insurance &mdash; what it means, how a RICS‑regulated
              surveyor calculates it, and how to get an accurate one for any UK property.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="text-white px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow text-center" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
                Get an accurate figure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What it is</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">The cost to rebuild &mdash; not what it&rsquo;s worth.</h2>
          <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
            <p>
              A building reinstatement cost is the amount it would take to rebuild a property from the ground up if it
              were completely destroyed. It has nothing to do with the property&rsquo;s market value or what you paid
              for it &mdash; land and location are stripped out entirely. What remains is the true cost of construction:
              labour, materials, professional fees and everything the law now requires you to do when you rebuild.
            </p>
            <p>
              This figure is what your buildings insurance <strong className="font-semibold text-primary">sum insured</strong>{' '}
              should be based on. Get it right and a total loss is fully covered. Get it wrong &mdash; usually too low
              &mdash; and you carry a shortfall you may not discover until you claim.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* How it's calculated */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#1A6B4A' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-4">How it&rsquo;s calculated</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">From floor area to final figure.</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {steps.map(({ icon, title, desc }, i) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: '#1A6B4A' }}>
                  <StepIcon name={icon} size={44} style={{ color: '#ffffff' }} />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-[#1A6B4A]/60 mb-1">Step {i + 1}</p>
                  <h3 className="text-lg font-semibold text-primary mb-1.5 leading-snug">{title}</h3>
                  <p className="text-secondary leading-relaxed text-[0.95rem]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs it */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Who needs it</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">Every insured building has one.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whoNeedsIt.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start rounded-2xl p-6 border border-[#c5ddd0]" style={{ background: '#e3efe9' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#1A6B4A' }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem' }}>{icon}</span>
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

      {/* Why it matters */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#1A6B4A' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img width={384} height={384} loading="lazy" decoding="async" src="/desktop-why-it-matters.jpg" alt="Building under construction being rebuilt" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-cover border border-white/10 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-4">Why it matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">Get the number wrong and your claim shrinks.</h2>
          <div className="space-y-6 text-white/85 leading-[1.75] text-[1.05rem]">
            <p>
              Research across the UK insurance market consistently finds that the large majority of buildings are
              underinsured &mdash; often by 20% or more. It happens quietly: a sum insured is set once, then rolled
              forward year after year while real build costs climb.
            </p>
            <p>
              The catch is the <strong className="font-semibold text-white">condition of average</strong>. If you are
              insured for less than the true reinstatement cost, the insurer can reduce every claim by the same
              proportion &mdash; so a property insured for 80% of its rebuild cost may see even a small claim cut by a
              fifth. An accurate, regularly reviewed figure is the only reliable protection.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">What&rsquo;s included</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">More than walls and a roof.</h2>
          </div>
          <p className="text-secondary text-sm mb-2 sm:mb-0">Hover or tap each item for a plain‑English explanation.</p>
          <ul className="grid sm:grid-cols-2 gap-x-12">
            {included.map(({ label, detail }) => (
              <li key={label} tabIndex={0} className="group py-4 border-t border-zinc-200 flex gap-3 items-start cursor-default outline-none">
                <span className="material-symbols-outlined shrink-0 mt-0.5" style={{ fontSize: '1.15rem', color: '#1A6B4A' }}>check</span>
                <span>
                  <span className="text-primary font-medium">{label}</span>
                  <span className="block overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-1.5 group-focus:max-h-40 group-focus:opacity-100 group-focus:mt-1.5 transition-all duration-300 text-secondary text-sm leading-relaxed">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* UK coverage */}
      <section className="scroll-reveal py-24 px-6" style={{ background: '#1A6B4A' }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 sm:gap-10 items-start">
          <img width={384} height={384} loading="lazy" decoding="async" src="/uk-coverage-map.jpg" alt="Map of the United Kingdom" className="shrink-0 w-44 h-44 sm:w-96 sm:h-96 rounded-2xl object-contain bg-white p-2 border border-white/10 mt-1" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 mb-4">UK‑wide coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">An accurate figure, anywhere in the UK.</h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-2xl text-[1.05rem]">
            We establish accurate building reinstatement costs for property across the whole of the UK &mdash; from
            London and the South East to the Midlands, the North, Scotland, Wales and Northern Ireland.
          </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <LocationCarousel locations={coverageAreas} accent="#1A6B4A" />
        </div>
      </section>

      {/* Which service */}
      <section className="scroll-reveal py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Get your figure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Three ways to establish your reinstatement cost.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/desktop-reinstatement-cost-assessment-uk" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>desktop_windows</span>
              <h3 className="text-lg font-semibold text-white mb-2">Desktop Assessment</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A fast, remote RICS figure for standard houses, flats and commercial units anywhere in the UK.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/on-site-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem' }}>location_on</span>
              <h3 className="text-lg font-semibold text-white mb-2">On‑Site Survey</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full site visit for listed, complex or high‑value buildings where detail matters.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
            <Link href="/three-year-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}>
              <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h3 className="text-lg font-semibold text-white mb-2">3‑Year Protection Plan</h3>
              <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS‑indexed annual updates to keep the figure current.</p>
              <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection
        accent="#1A6B4A"
        tintRgb="26,107,74"
        buttonStyle={{ background: 'linear-gradient(135deg, #0b5d3b 0%, #1A6B4A 100%)' }}
      />

      <FaqSection
        bg="#0f3d28"
        description="Common questions about building reinstatement cost and how it is assessed."
        items={faqItems}
      />
    </main>
    </>
  )
}
