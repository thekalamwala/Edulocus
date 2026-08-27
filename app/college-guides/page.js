import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const GUIDES = [
  { meta: 'Guide', title: 'Top Medical Colleges in Maharashtra', desc: 'A quick overview of government & private options.' },
  { meta: 'Guide', title: 'Documents Checklist for Admission', desc: 'Never miss a paper with our printable checklist.' },
  { meta: 'Guide', title: 'Scholarship Opportunities 2026', desc: 'Where to find aid and how to apply.' },
]

export default function CollegeGuides() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="College Guides"
        subtitle="Everything you need to pick and apply to the right college."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'College Guides' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="College Guides"
            title="Pick and apply with confidence"
            subtitle="Practical guides for every step of the admission process."
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
        title="Need a hand with applications?"
        subtitle="Book a free consultation and we'll guide you through every form."
      />
    </main>
  )
}
