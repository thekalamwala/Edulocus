import PageHero from '@/components/PageHero'
import FaqList from '@/components/FaqList'
import CTASection from '@/components/CTASection'

const FAQS = [
  { q: 'Do you charge for the first consultation?', a: 'The first career discussion is complimentary. Detailed admission counseling packages start at ₹1,000.' },
  { q: 'Which countries do you help with for study abroad?', a: 'We actively support MBBS and higher education in Russia, Germany, USA and several other destinations.' },
  { q: 'Do you help with visas and forex?', a: 'Yes. For study-abroad clients we assist with visa filing and foreign exchange arrangements.' },
  { q: 'Can parents attend the counseling?', a: 'Absolutely. We encourage a joint parent session for major career decisions.' },
  { q: 'How do I book an appointment?', a: <>Call 090284 51946, book via <a href="https://bookasloth.com/theedulocusway" target="_blank" rel="noopener noreferrer">bookasloth.com</a>, or use our online booking form.</> },
]

export default function Faqs() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
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
