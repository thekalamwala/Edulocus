import { SITE_URL } from '@/lib/site'

// ponytail: Next native sitemap. Static route list; add here when a route is added.
const ROUTES = [
  { path: '/', priority: 1.0, freq: 'weekly' },
  { path: '/about', priority: 0.8, freq: 'monthly' },
  { path: '/services', priority: 0.9, freq: 'monthly' },
  { path: '/programs', priority: 0.9, freq: 'monthly' },
  { path: '/study-abroad', priority: 0.9, freq: 'monthly' },
  { path: '/career-discovery', priority: 0.8, freq: 'monthly' },
  { path: '/college-planning', priority: 0.8, freq: 'monthly' },
  { path: '/our-process', priority: 0.6, freq: 'monthly' },
  { path: '/who-we-help', priority: 0.6, freq: 'monthly' },
  { path: '/student-success', priority: 0.7, freq: 'monthly' },
  { path: '/testimonials', priority: 0.7, freq: 'monthly' },
  { path: '/college-guides', priority: 0.7, freq: 'weekly' },
  { path: '/career-guides', priority: 0.7, freq: 'weekly' },
  { path: '/downloads', priority: 0.5, freq: 'monthly' },
  { path: '/blog', priority: 0.7, freq: 'weekly' },
  { path: '/faqs', priority: 0.7, freq: 'monthly' },
  { path: '/book-a-consultant', priority: 0.8, freq: 'monthly' },
  { path: '/contact', priority: 0.8, freq: 'monthly' },
]

export default function sitemap() {
  const now = new Date()
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
