import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const GA_MEASUREMENT_ID = 'G-SEWVTV6EKC'
const GOOGLE_ADS_ID = 'AW-11028386067'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://reinstatementcostassessment.org'),
  title: {
    default: 'RICS Reinstatement Cost Assessment UK | RCA Ltd',
    template: '%s | RCA Ltd',
  },
  description:
    'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 48 hours. Trusted by homeowners, landlords and asset managers across England.',
  icons: {
    icon: '/rca48.png',
    shortcut: '/rca48.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://reinstatementcostassessment.org',
    siteName: 'RCA Ltd',
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment, delivered in 48 hours.',
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
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. Get a RICS-regulated Reinstatement Cost Assessment, delivered in 48 hours.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
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
