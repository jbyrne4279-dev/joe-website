export default function FaqSection({ description, items }) {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6B4A]"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>quiz</span>Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Frequently Asked Questions.</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#1A6B4A] rounded-xl p-6 flex flex-col gap-3 hover:bg-[#155c3e] transition-all"
            >
              <h3 className="text-sm font-bold text-white leading-snug">
                {item.question}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
