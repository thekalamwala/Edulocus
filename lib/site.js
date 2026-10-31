// Central site + business constants. Swap domain / profile links here only.
// ponytail: single source of truth for SEO metadata, schema, NAP.

export const SITE_URL = 'https://edulocus.in'
export const SITE_NAME = 'Edulocus Coach & Consultants'

export const BUSINESS = {
  name: SITE_NAME,
  legalName: 'Edulocus Coach & Consultants',
  founder: 'Atish Gupta',
  foundingDate: '2012',
  phone: '+91-90284-51946',
  phoneDisplay: '090284 51946',
  email: 'info@edulocus.in',
  booking: 'https://bookasloth.com/theedulocusway',
  street: '33/2, Amravati Rd, Priyadarshini Colony, Civil Lines',
  city: 'Nagpur',
  region: 'Maharashtra',
  postalCode: '440001',
  country: 'IN',
  // Nagpur, Civil Lines approx coordinates
  lat: 21.1575,
  lng: 79.0772,
  hours: 'Mo-Su 10:00-20:00',
  rating: { value: '4.9', count: '289' },
  plusCode: '43W8+Q7 Nagpur, Maharashtra',
  // External profiles that reinforce entity identity for AI + local search.
  sameAs: [
    'https://maps.app.goo.gl/Aw2KCMuqLz7U3Wo47',
  ],
  areaServed: [
    'Nagpur', 'Civil Lines', 'Dharampeth', 'Sadar', 'Ramdaspeth', 'Sitabuldi',
    'Wardha', 'Amravati', 'Chandrapur', 'Bhandara', 'Gondia', 'Vidarbha', 'Maharashtra',
  ],
  services: [
    'Admission consulting', 'Career counselling', 'Student counselling', 'Psychometric career assessment',
    'College planning and admissions', 'Study abroad consulting', 'MBBS abroad admissions', 'Engineering admissions',
    'Management (MBA) admissions', 'Scholarship guidance', 'Student visa assistance', 'Forex support',
  ],
}

// Organization + LocalBusiness graph. AI answer engines and Google read this.
export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: 'Edulocus',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
      'Nagpur-based education and admission consultant and career counsellor offering career counselling, college planning, and study-abroad guidance (MBBS, Engineering, Management) across India and overseas since 2012.',
    foundingDate: BUSINESS.foundingDate,
    founder: { '@type': 'Person', name: BUSINESS.founder },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    openingHours: BUSINESS.hours,
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
    },
    sameAs: BUSINESS.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Education consulting services',
      itemListElement: BUSINESS.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  }
}

export function faqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Reusable inline JSON-LD <script>.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
