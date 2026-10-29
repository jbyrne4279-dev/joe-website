import Image from 'next/image'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get Your Reinstatement Cost Assessment Today.', accent, tintRgb, buttonStyle, image = true, imagePriority = false }) {
  if (!image) {
    return (
      <section className="bg-surface-container-low py-20 mb-0 mx-4 md:mx-8 rounded-t-3xl">
        <div className="max-w-4xl mx-auto px-8">
          <ContactFormInner heading={heading} accent={accent} tintRgb={tintRgb} buttonStyle={buttonStyle} />
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 mb-0 mx-4 md:mx-8 rounded-t-3xl overflow-hidden">
      <Image
        src="/services-hero.webp"
        alt=""
        fill
        sizes="100vw"
        priority={imagePriority}
        fetchPriority={imagePriority ? 'high' : undefined}
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        <ContactFormInner heading={heading} accent={accent} tintRgb={tintRgb} buttonStyle={buttonStyle} />
      </div>
    </section>
  )
}
