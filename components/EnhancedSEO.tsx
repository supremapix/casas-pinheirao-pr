
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: object;
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://casaspinheirao.com.br/medias/elementor/thumbs/Casas-Pinheirao-Pinhais-As-casas-pre-fabricadas-mais-baratas-do-Brasil-qu5yw0ge1u5iqut4a4yuh23advi1ysrdau4a0yqoe8.png',
  keywords = 'casas pré-fabricadas, casas de madeira, casas de alvenaria, sobrados, casas Pinhais, casas Curitiba, casa própria, financiamento facilitado',
  structuredData
}) => {
  const siteUrl = 'https://casaspinheirao.com.br';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = `${title} | Casas Pinheirão`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Casas Pinheirão',
    description: 'Especialista em Casas Pré-Fabricadas de Madeira e Alvenaria em Curitiba e Região',
    image: ogImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Jacob Macanhan, 1369',
      addressLocality: 'Pinhais',
      addressRegion: 'PR',
      postalCode: '83323-060',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4447,
      longitude: -49.1916
    },
    url: siteUrl,
    telephone: '+55-41-3667-8015',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/casasprefabricadapinheirao',
      'https://www.instagram.com/casas_pinheirao'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Casas Pinheirão" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Casas Pinheirão" />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Pinhais" />
      <meta name="geo.position" content="-25.4447;-49.1916" />
      <meta name="ICBM" content="-25.4447, -49.1916" />

      {/* Resource Hints - Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://casaspinheirao.com.br" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};
