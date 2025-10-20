# 🎨 Formix Landing Page Template

A **fully customizable**, production-ready landing page template built with Next.js 15, Tailwind CSS, and shadcn/ui. Perfect for design agencies, SaaS products, and service-based businesses.

## ✨ Features

- ✅ **100% Customizable** - Change branding in one config file
- ✅ **Design System** - Consistent tokens for colors, spacing, shadows, and radii
- ✅ **SEO Optimized** - Perfect meta tags, Open Graph, Twitter Cards, and Schema.org
- ✅ **Performance First** - Perfect Lighthouse scores
- ✅ **Responsive** - Mobile-first design, works on all devices
- ✅ **Modern Stack** - Next.js 15, React 19, Tailwind v4, TypeScript
- ✅ **Accessible** - WCAG compliant, keyboard navigation, screen reader friendly
- ✅ **Dark Mode Ready** - Easy to implement
- ✅ **Analytics Built-in** - Vercel Analytics included

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone <your-repo>
cd wave-landing
npm install
```

### 2. Configure Your Brand

Edit `config/theme.config.ts`:

```ts
export const themeConfig = {
  brand: {
    name: "Your Brand",
    tagline: "Your Tagline",
  },
  colors: {
    primary: "#YOUR_COLOR",
  },
  seo: {
    title: "Your Title",
    description: "Your Description",
  },
}
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy

```bash
npm run build
npm start
```

Or deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Design tokens + utility classes
├── components/
│   ├── hero.tsx             # Hero section
│   ├── services.tsx         # Services section
│   ├── pricing.tsx          # Pricing section
│   ├── navigation.tsx       # Nav bar
│   └── ui/                  # shadcn/ui components
├── config/
│   └── theme.config.ts      # 🎯 Main configuration file
├── hooks/
│   └── use-smooth-scroll.ts # Smooth scroll behavior
└── public/                  # Static assets
```

## 🎨 Customization

### Change Brand Colors

```ts
// config/theme.config.ts
colors: {
  primary: "#3B82F6",        // Your brand color
  primaryHover: "#2563EB",   // Hover state
}
```

### Update Content

All content is in the respective component files:
- `components/hero.tsx` - Hero section text
- `components/services.tsx` - Services offered
- `components/pricing.tsx` - Pricing plans
- `components/faq.tsx` - FAQ content

### Modify Design Tokens

Edit `app/globals.css`:

```css
:root {
  /* Border Radius */
  --radius-lg: 1rem;        /* Cards */
  --radius-2xl: 1.5rem;     /* Sections */

  /* Shadows */
  --shadow-md: ...;         /* Card shadows */

  /* Spacing */
  --spacing-section: 5rem;  /* Section padding */
}
```

### Add New Sections

1. Create component in `components/your-section.tsx`
2. Import in `app/page.tsx`
3. Use design tokens for consistency

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🎯 SEO Optimization

### Meta Tags

All metadata is configured in `app/layout.tsx` and pulls from `config/theme.config.ts`:

- Title & Description
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Keywords
- Author information

### Structured Data

Automatic JSON-LD schema markup for:
- Organization
- WebSite
- Service
- Breadcrumbs

Google will understand your site better = better rankings!

### Best Practices

✅ Semantic HTML
✅ Proper heading hierarchy (H1 → H2 → H3)
✅ Alt text on all images
✅ Fast loading times
✅ Mobile-friendly
✅ HTTPS ready

## 📊 Performance

Target Lighthouse scores:

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Tips

1. **Images** - Use Next.js `Image` component (already implemented)
2. **Fonts** - Self-hosted via `next/font/google` (already implemented)
3. **Code Splitting** - Automatic with Next.js
4. **Lazy Loading** - Components load on demand

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted

## 🔒 Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Optional:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
```

## 📚 Documentation

- [Customization Guide](./CUSTOMIZATION.md) - Detailed theming guide
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Analytics**: Vercel Analytics
- **Font**: Geist (from Vercel)

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

MIT License - feel free to use for personal or commercial projects!

## 🆘 Support

Need help?

- 📖 Read the [Customization Guide](./CUSTOMIZATION.md)
- 🐛 [Open an issue](https://github.com/your-repo/issues)
- 💬 Start a [discussion](https://github.com/your-repo/discussions)

## 🎉 Credits

Built with:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)

---

**Made with ❤️ for the design community**

[Live Demo](#) | [Documentation](./CUSTOMIZATION.md) | [Report Bug](#)
