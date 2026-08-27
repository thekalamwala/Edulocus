import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const POSTS = [
  { href: '/blog-detail', date: 'May 25, 2026', title: 'A Must-Watch Video for Engineering Aspirants of 2026', excerpt: 'Key things every engineering applicant should know this year.' },
  { href: '/blog-detail', date: 'Apr 8, 2026', title: 'Study MBBS Abroad with Expert Guidance', excerpt: "Dreaming of becoming a doctor? Here's how we help." },
  { href: '/blog-detail', date: 'Mar 2, 2026', title: 'NEET 2026: What After the Results', excerpt: 'Mapping your options — MBBS, BDS, abroad and more.' },
]

export default function Blog() {
  const [feature, ...rest] = POSTS
  return (
    <main>
      <PageHero
        title="Blog"
        subtitle="Tips, updates and insights for students and parents."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Blog' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="From the Desk"
            title="Latest reads for students & parents"
            subtitle="Practical advice to help you choose and plan with confidence."
          />

          <Link className="blog-feature reveal" href={feature.href}>
            <div className="bf-media" aria-hidden="true" />
            <div className="bf-body">
              <div className="meta">{feature.date}</div>
              <h3>{feature.title}</h3>
              <p>{feature.excerpt}</p>
              <span className="link">Read article <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
            </div>
          </Link>

          <div className="blog-grid">
            {rest.map((p, i) => (
              <Link className="blog-card reveal" data-delay={i % 4} href={p.href} key={i}>
                <div className="thumb" aria-hidden="true" />
                <div className="body">
                  <div className="meta">{p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="read">Read article <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want guidance tailored to you?"
        subtitle="Book a free consultation with the Edulocus team today."
      />
    </main>
  )
}
