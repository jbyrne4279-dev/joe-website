import LegalPage from '../components/LegalPage'

export const metadata = {
  title: 'Terms & Conditions | Reinstatement Cost Assessment Ltd',
  description:
    'The terms and conditions that apply to reinstatement cost assessment services and use of the Reinstatement Cost Assessment Ltd website.',
  alternates: { canonical: '/terms-and-conditions' },
  robots: { index: true, follow: true },
}

const UPDATED = '22 September 2026'

const sections = [
  {
    heading: '1. About us and these terms',
    body: [
      'These Terms & Conditions govern the provision of rebuild cost assessment services by Reinstatement Cost Assessment Ltd, a company registered in England and Wales under company number 17101918, with its registered office at 17 Hanover Square, London, W1S 1BN, United Kingdom ("we", "us", "our"), and your use of this website. By instructing us to provide a reinstatement cost assessment, or by using this website, you accept these terms.',
    ],
  },
  {
    heading: '2. Our services',
    body: [
      'We provide professional Reinstatement Cost Assessments (also referred to as Rebuild Cost Assessments), intended to help property owners, landlords, managing agents and block managers understand the likely cost of rebuilding a property, for buildings insurance purposes. Depending on the option you instruct, this may take the form of:',
      {
        list: [
          'A Desktop Reinstatement Cost Assessment, carried out remotely using property records and relevant cost data, without a physical site visit',
          'An On-Site Reinstatement Cost Assessment, carried out by a surveyor attending the property in person',
          'A 3-Year Reinstatement Cost Assessment Plan, comprising an initial assessment followed by periodic indexed updates',
        ],
      },
      'A reinstatement cost assessment is an estimate of rebuilding cost for insurance purposes. It is not, and must not be relied upon as, a market valuation, a valuation for the purposes of buying or selling a property, a mortgage valuation, a structural survey, or a building survey. If you require any of those other services, you should instruct an appropriately qualified professional separately.',
    ],
  },
  {
    heading: '3. Information you provide to us',
    body: [
      'The accuracy of a reinstatement cost assessment depends in part on the accuracy and completeness of the information you provide to us about the property, including (where relevant to the service instructed) its construction, condition, size, and any unusual features. You are responsible for providing information that is, to the best of your knowledge, accurate and complete, and for telling us promptly if anything changes. We are not responsible for inaccuracies in an assessment that result from incomplete or incorrect information supplied to us.',
    ],
  },
  {
    heading: '4. Nature and limitations of an assessment',
    body: [
      'A reinstatement cost assessment is a professional estimate, prepared using the information available to us, established assessment methodology, and relevant construction cost data current at the time of preparation. It is not a guarantee of the actual cost of rebuilding the property in the future. Actual rebuild costs can be affected by factors outside our control, including but not limited to changes in construction material and labour costs, planning or building regulation requirements, ground conditions discovered during any rebuild, and the passage of time between the date of assessment and any future rebuild.',
    ],
  },
  {
    heading: '5. Insurance',
    body: [
      'We are not an insurer, broker or underwriter, and we do not make underwriting decisions. Providing you with a reinstatement cost assessment does not guarantee that any insurer will accept the figure provided, offer cover on particular terms, or agree to a particular sum insured. Decisions about insurance cover, terms, and premiums remain entirely with your insurer or broker, and you remain responsible for arranging and reviewing your own buildings insurance.',
    ],
  },
  {
    heading: '6. Fees, quotations and payment',
    body: [
      'Fees for our services will be confirmed to you individually, for example by quotation or on instruction, before work begins. We do not publish fixed prices on this website, and no fee is payable until you have received and accepted a quotation from us. Payment terms will be set out at the time of quotation or instruction.',
    ],
  },
  {
    heading: '7. Cancellation, rescheduling and refunds',
    body: [
      'If you wish to cancel or reschedule an instruction, please contact us as soon as possible using the details in Section 12. Where we have not yet commenced work on your assessment, we will aim to accommodate cancellation or rescheduling without charge, save for any costs we have already reasonably and necessarily incurred on your behalf (for example, a booked site visit that cannot be recovered). Where work has already been carried out — for example data has been gathered, a site visit has taken place, or a report has been prepared — we may charge for the proportion of work completed, or may not be able to offer a refund for that element of the service, depending on the circumstances. We will always deal with cancellation requests fairly and reasonably, and nothing in this section affects your other legal rights, including any rights you may have under the Consumer Contracts Regulations where applicable.',
    ],
  },
  {
    heading: '8. Liability',
    body: [
      'We will provide our services with reasonable skill and care. Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability which cannot lawfully be excluded or limited. Subject to that, we do not accept liability for losses that were not reasonably foreseeable at the time these terms were accepted, or for losses arising from inaccurate or incomplete information provided to us, or from a third party’s (including an insurer’s) reliance on or use of a report for a purpose for which it was not prepared.',
    ],
  },
  {
    heading: '9. Intellectual property',
    body: [
      'Reports, documents and other materials we prepare for you, together with the content, design and code of this website, remain our intellectual property (or that of our licensors) unless we agree otherwise in writing. Subject to payment of any applicable fees, you may use a report we provide for its intended insurance purpose. You may not otherwise copy, reproduce, or distribute our reports or website content without our prior written consent, other than for your own internal or insurance-related purposes.',
    ],
  },
  {
    heading: '10. Use of this website',
    body: [
      'You may use this website for lawful purposes only, including to learn about our services and to submit a genuine enquiry through our contact form. You must not misuse this website, for example by introducing malicious code, attempting unauthorised access, or submitting false or misleading information through our forms.',
    ],
  },
  {
    heading: '11. Complaints',
    body: [
      'If you are unhappy with any aspect of our service, please see our Complaints Procedure, which explains how to raise a complaint and what to expect from us in response.',
    ],
  },
  {
    heading: '12. Governing law and contact',
    body: [
      'These terms are governed by the laws of England and Wales, and any dispute will be subject to the non-exclusive jurisdiction of the courts of England and Wales, without prejudice to any mandatory consumer protection rights you may have in the jurisdiction where you are resident.',
      {
        list: [
          'Reinstatement Cost Assessment Ltd',
          '17 Hanover Square, London, W1S 1BN, United Kingdom',
          'Email: joseph@reinstatementcostassessment.org',
        ],
      },
    ],
  },
  {
    heading: '13. Changes to these terms',
    body: [
      'We may update these Terms & Conditions from time to time. The version that applies to a particular instruction is the version in force at the time you instruct us. The "Last updated" date at the top of this page shows when these terms were last revised.',
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      pageName="Terms & Conditions"
      eyebrow="Legal"
      title="Terms & Conditions"
      updated={UPDATED}
      intro="These Terms & Conditions apply to the reinstatement cost assessment services provided by Reinstatement Cost Assessment Ltd and to your use of this website. Please read them carefully before instructing us."
      sections={sections}
    />
  )
}
