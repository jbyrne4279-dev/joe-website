import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-8">

      {/* Hero */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block" style={{ letterSpacing: '0.3em' }}>Professional Consultation</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
          Don&rsquo;t find out you&rsquo;re<br className="hidden md:block" /> <span className="text-shine-red">underinsured the hard way.</span>
        </h1>
        <div className="w-12 h-0.5" aria-hidden="true"></div>
        <p className="text-xl text-secondary font-light max-w-xl leading-relaxed">
          Over 80% of UK properties are insured for the wrong amount. A RICS-regulated RCA takes less than 48 hours — and could save you hundreds of thousands in an uncapped claim.
        </p>
      </section>

      </div>
      <ContactSection
        heading={
          <>
            Get in <span className="text-shine">Contact.</span>
          </>
        }
      />

    </main>
  )
}
