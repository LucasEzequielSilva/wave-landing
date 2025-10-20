# 🎨 DESIGN SYSTEM - Complete Reference Guide

This document outlines the complete design system used in this template. Use this as a reference for maintaining consistency or applying this system to other projects.

---

## 📋 Table of Contents

1. [Color System](#color-system)
2. [Typography Hierarchy](#typography-hierarchy)
3. [Spacing System](#spacing-system)
4. [Component Patterns](#component-patterns)
5. [Section Structure](#section-structure)
6. [Responsive Breakpoints](#responsive-breakpoints)

---

## 🎨 Color System - Wave Studio Blue Theme

### **DUAL ACCENT COLOR PALETTE**

This template uses a **70% Blue / 30% Orange** strategy:

```css
/* PRIMARY - Electric Blue (70% of accents) */
--primary: #2563EB          /* Main CTAs, buttons, interactive */
--primary-hover: #1D4ED8    /* Hover states */

/* SECONDARY - Orange (30% of accents) */
--secondary: #FF4405        /* Visual accents, dots, highlights */

/* NAVY - Dark Contrast */
--navy: #1E293B            /* Dark sections, footer */
--navy-light: #334155      /* Lighter navy shades */

/* Base Colors */
--background: White/off-white
--foreground: Black/near-black

/* Neutral Grays */
--gray-50: rgb(249, 250, 251)
--gray-100: rgb(243, 244, 246)
--gray-200: rgb(229, 231, 235)
--gray-300: rgb(209, 213, 219)
--gray-400: rgb(156, 163, 175)
--gray-600: rgb(75, 85, 99)
--gray-700: rgb(55, 65, 81)
--gray-800: rgb(31, 41, 55)
--gray-900: rgb(17, 24, 39)
```

### **Color Usage Guide**

#### **BLUE - Interactive Elements (70%)**

| Element | Class | Example |
|---------|-------|---------|
| Primary CTA Button | `bg-[#2563EB] hover:bg-[#2563EB]/90` | "Get Started", "View Pricing" |
| Section Badges | `bg-[#2563EB] text-white` | "// Services //" |
| Link Hovers | `hover:text-[#2563EB]` | Navigation links |
| Active States | `text-[#2563EB]` | Selected menu item |
| Toggle Switches | `bg-[#2563EB]` | ON state |
| Icon Accents | `text-[#2563EB]` | FAQ icons |
| Focus States | `outline: 2px solid #2563EB` | Keyboard focus |

#### **ORANGE - Visual Accents (30%)**

| Element | Class | Example |
|---------|-------|---------|
| Badge Accent Dots | `bg-[#FF4405]` | Dots inside blue badges |
| Indicator Dots | `bg-[#FF4405]` | Carousel/benefit dots |
| Star Ratings | `fill-[#FF4405]` | Reviews |
| Small Highlights | `bg-[#FF4405]` | Attention grabbers |

#### **NAVY - Premium Contrast**

| Element | Class | Example |
|---------|-------|---------|
| CTA Section | `bg-[#1E293B]` | Final call-to-action |
| Footer | `bg-[#1E293B]` | Footer background |
| Dark Cards | `bg-[#1E293B]` | High-contrast cards |

### **Color Strategy:**
- ✅ Use **BLUE** for interactive/clickable elements
- ✅ Use **ORANGE** for visual accents and attention
- ✅ Use **NAVY** for premium dark sections
- ❌ Never mix random colors
- ❌ Don't use orange for CTAs (use blue)

---

## 📝 Typography Hierarchy

### **Type Scale**

```tsx
// H1 - Hero/Main Titles
className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.1]"
// Example: "WORLD-CLASS DESIGN PARTNER"

// H2 - Section Titles
className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
// Example: "HOW WE GROW YOUR BUSINESS"

// H3 - Card Titles
className="text-2xl md:text-3xl font-bold"
// Example: "Brand Identity", "Fast Turnarounds"

// H4 - Small Headings
className="text-xl md:text-2xl font-bold"
// Example: Subsection titles

// Body Large (Descriptions)
className="text-lg md:text-xl text-muted-foreground"
// Example: Section descriptions in right column

// Body Regular
className="text-base text-foreground"
// Example: Card descriptions

// Body Small
className="text-sm font-medium text-muted-foreground"
// Example: Meta information

// Labels/Tags
className="text-sm font-semibold"
// Example: Badge labels, button text
```

### **Typography Rules**

1. **Section titles (H2)** → ALWAYS uppercase + extrabold
2. **Card titles (H3)** → Normal case + bold
3. **Body text** → Use `text-muted-foreground` for secondary text
4. **Consistent line height** → `leading-relaxed` for body text
5. **Responsive sizing** → Always use mobile-first responsive classes

---

## 📏 Spacing System

### **Section Spacing**

```tsx
// ALL sections use this pattern:
className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border"

// Container
className="container mx-auto max-w-7xl"
```

**Breakdown:**
- `py-20` → 80px vertical padding (mobile)
- `md:py-32` → 128px vertical padding (desktop)
- `px-4 sm:px-6 lg:px-8` → Responsive horizontal padding
- `border-b border-border` → Bottom border (except last section)
- `max-w-7xl` → 1280px max width

### **Internal Spacing**

```tsx
// Section header margin
className="mb-16"

// Section header grid
className="grid lg:grid-cols-2 gap-12 items-start"

// Card grids
className="grid md:grid-cols-3 gap-6"  // Benefits (3 columns)
className="grid md:grid-cols-2 gap-8"  // Pricing (2 columns)

// Card padding
className="p-6 md:p-8"      // Small cards
className="p-8 md:p-12"     // Large cards

// Internal spacing
className="space-y-4"       // Small elements
className="space-y-6"       // Medium elements
className="space-y-8"       // Large sections
```

### **Spacing Scale**

```css
--spacing-section: 5rem      /* 80px - py-20 */
--spacing-section-sm: 3.75rem /* 60px - mobile */
--spacing-card: 1.5rem       /* 24px - p-6 */
--spacing-gap: 1.5rem        /* 24px - gap-6 */
--spacing-gap-lg: 2rem       /* 32px - gap-8 */
--spacing-gap-xl: 3rem       /* 48px - gap-12 */
```

---

## 🧩 Component Patterns

### **1. Section Badge**

```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-sm font-medium mb-6">
  <span className="w-2 h-2 rounded-full bg-[#FF4405]" />
  <span>// Section Name //</span>
</div>
```

**Usage:** ALL section headers
**Colors:** Blue background + orange accent dot
**Variations:** NONE - keep consistent

---

### **2. Icon Container**

```tsx
<div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
  <Icon className="w-6 h-6 text-foreground" />
</div>
```

**Rules:**
- ✅ ALWAYS use `rounded-xl` (NOT rounded-full)
- ✅ ALWAYS use `bg-gray-100` (NOT bg-gray-200)
- ✅ Icon size: `w-6 h-6`
- ✅ Container size: `w-12 h-12`

---

### **3. Cards**

```tsx
// Light cards (Benefits, Testimonials)
<div className="bg-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow">
  {/* content */}
</div>

// White cards with border
<div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
  {/* content */}
</div>

// Dark cards (Pricing highlighted)
<div className="bg-gray-900 text-white rounded-2xl p-8">
  {/* content */}
</div>
```

**Rules:**
- Use `rounded-2xl` or `rounded-3xl` (NEVER rounded-lg)
- Consistent padding: `p-6` or `p-8 md:p-12`
- Hover states: `hover:shadow-sm` or `hover:y-[-4px]`

---

### **4. Indicator Dots**

```tsx
// Active dots (all orange)
<div className="flex gap-1.5">
  <div className="w-2 h-2 rounded-full bg-[#FF4405]" />
  <div className="w-2 h-2 rounded-full bg-[#FF4405]" />
  <div className="w-2 h-2 rounded-full bg-[#FF4405]" />
</div>

// Mixed active/inactive
<div className="flex gap-1.5">
  <div className="w-2 h-2 rounded-full bg-[#FF4405]" />
  <div className="w-2 h-2 rounded-full bg-gray-300" />
  <div className="w-2 h-2 rounded-full bg-gray-300" />
</div>
```

**Rules:**
- Active dots: `bg-[#FF4405]` ONLY
- Inactive dots: `bg-gray-300`
- Size: `w-2 h-2`
- Gap: `gap-1.5`

---

### **5. Primary CTA Button**

```tsx
<Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-full px-7 md:px-8 h-12 md:h-14 text-base font-medium shadow-lg">
  Button Text
  <Icon className="ml-2 h-5 w-5" />
</Button>
```

**Anatomy:**
- Background: `bg-[#2563EB]` (Electric Blue)
- Hover: `hover:bg-[#2563EB]/90`
- Shape: `rounded-full`
- Padding: `px-7 md:px-8`
- Height: `h-12 md:h-14`
- Text: `text-base font-medium`
- Shadow: `shadow-lg`
- Icon: `ml-2 h-5 w-5`

---

### **6. Secondary CTA Button**

```tsx
<Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-7 md:px-8 h-12 md:h-14 text-base font-medium">
  Button Text
  <Icon className="ml-2 h-5 w-5" />
</Button>
```

**Anatomy:**
- Background: `bg-foreground` (black)
- Hover: `hover:bg-foreground/90`
- Text: `text-background` (white)
- Same sizing as primary

---

### **7. Star Rating**

```tsx
<svg className="w-4 h-4 fill-[#FF4405]" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
```

**Rules:**
- Color: `fill-[#FF4405]` (Orange - visual accent, NOT blue)
- Size: `w-4 h-4`
- Why orange: Stars are visual indicators, not interactive elements

---

### **8. Toggle Switch**

```tsx
<button
  onClick={handleToggle}
  className={`relative w-12 h-6 rounded-full transition-colors ${
    isEnabled ? "bg-[#2563EB]" : "bg-gray-400"
  }`}
>
  <div
    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
      isEnabled ? "translate-x-7" : "translate-x-1"
    }`}
  />
</button>
```

**Rules:**
- Active state: `bg-[#2563EB]` (Blue - interactive element)
- Inactive state: `bg-gray-400`
- Size: `w-12 h-6` (container), `w-4 h-4` (knob)
- Why blue: Toggles are interactive controls

---

## 📐 Section Structure

### **Standard Section Header Pattern**

```tsx
{/* Header Section - Two Column Grid */}
<div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  {/* Left side - Badge and Title */}
  <div>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB] text-white text-sm font-medium mb-6">
      <span className="w-2 h-2 rounded-full bg-[#FF4405]" />
      <span>// Section Name //</span>
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase">
      Main Title
      <br />
      <span className="text-muted-foreground">Secondary Title</span>
    </h2>
  </div>

  {/* Right side - Description */}
  <div className="flex items-end justify-end h-full">
    <p className="text-lg text-muted-foreground max-w-md text-right">
      Description text explaining the section value proposition.
    </p>
  </div>
</div>
```

**Apply this pattern to ALL sections:**
- ✅ Services
- ✅ Benefits
- ✅ Pricing
- ✅ Projects
- ✅ Clients
- ✅ FAQ
- ✅ Contact

---

## 📱 Responsive Breakpoints

```css
/* Tailwind default breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large screens */
```

### **Common Responsive Patterns**

```tsx
// Container padding
className="px-4 sm:px-6 lg:px-8"

// Section padding
className="py-20 md:py-32"

// Typography
className="text-4xl md:text-5xl lg:text-6xl"

// Grid columns
className="grid md:grid-cols-2 lg:grid-cols-3"

// Button sizing
className="px-7 md:px-8 h-12 md:h-14"

// Spacing
className="gap-4 md:gap-6 lg:gap-8"
```

---

## ✅ Design System Checklist

Use this checklist when creating new sections or auditing existing ones:

### **Colors**
- [ ] Only uses `#FF4405` for accent color
- [ ] No random colors (blue, green, purple, etc.)
- [ ] Grays are from defined palette
- [ ] Buttons use correct hover states

### **Typography**
- [ ] H2 section titles are uppercase + extrabold + responsive
- [ ] H3 card titles are normal case + bold
- [ ] Body text uses `text-muted-foreground` where appropriate
- [ ] Consistent font weights (extrabold, bold, medium, normal)

### **Spacing**
- [ ] Section uses `py-20 md:py-32`
- [ ] Container has `px-4 sm:px-6 lg:px-8`
- [ ] Section has `border-b border-border`
- [ ] Header grid is `grid lg:grid-cols-2 gap-12 items-start mb-16`
- [ ] Consistent internal spacing (gap-6, gap-8, gap-12)

### **Components**
- [ ] Badge follows exact pattern
- [ ] Icon containers use `rounded-xl` (NOT rounded-full)
- [ ] Cards use `rounded-2xl` or `rounded-3xl`
- [ ] Buttons are `rounded-full`
- [ ] Dots use correct size and color
- [ ] Star ratings are orange (`fill-[#FF4405]`)

### **Structure**
- [ ] Section header uses two-column grid
- [ ] Left column has badge + title
- [ ] Right column has description aligned right
- [ ] Content follows consistent grid patterns
- [ ] Mobile responsive with correct breakpoints

### **Animation**
- [ ] Uses Framer Motion for consistency
- [ ] `initial={{ opacity: 0, y: 40 }}`
- [ ] `whileInView={{ opacity: 1, y: 0 }}`
- [ ] `viewport={{ once: true, margin: "-100px" }}`
- [ ] Staggered delays for grid items

---

## 🚀 Quick Start for New Projects

1. **Copy `globals.css`** → Contains all design tokens and utilities
2. **Copy component patterns** → Use exact patterns from this guide
3. **Use color palette** → ONLY `#FF4405` for accents
4. **Follow typography hierarchy** → H2 uppercase, H3 normal case
5. **Apply section structure** → Two-column header pattern
6. **Maintain spacing rhythm** → py-20 md:py-32, gap-6/8/12

---

## 📦 Key Files Reference

```
app/
  └── globals.css           # Design system tokens + utilities

components/
  ├── hero.tsx             # H1 typography reference
  ├── services.tsx         # Section pattern reference
  ├── benefits.tsx         # Card grid reference
  ├── pricing.tsx          # Toggle + highlighted card reference
  ├── projects.tsx         # Hover effects reference
  ├── clients.tsx          # Testimonials reference
  ├── faq.tsx              # Accordion pattern reference
  └── navigation.tsx       # Button patterns reference
```

---

## 💡 Pro Tips

1. **Consistency is key** → Copy-paste patterns rather than recreating
2. **Only one accent color** → Resist temptation to add more colors
3. **Typography contrast** → Use uppercase for H2, normal case for H3
4. **Icon containers** → Always rounded-xl, never rounded-full
5. **Responsive first** → Always test mobile → tablet → desktop
6. **Spacing rhythm** → Stick to 4px increments (gap-4, gap-6, gap-8, gap-12)
7. **Section borders** → All sections except last have `border-b`
8. **Max width** → Always use `max-w-7xl` for containers

---

## 🎯 Common Mistakes to Avoid

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| `bg-red-500` | `bg-[#2563EB]` (for CTAs) or `bg-[#FF4405]` (for dots) |
| `rounded-full` (icon container) | `rounded-xl` |
| `text-4xl` (H2) | `text-4xl md:text-5xl lg:text-6xl` |
| `font-bold` (H2) | `font-extrabold` |
| `py-16` (section) | `py-20 md:py-32` |
| `gap-4` (section header) | `gap-12` |
| `bg-gray-200` (icon bg) | `bg-gray-100` |
| `fill-yellow-400` (stars) | `fill-[#FF4405]` |
| `bg-foreground` (badge) | `bg-[#2563EB]` |
| `bg-gray-900` (footer) | `bg-[#1E293B]` |

---

## 📞 Support

If you need clarification on any pattern:
1. Check this document first
2. Look at reference component files
3. Review `globals.css` for available utilities
4. Check existing sections for similar patterns

---

**Last Updated:** 2025-10-20
**Design System Version:** 1.0
**Template:** Formix Landing Page
