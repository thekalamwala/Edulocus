import Link from 'next/link'

const LOGO_SRC = '/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img className="logo" src={LOGO_SRC} alt="Edulocus logo" />
              <div>
                <h4>EDULOCUS</h4>
                <p className="footer-tag">Coach &amp; Consultants</p>
              </div>
            </div>
            <p>
              Your career. Our craft. A Nagpur-based education consultancy guiding
              students into Engineering, Medical &amp; Management careers across India
              and abroad since 2012.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/testimonials">Success Stories</Link></li>
              <li><Link href="/who-we-help">Who We Help</Link></li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/career-guides">Career Guides</Link></li>
              <li><Link href="/college-guides">College Guides</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:09028451946"><i className="fa-solid fa-phone" /> 090284 51946</a></li>
              <li><Link href="/contact">33/2 Amravati Rd, Civil Lines, Nagpur</Link></li>
              <li><a href="https://bookasloth.com/theedulocusway" target="_blank" rel="noopener noreferrer">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Edulocus Coach &amp; Consultants. All rights reserved.</span>
          <span>
            <Link href="/contact">Privacy Policy</Link> · <Link href="/contact">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
