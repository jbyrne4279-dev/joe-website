import Link from 'next/link'
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
        gtag('event', 'conversion', {'send_to': 'AW-11028386067/lCGPCIPwlrYcEJOi34op'});
      `}</Script>
      <main className="flex-1 bg-white">

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 50% 0%, rgba(26,107,74,0.08) 0%, transparent 60%)'}} />
        <div className="relative max-w-xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="btn-shine w-14 h-14 rounded-xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '1.6rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">Thank you.</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            We&rsquo;ve received your enquiry and will respond within{' '}
            <strong className="text-gray-700 font-semibold whitespace-nowrap">24 working hours</strong>.
            One of our RICS-regulated surveyors will be in touch shortly.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">What happens next.</h2>
          </div>

          <ol className="space-y-4">
            {[
              {
                title: 'Confirmation email sent.',
                body: "You'll receive an email within minutes confirming your enquiry details and reference number. Check your spam folder if it doesn't arrive.",
              },
              {
                title: 'Surveyor assigned.',
                body: 'A RICS-regulated surveyor reviews your property details and is allocated to your case based on location and property type.',
              },
              {
                title: 'We contact you within 24 hours.',
                body: 'Your surveyor calls or emails to confirm requirements, agree on timelines, and answer any questions before work begins.',
              },
              {
                title: 'Your RCA report is delivered.',
                body: 'Receive a comprehensive RICS-compliant report with the exact reinstatement figure, ready to hand straight to your broker or insurer.',
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-5 items-start bg-white border border-gray-200 shadow-sm rounded-xl p-6">
                <div className="btn-shine shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-gray-900 text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-10 text-center">
            <div className="w-9 h-9 rounded-lg bg-[#1A6B4A]/[0.08] border border-[#1A6B4A]/15 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[#1A6B4A]" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>info</span>
            </div>
            <h3 className="font-bold text-gray-900 text-xl mb-3">While you wait.</h3>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md mx-auto text-sm">
              Explore our guide to understand why accurate rebuild costs matter and how underinsurance happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/resources" className="btn-shine text-white px-8 py-3.5 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform">
                Read the guide
              </Link>
              <Link href="/" className="bg-gray-900/[0.04] border border-gray-900/[0.08] text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold text-sm transition-all">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
    </>
  )
}
