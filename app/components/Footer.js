import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-zinc-500 py-20 px-12 rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-lg font-bold text-white uppercase tracking-widest">REBUILDCOST</div>
          <p className="text-sm leading-relaxed">
            Providing the standard for building reinstatement valuations across the UK insurance market.
          </p>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Services</h5>
          <ul className="space-y-4 text-sm">
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services">Desktop Assessment</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services">3-Year Protection</Link></li>
            <li><Link className="hover:text-emerald-400 transition-colors" href="/services">On-Site Survey</Link></li>
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
        <div className="space-y-6">
          <h5 className="text-white font-bold mb-6">Regulation</h5>
          <p className="text-xs">Regulated by RICS. Professional indemnity cover in place for all assessments.</p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">shield</span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 RebuildCostAssessment.com. RICS Regulated. Part of RiskSTOP Group.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
