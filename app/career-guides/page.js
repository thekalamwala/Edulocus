import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const GUIDES = [
  { meta: 'Guide', title: 'MBBS in India vs Abroad — What to Choose', desc: 'Compare cost, recognition and scope before you decide.' },
  { meta: 'Guide', title: 'Engineering Branches Explained', desc: 'From CSE to core — which branch fits your interest.' },
  { meta: 'Guide', title: 'How Psychometric Tests Help', desc: 'Why aptitude testing beats guesswork in career choice.' },
]

export default function CareerGuides() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Career Guides"
        subtitle="Free, practical reading to help you choose the right path."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Career Guides' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Career Guides"
            title="Read before you decide"
            subtitle="Short, practical guides to the biggest career crossroads."
          />
          <div className="blog-grid">
            {GUIDES.map((g, i) => (
              <div className="blog-card reveal" data-delay={i % 4} key={g.title}>
                <div className="thumb" aria-hidden="true" />
                <div className="body">
                  <div className="meta">{g.meta}</div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still weighing your options?"
        subtitle="Book a free consultation and we'll help you decide with confidence."
      />
    </main>
  )
}
