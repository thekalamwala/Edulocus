import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export default function ServiceDetail() {
  return (
    <main>
      <PageHero
        title="Admission Counseling"
        subtitle="A deep dive into how we guide your admission journey."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Service Detail' }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">What&rsquo;s Included</span>
            <h2 style={{ margin: '12px 0 14px' }}>Everything in your counseling journey</h2>
            <ul className="feature-list">
              <li>Initial career psychometric assessment</li>
              <li>One-on-one counseling with Atish Gupta</li>
              <li>Personalized college &amp; course shortlist</li>
              <li>Application &amp; document preparation</li>
              <li>Entrance exam &amp; interview preparation tips</li>
              <li>Visa, forex &amp; pre-departure support (abroad)</li>
              <li>Regular progress updates until admission</li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 style={{ margin: '12px 0 14px' }}>Simple, transparent fees</h2>
            <div className="card reveal" style={{ marginBottom: '16px' }}>
              <h3>Admission Counseling 2026 (MBBS Abroad)</h3>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-dark)', marginTop: '8px' }}>&#8377;1,000.00</p>
            </div>
            <div className="card reveal" data-delay="1">
              <h3>MBBS in India &amp; Abroad</h3>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-dark)', marginTop: '8px' }}>&#8377;1,000.00</p>
            </div>
            <p style={{ marginTop: '14px' }}>
              <Link className="btn btn-primary" href="/contact">Book This Service</Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions before you book?"
        subtitle="Talk to Atish Gupta and the Edulocus team — the first career discussion is complimentary."
      />
    </main>
  )
}
