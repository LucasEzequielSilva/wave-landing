import { themeConfig } from "@/config/theme.config"

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://formix.com"

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: themeConfig.brand.name,
    description: themeConfig.brand.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: themeConfig.contact.phone,
      contactType: "customer service",
      email: themeConfig.contact.email,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      themeConfig.contact.social.twitter,
      themeConfig.contact.social.linkedin,
      themeConfig.contact.social.instagram,
      themeConfig.contact.social.dribbble,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Creative City",
      addressRegion: "CC",
      postalCode: "12345",
      addressCountry: "US",
    },
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: themeConfig.brand.name,
    description: themeConfig.brand.description,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Design Subscription Service",
    provider: {
      "@type": "Organization",
      name: themeConfig.brand.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Design Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity Design",
            description:
              "Elevate your identity: sharp positioning, cohesive visuals, real impact.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & Mobile Design",
            description:
              "Launch MVP in days; refresh or rebrand your UI; lift conversion rates.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Framer Development",
            description: "Perfect for portfolios, startups, and product launches.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Graphics",
            description:
              "Quick, polished visuals for daily content, campaigns, and launches.",
          },
        },
      ],
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
