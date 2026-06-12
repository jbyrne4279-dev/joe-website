import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'What is a Reinstatement Cost Assessment? UK Guide | RCA Ltd',
  },
  description:
    'Most UK buildings are insured for the wrong amount. Learn what a Reinstatement Cost Assessment is, how the Averaging Clause works, and why an accurate rebuild figure protects you.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Reinstatement Cost Assessment Guide | RICS Building Insurance UK',
    description:
      'UK property owners: understand how building reinstatement cost differs from market value, why the Averaging Clause reduces claim payouts when you\'re underinsured, and how a RICS Reinstatement Cost Assessment protects you.',
    url: '/resources',
  },
}

const resourcesFaqItems = [
  { question: 'What is a rebuild cost assessment?', answer: 'A rebuild cost assessment (RCA) calculates the total cost to rebuild your property from scratch after a total loss. This includes demolition, professional fees, materials, and compliance with current regulations.' },
  { question: 'Who needs a rebuild cost assessment in the UK?', answer: 'Property owners, landlords, commercial asset managers, and leaseholders responsible for insurance all need RCAs to ensure their buildings are insured for the correct rebuild value.' },
  { question: 'Why is a rebuild cost assessment important?', answer: 'Without an accurate RCA, you risk under-insurance. This can lead to reduced claim payouts under the Average Clause, leaving you to cover significant rebuild costs yourself.' },
  { question: 'How is reinstatement cost different from market value?', answer: 'Market value reflects what a property sells for. Reinstatement cost reflects the cost to rebuild it, often significantly higher due to construction costs, fees, and compliance requirements.' },
  { question: 'Do I need an RCA for insurance purposes?', answer: 'Yes. Insurers rely on accurate rebuild values. Without an RCA, you are estimating, which increases the risk of being under or over insured.' },
  { question: 'How is a reinstatement cost calculated?', answer: 'It is calculated based on building size, materials, specification, location, demolition costs, professional fees, and current construction rates, not purchase price.' },
  { question: 'How long does a rebuild cost assessment take?', answer: 'Most assessments are completed within 48 hours after inspection. Larger or more complex properties may take slightly longer to ensure full accuracy.' },
  { question: 'What happens if my property is underinsured?', answer: 'If underinsured, insurers can reduce your claim payout proportionally. This means you may not receive enough to fully rebuild your property after damage or loss.' },
  { question: 'Do I need an RCA for a commercial property?', answer: 'Yes. Commercial properties often have higher rebuild complexity and cost. An RCA ensures your insurance fully reflects the risk and scale of the asset.' },
  { question: 'Can I estimate rebuild cost myself?', answer: 'Online calculators can give rough estimates, but they often miss key costs. A professional RCA provides an accurate, defensible figure aligned with insurer expectations.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const resourcesArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Reinstatement Cost Assessment Guide | UK Underinsurance',
  description: 'What is a Reinstatement Cost Assessment? Learn how rebuild cost differs from market value, how the Averaging Clause works, and how to stay fully insured in the UK.',
  url: `${SITE_URL}/resources`,
  datePublished: '2025-05-16',
  dateModified: '2025-05-16',
  inLanguage: 'en-GB',
  author: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Reinstatement Cost Assessment Ltd',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/rca48.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/resources`,
  },
  about: [
    { '@type': 'Thing', name: 'Reinstatement Cost Assessment' },
    { '@type': 'Thing', name: 'Rebuild Cost Assessment' },
    { '@type': 'Thing', name: 'Building Insurance Underinsurance UK' },
    { '@type': 'Thing', name: 'RICS Regulated Surveying' },
    { '@type': 'Thing', name: 'Averaging Clause Insurance' },
  ],
}

const resourcesBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
  ],
}

const resourcesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: resourcesFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesFaqJsonLd) }}
      />
    <main>

        {/* Hero */}
        <section className="py-24 lg:py-32 px-8 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-6 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>menu_book</span>Expert Insight Guide</span>
          <h1 className="text-3xl sm:text-4xl md:text-[4rem] font-bold tracking-tight text-primary leading-[1.05] mb-8 max-w-4xl">
            <span className="text-shine-red">The quiet crisis</span> inside most buildings <span className="text-shine">insurance policies.</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed mb-12">
            In a rapidly shifting economy, the gap between what a building is worth and what it costs to rebuild is widening at an alarming rate. Discover why your current valuation might be leaving you dangerously exposed.
          </p>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden relative sovereign-shadow">
            <img
              className="w-full h-full object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALOMaU4yAO0fABDemBrPwIW0_JHcg5OCUfDCMgrVnZfZMHPdmT_UxkLb4VH-nCQaLW11YFCFg9voqLjC25o9B2GI89LFrZExDjKVvoCm5QrpahvM2W_qQdNDaJnxc-B-d6CSLkebPqSlNLFOwgIsozfCOc0LxX2-ogBKGB57cebbKp3u4T-W8NGtEdynuZhsleRozYnKGxhyPvQaBbot6EX5zIE0p1c2JH1GQsMOcTsxgBc1PINPZoKGlpyPIU3PtwWB3Fg4n1IL8"
              alt="UK buildings underinsured: reinstatement cost versus market value gap explained"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          </div>
        </section>

        {/* Market Value vs Rebuild Cost */}
        <section className="pt-10 pb-20 px-8 bg-[#0f3d28] flex flex-col items-center text-center">
          <div className="space-y-10 w-full max-w-2xl mx-auto">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>report_problem</span>Common Misconception</span>
              <h2 className="text-4xl font-bold text-white leading-tight">Your building is probably insured for the wrong amount.</h2>
              <p className="text-white/80 leading-relaxed max-w-lg mx-auto">
                Market value and rebuild cost are not the same figure yet most property owners confuse the two. The consequences of getting this wrong can be financially devastating.
              </p>
            </div>

            <div className="space-y-4 w-full">
              <div className="bg-white rounded-2xl p-7 border border-white/20 shadow-sm flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem' }}>warning</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Overinsured in rural areas</p>
                  <p className="text-secondary text-sm leading-relaxed">A countryside property worth £800k may cost only £320k to rebuild. You could be paying premiums on a £480k fiction.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-white/20 shadow-sm flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem' }}>trending_down</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Underinsured in urban areas</p>
                  <p className="text-secondary text-sm leading-relaxed">A city-centre flat worth £350k could cost £510k to rebuild, leaving a six-figure shortfall precisely when you need it most.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-white/20 shadow-sm flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">A <a href="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/building-surveying-standards/reinstatement-cost-assessment-of-buildings" target="_blank" rel="noopener noreferrer" className="text-[#1A6B4A] underline hover:text-[#1A6B4A]/80">RICS-regulated RCA</a> eliminates the guesswork</p>
                  <p className="text-secondary text-sm leading-relaxed">Our assessments use live BCIS data and local site knowledge to give you the one figure that actually protects you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Averaging Clause */}
        <section className="pt-10 pb-20 bg-white px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">The &ldquo;Averaging Clause&rdquo; Trap.</h2>
            <p className="text-secondary text-lg">If you are underinsured by 40%, the insurer doesn&rsquo;t just pay up to your limit. They reduce your entire claim by 40%.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#1A6B4A] mb-8">Scenario: The Reality Gap</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
                    <span className="text-secondary">True Rebuild Cost</span>
                    <span className="text-2xl font-bold text-primary">£500,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-zinc-100 pb-4">
                    <span className="text-secondary">Your Sum Insured</span>
                    <span className="text-2xl font-bold text-red-600">£300,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-secondary font-semibold">Degree of Underinsurance</span>
                    <span className="text-xl font-bold text-red-600">40%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-zinc-100 p-10 rounded-2xl shadow-md flex flex-col justify-center">
              <span className="material-symbols-outlined text-[#1A6B4A] text-4xl mb-6">account_balance_wallet</span>
              <h3 className="text-2xl font-bold text-primary mb-4">The Payout Result.</h3>
              <p className="text-secondary mb-8">Even if you have a claim for £100,000, the insurer applies the 40% reduction based on your total underinsurance.</p>
              <div className="bg-white p-6 rounded-xl text-center">
                <span className="text-sm uppercase tracking-widest text-secondary">You receive only</span>
                <div className="text-4xl font-black text-primary mt-1">£60,000</div>
                <div className="mt-4 text-red-600 font-bold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  £40,000 Shortfall
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rising Costs */}
        <section className="pt-10 pb-24 px-8 bg-[#0f3d28] flex flex-col items-center text-center gap-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>price_change</span>Rising Costs</span>
            <h2 className="text-4xl font-bold text-white leading-tight">The Surge in Construction Materials.</h2>
            <p className="text-white/70 leading-relaxed">
              Global supply chain volatility and labour shortages have pushed rebuild costs up by over 25% since 2019. If your valuation hasn&rsquo;t been updated since 2021, you are almost certainly underinsured today.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-white p-10 rounded-2xl">
            <div className="flex items-start justify-between mb-8">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block mb-1">BCIS Construction Index</span>
                <p className="text-secondary text-xs">Rebased cost index, 2019–2024</p>
              </div>
            </div>
            <div className="relative h-48 w-full flex items-end gap-3 mb-3">
              <div className="flex-1 rounded-t-lg bg-[#0f3d28] hover:opacity-80 transition-all duration-500" style={{ height: '40%' }}></div>
              <div className="flex-1 rounded-t-lg bg-teal-500 hover:opacity-80 transition-all duration-500" style={{ height: '50%' }}></div>
              <div className="flex-1 rounded-t-lg bg-yellow-400 hover:opacity-80 transition-all duration-500" style={{ height: '62%' }}></div>
              <div className="flex-1 rounded-t-lg bg-orange-400 hover:opacity-80 transition-all duration-500" style={{ height: '76%' }}></div>
              <div className="flex-1 rounded-t-lg bg-amber-400 hover:opacity-80 transition-all duration-500" style={{ height: '100%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-secondary font-bold uppercase tracking-wider">
              <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
            </div>
            <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#0f3d28]"></span><span className="text-xs text-secondary">Stable</span></div>
              <span className="text-secondary/30 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span><span className="text-xs text-secondary">Rising</span></div>
              <span className="text-secondary/30 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span className="text-xs text-secondary">Critical</span></div>
            </div>
          </div>
        </section>

        {/* Why RICS & BCIS */}
        <section className="pt-10 pb-20 text-center bg-white">
          <div className="max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>verified</span>Our Standard</span>
            <h2 className="text-4xl font-bold text-primary">Why <span className="text-shine">RICS &amp; BCIS Matter.</span></h2>
            <p className="text-secondary leading-relaxed">
              Reinstatement Cost Assessment Ltd is a{' '}
              <a href="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/building-surveying-standards/reinstatement-cost-assessment-of-buildings" target="_blank" rel="noopener noreferrer" className="text-[#1A6B4A] hover:underline font-medium">RICS Regulated</a>{' '}
              firm. We use Building Cost Information Service (BCIS) data, the industry standard for surveyors, combined with local site knowledge to provide a figure you can stand behind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-xs md:max-w-4xl mx-auto">
            {[
              { icon: 'gavel', title: 'Regulated', desc: 'Strict adherence to Royal Institution of Chartered Surveyors standards.' },
              { icon: 'analytics', title: 'Data-Driven', desc: 'Access to live BCIS construction indices for accurate, up-to-date figures.' },
              { icon: 'verified', title: 'Defensible', desc: 'A certified RCA report provides leverage during claim disputes.' },
            ].map(({ icon, title, desc }) => (
              <div key={icon} className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 border border-[#1A6B4A]/20 shadow-sm hover:shadow-md hover:border-[#1A6B4A]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.3rem' }}>{icon}</span>
                </div>
                <h4 className="font-bold text-primary">{title}</h4>
                <p className="text-sm text-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RCA Lifecycle */}
        <section className="pt-10 pb-24 px-8 bg-[#0f3d28]">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>workspace_premium</span>Best Practice</span>
              <h2 className="text-4xl font-bold text-white">The Reinstatement Cost Assessment Lifecycle.</h2>
            </div>

            {/* Steps */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col gap-0">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" aria-hidden="true" />
                {[
                  { icon: 'flag',        label: 'Step 1', title: 'Baseline RCA',        desc: 'A full site or desktop professional valuation establishes your accurate reinstatement figure.' },
                  { icon: 'update',      label: 'Year 1', title: 'Annual Index Update',  desc: 'Your valuation is adjusted in line with current BCIS construction cost indices.' },
                  { icon: 'trending_up', label: 'Year 2', title: 'Continued Indexation', desc: 'Ongoing monitoring ensures your sum insured reflects real-world inflation.' },
                  { icon: 'restart_alt', label: 'Year 3', title: 'Major Re-evaluation',  desc: 'A full reassessment every 3 years is recommended to maintain full RICS compliance.' },
                ].map(({ icon, label, title, desc }, i) => (
                  <div key={i} className="flex items-center gap-0 pb-5 last:pb-0">
                    <div className="w-10 h-10 rounded-full bg-white shrink-0 flex items-center justify-center shadow-lg z-10">
                      <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                    </div>
                    <div className="w-5 h-px bg-white/20 shrink-0" aria-hidden="true" />
                    <div className="bg-white flex-1 px-6 py-5 rounded-2xl shadow-sm">
                      <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1A6B4A]/60 block mb-1">{label}</span>
                      <p className="font-bold text-primary text-sm mb-1">{title}</p>
                      <p className="text-xs text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      {/* Article links */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>article</span>Guides &amp; Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Further Reading.</h2>
            <p className="text-secondary max-w-xl mx-auto leading-relaxed">Expert guidance for managing agents, freeholders and portfolio owners on reinstatement cost compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: 'RICS Guidance',
                title: 'When Should Block Insurance Valuations Be Updated?',
                desc: 'RICS recommends every 3 years. Find out why annual index linking alone is not enough and what triggers an earlier reassessment.',
                href: '/resources/when-should-block-insurance-valuations-be-updated',
                img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=300&fit=crop&auto=format&q=80',
              },
              {
                tag: 'Risk & Compliance',
                title: 'Top Risks of Underinsurance for Managing Agents.',
                desc: 'From proportional claim settlements to personal liability exposure — the risks managing agents face when valuations are out of date.',
                href: '/resources/top-risks-of-underinsurance-for-managing-agents',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&auto=format&q=80',
              },
              {
                tag: 'Case Study',
                title: 'Block of Flats Undervalued by £2 Million.',
                desc: 'A 24-unit block index-linked annually was found to be underinsured by £2.1 million. See how a professional RCA uncovered the gap.',
                href: '/resources/case-study-block-of-flats-undervalued',
                img: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&h=300&fit=crop&auto=format&q=80',
              },
              {
                tag: 'Guidance',
                title: 'Index Linking vs Professional Valuation.',
                desc: 'What managing agents need to know about why index linking cannot replace a RICS-regulated reinstatement cost assessment.',
                href: '/resources/index-linking-vs-professional-valuation',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=300&fit=crop&auto=format&q=80',
              },
            ].map(({ tag, title, desc, href, img }) => (
              <a key={href} href={href} className="group bg-white rounded-2xl overflow-hidden border border-[#1A6B4A]/10 sovereign-shadow hover:border-[#1A6B4A]/30 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-2">{tag}</span>
                  <h3 className="font-bold text-primary text-lg mb-2 leading-snug">{title}</h3>
                  <p className="text-secondary text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center gap-1 text-[#1A6B4A] text-sm font-semibold mt-4">
                    Read article <span className="material-symbols-outlined" style={{fontSize:'1rem'}}>arrow_forward</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Get an Accurate <span className="text-shine">Reinstatement Cost Assessment</span> for Your UK Property.
          </>
        }
      />
      <FaqSection
        description="Learn how rebuild cost assessments work, why RICS compliance matters, and how to avoid costly underinsurance."
        items={resourcesFaqItems}
      />
    </main>
    </>
  )
}
