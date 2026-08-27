import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const DESTINATIONS = [
  { name: 'Germany', blurb: 'World-class public universities and strong engineering programs.', img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=60' },
  { name: 'United States', blurb: 'Prestigious institutions, research depth and global career reach.', img: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=60' },
  { name: 'United Kingdom', blurb: 'Historic universities and a fast graduate route to work.', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=60' },
]

export default function StudyAbroad() {
  return (
    <main>
      <PageHero
        eyebrow="Programs"
        title="Study Abroad"
        subtitle="MBBS & higher education in Russia, Germany, USA and beyond."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: 'Study Abroad' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Where You Can Study"
            title="Popular study destinations"
            subtitle="Explore the countries where Edulocus helps students secure admissions and build global careers."
          />
          <div className="dest-grid">
            {DESTINATIONS.map((d, i) => (
              <Link className="dest-card reveal" data-delay={i % 3} key={d.name} href="/study-abroad">
                <img src={d.img} alt={`Study in ${d.name}`} loading="lazy" />
                <div className="dest-body">
                  <h3>{d.name}</h3>
                  <p>{d.blurb}</p>
                  <span className="link">
                    Explore <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Dreaming of studying overseas?"
        subtitle="Book a session and we'll map your country, college and visa plan."
      />
    </main>
  )
}
