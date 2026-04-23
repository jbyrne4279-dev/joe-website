import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

const contactFaqItems = [
  { question: 'What is the average rebuild cost per square foot in the UK?', answer: 'Rebuild costs vary by property type and region. As of 2024, typical UK rebuild costs range from £1,500 to £3,500 per square metre depending on specification, location, and construction complexity. A RICS-regulated RCA gives you the exact figure for your specific building.' },
  { question: 'How do rising construction costs affect my building insurance?', answer: "UK construction costs have risen over 25% since 2019 due to material shortages and labour inflation. If your sum insured hasn't been updated, your policy is almost certainly below the true rebuild cost — leaving you exposed to a proportional reduction in any claim." },
  { question: 'Can I use my mortgage valuation as my buildings insurance figure?', answer: 'No. A mortgage valuation assesses lending risk, not rebuild cost. Using it for insurance is one of the most common causes of underinsurance in the UK. Only a RICS-regulated RCA provides an insurer-defensible rebuild figure.' },
  { question: 'What does a rebuild cost assessment include for commercial property?', answer: 'A commercial RCA covers demolition and site clearance, rebuilding to current regulations, professional fees such as architects and engineers, and all external structures within the curtilage. It accounts for regional labour rates and current material costs.' },
  { question: 'What is the BCIS and why does it matter for my rebuild valuation?', answer: 'The Building Cost Information Service is the industry-standard data source used by RICS surveyors to benchmark construction costs. We use live BCIS indices to ensure your rebuild figure reflects current market rates — not outdated estimates.' },
  { question: 'What happens to my insurance claim if I am significantly underinsured?', answer: 'Under the Condition of Average, insurers reduce payouts proportionally to the degree of underinsurance. If your rebuild cost is £500,000 but you are insured for £300,000, a £100,000 claim would only pay out £60,000 — leaving a £40,000 shortfall you must cover yourself.' },
  { question: 'Do leaseholders need a reinstatement cost assessment?', answer: 'Yes. Where leaseholders are responsible for insuring the structure under their lease terms, an RCA is essential. Without one, you risk breaching lease obligations and being personally liable for any rebuild shortfall.' },
  { question: 'How does inflation affect reinstatement cost assessments over time?', answer: "Construction inflation directly erodes the accuracy of your RCA. A valuation from three years ago may underestimate today's rebuild cost by 20% or more. Annual indexation and a full reassessment every three years keeps your coverage aligned with current costs." },
  { question: 'What professional fees are included in a reinstatement cost assessment?', answer: 'Professional fees typically include architect, structural engineer, quantity surveyor, and planning consultant costs — all required to manage a full rebuild. These can add 12–18% on top of construction costs and are often overlooked in estimates.' },
  { question: 'Can a reinstatement cost assessment be used as evidence in an insurance dispute?', answer: 'Yes. A RICS-regulated RCA is a professionally certified document that carries legal weight in insurance disputes and claim negotiations. It provides an independently verified rebuild figure that insurers cannot easily challenge.' },
]

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
      <FaqSection
        description="Everything you need to know about rebuild costs, RICS-regulated assessments, and protecting yourself from underinsurance."
        items={contactFaqItems}
      />

    </main>
  )
}
