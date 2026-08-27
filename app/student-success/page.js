import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export default function StudentSuccess() {
  return (
    <main>
      <PageHero
        title="Student Success"
        subtitle="Admission is just the beginning — we help you thrive."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Programs', href: '/programs' }, { label: 'Student Success' }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Beyond Admission</span>
            <h2 style={{ margin: '12px 0 14px' }}>Support that continues after the seat</h2>
            <ul className="feature-list">
              <li>Resume writing &amp; profile building</li>
              <li>Talent acquisition &amp; job placement support</li>
              <li>Corporate training &amp; interview readiness</li>
              <li>Alumni mentoring for continued growth</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              <Link className="btn btn-primary" href="/contact">Talk to Our Team</Link>
            </p>
          </div>
          <div>
            <div className="testi reveal">
              <div className="stars" aria-hidden="true">{'★'.repeat(5)}</div>
              <p>&ldquo;Thanks to their guidance, I was able to secure a good job.&rdquo;</p>
              <div className="who">&mdash; Nupur Dongarwar</div>
            </div>
            <div className="testi reveal" data-delay="1" style={{ marginTop: '16px' }}>
              <div className="stars" aria-hidden="true">{'★'.repeat(5)}</div>
              <p>&ldquo;Your continuous support eventually led to my placement.&rdquo;</p>
              <div className="who">&mdash; Prachi Mahajan</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want outcomes like these?"
        subtitle="Let's build a success plan that lasts beyond admission day."
      />
    </main>
  )
}
