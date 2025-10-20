import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { themeConfig } from "@/config/theme.config"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

// Add Inter with multiple weights
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://formix.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: themeConfig.seo.title,
    template: `%s | ${themeConfig.brand.name}`,
  },
  description: themeConfig.seo.description,
  keywords: themeConfig.seo.keywords,
  authors: [{ name: themeConfig.seo.author }],
  creator: themeConfig.seo.author,
  publisher: themeConfig.seo.author,

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: themeConfig.seo.title,
    description: themeConfig.seo.description,
    siteName: themeConfig.brand.name,
    images: [
      {
        url: themeConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: themeConfig.brand.name,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: themeConfig.seo.title,
    description: themeConfig.seo.description,
    creator: themeConfig.seo.twitterHandle,
    images: [themeConfig.seo.ogImage],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`} style={{ scrollBehavior: 'smooth' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
