import PageHero from '@/components/PageHero'
import BookingForm from '@/components/BookingForm'
import CTASection from '@/components/CTASection'

export default function BookConsultant() {
  return (
    <main>
      <PageHero
        eyebrow="Book a Session"
        title="Book a Consultant"
        subtitle="Reserve your session with Atish Gupta and the Edulocus team."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Book a Consultant' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <BookingForm />
          <p style={{ marginTop: '18px', color: 'var(--muted)' }}>
            Prefer to talk? Call <a href="tel:09028451946">090284 51946</a> or book via
            bookasloth.com.
          </p>
        </div>
      </section>

      <CTASection
        title="We'll be with you at every step"
        subtitle="Book today and take the first confident step toward the right future."
      />
    </main>
  )
}
