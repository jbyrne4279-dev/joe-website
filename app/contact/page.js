import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'Get a Reinstatement Cost Assessment | Instruct Online Today',
  },
  description:
    'Instruct a RICS Reinstatement Cost Assessment online in minutes. Desktop and On-Site Survey options available. We respond within 24 hours   accepted by all UK insurers.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Get a RICS Reinstatement Cost Assessment | RCA Ltd UK',
    description:
      'Instruct a RICS Reinstatement Cost Assessment for your UK building. Desktop and on-site options available. 24-hour response guaranteed.',
    url: '/contact',
  },
}

const contactFaqItems = [
  { question: 'What is the average rebuild cost per square foot in the UK?', answer: 'Rebuild costs vary by property type and region. As of 2024, typical UK rebuild costs range from £1,500 to £3,500 per square metre depending on specification, location, and construction complexity. A RICS-regulated RCA gives you the exact figure for your specific building.' },
  { question: 'How do rising construction costs affect my building insurance?', answer: "UK construction costs have risen over 25% since 2019 due to material shortages and labour inflation. If your sum insured hasn't been updated, your policy is almost certainly below the true rebuild cost, leaving you exposed to a proportional reduction in any claim." },
  { question: 'Can I use my mortgage valuation as my buildings insurance figure?', answer: 'No. A mortgage valuation assesses lending risk, not rebuild cost. Using it for insurance is one of the most common causes of underinsurance in the UK. Only a RICS-regulated RCA provides an insurer-defensible rebuild figure.' },
  { question: 'What does a rebuild cost assessment include for commercial property?', answer: 'A commercial RCA covers demolition and site clearance, rebuilding to current regulations, professional fees such as architects and engineers, and all external structures within the curtilage. It accounts for regional labour rates and current material costs.' },
  { question: 'What is the BCIS and why does it matter for my rebuild valuation?', answer: 'The Building Cost Information Service is the industry-standard data source used by RICS surveyors to benchmark construction costs. We use live BCIS indices to ensure your rebuild figure reflects current market rates, not outdated estimates.' },
  { question: 'What happens to my insurance claim if I am significantly underinsured?', answer: 'Under the Condition of Average, insurers reduce payouts proportionally to the degree of underinsurance. If your rebuild cost is £500,000 but you are insured for £300,000, a £100,000 claim would only pay out £60,000, leaving a £40,000 shortfall you must cover yourself.' },
  { question: 'Do leaseholders need a rebuild cost assessment?', answer: 'Yes. Where leaseholders are responsible for insuring the structure under their lease terms, an RCA is essential. Without one, you risk breaching lease obligations and being personally liable for any rebuild shortfall.' },
  { question: 'How does inflation affect rebuild cost assessments over time?', answer: "Construction inflation directly erodes the accuracy of your RCA. A valuation from three years ago may underestimate today's rebuild cost by 20% or more. Annual indexation and a full reassessment every three years keeps your coverage aligned with current costs." },
  { question: 'What professional fees are included in a rebuild cost assessment?', answer: 'Professional fees typically include architect, structural engineer, quantity surveyor, and planning consultant costs. All are required to manage a full rebuild and can add 12 to 18% on top of construction costs, yet are often overlooked in estimates.' },
  { question: 'Can a rebuild cost assessment be used as evidence in an insurance dispute?', answer: 'Yes. A RICS-regulated RCA is a professionally certified document that carries legal weight in insurance disputes and claim negotiations. It provides an independently verified rebuild figure that insurers cannot easily challenge.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const contactBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${SITE_URL}/contact`,
  name: 'Contact RCA Ltd',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'RCA Ltd',
    telephone: '+44-20-3178-8099',
    email: 'info@rca-ltd.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17 Hanover Square',
      addressLocality: 'London',
      postalCode: 'W1S 1BN',
      addressCountry: 'GB',
    },
  },
}

const contactFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contactFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
    <main>
      <div className="max-w-7xl mx-auto px-8">

      {/* Hero */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2" style={{ letterSpacing: '0.3em' }}><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>support_agent</span>Professional Consultation</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-primary leading-[1.08]">
          Don&rsquo;t find out you&rsquo;re<br className="hidden md:block" /> <span className="text-shine-red">underinsured the hard way.</span>
        </h1>
        <div className="w-12 h-0.5" aria-hidden="true"></div>
        <p className="text-xl text-secondary font-light max-w-xl leading-relaxed">
          Over <strong className="font-bold text-primary">80%</strong> of UK properties are insured for the wrong amount. A RICS-regulated RCA takes less than <strong className="font-bold text-primary">48 hours</strong>, and could save you hundreds of thousands in an uncapped claim.
        </p>
      </section>

      </div>
      <ContactSection
        heading={
          <>
            Request Your UK <span className="text-shine">Rebuild Cost Assessment.</span>
          </>
        }
      />
      <FaqSection
        description="Everything you need to know about rebuild costs, RICS-regulated assessments, and protecting yourself from underinsurance."
        items={contactFaqItems}
      />

    </main>
    </>
  )
}
