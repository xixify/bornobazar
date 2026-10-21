# Bornobazar (বর্ণবাজার) — WordPress & WooCommerce Implementation Plan

**Document Status:** Production Conversion Architecture  
**Target Environment:** WordPress 7.1.x / WooCommerce 11.x on LiteSpeed Web Server  
**Recommended Theme Strategy:** High-Performance Lightweight Custom Theme (`bornobazar-theme`) or Child Theme over Hello Elementor / Block Theme  
**Author:** Senior WordPress Architect & Fullstack Engineer  

---

## 1. Architectural Strategy & Plugin Governance

### A. Core Architecture Principle
The live Bornobazar environment already has WordPress 7.1.3 and WooCommerce 11.2.1 installed with LiteSpeed Cache. The previous setup relied on Elementor Canvas pages with bulky inline styles. 

To achieve an ultra-fast, premium digital agency result:
1. **Zero Layout Bloat:** Eliminate dependency on heavy visual builders for core e-commerce templates.
2. **Native WooCommerce Template Hierarchy:** Use clean PHP template files (`header.php`, `footer.php`, `front-page.php`, `woocommerce/archive-product.php`, `woocommerce/single-product.php`) that load semantic HTML and optimized CSS directly.
3. **Strict Plugin Minimization:** Avoid installing redundant plugins. The existing database already has the required products, taxonomy, and order management capabilities.

### B. Approved Production Plugin Stack
1. **WooCommerce (Active):** Core e-commerce engine (products, cart, checkout, orders, email notifications).
2. **LiteSpeed Cache (Active):** Server-level caching, CSS/JS minification, and WebP image generation.
3. **bKash / Nagad / SSLCommerz / Shurjopay Gateway (Client Selected):** For instant automated mobile financial service payments.
4. **Steadfast / Pathao Courier API (Client Selected):** Automated order tracking and consignment dispatch.
5. **SEO:** Native WordPress SEO capabilities or lightweight `Rank Math SEO` / `Yoast SEO` with schema disabled in conflict areas.
6. *Plugins to Deactivate/Remove:* Content protection right-click disabling plugins (which harm mobile UX and accessibility without providing real security).

---

## 2. Template Mapping & Component Architecture

| Approved Prototype Component | Prototype File | WordPress / WooCommerce Template File | Implementation Approach |
|---|---|---|---|
| **Site Header & Announcement Bar** | `index.html` (Top) | `header.php` | Dynamic WP Menu (`wp_nav_menu()`), dynamic mini-cart count via WC fragments, customizable hotline customizer field |
| **Homepage Layout** | `index.html` | `front-page.php` | Modular template parts: `template-parts/home-hero.php`, `template-parts/home-categories.php`, `template-parts/home-featured.php`, `template-parts/home-story.php` |
| **Product Grid Card** | `shop.html` | `woocommerce/content-product.php` | Custom hook override. Displays product thumbnail, Bengali name, price range, stock status, and AJAX Add to Cart / Select Options button |
| **Product Catalog Archive** | `shop.html` | `woocommerce/archive-product.php` | Standard WC loop with custom sidebar filters (Category, Price, Weight) and sorting dropdown |
| **Product Detail Page** | `product.html` | `woocommerce/single-product.php` + `woocommerce/single-product/add-to-cart/variable.php` | Reusable variable product template with image gallery, interactive weight pill selector, BSTI certification badge, ingredient accordion, and sticky Add-to-Cart mobile drawer |
| **Cart Page** | `cart.html` | `woocommerce/cart/cart.php` | Streamlined AJAX cart table with quantity adjusters, shipping calculator, and subtotal breakdown |
| **Checkout Page** | `checkout.html` | `woocommerce/checkout/form-checkout.php` | 1-page checkout optimized for Bangladesh: Name, Phone (01XXXXXXXXX), Address, District dropdown, and COD / bKash selection |
| **About Us Page** | `about.html` | `page-about.php` | Semantic editorial story layout with brand values, Mujibnagar heritage, and food safety standards |
| **Contact Page** | `contact.html` | `page-contact.php` | Interactive inquiry form, direct WhatsApp click-to-chat, Google Map embed for Dariapur, Mujibnagar |
| **FAQ Page** | `faq.html` | `page-faq.php` | Accessible accordion (`<details>` / `<summary>`) with built-in JSON-LD FAQ schema |
| **Site Footer** | `index.html` (Bottom) | `footer.php` | Bilingual navigation, legal links, copyright, and sticky mobile quick-action bar |

---

## 3. Product Catalog & Attribute Structure

The existing 26 products in the WooCommerce database are already organized with proper SKUs and attributes. The implementation updates their images, display names, and descriptions directly via WP-CLI or standard WC Product Importer:

### Attribute Architecture
* **Taxonomy:** `pa_weight` (Weight / ওজন)
  * Terms: `200 gm`, `250 gm`, `400 gm`, `500 gm`, `800 gm`, `1 kg`, `1.2 kg`, `1.5 kg`
* **Categories (`product_cat`):**
  * `আচার (Pickles)` (Slug: `achar`)
  * `স্পেশাল কম্বো (Special Combos)` (Slug: `combo`)
  * `শুটকি ও ভর্তা (Shutki & Vorta)` (Slug: `shutki-vorta`)
  * `মিষ্টি ও স্প্রেড (Sweets & Spreads)` (Slug: `sweet`)

---

## 4. Bangladesh E-Commerce Specific Functionalities

### A. Mobile-Optimized 1-Page Checkout
* Standard WooCommerce checkout asks for Country, Postal Code, State, Company, etc., which frustrates Bangladeshi buyers.
* *Customization:* Simplify checkout fields down to:
  1. Full Name (পূর্ণ নাম)
  2. Mobile Number (সচল মোবাইল নম্বর — 11-digit regex validation `^01[3-9]\d{8}$`)
  3. Delivery Area (জেলা নির্বাচন: ঢাকা সিটি / ঢাকার বাইরে)
  4. Delivery Address (বিস্তারিত ঠিকানা — বাসা, রোড, এলাকা)
  5. Order Notes (প্রয়োজনে অতিরিক্ত তথ্য)

### B. Payment Methods Configuration
1. **Cash on Delivery (ক্যাশ অন ডেলিভারি):** Enabled nationwide. Default payment option.
2. **bKash / Nagad Manual or Merchant Gateway:** Display merchant bKash number with instruction to enter Transaction ID (TrxID) or automated gateway popup.

### C. Shipping Rates Calculation
* **ঢাকা সিটির ভেতরে (Inside Dhaka):** ৳৭০ – ৳৮০ (Delivery within 24–48 hours).
* **ঢাকা সিটির বাইরে (Outside Dhaka):** ৳১৩০ – ৳১৫০ (Delivery within 48–72 hours).
* Conditional free shipping for orders exceeding ৳২,০০০ (subject to client approval).

---

## 5. Performance, Accessibility & Security Optimization

### Performance
* **Zero CSS Framework Bloat:** Custom stylesheet under 40KB minified, replacing 500KB+ of Elementor stylesheet rules.
* **Responsive Image Serving:** Utilizing `<picture>` tags with WebP format and explicit `width` and `height` attributes to eliminate Cumulative Layout Shift (CLS).
* **Font Optimization:** Self-host or load Google Fonts (`Hind Siliguri` + `Outfit`) with `font-display: swap` and preconnect directives.

### Accessibility (WCAG 2.2 AA)
* Visual focus ring (`2px solid #C51E25`) for all tab navigation.
* Native HTML form elements with clear `<label for="...">` associations.
* Proper ARIA live regions for cart quantity adjustments and toast alerts.

### Security & Deployment Safeguards
* **Staging Verification:** All template modifications tested locally and on staging before any live deployment.
* **Database Backup:** Complete `mysqldump` and files backup prior to activating new theme.
* **Hardening:** Disable XML-RPC, protect `wp-config.php`, implement Cloudflare WAF, and enforce 2FA for administrator accounts.
