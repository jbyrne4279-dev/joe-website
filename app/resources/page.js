import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

const resourcesFaqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment (RCA) calculates the total cost to rebuild your property from scratch after a total loss — including demolition, professional fees, materials, and compliance with current regulations.' },
  { question: 'Who needs a reinstatement cost assessment in the UK?', answer: 'Property owners, landlords, commercial asset managers, and leaseholders responsible for insurance all need RCAs to ensure their buildings are insured for the correct rebuild value.' },
  { question: 'Why is a reinstatement cost assessment important?', answer: 'Without an accurate RCA, you risk under-insurance. This can lead to reduced claim payouts under the Average Clause, leaving you to cover significant rebuild costs yourself.' },
  { question: 'How is reinstatement cost different from market value?', answer: 'Market value reflects what a property sells for. Reinstatement cost reflects the cost to rebuild it — often significantly higher due to construction costs, fees, and compliance requirements.' },
  { question: 'Do I need an RCA for insurance purposes?', answer: 'Yes. Insurers rely on accurate rebuild values. Without an RCA, you are estimating — which increases the risk of being under or over insured.' },
  { question: 'How is a reinstatement cost calculated?', answer: 'It is calculated based on building size, materials, specification, location, demolition costs, professional fees, and current construction rates — not purchase price.' },
  { question: 'How long does a reinstatement cost assessment take?', answer: 'Most assessments are completed within 48 hours after inspection. Larger or more complex properties may take slightly longer to ensure full accuracy.' },
  { question: 'What happens if my property is underinsured?', answer: 'If underinsured, insurers can reduce your claim payout proportionally. This means you may not receive enough to fully rebuild your property after damage or loss.' },
  { question: 'Do I need an RCA for a commercial property?', answer: 'Yes. Commercial properties often have higher rebuild complexity and cost. An RCA ensures your insurance fully reflects the risk and scale of the asset.' },
  { question: 'Can I estimate rebuild cost myself?', answer: 'Online calculators can give rough estimates, but they often miss key costs. A professional RCA provides an accurate, defensible figure aligned with insurer expectations.' },
]

export default function ResourcesPage() {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-8">

        {/* Hero */}
        <section className="py-24 lg:py-32 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-6 block">Expert Insight Guide</span>
          <h1 className="text-5xl md:text-[4rem] font-bold tracking-tight text-primary leading-[1.05] mb-8 max-w-4xl">
            <span className="text-shine-red">The quiet crisis</span> inside most buildings <span className="text-shine">insurance policies.</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed mb-12">
            In a rapidly shifting economy, the gap between what a building is worth and what it costs to rebuild is widening at an alarming rate. Discover why your current valuation might be leaving you dangerously exposed.
          </p>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden relative sovereign-shadow">
            <img
              className="w-full h-full object-cover opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALOMaU4yAO0fABDemBrPwIW0_JHcg5OCUfDCMgrVnZfZMHPdmT_UxkLb4VH-nCQaLW11YFCFg9voqLjC25o9B2GI89LFrZExDjKVvoCm5QrpahvM2W_qQdNDaJnxc-B-d6CSLkebPqSlNLFOwgIsozfCOc0LxX2-ogBKGB57cebbKp3u4T-W8NGtEdynuZhsleRozYnKGxhyPvQaBbot6EX5zIE0p1c2JH1GQsMOcTsxgBc1PINPZoKGlpyPIU3PtwWB3Fg4n1IL8"
              alt="Buildings insurance crisis"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </section>

        {/* Market Value vs Rebuild Cost */}
        <section className="py-20 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="space-y-10 w-full">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Common Misconception</span>
              <h2 className="text-4xl font-bold text-primary leading-tight">Your building is probably <span className="text-shine-red">insured for the wrong amount.</span></h2>
              <p className="text-secondary leading-relaxed max-w-lg mx-auto">
                Market value and rebuild cost are not the same figure yet most property owners confuse the two. The consequences of getting this wrong can be financially devastating.
              </p>
            </div>

            <div className="space-y-4 w-full">
              <div className="liquid-glass rounded-2xl p-7 border border-amber-400/30 shadow-[0_0_18px_2px_rgba(251,191,36,0.08)] hover:shadow-[0_0_28px_4px_rgba(251,191,36,0.16)] hover:border-amber-400/50 transition-all duration-300 flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-600" style={{ fontSize: '1.1rem' }}>warning</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Overinsured in rural areas</p>
                  <p className="text-secondary text-sm leading-relaxed">A countryside property worth £800k may cost only £320k to rebuild — you could be paying premiums on a £480k fiction.</p>
                </div>
              </div>

              <div className="liquid-glass rounded-2xl p-7 border border-red-400/20 shadow-[0_0_18px_2px_rgba(239,68,68,0.08)] hover:shadow-[0_0_28px_4px_rgba(239,68,68,0.16)] hover:border-red-400/40 transition-all duration-300 flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400" style={{ fontSize: '1.1rem' }}>trending_down</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Underinsured in urban areas</p>
                  <p className="text-secondary text-sm leading-relaxed">A city-centre flat worth £350k could cost £510k to rebuild — leaving a six-figure shortfall precisely when you need it most.</p>
                </div>
              </div>

              <div className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.22)] hover:border-[#1A6B4A]/60 transition-all duration-300 flex items-start gap-5 text-left">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1A6B4A]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">A RICS-regulated RCA eliminates the guesswork</p>
                  <p className="text-secondary text-sm leading-relaxed">Our assessments use live BCIS data and local site knowledge to give you the one figure that actually protects you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Averaging Clause */}
        <section className="py-20 bg-surface-container-low -mx-6 lg:-mx-12 px-6 lg:px-12 rounded-lg">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">The <span className="text-shine-yellow">&ldquo;Averaging Clause&rdquo;</span> Trap</h2>
            <p className="text-secondary text-lg">If you are underinsured by 40%, the insurer doesn&rsquo;t just pay up to your limit. They reduce your entire claim by 40%.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="liquid-glass p-10 rounded-lg sovereign-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#1A6B4A] mb-8">Scenario: The Reality Gap</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-surface-container-highest pb-4">
                    <span className="text-secondary">True Rebuild Cost</span>
                    <span className="text-2xl font-bold text-primary">£500,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-surface-container-highest pb-4">
                    <span className="text-secondary">Your Sum Insured</span>
                    <span className="text-2xl font-bold text-error">£300,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-secondary font-semibold">Degree of Underinsurance</span>
                    <span className="text-xl font-bold text-error">40%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary text-on-primary p-10 rounded-lg sovereign-shadow flex flex-col justify-center">
              <span className="material-symbols-outlined text-4xl mb-6">account_balance_wallet</span>
              <h3 className="text-2xl font-bold mb-4">The Payout Result</h3>
              <p className="text-on-primary-container mb-8">Even if you have a claim for £100,000, the insurer applies the 40% reduction based on your total underinsurance.</p>
              <div className="bg-white/10 p-6 rounded-lg">
                <span className="text-sm uppercase tracking-widest opacity-60">You receive only</span>
                <div className="text-4xl font-black mt-1">£60,000</div>
                <div className="mt-4 text-error font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  £40,000 Shortfall
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rising Costs */}
        <section className="py-24 max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Rising Costs</span>
            <h2 className="text-4xl font-bold text-primary leading-tight"><span className="text-shine-red">The Surge</span> in Construction Materials</h2>
            <p className="text-secondary leading-relaxed">
              Global supply chain volatility and labour shortages have pushed rebuild costs up by <span className="text-shine-slow font-bold">over 25%</span> since <span className="font-semibold text-primary">2019</span>. If your valuation hasn&rsquo;t been updated since <span className="font-semibold text-primary">2021</span>, you are almost certainly underinsured today.
            </p>
          </div>

          <div className="w-full liquid-glass p-10 rounded-2xl sovereign-shadow border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)]">
            <div className="flex items-start justify-between mb-8">
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block mb-1">BCIS Construction Index</span>
                <p className="text-secondary text-xs">Rebased cost index, 2019–2024</p>
              </div>
            </div>
            <div className="relative h-48 w-full flex items-end gap-3 mb-3">
              <div className="flex-1 rounded-t-lg bg-[#1A6B4A] hover:opacity-80 transition-all duration-500" style={{ height: '40%' }}></div>
              <div className="flex-1 rounded-t-lg bg-teal-500 hover:opacity-80 transition-all duration-500" style={{ height: '50%' }}></div>
              <div className="flex-1 rounded-t-lg bg-yellow-400 hover:opacity-80 transition-all duration-500" style={{ height: '62%' }}></div>
              <div className="flex-1 rounded-t-lg bg-orange-400 hover:opacity-80 transition-all duration-500" style={{ height: '76%' }}></div>
              <div className="flex-1 rounded-t-lg bg-amber-400 hover:opacity-80 transition-all duration-500" style={{ height: '100%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-secondary font-bold uppercase tracking-wider">
              <span>2019</span><span>2020</span><span>2021</span><span>2022</span><span>2024</span>
            </div>
            <div className="mt-6 pt-5 border-t border-outline-variant/20 flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#1A6B4A]"></span><span className="text-xs text-secondary">Stable</span></div>
              <span className="text-secondary/30 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span><span className="text-xs text-secondary">Rising</span></div>
              <span className="text-secondary/30 text-xs">→</span>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span className="text-xs text-secondary">Critical</span></div>
            </div>
          </div>
        </section>

        {/* Why RICS & BCIS */}
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Our Standard</span>
            <h2 className="text-4xl font-bold text-primary">Why <span className="text-shine">RICS &amp; BCIS Matter</span></h2>
            <p className="text-secondary leading-relaxed">
              Rebuild Cost Assessment Ltd is a RICS Regulated firm. We use Building Cost Information Service (BCIS) data — the industry standard for surveyors — combined with local site knowledge to provide a figure you can stand behind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: 'gavel', title: 'Regulated', desc: 'Strict adherence to Royal Institution of Chartered Surveyors standards.' },
              { icon: 'analytics', title: 'Data-Driven', desc: 'Access to live BCIS construction indices for accurate, up-to-date figures.' },
              { icon: 'verified', title: 'Defensible', desc: 'A certified RCA report provides leverage during claim disputes.' },
            ].map(({ icon, title, desc }) => (
              <div key={icon} className="liquid-glass rounded-2xl p-8 flex flex-col items-center gap-4 border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.22)] hover:border-[#1A6B4A]/60 transition-all duration-300">
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
        <section className="py-24">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block">Best Practice</span>
            <h2 className="text-4xl font-bold text-primary">The <span className="text-shine">Rebuild Cost Assessment Lifecycle</span></h2>
          </div>
          <div className="liquid-glass p-12 rounded-2xl sovereign-shadow border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.10)] max-w-2xl mx-auto">
            <div className="flex flex-col">
              {[
                { side: 'right', icon: 'flag', title: 'Baseline RCA', desc: 'Full site or desktop professional valuation.', bold: true },
                { side: 'left', icon: 'update', title: 'Annual Indexation', desc: 'Adjusted by policy indexation rates.', bold: false },
                { side: 'right', icon: 'trending_up', title: 'Annual Indexation', desc: 'Continued monitoring of inflation.', bold: false },
                { side: 'left', icon: 'restart_alt', title: 'Major Re-evaluation', desc: 'RICS recommends a full review every 3 years.', bold: true },
              ].map(({ side, icon, title, desc, bold }, i) => (
                <div key={i}>
                  <div className="grid grid-cols-[1fr_40px_1fr] items-center gap-6">
                    {side === 'left' ? (
                      <div className="text-right">
                        <p className={`${bold ? 'font-bold' : 'font-semibold'} text-primary text-sm`}>{title}</p>
                        <p className="text-xs text-secondary mt-1 leading-relaxed">{desc}</p>
                      </div>
                    ) : <div />}
                    <div className="w-10 h-10 rounded-full bg-[#1A6B4A]/10 border-2 border-[#1A6B4A]/40 flex items-center justify-center">
                      <span className="material-symbols-outlined" style={{ fontSize: '1rem', background: 'linear-gradient(105deg,#1A6B4A 40%,#4ade80 50%,#1A6B4A 60%)', backgroundSize: '200% auto', animation: 'shine 3s linear infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{icon}</span>
                    </div>
                    {side === 'right' ? (
                      <div>
                        <p className={`${bold ? 'font-bold' : 'font-semibold'} text-primary text-sm`}>{title}</p>
                        <p className="text-xs text-secondary mt-1 leading-relaxed">{desc}</p>
                      </div>
                    ) : <div />}
                  </div>
                  {i < 3 && (
                    <div className="grid grid-cols-[1fr_40px_1fr]">
                      <div />
                      <div className="flex justify-center"><div className="w-0.5 h-8 bg-outline-variant/30"></div></div>
                      <div />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <ContactSection
        heading={
          <>
            Get in <span className="text-shine">Contact.</span>
          </>
        }
      />
      <FaqSection
        description="Learn how reinstatement cost assessments work, why RICS compliance matters, and how to avoid costly underinsurance."
        items={resourcesFaqItems}
      />
    </main>
  )
}
