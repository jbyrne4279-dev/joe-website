import LegalPage from '../components/LegalPage'

export const metadata = {
  title: 'Accessibility Statement | Reinstatement Cost Assessment Ltd',
  description:
    'Our approach to website accessibility, known limitations, and how to report an accessibility issue with the Reinstatement Cost Assessment Ltd website.',
  alternates: { canonical: '/accessibility' },
  robots: { index: true, follow: true },
}

const UPDATED = '22 September 2026'

const sections = [
  {
    heading: '1. Our commitment',
    body: [
      'We want this website to be usable by as many people as possible, including people using assistive technology, keyboard navigation, or browsing on a mobile device. This statement explains what we have done, and where we know there is more to do.',
    ],
  },
  {
    heading: '2. What we have built in',
    body: [
      {
        list: [
          'A "Skip to main content" link at the very start of every page, for keyboard and screen reader users',
          'Semantic HTML headings intended to give each page a clear, logical structure',
          'A responsive layout that adapts to desktop, tablet and mobile screen sizes',
          'Descriptive alt text on meaningful images',
          'Visible focus styling on interactive elements such as the skip link, to support keyboard navigation',
          'Form fields with associated labels on our enquiry form',
          'Body text and headings set in a legible typeface at readable sizes',
        ],
      },
    ],
  },
  {
    heading: '3. Known limitations',
    body: [
      'We have not carried out a formal audit of this website against the Web Content Accessibility Guidelines (WCAG), and we do not claim full WCAG compliance. As with many websites, some areas — such as colour contrast in decorative elements, or the behaviour of some interactive/animated components with screen readers — may not fully meet WCAG success criteria in every case. We are committed to improving accessibility over time as issues are identified.',
    ],
  },
  {
    heading: '4. Reporting an accessibility issue',
    body: [
      'If you find any part of this website difficult to use, or you use assistive technology and encounter a problem, please tell us. We will do our best to address genuine barriers to access.',
      {
        list: [
          'Email: joseph@reinstatementcostassessment.org',
          'Post: Reinstatement Cost Assessment Ltd, 17 Hanover Square, London, W1S 1BN, United Kingdom',
        ],
      },
      'Please include the page you were on, the device/browser or assistive technology you were using, and a description of the problem, so we can look into it.',
    ],
  },
]

export default function AccessibilityPage() {
  return (
    <LegalPage
      pageName="Accessibility"
      eyebrow="Legal"
      title="Accessibility Statement"
      updated={UPDATED}
      intro="This statement sets out our approach to accessibility on this website, what we have built in, where we know there are limitations, and how to tell us about an accessibility problem."
      sections={sections}
    />
  )
}
