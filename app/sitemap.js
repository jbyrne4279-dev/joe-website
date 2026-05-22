const SITE_URL = 'https://reinstatementcostassessment.org'

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services#desktop-rca`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services#three-year-protection`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services#on-site-survey`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-05-22'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
