import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-8 py-32">
      <div className="text-center max-w-xl pop-in">
        <div className="btn-shine w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '2.5rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] block mb-4">Enquiry Received</span>
        <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">Thank you.</h1>
        <p className="text-xl text-secondary leading-relaxed mb-12">
          We&rsquo;ve received your enquiry and will respond within <strong className="text-primary">24 working hours</strong>. One of our RICS-regulated surveyors will be in touch shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform">
            Back to Home
          </Link>
          <Link href="/services" className="bg-white/50 backdrop-blur-md px-8 py-4 rounded-full font-bold text-primary active:scale-[0.97] transition-transform outline outline-1 outline-black/10">
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  )
}
