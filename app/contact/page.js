import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-8">

      {/* Hero */}
      <section className="py-24 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block" style={{ letterSpacing: '0.3em' }}>Professional Consultation</span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
          Don&rsquo;t find out you&rsquo;re<br />underinsured <span className="text-shine-slow">the hard way.</span>
        </h1>
        <div className="w-12 h-0.5" aria-hidden="true"></div>
        <p className="text-xl text-secondary font-light max-w-xl leading-relaxed">
          Over 80% of UK properties are insured for the wrong amount. A RICS-regulated RCA takes less than 48 hours — and could save you hundreds of thousands in an uncapped claim.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <div className="pill-pulse inline-flex items-center gap-3 bg-[#1A6B4A]/10 px-5 py-2.5 rounded-full border border-[#1A6B4A]/20">
            <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>bolt</span>
            <span className="text-[#1A6B4A] font-bold text-xs tracking-widest uppercase">24-Hour Response Promise</span>
          </div>
          <div className="pill-pulse inline-flex items-center gap-3 bg-[#1A6B4A]/10 px-5 py-2.5 rounded-full border border-[#1A6B4A]/20" style={{ animationDelay: '0.75s' }}>
            <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>gavel</span>
            <span className="text-[#1A6B4A] font-bold text-xs tracking-widest uppercase">RICS Regulated</span>
          </div>
          <div className="pill-pulse inline-flex items-center gap-3 bg-[#1A6B4A]/10 px-5 py-2.5 rounded-full border border-[#1A6B4A]/20" style={{ animationDelay: '1.5s' }}>
            <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem' }}>verified</span>
            <span className="text-[#1A6B4A] font-bold text-xs tracking-widest uppercase">No Hidden Fees</span>
          </div>
        </div>
      </section>

      </div>
      <ContactSection
        heading={
          <>
            <span className="text-shine">Find Out If</span>
            <br />
            <span className="text-shine-red">You&rsquo;re Underinsured</span>
          </>
        }
      />

    </main>
  )
}
