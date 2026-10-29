import Link from 'next/link'

export const metadata = {
  title: 'Page not found | RCA Ltd',
}

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-24 bg-white">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">Page not found</p>
        <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">We couldn’t find that page.</h1>
        <p className="text-secondary leading-relaxed mb-8">
          It may have moved, or the link may be out of date. Request a quote for your reinstatement cost assessment, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold text-center active:scale-[0.97] transition-transform">
            Get a quote
          </Link>
          <Link href="/" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
            Back to homepage
          </Link>
        </div>
        <p className="text-sm text-secondary mt-8">
          Or browse our <Link href="/services" className="text-[#1A6B4A] underline underline-offset-2">services</Link> and{' '}
          <Link href="/resources" className="text-[#1A6B4A] underline underline-offset-2">guides</Link>.
        </p>
      </div>
    </main>
  )
}
