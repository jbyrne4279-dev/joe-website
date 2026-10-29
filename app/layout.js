import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

// Google Fonts only serves the icons listed here; a new icon not added to this list shows as plain text.
const MATERIAL_ICONS = [
  'account_balance', 'account_balance_wallet', 'ads_click', 'analytics', 'apartment',
  'architecture', 'arrow_forward', 'article', 'bolt', 'calculate', 'call', 'cancel', 'chair',
  'check', 'check_circle', 'checklist', 'chevron_right', 'close', 'cloud', 'compare_arrows',
  'construction', 'delete', 'diamond', 'domain', 'engineering', 'error', 'event_repeat',
  'expand_more', 'factory', 'fence', 'flag', 'format_list_numbered', 'foundation', 'gavel',
  'groups', 'help', 'home', 'info', 'landscape', 'location_off', 'location_on', 'mail', 'menu',
  'payments', 'place', 'price_change', 'public', 'quiz', 'real_estate_agent', 'report',
  'report_problem', 'restart_alt', 'schedule', 'schema', 'search', 'security', 'sell', 'shield',
  'storefront', 'summarize', 'target', 'task_alt', 'trending_down', 'trending_up', 'update',
  'verified', 'warning', 'workspace_premium',
]
const MATERIAL_ICONS_HREF = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap&icon_names=${[...MATERIAL_ICONS].sort().join(',')}`

export const metadata = {
  metadataBase: new URL('https://reinstatementcostassessment.org'),
  formatDetection: { telephone: false },
  title: {
    default: 'RICS Reinstatement Cost Assessment UK | RCA Ltd',
    template: '%s',
  },
  description:
    'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, typically delivered within 48 hours. Trusted by homeowners, landlords and asset managers across England.',
  icons: {
    icon: '/rca48.png',
    shortcut: '/rca48.png',
    apple: '/rca48.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://reinstatementcostassessment.org',
    siteName: 'RCA Ltd',
    title: 'Reinstatement Cost Assessment UK | RICS‑Regulated | RCA Ltd',
    description:
      'Many UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment, typically delivered within 48 hours.',
    images: [
      {
        url: '/rebuild-cost-assessment-london.jpeg',
        width: 1200,
        height: 630,
        alt: 'Reinstatement Cost Assessment of a London property',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinstatement Cost Assessment UK | RICS‑Regulated | RCA Ltd',
    description:
      'Many UK buildings are underinsured. Get a RICS-regulated Reinstatement Cost Assessment, typically delivered within 48 hours.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} light`}>
      <head>
        <link
          href={MATERIAL_ICONS_HREF}
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        {/* Google tag (gtag.js). Loaded via next/script so it reliably renders in
            the App Router (raw <script> tags in <head> do not). GT-PJSWDCLB is the
            site's Google tag; AW-11028386067 is the linked Google Ads account. */}
        <Script
          id="gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=GT-PJSWDCLB"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-PJSWDCLB');
          gtag('config', 'AW-11028386067');
        `}</Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
