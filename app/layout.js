import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { SITE_URL, SITE_NAME, BUSINESS, businessJsonLd, JsonLd } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Education Consultant in Nagpur | Edulocus Coach & Consultants',
    template: '%s | Edulocus Coach & Consultants',
  },
  description:
    'Top-rated education & admission consultant and career counsellor in Nagpur (4.9★, 289 reviews). Edulocus offers career counselling, college planning, and study-abroad guidance — MBBS, Engineering & Management admissions in India and overseas since 2012. Free first consultation.',
  keywords: [
    'education consultant in Nagpur', 'admission consultant in Nagpur', 'career counsellor in Nagpur',
    'education counsellor Nagpur', 'admission consultancy Nagpur', 'career counselling Nagpur',
    'study abroad consultant Nagpur', 'MBBS abroad consultant Nagpur', 'best education consultancy Nagpur',
    'college admission guidance Nagpur', 'overseas education consultant Nagpur', 'student counsellor Nagpur',
    'Edulocus', 'study abroad', 'college planning',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Education Consultant in Nagpur | Edulocus Coach & Consultants',
    description:
      'Nagpur-based education consultancy for career counselling, college planning and study-abroad guidance. 4.9★ · 289 reviews · since 2012.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education Consultant in Nagpur | Edulocus',
    description: 'Career counselling, college planning & study-abroad guidance in Nagpur. 4.9★ · 289 reviews.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Nagpur',
    'geo.position': `${BUSINESS.lat};${BUSINESS.lng}`,
    ICBM: `${BUSINESS.lat}, ${BUSINESS.lng}`,
  },
  // Add your Google Search Console token: verification: { google: 'TOKEN' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <JsonLd data={businessJsonLd()} />
        <Navbar />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  )
}
