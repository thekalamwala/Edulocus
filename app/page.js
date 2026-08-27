import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'
import ProcessTimeline from '@/components/ProcessTimeline'
import FaqList from '@/components/FaqList'
import ServiceCards from '@/components/ServiceCards'

const TRUST = [
  { icon: 'fa-solid fa-calendar-check', num: 'Since 2012', lbl: 'Trusted Nagpur consultancy' },
  { icon: 'fa-solid fa-user-graduate', num: '1000+', lbl: 'Students guided' },
  { icon: 'fa-solid fa-earth-asia', num: '10+', lbl: 'Study destinations' },
  { icon: 'fa-solid fa-handshake-angle', num: 'Free', lbl: 'First 1:1 consultation' },
]

const SERVICES = [
  {
    no: '01',
    title: 'Career Discovery',
    desc: 'Psychometric testing and one-on-one counselling to help you choose the path that truly fits you.',
    href: '/career-discovery',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=60',
    accent: '#0E8C7F',
    icon: 'fa-compass',
    tags: [
      { label: 'Psychometric testing', icon: 'fa-clipboard-list' },
      { label: '1:1 Counselling', icon: 'fa-comments' },
    ],
  },
  {
    no: '02',
    title: 'College Planning',
    desc: 'Shortlisting, applications and scholarship guidance tailored to your profile and budget.',
    href: '/college-planning',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=60',
    accent: '#FF6A1A',
    icon: 'fa-graduation-cap',
    tags: [
      { label: 'Shortlisting', icon: 'fa-list-check' },
      { label: 'Scholarships', icon: 'fa-award' },
    ],
  },
  {
    no: '03',
    title: 'Study Abroad',
    desc: 'MBBS and higher education in Russia, Germany, USA & more — with visa and forex support.',
    href: '/study-abroad',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=60',
    accent: '#2563EB',
    icon: 'fa-globe',
    tags: [
      { label: 'Visa support', icon: 'fa-plane' },
      { label: 'Forex', icon: 'fa-money-bill-wave' },
    ],
  },
]

const WHY = [
  { icon: 'fa-solid fa-compass', title: 'Personalized Guidance', text: 'Every plan starts with listening and assessment — never a template.' },
  { icon: 'fa-solid fa-user-tie', title: 'Experienced Counsellors', text: 'Led by Atish Gupta, with 15+ years of admissions expertise.' },
  { icon: 'fa-solid fa-heart', title: 'Student-First Approach', text: 'Recommendations based on strengths, not trends or pressure.' },
  { icon: 'fa-solid fa-people-group', title: 'Parent-Inclusive', text: 'Joint sessions so families decide together with confidence.' },
  { icon: 'fa-solid fa-globe', title: 'India + Global', text: 'Admissions across India and leading universities abroad.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Transparent Process', text: 'Clear pricing and honest advice at every step.' },
]

const PROCESS = [
  { title: 'Discover', desc: 'Understand interests, strengths and goals through assessment.' },
  { title: 'Plan', desc: 'Build a personalized academic and career roadmap.' },
  { title: 'Shortlist', desc: 'Identify suitable programs, colleges and countries.' },
  { title: 'Apply', desc: 'Support with applications, documents and timelines.' },
  { title: 'Achieve', desc: 'Move confidently toward your next step.' },
]

const DESTINATIONS = [
  { name: 'Germany', blurb: 'World-class public universities and strong engineering programs.', img: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=900&q=60', href: '/study-abroad' },
  { name: 'United States', blurb: 'Prestigious institutions, research depth and global career reach.', img: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=900&q=60', href: '/study-abroad' },
  { name: 'United Kingdom', blurb: 'Historic universities and a fast graduate route to work.', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=60', href: '/study-abroad' },
  { name: 'Canada', blurb: 'Welcoming campuses, post-study work and great quality of life.', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=60', href: '/study-abroad' },
]

const TESTIMONIALS = [
  { name: 'Rupal Gupta', course: 'MBBS Abroad', text: 'Well satisfied with the timely service and supportive staff! They guided me at every step.' },
  { name: 'Soham Pingle', course: 'MEPHI, Russia', text: 'My admission to medical college in Russia was incredibly smooth. Highly recommend Edulocus.' },
  { name: 'Mahi', course: 'BDS Student', text: 'Atish sir made this hectic process easy. Now studying at VYWS with full confidence.' },
  { name: 'Nupur Dongarwar', course: 'Placed Graduate', text: 'Very professional and responsive — I secured a good job through their placement help.' },
  
]

const FAQS = [
  { q: 'Do you charge for the first consultation?', a: 'The first career discussion is complimentary. Detailed admission counseling packages start at ₹1,000.' },
  { q: 'Which countries do you help with for study abroad?', a: 'We actively support MBBS and higher education in Russia, Germany, USA, UK, Canada, Australia and more.' },
  { q: 'Do you help with visas and forex?', a: 'Yes. For study-abroad clients we assist with visa filing and foreign exchange arrangements.' },
  { q: 'Can parents attend the counseling?', a: 'Absolutely. We encourage a joint parent session for major career decisions.' },
]

function initials(name) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('')
}

export default function Home() {
  const [feature, ...rest] = TESTIMONIALS
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow g1" />
        <div className="hero-glow g2" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              Build the right career. <br />
              <span className="text-grad">Choose the right future.</span>
            </h1>
            <p className="lead">
              Personalized career counselling, college planning and study-abroad
              guidance for students and parents — honest advice, clear steps and
              results that matter.
            </p>
            <div className="cta">
              <Link className="btn btn-accent" href="/contact">
                Book a Free Consultation
              </Link>
              <Link className="btn btn-ghost" href="/programs">
                Explore Our Programs
              </Link>
            </div>
            {/* <div className="hero-faces">
              <img className="face" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60" alt="Edulocus student" />
              <img className="face" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60" alt="Edulocus student" />
              <img className="face" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60" alt="Edulocus student" />
              <img className="face" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=60" alt="Edulocus student" />
              <div className="faces-text">
                <strong>1000+ students guided</strong>
                <span className="stars">★ 4.9 · 259+ Google reviews</span>
              </div>
            </div> */}
          </div>

          <div className="hero-media">
            <img
              className="hero-photo"
              src="/girl.png"
              alt="A student holding a book, dreaming of studying abroad"
            />
            <div className="hero-media-tag t1"><i className="fa-solid fa-globe" /> MBBS in 10+ countries</div>
            <div className="hero-media-tag t2"><i className="fa-solid fa-calendar-check" /> Free 1:1 Counseling</div>
            <div className="hero-media-tag t3"><i className="fa-solid fa-star" /> 4.9★ · 259 reviews</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="mouse" />
          Scroll
        </div>
      </section>

      {/* Trust strip */}
      <div className="container">
        <div className="trust-strip reveal">
          <div className="trust-grid">
            {TRUST.map((t) => (
              <div className="t-item" key={t.lbl}>
                <span className="t-ico"><i className={t.icon} aria-hidden="true" /></span>
                <div>
                  <div className="t-num">{t.num}</div>
                  <div className="t-lbl">{t.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section section--mint">
        <div className="container">
          <SectionHeader
            eyebrow="What We Do"
            title="Services built around your future"
            subtitle="One consultancy. Multiple pathways. A team that stays with you until the seat is confirmed."
          />
          <ServiceCards items={SERVICES} />
        </div>
      </section>

      {/* Why Edulocus */}
      <section className="section section--slab">
        <div className="container">
          <div className="why-grid">
            <div className="reveal">
              <span className="eyebrow">Why Edulocus</span>
              <p className="why-statement" style={{ marginTop: 16 }}>
                Guidance built around <span className="accent">your</span> future —
                not a brochure.
              </p>
              <p style={{ color: 'var(--muted)', marginTop: 18, maxWidth: '46ch' }}>
                From your first doubt to admission day, we stay with you — transparent
                at every step and focused on what truly fits your goals.
              </p>
              <p style={{ marginTop: 24 }}>
                <Link className="btn btn-primary" href="/about">Learn About Us</Link>
              </p>
            </div>
            <div className="reasons">
              {WHY.map((r) => (
                <div className="reason reveal" key={r.title}>
                  <span className="r-ico"><i className={r.icon} aria-hidden="true" /></span>
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How It Works"
            title="A clear path from confusion to admission"
            subtitle="Five considered steps that take the guesswork out of your journey."
          />
          <div className="reveal">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section section--slab">
        <div className="container">
          <SectionHeader
            eyebrow="Where You Can Study"
            title="Popular study destinations"
            subtitle="Explore the countries where Edulocus helps students secure admissions and build global careers."
          />
          <div className="dest-grid">
            {DESTINATIONS.map((d) => (
              <Link className="dest-card reveal" key={d.name} href={d.href}>
                <img src={d.img} alt={`Study in ${d.name}`} loading="lazy" />
                <div className="dest-body">
                  <h3>{d.name}</h3>
                  <p>{d.blurb}</p>
                  <span className="link">
                    Explore <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Testimonials"
            title="Real words from real students"
            subtitle="Short, direct feedback from families who wanted clarity — and got it."
          />
          <div className="testi-feature reveal">
            <blockquote>“{feature.text}”</blockquote>
            <div className="t-meta">
              <span className="t-avatar" aria-hidden="true">{initials(feature.name)}</span>
              <div>
                <div className="t-name">{feature.name}</div>
                <div className="t-course">{feature.course}</div>
              </div>
            </div>
          </div>
          <div className="testi-grid" style={{ marginTop: 'clamp(20px, 3vw, 32px)' }}>
            {rest.map((t) => (
              <div className="testi reveal" key={t.name}>
                <div className="stars" aria-hidden="true">{'★'.repeat(5)}</div>
                <p>“{t.text}”</p>
                <div className="who">— {t.name}, {t.course}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32 }}>
            <Link className="btn btn-outline" href="/testimonials">Read All Success Stories</Link>
          </p>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section section--slab">
        <div className="container">
          <SectionHeader eyebrow="FAQs" title="Quick answers to common questions" />
          <FaqList items={FAQS} />
          <p style={{ textAlign: 'center', marginTop: 22 }}>
            <Link className="btn btn-primary" href="/faqs">View All FAQs</Link>
          </p>
        </div>
      </section>

      <CTASection
        title="Your future deserves a clear plan."
        subtitle="Book a free consultation with Atish Gupta and the Edulocus team today."
      />
    </main>
  )
}
