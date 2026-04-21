export default function FaqSection({ description, items }) {
  return (
    <section
      className="py-20 my-16 mx-4 md:mx-8 bg-surface-container-low rounded-3xl"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] mb-4 block">Got Questions?</span>
          <h2 className="text-5xl font-bold tracking-tight text-primary">Frequently Asked Questions</h2>
          <p className="text-secondary mt-4 max-w-xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-3 liquid-glass border border-[#1A6B4A]/30 shadow-[0_0_18px_2px_rgba(26,107,74,0.15)] hover:shadow-[0_0_28px_4px_rgba(26,107,74,0.28)] hover:border-[#1A6B4A]/60 transition-all duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="text-base font-bold text-primary leading-snug" itemProp="name">
                {item.question}
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-secondary text-sm leading-relaxed" itemProp="text">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
