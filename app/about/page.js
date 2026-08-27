import Link from 'next/link'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import CTASection from '@/components/CTASection'

const SUBNAV = [
  { id: 'about', label: 'Our Story' },
  { id: 'coach', label: 'Meet the Coach' },
  { id: 'qualifications', label: 'Qualifications' },
  { id: 'experience', label: 'Experience' },
  { id: 'philosophy', label: 'Our Philosophy' },
]

export default function About() {
  return (
    <main>
      <PageHero
        title="One team, every step of your education journey"
        subtitle="Established in 2012, a Nagpur-based educational consultancy helping students navigate admissions across India and abroad."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <div className="about-nav-wrap">
        <div className="container about-nav">
          {SUBNAV.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.label}</a>
          ))}
        </div>
      </div>

      <section id="about" className="section section--slab">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ margin: '12px 0 14px' }}>How Edulocus began</h2>
            <p>
              Edulocus Coach &amp; Consultants began with a simple mission: to give
              every student honest, expert guidance for their education journey.
              Over the past 15+ years we have helped thousands of students secure
              seats in Engineering, Medical, Dental, Management and other programs
              &mdash; both in India and overseas.
            </p>
            <p style={{ marginTop: '12px' }}>
              From a single counseling desk in Civil Lines, Nagpur, we have grown
              into a trusted name known for transparency, knowledgeable counselors
              and a genuinely supportive approach.
            </p>
            <ul className="feature-list" style={{ marginTop: '16px' }}>
              <li>Specialists in Engineering, Medical &amp; Management admissions</li>
              <li>India &amp; Abroad: Russia, Germany, USA and more</li>
              <li>Career guidance, psychometric testing &amp; job placement</li>
            </ul>
          </div>
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=60"
              alt="University campus where Edulocus students pursue their dreams"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="coach" className="section">
        <div className="container split">
          <div className="split-media">
            <img
              src="/founder.jpg"
              alt="Atish Gupta, Founder of Edulocus"
            />
          </div>
          <div>
            <span className="eyebrow">Meet the Coach</span>
            <h2 style={{ margin: '12px 0 10px' }}>Atish Gupta</h2>
            <p style={{ color: 'var(--accent-dark)', fontWeight: 700, marginBottom: '14px' }}>
              Founder &amp; Lead Education Consultant
            </p>
            <p>
              Atish Gupta is the guiding force at Edulocus. Known by students and
              parents alike for being understanding, cooperative and deeply
              knowledgeable, he has personally mentored hundreds of aspirants
              through the often-confusing world of college admissions.
            </p>
            <p style={{ marginTop: '12px' }}>
              Whether it&rsquo;s a NEET aspirant unsure about BDS vs MBBS, or a
              student facing peer pressure about Engineering, Atish sir takes the
              time to listen, assess through psychometric tools, and recommend what
              truly fits the student&rsquo;s strengths.
            </p>
            <ul className="feature-list" style={{ marginTop: '16px' }}>
              <li>One-on-one career counseling &amp; psychometric analysis</li>
              <li>Expert in India &amp; abroad medical admissions</li>
              <li>Free parent consultation sessions</li>
            </ul>
            <p style={{ marginTop: '18px' }}>
              <Link className="btn btn-primary" href="/contact">
                Book a Session with Atish Sir
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="qualifications" className="section section--slab">
        <div className="container">
          <SectionHeader
            eyebrow="Our Qualifications"
            title="Credentials that back our counseling"
            subtitle="Certifications and training that support every recommendation we make."
          />
          <div className="cards">
            <div className="card reveal">
              <div className="icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true" /></div>
              <h3>Certified Career Counselor</h3>
              <p>Trained in psychometric assessment and career guidance methodologies.</p>
            </div>
            <div className="card reveal" data-delay="1">
              <div className="icon"><i className="fa-solid fa-book" aria-hidden="true" /></div>
              <h3>Higher Education Advisory</h3>
              <p>Specialized knowledge of Indian &amp; international university systems.</p>
            </div>
            <div className="card reveal" data-delay="2">
              <div className="icon"><i className="fa-solid fa-globe" aria-hidden="true" /></div>
              <h3>Study Abroad Certified</h3>
              <p>Accredited for overseas education, visa &amp; forex guidance.</p>
            </div>
            <div className="card reveal" data-delay="3">
              <div className="icon"><i className="fa-solid fa-brain" aria-hidden="true" /></div>
              <h3>Psychometric Tools</h3>
              <p>Licensed administration of career aptitude &amp; interest testing.</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '26px', color: 'var(--muted)' }}>
            Note: Specific credential details can be shared during your consultation.
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Our Experience"
            title="15+ years of turning aspirations into admissions"
          />
          <div className="cards">
            <div className="card reveal">
              <div className="icon"><i className="fa-solid fa-flag" aria-hidden="true" /></div>
              <h3>2012</h3>
              <p>Founded in Nagpur as a dedicated education consultancy.</p>
            </div>
            <div className="card reveal" data-delay="1">
              <div className="icon"><i className="fa-solid fa-globe" aria-hidden="true" /></div>
              <h3>2015</h3>
              <p>Expanded into MBBS Abroad &amp; international medical admissions.</p>
            </div>
            <div className="card reveal" data-delay="2">
              <div className="icon"><i className="fa-solid fa-brain" aria-hidden="true" /></div>
              <h3>2019</h3>
              <p>Launched career psychometric testing &amp; job placement services.</p>
            </div>
            <div className="card reveal" data-delay="3">
              <div className="icon"><i className="fa-solid fa-star" aria-hidden="true" /></div>
              <h3>2026</h3>
              <p>1000+ students placed; 4.9&#9733; across 259+ reviews.</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link className="btn btn-primary" href="/testimonials">See Student Outcomes</Link>
          </p>
        </div>
      </section>

      <section id="philosophy" className="section section--slab">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Philosophy</span>
            <h2 style={{ margin: '12px 0 14px' }}>Student-First, Always</h2>
            <p>
              We believe a career decision should be based on a student&rsquo;s
              strengths and interests &mdash; not peer pressure or trends.
              That&rsquo;s why every session begins with listening and assessment
              before any recommendation.
            </p>
            <p style={{ marginTop: '12px' }}>
              Our promise: honest advice, a transparent process, and constant
              support until you are settled in your chosen path.
            </p>
          </div>
          <div>
            <ul className="feature-list">
              <li><strong>Listen first</strong> &mdash; understand the student, not just the marksheet</li>
              <li><strong>Assess objectively</strong> &mdash; psychometric tools over guesswork</li>
              <li><strong>Recommend honestly</strong> &mdash; what fits, not what sells</li>
              <li><strong>Support fully</strong> &mdash; from application to admission day</li>
              <li><strong>Include parents</strong> &mdash; joint sessions for big decisions</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk to our team?"
        subtitle="Book a consultation with Atish Gupta and the Edulocus team today."
        label="Book a Consultant"
      />
    </main>
  )
}
