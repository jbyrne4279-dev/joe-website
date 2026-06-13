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
    <main className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 60%)'}} />
        <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-bold tracking-tight text-gray-900 leading-[1.05] max-w-4xl">
            <span className="text-shine-red">The quiet crisis</span> inside most buildings <span className="text-shine">insurance policies.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            In a rapidly shifting economy, the gap between what a building is worth and what it costs to rebuild is widening at an alarming rate. Discover why your current valuation might be leaving you dangerously exposed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact#contact-form" className="btn-shine text-white px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              Get your RICS-Certified RCA
            </a>
            <a href="/services" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-7 py-3.5 rounded-full font-semibold text-sm transition-all">
              Is My Property Underinsured?
            </a>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/[0.06] border border-[#1A6B4A]/15 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
            <span className="text-xs text-[#1A6B4A] tracking-wide font-medium">RICS Regulated · London & UK</span>
          </div>
          <div className="relative w-full max-w-4xl mx-auto pt-6">
            <div className="relative rounded-t-2xl overflow-hidden border-t border-x border-gray-200">
              <img
                className="w-full h-[360px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALOMaU4yAO0fABDemBrPwIW0_JHcg5OCUfDCMgrVnZfZMHPdmT_UxkLb4VH-nCQaLW11YFCFg9voqLjC25o9B2GI89LFrZExDjKVvoCm5QrpahvM2W_qQdNDaJnxc-B-d6CSLkebPqSlNLFOwgIsozfCOc0LxX2-ogBKGB57cebbKp3u4T-W8NGtEdynuZhsleRozYnKGxhyPvQaBbot6EX5zIE0p1c2JH1GQsMOcTsxgBc1PINPZoKGlpyPIU3PtwWB3Fg4n1IL8"
                alt="UK buildings underinsured: reinstatement cost versus market value gap explained"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Market Value vs Rebuild Cost */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">Your building is probably insured for the wrong amount.</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg mx-auto text-sm">
              Market value and rebuild cost are not the same figure — yet most property owners confuse the two. The consequences of getting this wrong can be financially devastating.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: 'warning',
                title: 'Overinsured in rural areas',
                desc: "A countryside property worth £800k may cost only £320k to rebuild. You could be paying premiums on a £480k fiction.",
              },
              {
                icon: 'trending_down',
                title: 'Underinsured in urban areas',
                desc: 'A city-centre flat worth £350k could cost £510k to rebuild, leaving a six-figure shortfall precisely when you need it most.',
              },
              {
                icon: 'verified',
                title: 'A RICS-regulated RCA eliminates the guesswork.',
                desc: 'Our assessments use live BCIS data and local site knowledge to give you the one figure that actually protects you.',
                link: { href: 'https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/building-surveying-standards/reinstatement-cost-assessment-of-buildings', text: 'RICS-regulated RCA' },
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex items-start gap-5">
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#1A6B4A,#145c3e)', boxShadow: '0 2px 10px rgba(26,107,74,0.35)' }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Averaging Clause */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>gavel</span>Common Misconception</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The &ldquo;Averaging Clause&rdquo; Trap.</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">If you are underinsured by 40%, the insurer doesn&rsquo;t just pay up to your limit. They reduce your entire claim by 40%.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[#1A6B4A] mb-8 uppercase tracking-widest">Scenario: The Reality Gap.</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                    <span className="text-gray-500 text-sm">True Rebuild Cost</span>
                    <span className="text-2xl font-bold text-gray-900">£500,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                    <span className="text-gray-500 text-sm">Your Sum Insured</span>
                    <span className="text-2xl font-bold text-red-800">£300,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-gray-600 text-sm font-medium">Degree of Underinsurance</span>
                    <span className="text-xl font-bold text-red-800">40%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Payout Result.</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Even if you have a claim for £100,000, the insurer applies the 40% reduction based on your total underinsurance.</p>
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-center">
                <span className="text-xs uppercase tracking-widest text-gray-400">You receive only</span>
                <div className="text-4xl font-black text-gray-900 mt-1">£60,000</div>
                <div className="mt-4 text-red-800 font-semibold text-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" style={{fontSize:'1rem'}}>trending_down</span>
                  £40,000 Shortfall
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rising Costs */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">The Surge in Construction Materials.</h2>
            <p className="text-gray-500 leading-relaxed text-sm">
              Global supply chain volatility and labour shortages have pushed rebuild costs up by over 25% since 2019. If your valuation hasn&rsquo;t been updated since 2021, you are almost certainly underinsured today.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1A6B4A] block mb-1">BCIS Construction Index</span>
                <p className="text-gray-400 text-xs">Rebased cost index, 2019–2024</p>
              </div>
            </div>
            <div className="relative h-40 w-full flex items-end gap-3 mb-3">
              {[
                { h: '40%', color: '#1A6B4A' },
                { h: '50%', color: '#22C55E88' },
                { h: '62%', color: '#EAB308' },
                { h: '76%', color: '#F97316' },
                { h: '100%', color: '#22C55E' },
              ].map(({ h, color }, i) => (
                <div key={i} className="flex-1 rounded-t-lg transition-all duration-500" style={{ height: h, background: color }} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider">
              <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#1A6B4A]" /><span className="text-xs text-gray-400">Stable</span></div>
              <span className="text-gray-300 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-xs text-gray-400">Rising</span></div>
              <span className="text-gray-300 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" /><span className="text-xs text-gray-400">Critical</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RICS & BCIS */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto mb-12 space-y-3 text-center">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>verified</span>Our Standard</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why <span className="text-shine">RICS &amp; BCIS Matter.</span></h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Reinstatement Cost Assessment Ltd is a{' '}
            <a href="https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/building-surveying-standards/reinstatement-cost-assessment-of-buildings" target="_blank" rel="noopener noreferrer" className="text-[#1A6B4A] hover:text-[#22C55E] transition-colors">RICS Regulated</a>{' '}
            firm. We use Building Cost Information Service (BCIS) data, the industry standard for surveyors, combined with local site knowledge to provide a figure you can stand behind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: 'gavel', title: 'Regulated', desc: 'Strict adherence to Royal Institution of Chartered Surveyors standards.', bg: 'linear-gradient(135deg,#1A6B4A,#145c3e)', shadow: 'rgba(26,107,74,0.35)' },
            { icon: 'analytics', title: 'Data-Driven', desc: 'Access to live BCIS construction indices for accurate, up-to-date figures.', bg: 'linear-gradient(135deg,#3b82f6,#2563eb)', shadow: 'rgba(59,130,246,0.35)' },
            { icon: 'verified', title: 'Defensible', desc: 'A certified RCA report provides leverage during claim disputes.', bg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', shadow: 'rgba(139,92,246,0.35)' },
          ].map(({ icon, title, desc, bg, shadow }, i) => (
            <div key={icon} className="card-pulse-seq bg-white shadow-sm rounded-xl p-7 flex flex-col items-center gap-4 text-center hover:shadow-md transition-all" style={{ '--card-delay': `${i * 3.5}s` }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: bg, boxShadow: `0 2px 10px ${shadow}` }}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RCA Lifecycle */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>timeline</span>Best Practice</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Reinstatement Cost Assessment Lifecycle.</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-[18px] top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" aria-hidden="true" />
              {[
                { icon: 'flag',        bg: 'linear-gradient(135deg,#1A6B4A,#145c3e)', shadow: 'rgba(26,107,74,0.35)',   label: 'Step 1', title: 'Baseline RCA',         desc: 'A full site or desktop professional valuation establishes your accurate reinstatement figure.' },
                { icon: 'update',      bg: 'linear-gradient(135deg,#3b82f6,#2563eb)', shadow: 'rgba(59,130,246,0.35)',  label: 'Year 1', title: 'Annual Index Update',   desc: 'Your valuation is adjusted in line with current BCIS construction cost indices.' },
                { icon: 'trending_up', bg: 'linear-gradient(135deg,#10b981,#059669)', shadow: 'rgba(16,185,129,0.35)',  label: 'Year 2', title: 'Continued Indexation',  desc: 'Ongoing monitoring ensures your sum insured reflects real-world inflation.' },
                { icon: 'restart_alt', bg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', shadow: 'rgba(139,92,246,0.35)', label: 'Year 3', title: 'Major Re-evaluation',   desc: 'A full reassessment every 3 years is recommended to maintain full RICS compliance.' },
              ].map(({ icon, label, title, desc, bg, shadow }, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 last:pb-0">
                  <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center z-10" style={{ background: bg, boxShadow: `0 2px 10px ${shadow}` }}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  </div>
                  <div className="bg-white border border-gray-100 flex-1 px-6 py-4 rounded-xl" style={{boxShadow:'0 6px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)'}}>
                    <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1A6B4A] block mb-0.5">{label}</span>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">{title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article links */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>article</span>Guides & Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Further Reading.</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm">Expert guidance for managing agents, freeholders and portfolio owners on reinstatement cost compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            ].map(({ tag, title, desc, href, img }, i) => (
              <a key={href} href={href} className="card-pulse-seq group bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col" style={{ '--card-delay': `${i * 3.5}s` }}>
                <div className="h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#1A6B4A] mb-2">{tag}</span>
                  <h3 className="font-semibold text-gray-900 text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center gap-1 text-[#1A6B4A] text-sm font-medium mt-4">
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
