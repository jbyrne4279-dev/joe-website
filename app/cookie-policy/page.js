import LegalPage from '../components/LegalPage'

export const metadata = {
  title: 'Cookie Policy | Reinstatement Cost Assessment Ltd',
  description:
    'Details of the cookies and similar tracking technologies used on the Reinstatement Cost Assessment Ltd website, and how to manage your consent.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
}

const UPDATED = '22 September 2026'

const sections = [
  {
    heading: '1. What are cookies?',
    body: [
      'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, work more efficiently, and to provide information to the owners of a site. Similar technologies (such as browser local storage or tracking pixels) work in comparable ways and are covered by this policy.',
    ],
  },
  {
    heading: '2. Categories of cookies used on this website',
    body: [
      'Based on a review of this website’s code, the following categories of cookies and tracking technologies are used:',
    ],
  },
  {
    heading: 'Strictly necessary',
    body: [
      'These are required for the website to function and cannot be switched off. They do not store personally identifiable information and do not require consent.',
      {
        list: [
          'Your saved cookie-preference choice (so we know not to ask you again) — set by this website, stored in your browser for up to 12 months.',
        ],
      },
    ],
  },
  {
    heading: 'Analytics and advertising (requires your consent)',
    body: [
      'This website loads a Google tag (Google’s gtag.js library) that is linked to a Google Ads account and used for advertising conversion tracking, so that we can measure the effectiveness of our marketing. Depending on your device and browser, this may involve Google setting cookies to recognise your browser for measurement and, where applicable, remarketing purposes.',
      {
        list: [
          'Provider: Google',
          'Purpose: Google Ads conversion tracking and related advertising measurement',
          'Type: Third-party cookies/identifiers set by Google’s tag',
          'Duration: Set and controlled by Google; typically up to 13 months for advertising cookies, in line with Google’s own published policies',
          'Consent required: Yes — this tag does not run until you choose "Accept all" or otherwise enable advertising cookies in the cookie banner',
        ],
      },
      'We have not identified a separate Google Analytics property or Google Tag Manager container in the current website code. If that changes, this section will be updated. We are not able to list the exact individual cookie names set by Google’s tag, as these are controlled by Google and may change; see Google’s own cookie documentation for full details.',
    ],
  },
  {
    heading: 'Third-party form processing',
    body: [
      'When you submit our contact/enquiry form, the information is sent directly to our form processing provider, Formspree, Inc., in order to deliver your enquiry to us. Formspree may set cookies or use similar technologies as part of operating the form submission service; we do not control these directly. Please refer to Formspree’s own privacy and cookie information for details of their practices.',
    ],
  },
  {
    heading: '3. How we ask for your consent',
    body: [
      'When you first visit this website, a cookie banner gives you the choice to Accept all, Reject non-essential, or manage your preferences. Non-essential cookies — including the Google advertising tag described above — do not run until you have given consent. No boxes are pre-ticked.',
      'You can change your mind at any time by clearing the "cookie preference" entry stored by this website in your browser, which will cause the banner to be shown again on your next visit.',
    ],
  },
  {
    heading: '4. Managing cookies in your browser',
    body: [
      'In addition to the controls on this website, most browsers let you view, delete and block cookies. Because blocking all cookies may affect the way parts of this or other websites work, we recommend checking your browser’s help pages for instructions specific to the browser you are using.',
    ],
  },
  {
    heading: '5. More information',
    body: [
      'For details of how we use the personal information collected through cookies and our website, please see our Privacy Policy. If you have questions about this Cookie Policy, please contact us at joseph@reinstatementcostassessment.org.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      pageName="Cookie Policy"
      eyebrow="Legal"
      title="Cookie Policy"
      updated={UPDATED}
      intro="This Cookie Policy explains what cookies and similar technologies are used on this website, why, and how you can control them, in line with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR."
      sections={sections}
    />
  )
}
