export default function FaqSection({ description, items, bg = '#0f3d28', light = false }) {
  return (
    <section className="pt-12 pb-20" style={{ background: light ? '#ffffff' : bg }}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12 space-y-3">
          <span className={`text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 ${light ? 'text-[#1A6B4A]' : 'text-white/50'}`}><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>quiz</span>Got Questions?</span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${light ? 'text-primary' : 'text-white'}`}>Frequently Asked Questions.</h2>
          <p className={`max-w-xl mx-auto leading-relaxed ${light ? 'text-secondary' : 'text-white/60'}`}>{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 ${light ? 'bg-white border border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]' : 'bg-white shadow-md hover:shadow-lg'}`}
            >
              <h3 className="text-base font-bold text-primary leading-snug">
                {item.question}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
