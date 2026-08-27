import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const ITEMS = [
  { icon: 'fa-solid fa-clipboard-list', title: 'College Shortlisting', desc: 'Best-fit institutes based on profile, budget & location.' },
  { icon: 'fa-solid fa-pen-to-square', title: 'Application Support', desc: 'Forms, essays & documents prepared and reviewed.' },
  { icon: 'fa-solid fa-award', title: 'Scholarships', desc: 'Find and apply for merit & need-based aid.' },
  { icon: 'fa-solid fa-comments', title: 'Interview Prep', desc: 'Mock sessions & confidence building.' },
]

export default function CollegePlanning() {
  return (
    <main>
      <PageHero
        title="College Planning"
        subtitle="Shortlist, apply and win scholarships with expert planning."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: 'College Planning' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="College Planning"
            title="Four steps to the right college"
            subtitle="We handle the details so you can focus on doing your best."
          />
          <div className="cards">
            {ITEMS.map((it, i) => (
              <div className="card reveal" data-delay={i % 4} key={it.title}>
                <div className="icon"><i className={it.icon} aria-hidden="true" /></div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link className="btn btn-primary" href="/contact">Plan My College</Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to build your college shortlist?"
        subtitle="Book a planning session and we'll get started today."
      />
    </main>
  )
}
