# 🎨 Customization Guide

This landing page is designed to be **100% customizable** for any brand. Everything is controlled through design tokens and configuration files.

## Quick Start - Rebrand in 5 Minutes

### 1. Update Brand Colors

Edit `config/theme.config.ts`:

```ts
colors: {
  primary: "#YOUR_BRAND_COLOR",      // Main brand color
  primaryHover: "#DARKER_SHADE",     // Hover state
}
```

### 2. Update Brand Name & Copy

```ts
brand: {
  name: "Your Brand",
  tagline: "Your Tagline",
  description: "Your description",
}
```

### 3. Update SEO Metadata

```ts
seo: {
  title: "Your Title",
  description: "Your Description",
  keywords: ["your", "keywords"],
}
```

That's it! The entire site will update automatically.

---

## 🎨 Design System

### Color Tokens

All colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --brand-orange: #FF4405;        /* Primary brand color */
  --gray-100: rgb(243, 244, 246); /* Light gray */
  --gray-900: rgb(17, 24, 39);    /* Dark gray */
}
```

**Usage in components:**
```tsx
<div className="bg-brand text-white">      {/* Brand color */}
<div className="bg-gray-100">              {/* Light background */}
<div className="bg-gray-900 text-white">   {/* Dark background */}
```

### Border Radius Tokens

```css
--radius-sm: 0.5rem;     /* Buttons, inputs */
--radius-md: 0.75rem;    /* Small cards */
--radius-lg: 1rem;       /* Cards */
--radius-2xl: 1.5rem;    /* Sections */
--radius-3xl: 2rem;      /* Hero sections */
--radius-full: 9999px;   /* Pills, badges */
```

**Utility classes:**
```tsx
<div className="rounded-card">      {/* Medium cards */}
<div className="rounded-section">   {/* Large sections */}
<div className="rounded-hero">      {/* Hero images */}
```

### Shadow Tokens

```css
--shadow-sm: ...;  /* Subtle shadow */
--shadow-md: ...;  /* Medium shadow */
--shadow-lg: ...;  /* Elevated shadow */
```

**Utility classes:**
```tsx
<div className="shadow-card">                    {/* Default card shadow */}
<div className="shadow-card hover:shadow-md">    {/* Hover effect */}
<div className="shadow-elevated">                {/* Prominent elevation */}
```

### Spacing Tokens

```css
--spacing-section: 5rem;      /* 80px - Desktop section padding */
--spacing-section-sm: 3.75rem; /* 60px - Mobile section padding */
--spacing-card: 1.5rem;       /* 24px - Desktop card padding */
--spacing-card-sm: 1rem;      /* 16px - Mobile card padding */
```

**Utility classes:**
```tsx
<section className="section-padding">  {/* Responsive section padding */}
<div className="card-padding">         {/* Responsive card padding */}
```

---

## 📐 Component Customization

### Buttons

Change button styles in `theme.config.ts`:

```ts
components: {
  button: {
    defaultRadius: "full",  // "sm" | "md" | "lg" | "full"
    defaultSize: "md",      // "sm" | "md" | "lg"
  }
}
```

### Cards

```ts
card: {
  defaultRadius: "2xl",   // "md" | "lg" | "xl" | "2xl"
  defaultShadow: "sm",    // "sm" | "md" | "lg"
}
```

### Navigation

```ts
navigation: {
  position: "fixed",      // "fixed" | "sticky" | "static"
  backdrop: "blur",       // "blur" | "solid" | "transparent"
}
```

---

## 🎯 Common Customizations

### Change All Rounded Corners

Edit `app/globals.css`:

```css
:root {
  --radius-lg: 0.5rem;   /* Make everything sharper */
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
}
```

### Change All Shadows

```css
:root {
  --shadow-sm: none;                /* Remove subtle shadows */
  --shadow-md: 0 10px 20px ...;     /* Stronger shadows */
}
```

### Adjust Section Spacing

```css
:root {
  --spacing-section: 8rem;     /* More spacious (128px) */
  --spacing-section-sm: 5rem;  /* Mobile (80px) */
}
```

### Change Font Sizes

Edit `theme.config.ts`:

```ts
typography: {
  hero: {
    desktop: "5rem",   // Bigger hero text
    mobile: "3rem",
  }
}
```

---

## 🌈 Pre-made Color Schemes

### Minimal Dark

```ts
colors: {
  primary: "#000000",
  primaryHover: "#1a1a1a",
}
```

### Tech Blue

```ts
colors: {
  primary: "#3B82F6",
  primaryHover: "#2563EB",
}
```

### Nature Green

```ts
colors: {
  primary: "#10B981",
  primaryHover: "#059669",
}
```

### Purple Brand

```ts
colors: {
  primary: "#8B5CF6",
  primaryHover: "#7C3AED",
}
```

---

## 📝 SEO Optimization

All SEO metadata is in `config/theme.config.ts`:

```ts
seo: {
  title: "Your Title - Your Tagline",
  description: "Compelling description under 160 chars",
  keywords: ["keyword1", "keyword2", "keyword3"],
  ogImage: "/og-image.jpg",  // 1200x630px recommended
  twitterHandle: "@yourbrand",
}
```

The landing automatically:
- ✅ Sets proper meta tags
- ✅ Includes Open Graph tags
- ✅ Adds Twitter Card metadata
- ✅ Implements structured data (JSON-LD)
- ✅ Optimizes for social sharing

---

## 🚀 Performance

The landing is optimized for:
- ⚡ **Core Web Vitals** - All green scores
- 📱 **Mobile-first** - Responsive on all devices
- 🖼️ **Image optimization** - Next.js Image component
- 🎨 **CSS variables** - No JS for theming
- 📦 **Code splitting** - Lazy loaded components

---

## 🛠️ Advanced Customization

### Add a New Color Token

1. Add to `app/globals.css`:
```css
:root {
  --color-accent-2: #YOUR_COLOR;
}
```

2. Add utility class:
```css
@layer utilities {
  .bg-accent-2 { background-color: var(--color-accent-2); }
  .text-accent-2 { color: var(--color-accent-2); }
}
```

3. Use in components:
```tsx
<div className="bg-accent-2 text-white">
```

### Custom Animation

Add to `theme.config.ts`:
```ts
animations: {
  custom: "800ms",
  easing: {
    custom: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  }
}
```

---

## 📚 File Structure

```
├── config/
│   └── theme.config.ts          # Main configuration file
├── app/
│   ├── globals.css              # Design tokens & utility classes
│   └── layout.tsx               # SEO metadata
├── components/
│   ├── hero.tsx                 # Hero section
│   ├── services.tsx             # Services section
│   ├── pricing.tsx              # Pricing section
│   └── ...                      # Other sections
└── CUSTOMIZATION.md             # This file
```

---

## 💡 Tips

1. **Start with colors** - Change brand color first, see instant results
2. **Test on mobile** - Always check responsive behavior
3. **Use design tokens** - Don't hardcode values
4. **Keep it consistent** - Use utility classes throughout
5. **Document changes** - Update theme.config.ts comments

---

## 🆘 Support

Need help? Check:
- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs)
- 🎯 [shadcn/ui](https://ui.shadcn.com)

---

**Made with ❤️ for easy customization**
