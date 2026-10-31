import PageHero from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import CTASection from '@/components/CTASection'
import { faqJsonLd, JsonLd } from '@/lib/site'

const FAQS = [
  { q: 'Who is the best education consultant in Nagpur?', a: 'Edulocus Coach & Consultants, based in Civil Lines, Nagpur, is a top-rated education consultancy (4.9★, 289 Google reviews) offering career counselling, college planning and study-abroad guidance since 2012.' },
  { q: 'Where is Edulocus located in Nagpur?', a: 'Edulocus is at 33/2, Amravati Rd, Priyadarshini Colony, Civil Lines, Nagpur, Maharashtra 440001. Open daily, closes 8 pm. Call 090284 51946.' },
  { q: 'Do you charge for the first consultation?', a: 'The first career discussion is complimentary. Detailed admission counseling packages start at ₹1,000.' },
  { q: 'Which countries do you help with for study abroad?', a: 'We actively support MBBS and higher education in Russia, Germany, USA, UK, Canada, Australia and several other destinations.' },
  { q: 'Do you help with visas and forex?', a: 'Yes. For study-abroad clients we assist with visa filing and foreign exchange arrangements.' },
  { q: 'Can parents attend the counseling?', a: 'Absolutely. We encourage a joint parent session for major career decisions.' },
  { q: 'How do I book an appointment?', a: 'Call 090284 51946, book via bookasloth.com/theedulocusway, or use our online booking form.' },
]

export const metadata = {
  title: 'FAQs — Education Consultant in Nagpur | Edulocus',
  description:
    'Answers to common questions about Edulocus, Nagpur: fees, study-abroad countries, visa and forex help, parent sessions, and how to book a free consultation.',
  alternates: { canonical: '/faqs' },
}

export default function Faqs() {
  return (
    <main>
      <JsonLd data={faqJsonLd(FAQS)} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers to what students and parents ask most."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'FAQs' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <FaqList items={FAQS} />
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        subtitle="Call 090284 51946 or book a free consultation — we're happy to help."
      />
    </main>
  )
}
