import { Suspense } from 'react'
import Image from 'next/image'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get Your Reinstatement Cost Assessment Today.', accent, tintRgb, buttonStyle }) {
  return (
    <section className="relative py-20 mb-0 mx-4 md:mx-8 rounded-t-3xl overflow-hidden">
      <Image
        src="/services-hero.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} accent={accent} tintRgb={tintRgb} buttonStyle={buttonStyle} />
        </Suspense>
      </div>
    </section>
  )
}
