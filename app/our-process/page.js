import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import ProcessTimeline from '@/components/ProcessTimeline'
import CTASection from '@/components/CTASection'

const STEPS = [
  { title: 'Discover', desc: 'Career psychometric test & counseling to understand your strengths, interests and goals.' },
  { title: 'Plan', desc: 'Shortlist colleges, courses and countries that fit your profile, budget and ambitions.' },
  { title: 'Apply', desc: 'Document preparation, application filing and timely submission handled with care.' },
  { title: 'Succeed', desc: 'Admission confirmation, visa and post-landing support until you settle in.' },
]

export default function OurProcess() {
  return (
    <main>
      <PageHero
        title="Our Process"
        subtitle="Four clear steps from first conversation to a confirmed seat."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our Process' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Process"
            title="A clear path from confusion to admission"
            subtitle="Four considered steps that take the guesswork out of your journey."
          />
          <div className="reveal">
            <ProcessTimeline steps={STEPS} />
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link className="btn btn-primary" href="/contact">Start Your Process</Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Let's begin your four-step journey"
        subtitle="Book your first conversation with the Edulocus team today."
      />
    </main>
  )
}
