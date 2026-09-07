import { statSync } from 'node:fs'
import { join } from 'node:path'

const SITE_URL = 'https://reinstatementcostassessment.org'

// path: URL path after the origin. file: source file whose mtime drives lastModified.
const routes = [
  { path: '/', file: 'app/page.js', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/building-reinstatement-cost', file: 'app/building-reinstatement-cost/page.js', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services', file: 'app/services/page.js', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/resources', file: 'app/resources/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/desktop-reinstatement-cost-assessment-uk', file: 'app/desktop-reinstatement-cost-assessment-uk/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/on-site-reinstatement-cost-assessment-london', file: 'app/on-site-reinstatement-cost-assessment-london/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/three-year-reinstatement-cost-assessment-london', file: 'app/three-year-reinstatement-cost-assessment-london/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', file: 'app/about/page.js', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/resources/what-is-a-building-reinstatement-cost', file: 'app/resources/what-is-a-building-reinstatement-cost/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', file: 'app/contact/page.js', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/reinstatement-cost-assessment-london', file: 'app/reinstatement-cost-assessment-london/page.js', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/residential-reinstatement-cost-assessments', file: 'app/residential-reinstatement-cost-assessments/page.js', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/commercial-reinstatement-costs', file: 'app/commercial-reinstatement-costs/page.js', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/managing-agents-insurance-valuations', file: 'app/managing-agents-insurance-valuations/page.js', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/block-managers-reinstatement-cost-assessments', file: 'app/block-managers-reinstatement-cost-assessments/page.js', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resources/when-should-block-insurance-valuations-be-updated', file: 'app/resources/when-should-block-insurance-valuations-be-updated/page.js', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/resources/top-risks-of-underinsurance-for-managing-agents', file: 'app/resources/top-risks-of-underinsurance-for-managing-agents/page.js', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/resources/case-study-block-of-flats-undervalued', file: 'app/resources/case-study-block-of-flats-undervalued/page.js', changeFrequency: 'yearly', priority: 0.6 },
]

function lastModified(file) {
  try {
    return statSync(join(process.cwd(), file)).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap() {
  return routes.map(({ path, file, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: lastModified(file),
    changeFrequency,
    priority,
  }))
}
