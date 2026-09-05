import Link from 'next/link'

const SITE_URL = 'https://reinstatementcostassessment.org'

/**
 * Reusable breadcrumb trail with matching BreadcrumbList JSON-LD.
 *
 * @param {{ items: { name: string, href?: string }[], accent?: string, showSchema?: boolean }} props
 *   items — ordered trail from Home to the current page. The final item is the
 *   current page and should omit `href`. Home is added automatically, so pass
 *   only the levels below it.
 *   showSchema — emit BreadcrumbList JSON-LD. Set false on pages that already
 *   render their own BreadcrumbList inline, to avoid duplicate markup.
 */
export default function Breadcrumbs({ items = [], accent = '#1A6B4A', showSchema = true }) {
  const trail = [{ name: 'Home', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href || ''}`,
    })),
  }

  return (
    <>
      {showSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-secondary">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1
            return (
              <li key={item.name} className="flex items-center gap-1.5">
                {isLast || !item.href ? (
                  <span className="font-medium text-primary" aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:underline" style={{ color: accent }}>{item.name}</Link>
                )}
                {!isLast && (
                  <span className="material-symbols-outlined text-secondary/50" style={{ fontSize: '1rem' }} aria-hidden="true">chevron_right</span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
