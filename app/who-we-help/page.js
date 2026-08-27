import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const AUDIENCES = [
  { icon: 'fa-solid fa-user', title: 'School Leavers', desc: 'Students deciding between Engineering, Medical, Management or other streams after 12th.' },
  { icon: 'fa-solid fa-user-doctor', title: 'NEET Aspirants', desc: 'Confused about MBBS vs BDS vs abroad — we help you choose wisely.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Graduates', desc: 'PG in India or abroad, and career switching support.' },
  { icon: 'fa-solid fa-users', title: 'Parents', desc: 'Joint sessions so families make confident, informed decisions together.' },
  { icon: 'fa-solid fa-briefcase', title: 'Job Seekers', desc: 'Resume, placement & recruitment guidance.' },
  { icon: 'fa-solid fa-globe', title: 'Study-Abroad Hopefuls', desc: 'From country selection to visa & forex.' },
]

export default function WhoWeHelp() {
  return (
    <main>
      <PageHero
        title="Who We Help"
        subtitle="Guidance for every learner at every crossroad."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Help' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Who We Help"
            title="Guidance for every learner"
            subtitle="No matter where you are on the path, there's a way we can help."
          />
          <div className="cards">
            {AUDIENCES.map((a, i) => (
              <div className="card reveal" data-delay={i % 4} key={a.title}>
                <div className="icon"><i className={a.icon} aria-hidden="true" /></div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find your fit with Edulocus"
        subtitle="Book a free consultation and we'll tailor guidance to your situation."
      />
    </main>
  )
}
