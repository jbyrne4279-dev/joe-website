import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-zinc-500 pt-20 pb-10 px-6 md:px-12 rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="text-lg font-bold text-white uppercase tracking-widest">Reinstatement Cost Assessment</div>
          <p className="text-sm leading-relaxed">
            Providing the standard for building reinstatement valuations across the UK insurance market.
          </p>
          <p className="text-xs leading-relaxed">
            Reinstatement Cost Assessment Limited<br />Company Number 17101918
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Services</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">Desktop Reinstatement Cost Assessment</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">3-Year RCA Protection Plan</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services#pricing">On-Site Rebuild Cost Survey</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Company</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-emerald-400 transition-colors" href="/">Reinstatement Cost Assessment Home</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/resources">Reinstatement Cost Assessment Guide</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/contact">Get a Rebuild Cost Assessment</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Regulation</h5>
          <p className="text-xs leading-relaxed">
            Regulated by the Royal Institution of Chartered Surveyors. Professional indemnity cover in place for all assessments.
          </p>
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-12 w-auto object-contain invert mt-6"
            priority={false}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
        <p>© 2025 ReinstatementCostAssessment.org. RICS Regulated. Part of RiskSTOP Group.</p>
      </div>
    </footer>
  )
}
