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
  title: 'RCA Ltd — Reinstatement Cost Assessments',
  description: 'RICS-regulated Reinstatement Cost Assessments for UK property owners, landlords, and asset managers.',
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
