import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

const REVIEWS = [
  { stars: 5, text: 'Well satisfied with the timely service and supportive staff!', who: 'Rupal Gupta' },
  { stars: 5, text: 'Nice place and supportive people.', who: 'Ojas Ghodki' },
  { stars: 5, text: 'It was a great and hassle-free experience with the team.', who: 'Rajkumar Bokde' },
  { stars: 5, text: 'Supportive, patient, and clear in their guidance. Highly recommended!', who: 'Aditya Mundhada' },
  { stars: 5, text: 'Atishh Sir was very professional, supportive, and responsive. I secured a good job.', who: 'Nupur Dongarwar' },
  { stars: 5, text: 'One of the best consultants in Nagpur. Atish Gupta sir is very understanding.', who: 'Abha M' },
  { stars: 5, text: 'My admission to MEPHI Medical College in Russia was incredibly smooth.', who: 'Soham Pingle' },
  { stars: 5, text: 'Atish Gupta sir made this hectic process easy. Now studying BDS at VYWS.', who: 'Mahi' },
  { stars: 5, text: 'Honest and transparent guidance for my PG abroad. Highly recommended.', who: 'Pooja Pramanik' },
]

export default function Testimonials() {
  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title="Success Stories"
        subtitle="259+ reviews, 4.9★"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Success Stories' }]}
      />

      <section className="section">
        <div className="container">
          <div className="testi-grid">
            {REVIEWS.map((r, i) => (
              <div className="testi reveal" data-delay={i % 4} key={i}>
                <div className="stars" aria-hidden="true">{'★'.repeat(r.stars)}</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">&mdash; {r.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your story could be next"
        subtitle="Book a free consultation and let's write your success together."
      />
    </main>
  )
}
