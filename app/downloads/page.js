import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const DOWNLOADS = [
  { icon: 'fa-solid fa-list-check', title: 'Admission Document Checklist', desc: 'PDF checklist of papers needed for Indian & abroad admissions.' },
  { icon: 'fa-solid fa-clipboard', title: 'Career Interest Worksheet', desc: 'Self-assessment sheet before your counseling session.' },
  { icon: 'fa-solid fa-table', title: 'Scholarship Tracker', desc: 'Spreadsheet to track deadlines & eligibility.' },
]

export default function Downloads() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        subtitle="Useful templates and checklists for your admission journey."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Downloads' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Downloads"
            title="Templates & checklists"
            subtitle="Free resources to keep your admission process organized."
          />
          <div className="cards">
            {DOWNLOADS.map((d, i) => (
              <div className="card reveal" data-delay={i % 4} key={d.title}>
                <div className="icon"><i className={d.icon} aria-hidden="true" /></div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <p style={{ marginTop: '10px' }}>
                  <a className="link" href="#">Download <i className="fa-solid fa-arrow-down" aria-hidden="true" /></a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need help using these resources?"
        subtitle="Book a free consultation and we'll walk you through each step."
      />
    </main>
  )
}
