import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Free Portfolio Review | Identify Underinsured Buildings | RCA Ltd',
  description: "Upload your property schedule and we'll identify which buildings are overdue for reassessment. Free review for managing agents and portfolio owners   no obligation.",
  alternates: { canonical: '/free-portfolio-review' },
  openGraph: {
    title: 'Free Portfolio Review   Identify Underinsured Buildings',
    description: "Upload your property schedule and we'll identify which buildings are overdue for reassessment. Free review for managing agents and portfolio owners.",
    url: '/free-portfolio-review',
  },
}

export default function FreePortfolioReviewPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A] py-24 px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/50 mb-4 text-center">Free Offer   No Obligation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight text-center">Free Portfolio Review<br className="hidden md:block" /> for Managing Agents</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-center">Upload your property schedule and we&rsquo;ll identify which buildings are overdue for a reinstatement cost assessment   at no cost to you.</p>
          <Link href="/contact#contact-form" className="btn-shine text-white px-9 py-4 rounded-full font-bold text-base inline-block sovereign-shadow text-center">Request Your Free Review</Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3 text-center">What You Get</h2>
            <p className="text-secondary max-w-xl mx-auto text-center">A no-obligation review of your portfolio against current RICS reassessment guidance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'search', title: 'Full Portfolio Review', desc: "We review every property on your schedule against current RICS guidance and BCIS inflation data." },
              { icon: 'flag', title: 'Flag Overdue Reassessments', desc: 'We identify which buildings are overdue based on last assessment date, construction type, and market movement.' },
              { icon: 'thumb_up', title: 'No Obligation', desc: "The review is completely free. We'll tell you what we find and leave the decision entirely with you." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/15 sovereign-shadow text-center flex flex-col items-center">
                <div className="btn-shine w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <h3 className="font-bold text-primary mb-2 text-center">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3 text-center">How It Works</h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=400&fit=crop&auto=format&q=80"
            alt="Person at a laptop reviewing a spreadsheet"
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 sovereign-shadow"
          />
          <div className="space-y-6 mb-12">
            {[
              { n: '1', label: 'Send us your property schedule', desc: 'Email a spreadsheet or PDF listing your properties   address, approximate floor area, last assessment date if known.' },
              { n: '2', label: 'We review against RICS guidance', desc: 'Our surveyors compare each asset against current RICS reassessment intervals and BCIS cost inflation since the last valuation.' },
              { n: '3', label: 'You receive a clear summary', desc: "Within 2 working days, we'll return a simple report flagging which properties are overdue and why   with no obligation to proceed." },
            ].map(({ n, label, desc }) => (
              <div key={n} className="flex flex-col items-center text-center gap-4">
                <div className="btn-shine shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mx-auto">{n}</div>
                <div className="liquid-glass w-full rounded-2xl p-5 border border-[#1A6B4A]/15 text-center">
                  <p className="font-bold text-primary mb-1 text-center">{label}</p>
                  <p className="text-secondary text-sm leading-relaxed text-center">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA box */}
          <div className="bg-[#0f3d28] rounded-2xl p-8 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Ready to get started?</h3>
            <p className="text-white/60 mb-6 text-center">Get in touch and we&rsquo;ll take it from there.</p>
            <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold inline-block mb-4 text-center">Request Your Free Review</Link>
            <p className="text-white/40 text-sm text-center">Or email your schedule directly to <a href="mailto:info@rca-ltd.com" className="text-white/60 underline">info@rca-ltd.com</a></p>
          </div>
        </div>
      </section>

      <ContactSection
        heading={<>Start Your Free<br /><span className="text-shine">Portfolio Review</span> Today.</>}
      />
    </main>
  )
}
