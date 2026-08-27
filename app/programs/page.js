import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const PROGRAMS = [
  {
    icon: 'fa-solid fa-brain',
    title: 'Career Discovery',
    desc: 'Find the right path through psychometric testing & counseling.',
    href: '/career-discovery',
  },
  {
    icon: 'fa-solid fa-list-check',
    title: 'College Planning',
    desc: 'Shortlist & apply to the best-fit colleges and scholarships.',
    href: '/college-planning',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Student Success',
    desc: 'Placement & career support beyond admission.',
    href: '/student-success',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Study Abroad',
    desc: 'MBBS & higher education in Russia, Germany, USA & more.',
    href: '/study-abroad',
  },
]

export default function Programs() {
  return (
    <main>
      <PageHero
        eyebrow="Our Programs"
        title="Structured Pathways"
        subtitle="Structured pathways for every stage of your education journey."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Programs"
            title="Choose the right starting point"
            subtitle="Each program is a focused track — pick where you are today and we'll take it from there."
          />
          <div className="cards">
            {PROGRAMS.map((p, i) => (
              <Link className="card reveal" data-delay={i % 4} key={p.title} href={p.href}>
                <div className="icon"><i className={p.icon} aria-hidden="true" /></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="link" style={{ marginTop: '12px' }}>
                  Explore <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which program fits you?"
        subtitle="Book a free consultation and we'll map the right path together."
      />
    </main>
  )
}
