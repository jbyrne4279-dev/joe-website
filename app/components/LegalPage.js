import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'

/**
 * Shared layout for legal/compliance pages (Privacy Policy, Cookie Policy,
 * Terms & Conditions, Complaints, Accessibility). Reuses the site's existing
 * design tokens and the existing Breadcrumbs component only — no new visual
 * design system is introduced.
 *
 * @param {{
 *   pageName: string,
 *   eyebrow: string,
 *   title: string,
 *   updated: string,
 *   intro?: string,
 *   sections: { heading: string, body: (string | { list: string[] } | { orderedList: string[] })[] }[],
 * }} props
 */
export default function LegalPage({ pageName, eyebrow, title, updated, intro, sections }) {
  return (
    <main>
      <Breadcrumbs showSchema={false} items={[{ name: pageName }]} accent="#1A6B4A" />
      <section className="scroll-reveal py-16 sm:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A6B4A] mb-4">{eyebrow}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">{title}</h1>
          <p className="text-sm text-secondary/70 mb-10">Last updated: {updated}</p>

          {intro && (
            <p className="text-secondary leading-[1.75] text-[1.05rem] mb-10">{intro}</p>
          )}

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-4">{section.heading}</h2>
                <div className="space-y-4 text-secondary leading-[1.75] text-[1.05rem]">
                  {section.body.map((block, i) => {
                    if (typeof block === 'string') {
                      return <p key={i}>{block}</p>
                    }
                    if (block.list) {
                      return (
                        <ul key={i} className="list-disc pl-6 space-y-2">
                          {block.list.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )
                    }
                    if (block.orderedList) {
                      return (
                        <ol key={i} className="list-decimal pl-6 space-y-2">
                          {block.orderedList.map((item, j) => <li key={j}>{item}</li>)}
                        </ol>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-outline-variant/40 text-sm text-secondary/70 leading-relaxed">
            <p>
              Questions about this page can be sent to{' '}
              <a href="mailto:joseph@reinstatementcostassessment.org" className="text-[#1A6B4A] font-semibold hover:underline">joseph@reinstatementcostassessment.org</a>.
              See also our{' '}
              <Link href="/privacy-policy" className="text-[#1A6B4A] font-semibold hover:underline">Privacy Policy</Link>,{' '}
              <Link href="/cookie-policy" className="text-[#1A6B4A] font-semibold hover:underline">Cookie Policy</Link>,{' '}
              <Link href="/terms-and-conditions" className="text-[#1A6B4A] font-semibold hover:underline">Terms &amp; Conditions</Link>,{' '}
              <Link href="/complaints" className="text-[#1A6B4A] font-semibold hover:underline">Complaints Procedure</Link> and{' '}
              <Link href="/accessibility" className="text-[#1A6B4A] font-semibold hover:underline">Accessibility Statement</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
