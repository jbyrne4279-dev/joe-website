import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://rcaltd.up.railway.app'),
  title: {
    default: 'RICS-Regulated Rebuild Cost Assessments UK | RCA Ltd',
    template: '%s | RCA Ltd',
  },
  description:
    '80% of UK buildings are underinsured. Get a RICS-regulated Rebuild Cost Assessment from £210, delivered in 48 hours. Trusted by homeowners, landlords, and asset managers.',
  keywords: [
    'rebuild cost assessment',
    'reinstatement cost assessment',
    'RICS regulated',
    'building insurance valuation',
    'underinsurance UK',
    'BCIS rebuild value',
    'commercial property insurance',
    'desktop assessment',
    'on-site survey',
    'professional indemnity',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/rca_logo.png',
    shortcut: '/rca_logo.png',
    apple: '/rca_logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rcaltd.up.railway.app',
    siteName: 'RCA Ltd',
    title: 'RICS-Regulated Rebuild Cost Assessments UK | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. Get a RICS-regulated Rebuild Cost Assessment from £210, delivered in 48 hours.',
    images: [
      {
        url: '/rebuild-cost-assessment-london.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rebuild Cost Assessment of a London property',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RICS-Regulated Rebuild Cost Assessments UK | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. Get an accurate RICS-regulated rebuild figure from £210, delivered in 48 hours.',
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
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
