import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export default function CareerDiscovery() {
  return (
    <main>
      <PageHero
        title="Career Discovery"
        subtitle="Know yourself before you choose. Our psychometric-led approach."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: 'Career Discovery' }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2 style={{ margin: '12px 0 14px' }}>From self-awareness to a clear plan</h2>
            <ul className="feature-list">
              <li>Scientific psychometric aptitude &amp; interest test</li>
              <li>One-on-one review of your results with a counselor</li>
              <li>Career options mapped to your strengths</li>
              <li>Parent session for joint decision-making</li>
              <li>Clear next steps &mdash; courses, exams, colleges</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              <Link className="btn btn-primary" href="/contact">Book a Career Session</Link>
            </p>
          </div>
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1513258496099-8529b68e3c09?auto=format&fit=crop&w=800&q=60"
              alt="A student reflecting on career choices"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Still deciding what's right for you?"
        subtitle="A 1:1 career session can bring the clarity you need."
      />
    </main>
  )
}
