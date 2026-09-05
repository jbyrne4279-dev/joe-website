import Link from 'next/link'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import StepIcon from '../components/StepIcon'

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
    answer: 'A RICS-regulated surveyor measures the property’s gross floor area and construction type, then applies current build-cost rates from live BCIS (Building Cost Information Service) indices. Allowances are added for demolition, professional and design fees, outbuildings, boundaries and inflation over the rebuild period to reach a defensible total.',
  },
  {
    question: 'Is the reinstatement cost the same as the market value?',
    answer: 'No. Market value reflects what someone would pay for the property, including the land and location. Reinstatement cost is purely the cost of rebuilding the structure. In many areas the two figures differ significantly — which is why insuring at market value usually leaves a property under- or over-insured.',
  },
  {
    question: 'How often should a building reinstatement cost be reviewed?',
    answer: 'RICS guidance is to obtain a full assessment at least every three years and to index-link the figure annually in between. Build costs move quickly, so a figure that was accurate at the last renewal can drift materially out of date within a year or two.',
  },
  {
    question: 'What happens if my building reinstatement cost is wrong?',
    answer: 'If the sum insured is lower than the true rebuild cost, most policies apply a “condition of average” and reduce any claim by the same proportion you are underinsured — even for a small, partial loss. An accurate RICS assessment removes that risk and gives you a figure you can stand behind at renewal.',
  },
]

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

const components = [
  { icon: 'home', title: 'The full rebuild', desc: 'Rebuilding the entire structure from foundations up — walls, roof, floors and services — to today’s standards, not simply repairing damage.' },
  { icon: 'gather-data', title: 'Demolition & debris removal', desc: 'Safely clearing and disposing of what remains after a total loss, which must happen before any rebuilding can begin.' },
  { icon: 'calculate', title: 'Professional & design fees', desc: 'The architects, engineers and surveyors needed to design and sign off the rebuild — often 10–15% of the total.' },
  { icon: 'report', title: 'Regulations & inflation', desc: 'Meeting current building regulations and allowing for construction costs rising while a claim is settled and the work is done.' },
]

const steps = [
  { icon: 'instruct', title: 'Measure the building', desc: 'A surveyor establishes the gross internal floor area, construction type, age and any non-standard features.' },
  { icon: 'gather-data', title: 'Apply live cost data', desc: 'Current BCIS build-cost rates for the property’s location and type are applied to the measured floor area.' },
  { icon: 'calculate', title: 'Add the essentials', desc: 'Demolition, professional fees, outbuildings, boundaries and an inflation allowance are added to the base build cost.' },
  { icon: 'report', title: 'Produce the figure', desc: 'A RICS-regulated, broker-ready sum insured is documented and ready to present to your insurer at renewal.' },
]

export default function BuildingReinstatementCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main>
        <Breadcrumbs items={[{ name: 'Building reinstatement cost' }]} />

        {/* Hero */}
        <section className="relative flex items-center justify-center overflow-hidden py-24 md:py-32 px-6" style={{ background: '#0f3d28' }}>
          <div className="relative z-10 w-full max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-4">RICS-regulated guide</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
              <span style={{ color: '#d4af37' }}>Building reinstatement cost</span>, explained.
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-9 max-w-xl mx-auto">
              What it means, how it is calculated, and why an accurate figure is the single most important number on your buildings insurance policy &mdash; from a practice that does nothing else.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form" className="bg-white text-[#0f3d28] px-9 py-4 rounded-full font-semibold active:scale-[0.97] transition-transform sovereign-shadow ring-2 ring-[#d4af37]">
                Get an accurate figure
              </Link>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">What it is</p>
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
        </section>

        {/* What it includes */}
        <section className="scroll-reveal py-24 px-6" style={{ background: '#f4f1e8' }}>
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">What it includes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">More than four walls and a roof.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {components.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-black/5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(212,175,55,0.14)' }}>
                    <StepIcon name={icon} size={30} style={{ color: '#a16207' }} />
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

        {/* How it's calculated */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">How it&rsquo;s calculated</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">From floor area to final figure.</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-5">
              {steps.map(({ icon, title, desc }, i) => (
                <div key={title} className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl shrink-0 flex items-center justify-center" style={{ background: 'rgba(26,107,74,0.1)' }}>
                    <StepIcon name={icon} size={44} style={{ color: '#1A6B4A' }} />
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

        {/* Why it matters */}
        <section className="scroll-reveal py-24 px-6" style={{ background: '#f4f1e8' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">Get the number wrong and your claim shrinks.</h2>
            <div className="space-y-6 text-secondary leading-[1.75] text-[1.05rem]">
              <p>
                Research across the UK insurance market consistently finds that the large majority of buildings are
                underinsured &mdash; often by 20% or more. It happens quietly: a sum insured is set once, then rolled
                forward year after year while real build costs climb.
              </p>
              <p>
                The catch is the <strong className="font-semibold text-primary">condition of average</strong>. If you are
                insured for less than the true reinstatement cost, the insurer can reduce every claim by the same
                proportion &mdash; so a property insured for 80% of its rebuild cost may see even a small claim cut by a
                fifth. An accurate, regularly reviewed building reinstatement cost is the only reliable protection.
              </p>
            </div>
          </div>
        </section>

        {/* Which service */}
        <section className="scroll-reveal py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4">Get your figure</p>
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
                <h3 className="text-lg font-semibold text-white mb-2">On-Site Survey</h3>
                <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full site visit for listed, complex or high-value buildings where detail matters.</p>
                <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
              </Link>
              <Link href="/three-year-reinstatement-cost-assessment-london" className="grow-card rounded-2xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 text-white" style={{ background: 'linear-gradient(135deg, #a16207 0%, #d4a017 100%)' }}>
                <span className="material-symbols-outlined text-white mb-4" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
                <h3 className="text-lg font-semibold text-white mb-2">3-Year Protection Plan</h3>
                <p className="text-white/80 text-[0.95rem] leading-relaxed flex-1">A full assessment plus three years of BCIS-indexed annual updates to keep the figure current.</p>
                <span className="inline-flex items-center gap-1 text-white text-sm font-semibold mt-4">Learn more <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span></span>
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />

        <FaqSection
          description="Common questions about building reinstatement cost and how it is assessed."
          items={faqItems}
        />
      </main>
    </>
  )
}
