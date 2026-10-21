# Bornobazar (বর্ণবাজার) — Design System & Visual Specification

**Design Version:** 1.0.0 (Production Master)  
**Art Direction Philosophy:** Editorial Heritage E-Commerce — Restraint, Authenticity, Artisanal Warmth  
**Mandatory Visual Constraint:** **ABSOLUTELY NO GRADIENTS**. All backgrounds, cards, buttons, borders, and overlays utilize 100% solid color values.  
**Primary Typography:** Hind Siliguri (Bengali) + Outfit / Inter (English & Numerals)  

---

## 1. Design Philosophy & Aesthetic Principles

Bornobazar represents traditional culinary heritage, home recipes, sun-dried pickles, and authentic flavors from Mujibnagar, Meherpur. 
The visual identity strictly departs from generic modern AI tropes (floating glass cards, neon gradient pills, excessive border radiuses, meaningless blob illustrations).

Instead, the art direction embraces:
1. **Solid Color Authenticity:** Rich, tactile colors rooted in Bengali culinary culture (Chili Crimson, Mustard Ochre, Warm Cream, Charcoal Pepper, and Cardamom Green).
2. **Editorial Grid & Structured Whitespace:** Balanced section rhythm, crisp 1px solid hairline dividers, clear typographic hierarchy, and intentional margins.
3. **Product-First Staging:** Allowing the genuine glass jars, glistening mustard oil, and handmade gift packaging to be the visual hero.
4. **Mobile Ergonomics:** Bangladeshi consumers browse primarily on mobile devices. Navigation, sticky cart triggers, tap targets (minimum 44x44px), and checkout fields are engineered for frictionless one-handed thumb interaction.

---

## 2. Solid Color Palette (Zero Gradients)

```css
:root {
  /* ============================================================
     PRIMARY BRAND COLORS (SOLID VALUES ONLY)
     ============================================================ */
  --bb-color-primary: #C51E25;         /* Bornobazar Master Crimson Red */
  --bb-color-primary-hover: #A7171D;   /* Darkened Crimson for Hover/Active */
  --bb-color-primary-deep: #7D0E13;    /* Deep Maroon for top-bar & accents */
  --bb-color-primary-subtle: #FBECEE;  /* Light Tint for Badges & Highlights */

  /* ============================================================
     SECONDARY & ACCENT COLORS
     ============================================================ */
  --bb-color-accent-gold: #D97706;     /* Mustard / Turmeric Ochre */
  --bb-color-accent-gold-hover: #B45309;
  --bb-color-accent-green: #1E6B38;    /* Fresh Chili / Coriander Leaf Green */
  --bb-color-accent-green-light: #EBF5EF;

  /* ============================================================
     SURFACE & BACKGROUND COLORS (100% SOLID)
     ============================================================ */
  --bb-bg-canvas: #FDFBF7;             /* Natural Warm Parchment / Cream Canvas */
  --bb-bg-surface: #FFFFFF;            /* Pure Crisp White for Cards/Elevations */
  --bb-bg-surface-warm: #F6F1E8;       /* Sandy Earth Tone for Feature Sections */
  --bb-bg-surface-dark: #1E1B18;       /* Charcoal Earthen Tone for Footer */

  /* ============================================================
     TYPOGRAPHY & CONTENT COLORS
     ============================================================ */
  --bb-text-main: #1C1917;             /* Deep Charcoal Black (High Contrast) */
  --bb-text-muted: #665E57;            /* Muted Clay Gray for secondary notes */
  --bb-text-subtle: #8C827A;           /* Subtle Gray for timestamps/placeholders */
  --bb-text-inverse: #FFFFFF;          /* Pure White for buttons & dark surfaces */

  /* ============================================================
     SOLID BORDERS & DIVIDERS
     ============================================================ */
  --bb-border-hairline: #E8E1D5;       /* Warm Hairline Border */
  --bb-border-medium: #D5CAB7;         /* Form & Card Active Border */
  --bb-border-focus: #C51E25;          /* Focused Input Outline */

  /* ============================================================
     FUNCTIONAL & STATUS COLORS
     ============================================================ */
  --bb-status-success: #15803D;        /* In Stock / Order Completed */
  --bb-status-warning: #B45309;        /* Low Stock / Special Alert */
  --bb-status-error: #B91C1C;          /* Form Error / Out of Stock */
}
```

---

## 3. Typography Scale & Hierarchy

### Font Families
* **Bengali Primary:** `'Hind Siliguri'`, `'Noto Sans Bengali'`, sans-serif;
* **Numerals & English Headings:** `'Outfit'`, `'Inter'`, system-ui, sans-serif;

### Typographic Hierarchy

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| **Display / Hero H1** | `44px (2.75rem)` | `30px (1.875rem)` | `700 (Bold)` | `1.2` | `-0.02em` | Homepage Hero Headline |
| **Section Title H2** | `32px (2.0rem)` | `24px (1.5rem)` | `700 (Bold)` | `1.25` | `-0.01em` | Category & Collection Titles |
| **Subsection H3** | `22px (1.375rem)`| `18px (1.125rem)` | `600 (SemiBold)`| `1.3` | `0` | Product Cards, Feature Titles |
| **Card / Detail H4** | `17px (1.06rem)` | `15px (0.94rem)` | `600 (SemiBold)`| `1.35` | `0` | Card Headers, Modal Titles |
| **Body Large** | `17px (1.06rem)` | `16px (1.0rem)` | `400 (Regular)` | `1.6` | `0` | Introductions, Lead Paragraphs |
| **Body Regular** | `15px (0.94rem)` | `14px (0.875rem)`| `400 / 500` | `1.5` | `0` | Product Descriptions, Policy Text |
| **Caption / Meta** | `13px (0.81rem)` | `12px (0.75rem)` | `500 (Medium)` | `1.4` | `+0.01em` | Weight Tags, SKUs, Timestamps |
| **Price Big** | `22px (1.375rem)`| `18px (1.125rem)` | `700 (Bold)` | `1.0` | `0` | Primary Product Price |

---

## 4. Spacing System & Layout Container

### Container Dimensions
* **Max Layout Width:** `1280px`
* **Text / Content Max Width:** `760px`
* **Container Padding (Desktop):** `32px`
* **Container Padding (Tablet):** `24px`
* **Container Padding (Mobile):** `16px`

### 8pt Grid Scale
* `space-1`: `4px`
* `space-2`: `8px`
* `space-3`: `12px`
* `space-4`: `16px`
* `space-5`: `24px`
* `space-6`: `32px`
* `space-8`: `48px`
* `space-10`: `64px`
* `space-12`: `80px`

---

## 5. UI Primitives & Components

### A. Buttons (Solid Colors Only)
* **Primary Button (`.bb-btn-primary`):**
  * Background: `#C51E25` (Solid Crimson)
  * Text: `#FFFFFF` (Solid White)
  * Border: `1px solid #C51E25`
  * Padding: `12px 24px` (Desktop) / `14px 20px` (Mobile)
  * Border-radius: `12px` (Soft rounded modern aesthetic)
  * Hover: Background `#A7171D`, Border `#A7171D`
* **Secondary / Outline Button (`.bb-btn-secondary`):**
  * Background: `transparent` (or `#FFFFFF` on colored sections)
  * Text: `#1C1917`
  * Border: `1.5px solid #D5CAB7`
  * Hover: Background `#F6F1E8`, Border `#1C1917`
* **Gold Action / Fast Checkout Button (`.bb-btn-gold`):**
  * Background: `#D97706` (Solid Ochre Gold)
  * Text: `#FFFFFF`
  * Border: `1px solid #D97706`
  * Hover: Background `#B45309`

### B. Product Cards
* **Structure:**
  * Background: `#FFFFFF` (Solid)
  * Border: `1px solid var(--bb-border-hairline)`
  * Border-radius: `12px`
  * Padding: `14px`
  * Aspect Ratio for Image: `1:1` (Square)
  * Image Presentation: `object-fit: cover; background: #FAF7F2;`
  * Badges: Solid colored micro-badges (`Sale!` in `#C51E25`, `BSTI` in `#1E6B38`)
  * Content: Bengali product title, price with currency symbol (৳), weight indicator, and full-width "অর্ডার করুন" (Order Now) / "অপশন দেখুন" (Select Options) button.

### C. Form Controls
* **Inputs & Selects:**
  * Background: `#FFFFFF`
  * Border: `1px solid #D5CAB7`
  * Border-radius: `12px`
  * Height: `46px` (Mobile friendly touch size)
  * Padding: `0 14px`
  * Focus State: Border `1.5px solid #C51E25`, Outline `none`
  * Typography: `15px Hind Siliguri`

### D. Navigation
* **Top Announcement Bar:** Solid `#7D0E13` (Deep Maroon) with white text, displaying hotline `09617-334422` and nationwide delivery notice.
* **Main Header:** Solid `#FFFFFF` with hairline bottom border `#E8E1D5`.
* **Sticky Mobile Bottom Bar:** Quick-action bar with Home, Categories, WhatsApp Support (`01922-379382`), and Floating Cart Counter with current cart sum.

---

## 6. Accessibility & Contrast Compliance (WCAG 2.2 AA)

1. **Color Contrast Ratios:**
   * `#C51E25` (Crimson) on `#FFFFFF`: **5.1:1** (Passes AA for normal text, AAA for large text).
   * `#1C1917` (Charcoal) on `#FDFBF7` (Cream): **14.8:1** (Passes AAA).
   * `#FFFFFF` on `#C51E25` (Buttons): **5.1:1** (Passes AA).
   * `#15803D` (Green) on `#FFFFFF`: **4.8:1** (Passes AA).
2. **Keyboard Focus Indicator:** All interactive elements (`a`, `button`, `input`) feature a visible 2px solid focus ring (`outline: 2px solid #C51E25; outline-offset: 2px;`).
3. **Screen Reader Support:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), appropriate ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden`), and image `alt` text in descriptive Bengali and English.
