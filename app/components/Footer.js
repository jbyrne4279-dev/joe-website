import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/[0.06] text-white/40 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="space-y-4">
          <div className="text-xs font-semibold text-white/60 uppercase tracking-widest">Reinstatement Cost Assessment</div>
          <p className="text-sm leading-relaxed">
            Providing the standard for building reinstatement valuations across the UK insurance market.
          </p>
          <p className="text-xs leading-relaxed">
            Reinstatement Cost Assessment Limited<br /><span className="font-semibold text-[#22C55E]/60">Company Number: 17101918</span>
          </p>
        </div>
        <div>
          <h5 className="text-white/60 font-semibold text-sm mb-6">Services</h5>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-white/60 transition-colors" href="/services#pricing">Desktop Reinstatement Cost Assessment</Link></li>
            <li><Link className="hover:text-white/60 transition-colors" href="/services#pricing">On-Site Rebuild Cost Survey</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/60 font-semibold text-sm mb-6">Company</h5>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-white/60 transition-colors" href="/">Reinstatement Cost Assessment Home</Link></li>
            <li><Link className="hover:text-white/60 transition-colors" href="/resources">Reinstatement Cost Assessment Guide</Link></li>
            <li><Link className="hover:text-white/60 transition-colors" href="/contact">Get a Rebuild Cost Assessment</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white/60 font-semibold text-sm mb-6">Regulation</h5>
          <p className="text-xs leading-relaxed">
            Regulated by the Royal Institution of Chartered Surveyors. Professional indemnity cover in place for all assessments.
          </p>
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-10 w-auto object-contain invert opacity-30 mt-6"
            priority={false}
          />
        </div>
        <div>
          <h5 className="text-white/60 font-semibold text-sm mb-6">Contact</h5>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-white/40 shrink-0" style={{ fontSize: '1rem' }}>call</span>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Phone</p>
                <a href="tel:+442031788099" className="text-white/60 hover:text-white/80 transition-colors">020 3178 8099</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-white/40 shrink-0" style={{ fontSize: '1rem' }}>location_on</span>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Address</p>
                <p className="text-white/60">17 Hanover Square,<br />London W1S 1BN</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
        <p>© 2025 ReinstatementCostAssessment.org. RICS Regulated. Part of RiskSTOP Group.</p>
      </div>
    </footer>
  )
}
