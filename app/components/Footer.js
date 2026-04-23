import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-zinc-500 pt-16 pb-10 px-6 md:px-12 rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <Image
            src="/rics-logo.png"
            alt="Regulated by RICS"
            width={900}
            height={600}
            className="h-20 md:h-24 w-auto object-contain invert drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] flex-shrink-0"
            priority={false}
          />
          <div className="space-y-4">
            <div className="text-lg font-bold text-white uppercase tracking-widest">Reinstatement Cost Assessment</div>
            <p className="text-sm leading-relaxed">
              Providing the standard for building reinstatement valuations across the UK insurance market.
            </p>
          </div>
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
        <div>
          <h5 className="text-white font-bold mb-6">Regulation</h5>
          <p className="text-xs leading-relaxed">
            Regulated by the Royal Institution of Chartered Surveyors. Professional indemnity cover in place for all assessments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
        <p>© 2024 RebuildCostAssessment.com. RICS Regulated. Part of RiskSTOP Group.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}
