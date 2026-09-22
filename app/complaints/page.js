import LegalPage from '../components/LegalPage'

export const metadata = {
  title: 'Complaints Procedure | Reinstatement Cost Assessment Ltd',
  description:
    'How to raise a complaint with Reinstatement Cost Assessment Ltd, and what to expect from us while we look into it.',
  alternates: { canonical: '/complaints' },
  robots: { index: true, follow: true },
}

const UPDATED = '22 September 2026'

const sections = [
  {
    heading: '1. How to submit a complaint',
    body: [
      'If you are unhappy with any aspect of our service, please tell us. You can submit a complaint by email to joseph@reinstatementcostassessment.org, or by writing to us at the address below. We take all complaints seriously and want the opportunity to put things right.',
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
    heading: '2. What to include in your complaint',
    body: [
      'To help us look into your complaint as quickly as possible, please include:',
      {
        list: [
          'Your name and contact details',
          'The property address or reference relevant to your instruction, where applicable',
          'A clear description of what happened and why you are unhappy',
          'Copies of any relevant correspondence or documents, if you have them',
          'What outcome you are hoping for',
        ],
      },
    ],
  },
  {
    heading: '3. How we acknowledge your complaint',
    body: [
      'We aim to acknowledge receipt of your complaint promptly, and to let you know who is dealing with it.',
    ],
  },
  {
    heading: '4. How we investigate',
    body: [
      'We will look into your complaint fully and fairly, which may involve reviewing your file, the assessment carried out, and any relevant correspondence, and speaking with the people involved.',
    ],
  },
  {
    heading: '5. Our response',
    body: [
      'Once we have completed our investigation, we will write to you with our findings and, where appropriate, the steps we propose to take to resolve the matter. We aim to provide a full response as promptly as we reasonably can, and we will keep you updated if our investigation is taking longer than expected.',
    ],
  },
  {
    heading: '6. If you remain dissatisfied',
    body: [
      'If you are not satisfied with our response, please let us know and we will review the matter again. If your complaint relates to how we have handled your personal information specifically, you also have the right to raise the matter with the Information Commissioner’s Office (ICO) at https://ico.org.uk/ — see our Privacy Policy for more detail. We have not identified any additional sector-specific complaints scheme or ombudsman that we are a member of; if this changes, we will update this page accordingly.',
    ],
  },
  {
    heading: '7. Contact us',
    body: [
      {
        list: [
          'Reinstatement Cost Assessment Ltd',
          '17 Hanover Square, London, W1S 1BN, United Kingdom',
          'Email: joseph@reinstatementcostassessment.org',
        ],
      },
    ],
  },
]

export default function ComplaintsPage() {
  return (
    <LegalPage
      pageName="Complaints"
      eyebrow="Legal"
      title="Complaints Procedure"
      updated={UPDATED}
      intro="We aim to provide a professional, reliable service every time. If something has gone wrong, this page explains how to raise a complaint and what you can expect from us."
      sections={sections}
    />
  )
}
