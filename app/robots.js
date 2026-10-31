import { SITE_URL } from '@/lib/site'

// ponytail: Next native robots route. AI crawlers explicitly allowed for GEO/AEO.
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Named AI crawlers — allow so the site can be cited in AI answers.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-Web', 'Google-Extended', 'Applebot-Extended', 'CCBot'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
