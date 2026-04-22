import Link from 'next/link'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

const homeFaqItems = [
  { question: 'How much does a typical RCA cost?', answer: 'Small commercial units start from £450. Large or complex industrial estates and high-net-worth residences are quoted bespoke on a time-charge basis.' },
  { question: 'How often should I update my RCA?', answer: 'RICS recommends a full RCA every 3 years, with annual desktop indexing in between — accounting for sharp rises in construction materials and labour rates.' },
  { question: 'What are the risks of under-insurance?', answer: 'Under the "Average" clause, being 20% under-insured means your insurer can cut any claim payout by 20% — leaving a major shortfall in a total loss scenario.' },
  { question: 'Does a market valuation work for insurance?', answer: 'No. Market value is what a building sells for. Reinstatement cost is what it costs to fully rebuild — including demolition, fees, and modern materials. They are rarely the same.' },
  { question: 'Are VAT costs included in the assessment?', answer: "Yes. We specify whether the figure is inclusive or exclusive of VAT, based on the property owner's VAT status and building type." },
  { question: 'Do you assess listed buildings?', answer: 'Absolutely. Listed buildings require specialist RCA knowledge — authentic materials and skilled craftsmen significantly inflate rebuild costs and demand expert handling.' },
  { question: 'How long does a site visit take?', answer: 'A typical 10,000 sq ft office takes 90 minutes to 2 hours on-site to ensure every structural detail is accurately captured.' },
  { question: 'Can you provide RCAs for a multi-asset portfolio?', answer: 'Yes. We specialise in national portfolio valuations and provide a consolidated report with individual breakdown schedules for each asset.' },
  { question: 'Do RCAs cover outbuildings and fences?', answer: 'Yes. Our assessments include curtilage assets — external parking, boundary walls, and ancillary structures — unless explicitly excluded by the client.' },
  { question: 'Is the 48-hour turnaround guaranteed?', answer: 'For standard commercial and residential properties, yes. Highly complex industrial sites may require up to 72 hours to ensure full accuracy.' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold leading-[1.05] tracking-tight text-primary">
            <span className="text-shine-red">80%</span> of UK buildings are{' '}
            <span className="text-shine-red">underinsured.</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary mt-4 block">Is yours one of them?</span>
          </h1>
          <p className="text-xl text-secondary max-w-lg leading-relaxed">
            We provide RICS-regulated Reinstatement Cost Assessments. Giving you the exact figure that protects your assets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/contact" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow">
              Get your RCA
            </Link>
            <Link href="/resources" className="bg-white/50 backdrop-blur-md px-8 py-4 rounded-full font-bold text-primary active:scale-[0.97] transition-transform outline outline-1 outline-primary/10">
              Do I need a RCA?
            </Link>
          </div>
        </div>
      </section>

      {/* What is an RCA */}
      <section className="bg-surface py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-bold text-[#1A6B4A] uppercase tracking-[0.2em]">The Framework</span>
              <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-semibold leading-tight text-primary">
                What is a <span className="text-shine-slow">Rebuild Cost Assessment?</span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                A Rebuild Cost Assessment (RCA) is a detailed professional calculation of the exact cost to rebuild a property from scratch after total destruction.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Unlike generic valuations, our RICS-regulated process accounts for regional labor costs, current material inflation, and professional fees, ensuring your insurance policy is built on facts, not estimates.
              </p>
            </div>
            <img
              className="w-full h-60 md:h-80 object-cover rounded-xl sovereign-shadow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjNFcUmx4iVvKMaS5g4eXg4Y_kYPhasFXI9CfrwkuXePz-zXktmWxY_8A6eoHAZ7b-9pc3OeQ86ld0lqAe_FJnUqQKX3KS7-FSvhAzRA5LQN11WgNDP46WcOj7VHd0Sb3fHYdzX2HtSxealWxBV5G-mHdGLmAiGWF4IplVSfjeC0t5C2UkC75dXoYETgDQj156ib13jDhbSSXCYt_pJbE7TwlTdIoCyruaS5_R-BmDJ1fnx7aq1ePMjk5MYgKfxisK9uGQjVGy3t4"
              alt="Architectural blueprint on a sustainable timber building"
            />
          </div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Instruct', desc: 'Provide basic property details through our secure digital portal or request an on-site survey.' },
              { step: '2', title: 'Assess', desc: 'Our experts use RICS-certified data to analyze structural elements, materials, and external site features.' },
              { step: '3', title: 'Report', desc: 'Receive a comprehensive report ready for your broker or insurer, highlighting the exact reinstatement sum insured.' },
              { step: '4', title: 'Correct', desc: 'Update your policy with total confidence, knowing you are neither over-paying nor dangerously under-protected.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative p-6 md:p-8 pl-10 md:pl-8 rounded-xl bg-surface-container-low sovereign-shadow border-l-4 border-[#1A6B4A]">
                <span className="btn-shine absolute -left-5 md:-left-6 top-6 w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center font-bold">{step}</span>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass rounded-2xl p-8 sm:p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-[#1A6B4A]/30 shadow-[0_0_40px_6px_rgba(26,107,74,0.10)] sovereign-shadow">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" style={{ background: 'rgba(26,107,74,0.08)' }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" style={{ background: 'rgba(26,107,74,0.06)' }}></div>

            <div className="md:w-1/2 space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">The Problem</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                The Risk of <span className="text-[#1A6B4A]">Underinsurance.</span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Recent data suggests that over <span className="font-semibold text-primary">80%</span> of UK commercial properties are inadequately insured. In the event of a total loss, the financial gap can be catastrophic for owners and investors alike.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-4xl font-bold text-shine-red">£425bn</span>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Estimated Gap</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-bold text-shine-red">80%+</span>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Underinsured</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-5 relative z-10">
              <div className="liquid-glass rounded-2xl p-7 border border-red-400/20 shadow-[0_0_18px_2px_rgba(239,68,68,0.08)] hover:shadow-[0_0_28px_4px_rgba(239,68,68,0.15)] hover:border-red-400/40 transition-all duration-300 flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400 text-xl">report</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Financial Consequences</h4>
                  <p className="text-sm text-secondary leading-relaxed">The &lsquo;Condition of Average&rsquo; clause means if you are <span className="font-semibold text-primary">20% underinsured</span>, your claim payout could be reduced by the same amount — even for partial damage.</p>
                </div>
              </div>
              <div className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.22)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Our Resolution</h4>
                  <p className="text-sm text-secondary leading-relaxed">We provide RICS-regulated Reinstatement Cost Assessments that align with current construction costs and inflationary trends — giving you a figure you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RCA Ltd */}
      <section className="py-16 md:py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <img
                className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWItcC8v66o-s9bC9mNHI66TaDd3NFgyOp2ibu_8afpGEuK9j9erHt0Amq7E8BKl3IhxLVcHFN8fE7GaEf_iFn8tth3VSRSmsOrH81GqWMT7ow9RgHZOoAwZ_QSVox8E2GiZxblnD_FmK2Z5AMVuC-tcfKvRXFcLa-DSjLtruJ1xLV6XmgES9Arz03vSBpr1p2S_Xrw3HI3JP8AvkH3euKbvezG9g9-l8euF2k8PuL7vyHH8rzfKhT4erkdbWvEK8emFBYU8aPOek"
                alt="Professional chartered surveyor reviewing blueprints"
              />
              <div className="absolute -bottom-6 -right-6 liquid-glass p-6 rounded-lg z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="btn-shine w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>verified_user</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary font-bold">Regulation</p>
                    <p className="font-bold text-primary">RICS Authenticated</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Why <span className="text-shine">RCA Ltd?</span></h2>
                <p className="text-secondary text-lg leading-relaxed">With over 50 years of collective experience, we have refined a methodology that balances technical precision with high-end client care.</p>
              </div>
              <div className="space-y-8">
                {[
                  { icon: 'history', title: '50+ Years Experience', desc: 'Decades of navigating evolving building codes, material costs, and insurance market shifts.' },
                  { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Utilising proprietary BCIS data and advanced surveying technology to eliminate guesswork.' },
                  { icon: 'policy', title: 'Liability Protection', desc: 'Our reports are legally robust, providing a definitive shield against professional indemnity disputes.' },
                ].map(({ icon, title, desc }) => (
                  <div key={icon} className="flex gap-6">
                    <div className="btn-shine shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '1.2rem' }}>{icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-[#1A6B4A]">{title}</h4>
                      <p className="text-secondary">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Who We Serve</h2>
              <p className="text-on-surface-variant leading-relaxed">Dedicated expertise for every tier of the property market, from individual legacy homes to sprawling institutional portfolios.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE', alt: 'British country home', title: 'Homeowners', desc: 'Protecting your legacy and ensuring accurate coverage for bespoke architectural features.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c', alt: 'Modern office interior', title: 'Commercial Landlords', desc: 'Minimizing business interruption risks and maintaining rigorous compliance standards.' },
              { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU', alt: 'Professional boardroom', title: 'Asset Managers', desc: 'Streamlined reporting and audit-ready data for multi-national property portfolios.' },
            ].map(({ src, alt, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-xl h-96">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={src} alt={alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h4 className="text-white text-2xl font-bold mb-2">{title}</h4>
                  <p className="text-white/80 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Request Your <span className="text-shine">RICS-Regulated RCA</span>
          </>
        }
      />
      <FaqSection
        description="Everything you need to know about Reinstatement Cost Assessments, RICS compliance, and how we protect your assets."
        items={homeFaqItems}
      />
    </main>
  )
}
