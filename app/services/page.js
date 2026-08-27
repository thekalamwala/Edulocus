import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import ServiceCards from '@/components/ServiceCards'

const SERVICES = [
  {
    no: '01',
    title: 'Admission Counseling',
    desc: 'MBBS, Engineering, BDS, Management & more across India & abroad.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=60',
    accent: '#0E8C7F',
    icon: 'fa-user-graduate',
    tags: [
      { label: 'India & Abroad', icon: 'fa-earth-asia' },
      { label: 'All streams', icon: 'fa-layer-group' },
    ],
  },
  {
    no: '02',
    title: 'Study Abroad',
    desc: 'Russia, Germany, USA & more — applications, visa & forex.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=60',
    accent: '#2563EB',
    icon: 'fa-globe',
    tags: [
      { label: 'Visa & Forex', icon: 'fa-plane' },
      { label: 'MBBS', icon: 'fa-stethoscope' },
    ],
  },
  {
    no: '03',
    title: 'Career Discovery',
    desc: 'Psychometric testing & one-on-one counseling.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=60',
    accent: '#0E8C7F',
    icon: 'fa-compass',
    tags: [
      { label: 'Psychometric', icon: 'fa-clipboard-list' },
      { label: '1:1 Counselling', icon: 'fa-comments' },
    ],
  },
  {
    no: '04',
    title: 'College Planning',
    desc: 'Shortlisting, applications & scholarship guidance.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=60',
    accent: '#FF6A1A',
    icon: 'fa-graduation-cap',
    tags: [
      { label: 'Shortlisting', icon: 'fa-list-check' },
      { label: 'Scholarships', icon: 'fa-award' },
    ],
  },
  {
    no: '05',
    title: 'Job Placement',
    desc: 'Talent acquisition & recruitment support.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920211?auto=format&fit=crop&w=900&q=60',
    accent: '#2563EB',
    icon: 'fa-briefcase',
    tags: [
      { label: 'Recruitment', icon: 'fa-user-plus' },
      { label: 'Mentoring', icon: 'fa-hands-helping' },
    ],
  },
  {
    no: '06',
    title: 'Resume & Forex',
    desc: 'Resume writing and foreign exchange assistance.',
    href: '/contact',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=60',
    accent: '#FF6A1A',
    icon: 'fa-file-lines',
    tags: [
      { label: 'Resume writing', icon: 'fa-pen' },
      { label: 'Forex', icon: 'fa-money-bill-wave' },
    ],
  },
]

export default function Services() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="End-to-end guidance for admissions, careers and global education."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section section--mint">
        <div className="container">
          <SectionHeader
            eyebrow="What We Offer"
            title="Services built around your future"
            subtitle="One consultancy. Multiple pathways. A team that stays with you until the seat is confirmed."
          />
          <ServiceCards items={SERVICES} />
        </div>
      </section>

      <CTASection
        title="A clear path from confusion to admission"
        subtitle="See exactly how we guide you — five considered steps that take the guesswork out of your journey."
        href="/our-process"
        label="View Our Process"
      />
    </main>
  )
}
