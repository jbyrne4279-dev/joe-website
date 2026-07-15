const SITE_URL = 'https://reinstatementcostassessment.org'

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/commercial-reinstatement-costs`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/managing-agents-insurance-valuations`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/block-managers-reinstatement-cost-assessments`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/resources/when-should-block-insurance-valuations-be-updated`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/resources/top-risks-of-underinsurance-for-managing-agents`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/resources/case-study-block-of-flats-undervalued`,
      lastModified: new Date('2026-06-04'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
