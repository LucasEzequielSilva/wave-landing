/**
 * THEME CONFIGURATION
 * ==================
 * This is the single source of truth for all branding and design tokens.
 * Change values here to customize the entire landing page for any brand.
 */

export const themeConfig = {
  // ===== BRAND IDENTITY =====
  brand: {
    name: "Formix",
    tagline: "Design Subscription for Growing Teams",
    description: "Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.",
  },

  // ===== COLORS =====
  colors: {
    // Primary brand color (used for CTAs, accents)
    primary: "#FF4405",
    primaryHover: "#E63D04",

    // Neutral palette (automatically applied)
    neutrals: {
      50: "rgb(249, 250, 251)",
      100: "rgb(243, 244, 246)",
      200: "rgb(229, 231, 235)",
      300: "rgb(209, 213, 219)",
      400: "rgb(156, 163, 175)",
      600: "rgb(75, 85, 99)",
      700: "rgb(55, 65, 81)",
      800: "rgb(31, 41, 55)",
      900: "rgb(17, 24, 39)",
    },
  },

  // ===== TYPOGRAPHY =====
  typography: {
    // Font families (from next/font/google in layout.tsx)
    fontSans: "Geist",
    fontMono: "Geist Mono",

    // Font sizes for headlines
    hero: {
      desktop: "4.5rem", // 72px
      tablet: "3.5rem",  // 56px
      mobile: "2.5rem",  // 40px
    },
    h1: {
      desktop: "3.75rem", // 60px
      tablet: "3rem",     // 48px
      mobile: "2.25rem",  // 36px
    },
    h2: {
      desktop: "3rem",    // 48px
      tablet: "2.5rem",   // 40px
      mobile: "2rem",     // 32px
    },
  },

  // ===== BORDER RADIUS =====
  radius: {
    xs: "0.25rem",   // 4px - small elements
    sm: "0.5rem",    // 8px - buttons, inputs
    md: "0.75rem",   // 12px - cards
    lg: "1rem",      // 16px - large cards
    xl: "1.25rem",   // 20px - sections
    "2xl": "1.5rem", // 24px - major sections
    "3xl": "2rem",   // 32px - hero sections
    full: "9999px",  // badges, avatars
  },

  // ===== SHADOWS =====
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },

  // ===== SPACING =====
  spacing: {
    section: {
      desktop: "5rem",    // 80px
      mobile: "3.75rem",  // 60px
    },
    card: {
      desktop: "1.5rem",  // 24px
      mobile: "1rem",     // 16px
    },
  },

  // ===== ANIMATIONS =====
  animations: {
    // Transition durations
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",

    // Easing functions
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  // ===== COMPONENTS CONFIGURATION =====
  components: {
    // Button styles
    button: {
      defaultRadius: "full", // "sm" | "md" | "lg" | "full"
      defaultSize: "md",     // "sm" | "md" | "lg"
    },

    // Card styles
    card: {
      defaultRadius: "2xl",  // "md" | "lg" | "xl" | "2xl"
      defaultShadow: "sm",   // "sm" | "md" | "lg"
    },

    // Navigation
    navigation: {
      position: "fixed",     // "fixed" | "sticky" | "static"
      backdrop: "blur",      // "blur" | "solid" | "transparent"
    },
  },

  // ===== SEO & METADATA =====
  seo: {
    title: "Formix — Design Subscription for Growing Teams",
    description: "Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need.",
    keywords: ["design subscription", "unlimited design", "design agency", "UI/UX design"],
    author: "Formix",
    ogImage: "/og-image.jpg",
    twitterHandle: "@formix",
  },

  // ===== CONTACT & SOCIAL =====
  contact: {
    email: "hello@formix.com",
    phone: "+1 (555) 123-4567",
    address: "123 Design Street, Creative City, CC 12345",

    social: {
      twitter: "https://twitter.com/formix",
      linkedin: "https://linkedin.com/company/formix",
      instagram: "https://instagram.com/formix",
      dribbble: "https://dribbble.com/formix",
    },
  },
}

export type ThemeConfig = typeof themeConfig
