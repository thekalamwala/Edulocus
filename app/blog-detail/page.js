import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export default function BlogDetail() {
  return (
    <main>
      <PageHero
        title="A Must-Watch Video for Engineering Aspirants of 2026"
        subtitle="Published May 25, 2026 · Edulocus Coach & Consultants"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Resources' }, { label: 'Blog', href: '/blog' }, { label: 'Detail' }]}
      />

      <section className="section">
        <div className="container">
          <article className="article reveal">
            <div
              className="thumb"
              style={{ height: '280px', borderRadius: 'var(--r-lg)', marginBottom: '24px', background: 'linear-gradient(135deg, var(--brand-700), var(--accent))' }}
              aria-hidden="true"
            />
            <p className="lede">
              If you are an engineering aspirant in 2026, the admission landscape has
              changed in important ways. In this post we break down the key things
              every applicant should know — from entrance exams and cut-offs to
              choosing the right branch and avoiding common mistakes.
            </p>

            <h2>1. Understand the Branch, Not Just the College</h2>
            <p>
              Many students chase a college name and ignore the branch. Your branch
              decides your career trajectory far more than the campus brand.
            </p>

            <h2>2. Plan Finances Early</h2>
            <p>
              Know the full fee structure, hostel costs and scholarship options
              before you commit.
            </p>

            <h2>3. Talk to a Counselor</h2>
            <p>
              A short career session can save you years of regret.{' '}
              <Link href="/contact">Book a free consultation</Link> with our
              team.
            </p>

            <p style={{ marginTop: '20px' }}>
              <Link className="btn btn-primary" href="/blog">Back to Blog</Link>
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Need help with your engineering admissions?"
        subtitle="Book a free consultation and we'll map the right branch and college for you."
      />
    </main>
  )
}
