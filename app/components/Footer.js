import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-zinc-500 pt-20 pb-10 px-6 md:px-12 rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-lg font-bold text-white uppercase tracking-widest">Reinstatement Cost Assessment</div>
          <p className="text-sm leading-relaxed">
            Providing the standard for building reinstatement valuations across the UK insurance market.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Services</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">Desktop Assessment</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">3-Year Protection</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">On-Site Survey</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Company</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-emerald-400 transition-colors" href="/">Home</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/resources">Resources</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Regulation</h5>
          <p className="text-xs leading-relaxed">
            Regulated by the Royal Institution of Chartered Surveyors. Professional indemnity cover in place for all assessments.
          </p>
        </div>
      </div>

      {/* RICS Regulated trust band */}
      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col items-center gap-3">
        <Image
          src="/rics-logo.png"
          alt="Regulated by RICS"
          width={900}
          height={600}
          className="h-14 md:h-16 w-auto object-contain invert"
          priority={false}
        />
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/15" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">RICS Regulated Practice</span>
          <span className="h-px w-8 bg-white/15" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
        <p>© 2024 RebuildCostAssessment.com. RICS Regulated. Part of RiskSTOP Group.</p>
      </div>
    </footer>
  )
}
