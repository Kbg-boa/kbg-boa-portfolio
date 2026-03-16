import { Helmet } from 'react-helmet-async';

export function SEO() {
  const siteUrl = window.location.origin;
  const imageUrl = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop'; // OG Image
  
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kabangu Mathieu",
    "alternateName": "KBG BOA",
    "description": "Creative services for artists, entrepreneurs and real estate professionals. Specializing in cover art, video editing, music production, branding and digital content creation. Based between Dubai and Kinshasa.",
    "url": siteUrl,
    "image": imageUrl,
    "jobTitle": "Creative Director & Music Producer",
    "worksFor": {
      "@type": "Organization",
      "name": "KBG BOA Creative"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "sameAs": [
      "https://www.instagram.com/kbg_boa",
      "https://www.tiktok.com/@mathieukbg1",
      "https://www.facebook.com/share/1BsMxh3vsP/",
      "https://snapchat.com/t/naNcyhmo"
    ],
    "knowsAbout": [
      "Video Editing",
      "Music Production",
      "Graphic Design",
      "Cover Art Design",
      "Motion Design",
      "Photography",
      "Social Media Content",
      "Real Estate Marketing",
      "Digital Branding"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Creative Services",
        "description": "Professional creative services including music production, video editing, graphic design, and digital content creation",
        "provider": {
          "@type": "Person",
          "name": "Kabangu Mathieu"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Dubai, UAE"
        }
      }
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteUrl}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio",
        "item": `${siteUrl}/#portfolio`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteUrl}/#contact`
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>Kabangu Mathieu | Creative Services, Music Production & Visual Content – Dubai & Kinshasa</title>
      <meta 
        name="description" 
        content="Creative services for artists, entrepreneurs and real estate professionals. Cover art, video editing, music production, branding and digital content creation. Based between Dubai and Kinshasa." 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="Kabangu Mathieu | Creative Services, Music Production & Visual Content" />
      <meta property="og:description" content="Creative services for artists, entrepreneurs and real estate professionals. Cover art, video editing, music production, branding and digital content creation. Based between Dubai and Kinshasa." />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Kabangu Mathieu - KBG BOA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content="Kabangu Mathieu | Creative Services, Music Production & Visual Content" />
      <meta name="twitter:description" content="Creative services for artists, entrepreneurs and real estate professionals. Cover art, video editing, music production, branding and digital content creation. Based between Dubai and Kinshasa." />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Keywords */}
      <meta name="keywords" content="creative services dubai, video editing dubai, cover art design, real estate content dubai, music production, motion design, graphic design, photography dubai, content creator, freelance creative dubai, kbg boa, kabangu mathieu, drill artist, music producer dubai, visual content creator, property content creation" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Additional SEO */}
      <meta name="author" content="Kabangu Mathieu - KBG BOA" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={window.location.href} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#7c3aed" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
}