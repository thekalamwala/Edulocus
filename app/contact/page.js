import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import CTASection from '@/components/CTASection'

export default function Contact() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Visit our Nagpur office or reach out — we're happy to help."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Reach Us</span>
            <h2 style={{ margin: '12px 0 16px' }}>Visit, call or book</h2>
            <div className="contact-info">
              <div className="item">
                <div className="ico"><i className="fa-solid fa-phone" aria-hidden="true" /></div>
                <div><strong>Phone</strong><br /><a href="tel:09028451946">090284 51946</a></div>
              </div>
              <div className="item">
                <div className="ico"><i className="fa-solid fa-location-dot" aria-hidden="true" /></div>
                <div><strong>Address</strong><br />33/2, Amravati Rd, Priyadarshini Colony, Civil Lines, Nagpur, Maharashtra 440001</div>
              </div>
              <div className="item">
                <div className="ico"><i className="fa-solid fa-clock" aria-hidden="true" /></div>
                <div><strong>Hours</strong><br />Open daily · Closes 8 pm</div>
              </div>
              <div className="item">
                <div className="ico"><i className="fa-solid fa-mobile-screen-button" aria-hidden="true" /></div>
                <div><strong>Appointments</strong><br />Book via bookasloth.com or call us</div>
              </div>
            </div>
            <p style={{ marginTop: '18px' }}>
              <a className="btn btn-primary" href="https://bookasloth.com/theedulocusway" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer to book online?"
        subtitle="Reserve your session in minutes through our booking form."
        href="/contact"
        label="Book a Consultant"
      />
    </main>
  )
}
