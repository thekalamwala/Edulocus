import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata = {
  metadataBase: new URL('https://edulocus.com'),
  title: {
    default: 'Edulocus Coach & Consultants | Career & Education Guidance in Nagpur',
    template: '%s | Edulocus Coach & Consultants',
  },
  description:
    'Edulocus Coach & Consultants — Nagpur based education consultancy for career counselling, college planning and study abroad (MBBS, Engineering, Management) in India and overseas.',
  keywords: ['education consultancy', 'career counselling', 'study abroad', 'MBBS abroad', 'Nagpur', 'college planning'],
  openGraph: {
    title: 'Edulocus Coach & Consultants',
    description: 'Personalized career counselling, college planning and study-abroad guidance.',
    type: 'website',
    locale: 'en_IN',
  },
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
        <Navbar />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  )
}
