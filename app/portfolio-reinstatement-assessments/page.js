import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
  description:
    'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios   desktop or on-site.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
  openGraph: {
    title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
    description:
      'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios   desktop or on-site.',
    url: '/portfolio-reinstatement-assessments',
  },
}

export default function PortfolioReinstatementPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 60%)'}} />
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Reinstatement Cost Assessments for Property Portfolios.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            One instruction. Every asset covered. RICS-regulated portfolio RCAs with consolidated reporting — desktop or on-site across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/contact#contact-form" className="btn-shine text-white px-7 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
              Request a Quote
            </Link>
            <Link href="/services" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-7 py-3.5 rounded-full font-semibold text-sm transition-all">
              View Services
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#1A6B4A]/[0.06] border border-[#1A6B4A]/15 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
            <span className="text-xs text-[#1A6B4A] tracking-wide font-medium">RICS Regulated · London & UK</span>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="px-6 max-w-5xl mx-auto mt-4 mb-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=400&fit=crop&auto=format&q=80"
          alt="Aerial view of UK property and cityscape"
          className="w-full h-64 md:h-72 object-cover rounded-2xl border border-gray-200"
        />
      </div>

      {/* Problems We Solve */}
      <section className="py-20 px-6 border-t border-gray-100 mt-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Problems we solve for portfolio owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: 'query_stats',
                title: 'Portfolio-wide underinsurance building up undetected.',
                desc: 'Across a large portfolio, small valuation shortfalls compound into significant underinsurance exposure — often unnoticed until a major claim reveals the gap.',
              },
              {
                icon: 'event_repeat', bg: 'linear-gradient(135deg,#6366f1,#4f46e5)', shadow: 'rgba(99,102,241,0.35)',
                title: 'Renewing policies with stale per-property figures.',
                desc: 'Without regular RICS assessments, portfolios renew on figures that may be years out of date — creating avoidable risk and potential disputes with insurers at claim.',
              },
              {
                icon: 'category', bg: 'linear-gradient(135deg,#8b5cf6,#7c3aed)', shadow: 'rgba(139,92,246,0.35)',
                title: 'No consolidated view across mixed-use assets.',
                desc: 'Portfolios combining residential, commercial, and industrial assets rarely have a unified, accurate picture of rebuild exposure. Managing risk requires that consolidated view.',
              },
            ].map(({ icon, title, desc, bg, shadow }) => (
              <div key={title} className="bg-white border border-gray-200 shadow-sm rounded-xl p-7 flex flex-col gap-4 hover:shadow-md transition-all">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: bg, boxShadow: `0 2px 10px ${shadow}` }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Our solution for property portfolios.
            </h2>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {[
              'National coverage — desktop and on-site across the UK',
              'Consolidated report with individual asset schedules',
              'Competitive portfolio pricing — contact us for a quote',
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md transition-all">
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#1A6B4A,#145c3e)', boxShadow: '0 2px 10px rgba(26,107,74,0.35)' }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <p className="text-gray-700 font-medium text-sm leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-10 md:p-14 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              One instruction. Every asset accurately valued.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Get a consolidated, RICS-regulated portfolio reinstatement cost assessment — nationwide coverage, competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-all">
                Request a Quote
              </Link>
              <Link href="/services" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold text-sm transition-all">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
