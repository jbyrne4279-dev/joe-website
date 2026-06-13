import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Commercial Reinstatement Cost Assessments | RICS Regulated UK',
  description:
    'Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated commercial Reinstatement Cost Assessments your broker will accept   delivered in 5 days.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
  openGraph: {
    title: 'Commercial Reinstatement Cost Assessments | RICS Regulated UK',
    description:
      'Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated commercial Reinstatement Cost Assessments your broker will accept   delivered in 5 days.',
    url: '/commercial-reinstatement-costs',
  },
}

export default function CommercialReinstatementPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 60%)'}} />
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Commercial Reinstatement Cost Assessments.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated assessments your broker will accept — delivered fast.
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

      {/* Problems We Solve */}
      <section className="py-20 px-6 border-t border-gray-100 mt-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Problems we solve for commercial property owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: 'construction', bg: 'linear-gradient(135deg,#f97316,#ea580c)', shadow: 'rgba(249,115,22,0.35)',
                title: 'Commercial rebuild costs rising faster than index linking keeps up.',
                desc: 'Material costs, labour shortages, and supply chain pressures have driven commercial rebuild costs well above what standard index linking captures — widening the underinsurance gap year on year.',
              },
              {
                icon: 'calculate', bg: 'linear-gradient(135deg,#3b82f6,#2563eb)', shadow: 'rgba(59,130,246,0.35)',
                title: 'Generic online calculators miss specialist fitout and M&E costs.',
                desc: 'Commercial buildings contain significant mechanical, electrical, and specialist fitout costs that generic calculators ignore entirely — leading to materially understated reinstatement figures.',
              },
              {
                icon: 'verified_user', bg: 'linear-gradient(135deg,#1A6B4A,#145c3e)', shadow: 'rgba(26,107,74,0.35)',
                title: 'Insurers and lenders requiring up-to-date RICS assessments.',
                desc: 'Increasingly, commercial insurers and lenders require a verifiable RICS-regulated reinstatement figure before agreeing terms — a generic estimate or calculator output is no longer sufficient.',
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
              Our solution for commercial properties.
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop&auto=format&q=80"
            alt="Commercial office building exterior"
            className="w-full h-64 md:h-72 object-cover rounded-2xl mb-10 border border-gray-200"
          />
          <div className="space-y-3 max-w-2xl mx-auto">
            {[
              'Specialist commercial surveyors — all asset classes',
              'Fitout, M&E, and external works included',
              'RICS-regulated report ready in 5 days',
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
              Get an accurate commercial reinstatement figure today.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              RICS-regulated assessments for offices, warehouses, retail, and mixed-use — covering fitout, M&E, and external works. Broker-ready in 5 days.
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
