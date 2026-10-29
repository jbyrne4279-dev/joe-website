import Image from 'next/image'
import Script from 'next/script'

export const metadata = {
  title: 'Thank You | RCA Ltd',
  description: 'Your Reinstatement Cost Assessment request has been received. A RICS-regulated surveyor will be in touch within 24 working hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('event', 'conversion', {
          'send_to': 'AW-11028386067/UjK2CPS66tscEJOi34op',
          'value': 1.0,
          'currency': 'GBP'
        });
      `}</Script>
      <main className="flex-1">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/reinstatement-cost-assessment-uk.webp"
          alt="Reinstatement cost assessment UK property"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-center pop-in">
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
            <div className="btn-shine w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2 mb-3"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>task_alt</span>Enquiry Received</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-5">Thank you.</h1>
            <p className="text-lg text-secondary leading-relaxed">
              We&rsquo;ve received your enquiry and will respond within{' '}
              <strong className="text-primary font-semibold whitespace-nowrap">24 working hours</strong>.
              One of our RICS‑regulated surveyors will be in touch shortly.
            </p>
          </div>
        </div>
      </section>

      </main>
    </>
  )
}
