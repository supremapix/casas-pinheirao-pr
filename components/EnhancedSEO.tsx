
import { useEffect } from 'react';

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

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullCanonical;

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph / Facebook
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullCanonical, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:locale', 'pt_BR', true);
    updateMetaTag('og:site_name', 'Casas Pinheirão', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', fullCanonical);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO Meta Tags
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('author', 'Casas Pinheirão');
    updateMetaTag('geo.region', 'BR-PR');
    updateMetaTag('geo.placename', 'Pinhais');
    updateMetaTag('geo.position', '-25.4447;-49.1916');
    updateMetaTag('ICBM', '-25.4447, -49.1916');

    // Structured Data
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optionally reset title on unmount
      document.title = 'Casas Pinheirão - Realize o Sonho da Casa Própria';
    };
  }, [fullTitle, description, fullCanonical, ogType, ogImage, keywords, structuredData]);

  return null;
};
