'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LOGO_SRC = '/logo.png'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'Programs',
    href: '/programs',
    // children: [
    //   { label: 'Career Discovery', href: '/career-discovery' },
    //   { label: 'College Planning', href: '/college-planning' },
    //   { label: 'Student Success', href: '/student-success' },
    //   { label: 'Study Abroad', href: '/study-abroad' },
    // ],
  },
  { label: 'Success Stories', href: '/testimonials' },
  {
    label: 'Resources',
    href: '/career-guides',
    children: [
      { label: 'Career Guides', href: '/career-guides' },
      { label: 'College Guides', href: '/college-guides' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

function isActive(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mobileDrop, setMobileDrop] = useState(null)

  const close = useCallback(() => {
    setOpen(false)
    setMobileDrop(null)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    close()
  }, [pathname, close])

  const toggleDrop = (label) => setMobileDrop((d) => (d === label ? null : label))

  return (
    <>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Edulocus home">
            <img className="logo" src={LOGO_SRC} alt="Edulocus logo" />
            <span>
              EDULOCUS
              <span className="brand-sub">Coach &amp; Consultants</span>
            </span>
          </Link>

          <button
            className={`menu-toggle ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
            <ul>
              {NAV.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                   <li
                    key={item.label}
                    className={item.children ? 'dropdown' : ''}
                  >
                    <span className="navlink-wrap">
                      <Link
                        href={item.href}
                        className={`navlink ${active ? 'active' : ''}`}
                      >
                        {item.label}
                        {item.children && (
                          <i className="caret fa-solid fa-chevron-down" aria-hidden="true" />
                        )}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          className="caret-btn"
                          aria-label={`Toggle ${item.label} menu`}
                          aria-expanded={open && mobileDrop === item.label}
                          onClick={() => toggleDrop(item.label)}
                        >
                          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                        </button>
                      )}
                    </span>
                    {item.children && (
                      <div className={`sub ${open && mobileDrop === item.label ? 'open' : ''}`}>
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href}>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                )
              })}
              <li className="nav-cta nav-cta--menu">
                <Link className="btn btn-accent" href="/contact">
                  Book a Consultation <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-cta nav-cta--header">
            <Link className="btn btn-accent" href="/contact">
              Book a Consultation <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`nav-scrim ${open ? 'open' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

    </>
  )
}
