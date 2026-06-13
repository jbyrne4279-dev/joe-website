import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Assessments',
  description:
    'Stay compliant and protect managed properties. RICS reinstatement valuations for managing agents   fast, accurate, and fully documented. BCIS-indexed and insurer accepted.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Assessments',
    description:
      'Stay compliant and protect managed properties. RICS reinstatement valuations for managing agents   fast, accurate, and fully documented. BCIS-indexed and insurer accepted.',
    url: '/managing-agents-insurance-valuations',
  },
}

export default function ManagingAgentsPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 60%)'}} />
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
            Insurance Valuations for Managing Agents.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Stay compliant and protect managed properties. RICS reinstatement valuations your insurers will accept — fast, accurate, and fully documented.
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
              Problems we solve for managing agents.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: 'domain', bg: 'linear-gradient(135deg,#6366f1,#4f46e5)', shadow: 'rgba(99,102,241,0.35)',
                title: 'Managing multiple properties with outdated valuations.',
                desc: 'Keeping accurate, current reinstatement figures across a managed portfolio is complex. Outdated figures create compliance gaps and expose landlords and managing agents to liability.',
              },
              {
                icon: 'trending_up', bg: 'linear-gradient(135deg,#10b981,#059669)', shadow: 'rgba(16,185,129,0.35)',
                title: "Index linking doesn't account for local build cost inflation.",
                desc: 'Generic national indices miss regional variation in labour costs and material availability. A property in London or the South East can diverge sharply from a blanket index-linked figure.',
              },
              {
                icon: 'shield_question', bg: 'linear-gradient(135deg,#f59e0b,#d97706)', shadow: 'rgba(245,158,11,0.35)',
                title: 'Liability exposure if a property is underinsured at claim.',
                desc: 'If an underinsured property suffers a major loss, managing agents face serious questions about whether they fulfilled their duty of care in maintaining adequate insurance.',
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
              Our solution for managing agents.
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop&auto=format&q=80"
            alt="Professional reviewing documents at a desk"
            className="w-full h-64 md:h-72 object-cover rounded-2xl mb-10 border border-gray-200"
          />
          <div className="space-y-3 max-w-2xl mx-auto">
            {[
              'Consolidated portfolio reports with per-property breakdowns',
              'RICS-regulated and BCIS-indexed — insurer accepted',
              'Named surveyor from instruction to delivery',
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
              Protect every property you manage.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              RICS-regulated insurance valuations tailored for managing agents — consolidated reporting, insurer accepted, delivered fast.
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
