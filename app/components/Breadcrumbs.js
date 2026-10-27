const SITE_URL = 'https://reinstatementcostassessment.org'

/**
 * BreadcrumbList JSON-LD for search engines. No visible trail is rendered.
 *
 * @param {{ items: { name: string, href?: string }[], showSchema?: boolean }} props
 *   items, ordered trail from Home to the current page. The final item is the
 *   current page and should omit `href`. Home is added automatically, so pass
 *   only the levels below it.
 *   showSchema, emit BreadcrumbList JSON-LD. Set false on pages that already
 *   render their own BreadcrumbList inline, to avoid duplicate markup.
 */
export default function Breadcrumbs({ items = [], showSchema = true }) {
  if (!showSchema) return null

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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}
