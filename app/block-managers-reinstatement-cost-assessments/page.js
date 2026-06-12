import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | RICS Regulated',
  description:
    'RICS-regulated Reinstatement Cost Assessments for block managers. Protect leaseholders from underinsurance with BCIS-indexed figures accepted by all major insurers   delivered in 5 days.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
  openGraph: {
    title: 'Reinstatement Cost Assessments for Block Managers | RICS Regulated',
    description:
      'RICS-regulated Reinstatement Cost Assessments for block managers. Protect leaseholders from underinsurance with BCIS-indexed figures accepted by all major insurers   delivered in 5 days.',
    url: '/block-managers-reinstatement-cost-assessments',
  },
}

export default function BlockManagersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Block Management
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
              Reinstatement Cost Assessments for Block Managers
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Protect leaseholders from underinsurance. RICS-regulated assessments accepted by all major insurers   delivered in 5 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#contact-form"
                className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight">
              Problems we solve for block managers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'warning',
                title: 'Leaseholders exposed to underinsurance risk',
                desc: 'Without a current RICS assessment, the sum insured on a block policy may fall well short of the true rebuild cost   leaving every leaseholder exposed if a major claim arises.',
              },
              {
                icon: 'trending_up',
                title: 'Index linking drifts from true rebuild costs',
                desc: 'Automatic index-linking adjustments do not account for local labour shortages, material inflation, or changes in build complexity. Over time, the gap between the insured figure and reality widens.',
              },
              {
                icon: 'gavel',
                title: 'Insurers querying sums insured at renewal',
                desc: 'When insurers challenge the adequacy of a sum insured at renewal   without a RICS-regulated report to support it   block managers face delays, increased premiums, and reputational risk.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_20px_2px_rgba(26,107,74,0.10)] transition-all duration-300"
              >
                <div className="w-10 h-10 btn-shine rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f3d28] text-base mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight">
              Our solution for block managers
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Full RICS-regulated reinstatement assessment per block',
              'BCIS-indexed figures accepted by all major insurers',
              'Delivered in 5 days   desktop or on-site',
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl border border-[#1A6B4A]/20 bg-zinc-50 hover:border-[#1A6B4A]/40 transition-all duration-300"
              >
                <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '0.95rem', fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </div>
                <p className="text-[#0f3d28] font-semibold leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1A6B4A] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Ready to protect your leaseholders?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto">
            Get a RICS-regulated reinstatement cost assessment for your block   fast, accurate, and insurer-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#contact-form"
              className="bg-white text-[#1A6B4A] px-8 py-4 rounded-full font-bold hover:bg-zinc-100 active:scale-[0.97] transition-all text-center sovereign-shadow"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
