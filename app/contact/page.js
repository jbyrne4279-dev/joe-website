import ContactSection from '../components/ContactSection'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'Get a RICS Reinstatement Cost Assessment | Instruct Online',
  },
  description:
    'Instruct a RICS reinstatement cost assessment online. Rebuild cost assessments for all UK property types - Desktop and On-Site Survey options. Fast response, insurer-accepted reports.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Get a RICS Reinstatement Cost Assessment | RCA Ltd UK',
    description:
      'Instruct a RICS reinstatement cost assessment or rebuild cost assessment for your UK building. Desktop and on-site options available. We aim to respond within 24 hours.',
    url: '/contact',
  },
}

const contactFaqItems = [
  { question: 'What is the average rebuild cost per square foot in the UK?', answer: 'Rebuild costs vary significantly by property type, specification, location, and construction complexity, so there is no single figure that applies to every building. A RICS reinstatement cost assessment gives you the exact figure for your specific building.' },
  { question: 'How do rising construction costs affect my building insurance?', answer: "UK construction costs have risen significantly in recent years — the BCIS Materials Cost Index shows material prices up more than 20% since 2020. If your sum insured hasn't been updated, your policy may be below the true rebuild cost, leaving you exposed to a proportional reduction in any claim." },
  { question: 'Can I use my mortgage valuation as my buildings insurance figure?', answer: 'No. A mortgage valuation assesses lending risk, not rebuild cost. Using it for insurance is a common cause of underinsurance in the UK. Only a RICS reinstatement cost assessment provides an insurer‑defensible rebuild figure.' },
  { question: 'What does a rebuild cost assessment include for commercial property?', answer: 'A commercial reinstatement cost assessment covers demolition and site clearance, rebuilding to current regulations, professional fees such as architects and engineers, and all external structures within the curtilage. It accounts for regional labour rates and current material costs.' },
  { question: 'What is the BCIS and why does it matter for my rebuild valuation?', answer: 'The Building Cost Information Service is the industry‑standard data source used by RICS surveyors to benchmark construction costs. We use live BCIS indices to ensure your rebuild figure reflects current market rates, not outdated estimates.' },
  { question: 'What happens to my insurance claim if I am significantly underinsured?', answer: 'Under the Condition of Average, insurers reduce payouts proportionally to the degree of underinsurance. If your rebuild cost is £500,000 but you are insured for £300,000, a £100,000 claim would only pay out £60,000, leaving a £40,000 shortfall you must cover yourself.' },
  { question: 'Do leaseholders need a rebuild cost assessment?', answer: 'Yes. Where leaseholders are responsible for insuring the structure under their lease terms, a reinstatement cost assessment is essential. Without one, you risk breaching lease obligations and being personally liable for any rebuild shortfall.' },
  { question: 'How does inflation affect rebuild cost assessments over time?', answer: "Construction inflation directly erodes the accuracy of your reinstatement cost assessment. A valuation from several years ago can significantly underestimate today's rebuild cost. Annual indexation and a full reassessment every three years keeps your coverage aligned with current costs." },
  { question: 'What professional fees are included in a rebuild cost assessment?', answer: 'Professional fees typically include architect, structural engineer, quantity surveyor, and planning consultant costs. These are required to manage a full rebuild and can add materially to the total cost, yet are often overlooked in estimates.' },
  { question: 'Can a rebuild cost assessment be used as evidence in an insurance dispute?', answer: 'Yes. A RICS‑regulated reinstatement cost assessment is a professionally certified document that carries legal weight in insurance disputes and claim negotiations. It provides an independently verified rebuild figure that insurers cannot easily challenge.' },
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
    email: 'joseph@reinstatementcostassessment.org',
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
      <Breadcrumbs showSchema={false} items={[{ name: 'Contact' }]} accent="#1A6B4A" />

      <h1 className="sr-only">Contact Reinstatement Cost Assessment Ltd</h1>
      <div className="pt-6">
        <ContactSection
          heading={
            <>
              Get Your RICS <span className="text-shine">Rebuild Cost Assessment.</span>
            </>
          }
        />
      </div>
      <div className="scroll-reveal">
        <FaqSection
          description="Everything you need to know about rebuild costs, RICS-regulated assessments, and protecting yourself from underinsurance."
          items={contactFaqItems}
        />
      </div>

    </main>
    </>
  )
}
