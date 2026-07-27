# Interstellar Energy — Full Design & Content Handoff

Use this file to rebuild a website that looks and feels like this one.  
Source project: `ecom-interstellar-website` (Next.js 16 + React 19 + Tailwind CSS v4 + shadcn/ui New York).

---

## 1. Brand identity

| Field | Value |
|-------|-------|
| Brand name | Interstellar Energy / INTERSTELLAR ENERGY PVT. LTD. |
| Tagline | Solar Powering Life |
| Meta description | Premium solar energy solutions for residential and commercial applications |
| Footer blurb | Pioneering sustainable energy solutions for a brighter, cleaner future. |
| Copyright | © 2025 Interstellar Energy Pvt. Ltd. |
| Crafted by | SHIVASWARAJYA — https://shivaswarajya.com |

### Contact

| Type | Value |
|------|-------|
| Phone (main) | +91 7058703796 |
| Phone (EMS) | +91 94941 08181 |
| WhatsApp (Mobile Auto) | https://wa.me/916232362626 / Call 6232362626 |
| Email (default) | energy.interstellar@gmail.com |
| Email (EMS) | ems@Interstellarenergy.in |
| Address | 2091/1, Old Vikram Tiles, Old Pune Bangalore Road, Ruikar Colony, Kolhapur, Maharashtra - 416005 |

### Logos (`public/logos/`)

| Path | Use |
|------|-----|
| `/logos/interstellar-logo-2.png` | **Primary** — header (`h-12`) & footer (`h-10`) |
| `/logos/logo.png` | Favicon / apple icon |
| `/logos/interstellar-logo.png` | Alternate logo |
| `/logos/apple-icon.png` | Apple touch icon |
| `/logos/icon-light-32x32.png` / `icon-dark-32x32.png` | Small icons |

---

## 2. Tech stack (to match look & structure)

| Item | Value |
|------|-------|
| Framework | Next.js 16 App Router, React 19 |
| Styling | Tailwind CSS v4 (CSS-first tokens, no `tailwind.config`) |
| UI kit | shadcn/ui **New York**, baseColor `neutral`, CSS variables |
| Icons | lucide-react |
| Motion | framer-motion |
| Fonts | next/font Google: Inter + Playfair Display |
| Export | Static (`output: 'export'`) |
| Theme mode | Light only in practice (dark tokens exist but unused) |

---

## 3. Color palette (canonical)

**Active file:** `app/globals.css`  
Ignore `styles/globals.css` (leftover default neutrals).

### Light theme (use these)

| Token | OKLCH | Approx HEX | Role |
|-------|-------|------------|------|
| `--background` | `oklch(0.985 0.005 85)` | `#fcfaf6` | Warm cream page background |
| `--foreground` | `oklch(0.25 0.01 85)` | `#24211c` | Body text |
| `--card` | `oklch(1 0 0)` | `#ffffff` | Cards |
| `--card-foreground` | `oklch(0.25 0.01 85)` | `#24211c` | Card text |
| `--primary` | `oklch(0.58 0.18 45)` | `#cb4b00` | Burnt orange / terracotta CTA |
| `--primary-foreground` | `oklch(1 0 0)` | `#ffffff` | Text on primary |
| `--secondary` | `oklch(0.72 0.15 85)` | `#cf9b00` | Gold / amber |
| `--secondary-foreground` | `oklch(0.25 0.01 85)` | `#24211c` | Text on secondary |
| `--muted` | `oklch(0.95 0.01 85)` | `#f1eee7` | Soft warm gray surfaces |
| `--muted-foreground` | `oklch(0.5 0.01 85)` | `#66635d` | Secondary / helper text |
| `--accent` | same as primary | `#cb4b00` | Accent = primary |
| `--destructive` | `oklch(0.5 0.2 25)` | `#bb061e` | Errors |
| `--border` / `--input` | `oklch(0.92 0.005 85)` | `#e6e4e1` | Borders / inputs |
| `--ring` | same as primary | `#cb4b00` | Focus rings |
| `--chart-1` | primary | `#cb4b00` | Charts |
| `--chart-2` | secondary | `#cf9b00` | Charts |
| `--chart-3` | `oklch(0.45 0.12 25)` | `#8c3432` | Brick |
| `--chart-4` | `oklch(0.88 0.08 85)` | `#f0d49b` | Light gold |
| `--chart-5` | `oklch(0.35 0.08 45)` | `#5c2b13` | Dark brown |

### Dark theme (defined, not used in layout)

| Token | OKLCH | Approx HEX |
|-------|-------|------------|
| `--background` | `oklch(0.18 0.01 85)` | `#14110d` |
| `--foreground` | `oklch(0.95 0.005 85)` | near white |
| `--primary` | `oklch(0.65 0.18 45)` | `#e46212` |

### Extra colors used in components (hardcoded)

| Value | Where |
|-------|-------|
| `zinc-900`, `zinc-800/80` | EMS hero overlay, EMS testimonials |
| `white`, `white/90`, `white/40` | EMS hero text & outline buttons |
| `from-background to-muted/30` | Home hero / lead form gradients |
| `from-zinc-900/95 via-zinc-900/80 to-transparent` | EMS hero veil |
| `bg-primary/10`, `bg-primary/5` | Pills, icon wells, blur orbs |
| `border-primary` (2px) | EMS feature cards |
| Open FAQ | `bg-primary` + white text |

### CSS copy-paste (light tokens)

```css
:root {
  --background: oklch(0.985 0.005 85);
  --foreground: oklch(0.25 0.01 85);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.25 0.01 85);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.25 0.01 85);
  --primary: oklch(0.58 0.18 45);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.72 0.15 85);
  --secondary-foreground: oklch(0.25 0.01 85);
  --muted: oklch(0.95 0.01 85);
  --muted-foreground: oklch(0.5 0.01 85);
  --accent: oklch(0.58 0.18 45);
  --accent-foreground: oklch(1 0 0);
  --destructive: oklch(0.5 0.2 25);
  --destructive-foreground: oklch(1 0 0);
  --border: oklch(0.92 0.005 85);
  --input: oklch(0.92 0.005 85);
  --ring: oklch(0.58 0.18 45);
  --chart-1: oklch(0.58 0.18 45);
  --chart-2: oklch(0.72 0.15 85);
  --chart-3: oklch(0.45 0.12 25);
  --chart-4: oklch(0.88 0.08 85);
  --chart-5: oklch(0.35 0.08 45);
  --radius: 0.5rem;
}
```

---

## 4. Radius

| Token | Value |
|-------|-------|
| `--radius` | `0.5rem` (8px) |
| `--radius-sm` | 4px |
| `--radius-md` | 6px |
| `--radius-lg` | 8px |
| `--radius-xl` | 12px |

**Usage habits:** cards `rounded-xl`, hero images `rounded-2xl`, eyebrows/pills `rounded-full`, buttons `rounded-md`.

---

## 5. Typography

### Fonts

| Role | Font | CSS variable | Load |
|------|------|--------------|------|
| Body / UI | **Inter** | `--font-sans` | `next/font/google` |
| Display / headlines | **Playfair Display** | `--font-serif` | `next/font/google` |

Body classes: `font-sans antialiased`  
(Do **not** use Geist even if `@theme` mentions it — Inter/Playfair override at runtime.)

### Type scale patterns

| Role | Classes | Font |
|------|---------|------|
| Home hero H1 | `font-serif text-5xl lg:text-7xl` | Playfair |
| Section H2 (home) | `font-serif text-4xl lg:text-5xl` | Playfair |
| Category titles | `font-serif text-2xl` | Playfair |
| Stats numbers | `font-serif text-4xl lg:text-5xl text-primary` | Playfair |
| EMS / utility headings | `font-bold tracking-tight text-3xl…5xl` | Inter |
| Body | `text-base` / `text-lg` + `text-muted-foreground` + `leading-relaxed` | Inter |
| Eyebrow / label | `text-xs\|sm font-semibold uppercase tracking-widest` or `tracking-[0.2em]` + `text-primary` | Inter |
| Product title | `font-semibold text-lg` | Inter |

---

## 6. Layout & spacing

| Pattern | Value |
|---------|-------|
| Page container | `container mx-auto px-4 lg:px-8` |
| Header height | `h-20` |
| Sticky header | `sticky top-0 z-50` + `bg-background/95 backdrop-blur` + `supports-[backdrop-filter]:bg-background/60` |
| Section padding | `py-16`, `py-20`, `lg:py-32` (EMS often `py-16 md:py-24`) |
| Grids | Hero 2-col; products 4-col; categories 3-col; contact 2/3; EMS services 4-col |
| Gaps | `gap-4`–`gap-8` |
| Max widths | `max-w-xl` … `max-w-7xl` (section subcopy often `max-w-2xl` centered) |
| EMS card overlap | `-mt-24 md:-mt-40` over hero |

---

## 7. Visual patterns (how it “looks”)

### Overall look direction

- Warm cream background (`#fcfaf6`), not pure white
- Burnt orange primary CTAs (`#cb4b00`) + gold secondary (`#cf9b00`)
- Soft borders, light shadows — not heavy glassmorphism
- Serif headlines (Playfair) + clean sans body (Inter)
- Primary-tinted pill eyebrows and icon wells
- Image hover zoom on product/category cards
- Home: light, product-forward marketing
- EMS: darker photographic hero + overlapping bordered feature cards

### Header

- Sticky frosted bar
- Logo left, nav center (`gap-8`), search + cart icons right
- Active link: `text-primary`
- Mobile: sheet-like dropdown

**Nav links:** Products `/` · Solar Installations `/solar-installations` · EMS `/ems` · About `/about` · Contact `/contact`

### Footer

- 5 columns: Brand · Products · Solutions · Company · Contact
- `bg-card border-t`

### Buttons (shadcn CVA)

| Variant | Look |
|---------|------|
| default | `bg-primary text-primary-foreground hover:bg-primary/90` |
| outline | Border + background (transparent on dark heroes) |
| ghost | Hover accent |
| secondary | Gold fill |
| link / destructive | Standard |

Sizes: default `h-9`, sm `h-8`, lg `h-10 px-6`, icon `size-9`  
`rounded-md`, `text-sm font-medium`, focus `ring-[3px]`

### Cards

| Type | Pattern |
|------|---------|
| Base | `rounded-xl border py-6 shadow-sm bg-card` |
| Product | Square image, hover scale 105% / 500ms, badge pill top-left primary |
| Category | 4:3 image, `p-8`, ghost “Learn More” + arrow slide |
| EMS feature | Centered, `border-2 border-primary`, icon in `bg-primary/10` rounded-lg |
| Contact tile | Icon circle `bg-primary/10`, `p-6`, bordered |
| Home testimonial | `rounded-xl border`, quote `border-l-4 border-primary bg-primary/5` |
| EMS testimonial | Dark `zinc-800/80`, stars filled primary |

### Hero patterns

1. **Home:** Light gradient (`from-background to-muted/30`), 2-column (copy + inset `rounded-2xl shadow-2xl` image), primary pill eyebrow  
2. **EMS:** Full-bleed dark photo (`opacity-40`), left gradient veil, `min-h-[85vh]`, left decorative primary dots/line, outline “Watch Video” with play orb

### Section chrome (EMS)

- Eyebrow: primary hairlines + uppercase label
- Faint background photos at ~6–15% opacity (circuit / transmission)
- Icon wells: `h-12 w-12` rounded-lg, primary or muted

### Forms (lead / electrician)

- Gradient page bg + grid pattern overlay
- Primary→transparent hairlines
- Trust icon row
- Soft blur orbs `bg-primary/5`

---

## 8. Motion / animation

| Pattern | Spec |
|---------|------|
| Framer fade-up | opacity `0→1`, y `24→0`, stagger `0.12`, delayChildren `0.15` |
| whileInView | once; margin `-40px` to `-80px` |
| Easing | `[0.22, 1, 0.36, 1]` |
| Slide L/R | About ±56px; Why Choose ±36px |
| Scale reveal | Services cards `0.96→1` |
| Image hover | `group-hover:scale-105` / `1.02`, `duration-300|500` |
| Shadow hover | `hover:shadow-xl`, `transition-all duration-300` |
| Button micro | `hover:scale-[1.02]` |
| Carousel autoplay | 5500ms (About inverters) |
| Dot indicators | Active `bg-primary w-6`; inactive muted |
| Blink | `@keyframes blink` 1.5s (Sun icon on installations) |
| Radix | `animate-in` / fade / zoom for dialogs |

Richest motion is on `/ems`. Home is mostly CSS hover transitions.

---

## 9. Page map & section structure

| Route | Sections / content |
|-------|--------------------|
| `/` | Header → Hero → Stats → SmartAd (Mobile Auto) → FeaturedProducts → ProductCategories → About (inverter carousel) → CleaningSystemCaseStudies → HomeTestimonials → Contact → Footer |
| `/ems` | Header → EMSHero → CardsSection → AboutSection → OurServicesSection → WhyChooseSection → TestimonialsSection → FAQSection → Footer |
| `/solar-installations` | Filterable projects table + capacity stats |
| `/about` | Short about copy |
| `/contact` | Contact section |
| `/electrician-application` | LeadForm |
| `/electrician-application-stage2` | LeadFormStage2 |
| `/electrician-application-progressive` | ProgressiveLeadForm |
| `/privacy/interstellar-ems` | Privacy policy |
| `/delete-account/interstellar-ems` | Account deletion |
| `/products`, `/solutions`, `/our-services` | Placeholder stubs |
| `not-found` | 404 + Return to Home |

---

## 10. Content copy (use / adapt)

### Home

| Element | Copy |
|---------|------|
| Eyebrow | Innovation in Solar Energy |
| H1 | Power your future with **sustainable energy** |
| Sub | Transform your space with premium solar solutions designed for efficiency, reliability, and a cleaner tomorrow. Experience energy independence today. |
| CTA | Explore Products |
| Stats | 15K+ Installations · 99.8% Uptime · 5 Years Warranty · ₹50Cr+ Savings Generated |
| Smart Ad eyebrow | Smart Farm Automation |
| Smart Ad H2 | Mobile Auto for smarter motor control |
| Smart Ad CTAs | WhatsApp Inquiry · Call 6 2323 6 2626 |
| Products H2 | Premium Solar Solutions |
| Products sub | Discover our curated collection of high-performance solar products engineered for excellence |
| Categories H2 | Solutions for Every Need |
| Category CTA | Learn More |
| Testimonials H2 | Testimonials / Trusted by Homeowners and Businesses |
| Contact H2 | Get in Touch |

**Featured products**

- SolarMax Pro 550W — badge: Best Seller
- PowerGrid Hybrid 10kW — badge: Premium
- EnergyVault 15kWh — badge: Popular
- Residential Complete Kit

**Categories:** Residential Systems · Commercial Solutions · Industrial Power

**About carousel**

- “500W Micro Inverter & Intelligent EMS”
- “Robust Design & High-Capacity Systems”
- Datasheet CTAs: “2-IN-1 VERSION…” / “4-IN-1 VERSION…”

### EMS

| Section | Copy |
|---------|------|
| Hero H1 | Energy Monitoring & Management System |
| Hero sub | We bring the future of energy to your doorstep with cutting-edge, efficient, & eco-friendly power solutions. |
| Hero CTA | Watch Video |
| Cards | Significant Cost Reduction · Improve Equipment Health · Support Sustainability & Compliance |
| About eyebrow | About Our INTERSTELLAR ENERGY PVT. LTD. |
| About H2 | Smart Energy Solutions for a Sustainable World |
| About ribbon | 25 Years of Experience |
| About CTAs | Learn More · Give us a call |
| Services H1 | Energy Services Tailored for You |
| Services | Real-time Tracking · Smart Alerts · Data Analysis · Remote Access / Cloud |
| Why Choose H2 | Powering the Future with Innovation and Reliability |
| Testimonials H2 | What Our Customers Say |
| FAQ H2 | Frequently Asked Questions |

### Other

- About page H1: About Interstellar Energy  
- Installations: Solar Installations / “Trusted by industries across the region.”  
- Electrician form: Electrician Application Form + Secure & Confidential / Quick Response / Growing Team  
- 404: Page Not Found / “drifted into space” / Return to Home  

---

## 11. Assets inventory (`public/`)

### Hero / products / categories

```
/hero/modern-solar-panels-on-luxury-home-rooftop-at-suns.jpg
/products/premium-monocrystalline-solar-panel-close-up.jpg
/products/modern-solar-inverter-wall-mounted.jpg
/products/sleek-battery-storage-system.jpg
/products/complete-solar-system-installation.jpg
/categories/luxury-home-with-rooftop-solar-panels.jpg
/categories/commercial-building-with-solar-installation.jpg
/categories/industrial-solar-farm-installation.jpg
```

### Ads / inverters

```
/advertisement/mobileAuto.jpg
/Inverter ads/DSC_SINGLE CLEAR _01_500_f.png
/Inverter ads/m_i.jpg
/Inverter ads/DSC_500 BACK SIDE.png
/Inverter ads/micoro inverter_2kw.jpg
/Inverter ads/IEM-1000-.pdf
/Inverter ads/IEM1600&2000 Datasheet.pdf
```

### EMS atmospherics

```
/images/circuit/bg_circuit-2.jpg
/images/circuit/bg_circuit-board.svg
/images/transmission_lines_half.jpg
/images/transmission_lines.jpg
/images/electricity-transmission2.jpg
/images/meterinstallation.png
/images/copperwire.png
/images/notfound.png
/meters/EMS_.png
/gif/arrow_white.gif
/gif/arrow_orange.gif
```

### Case studies (`/cleaningSystemCaseStudy/`)

```
kdadhav.jpeg
uniquehero.jpeg
shreeIndustries.jpg
avisionsIndustries.jpg
solarkrishna.jpg
youvarajhotel.jpg
```

### Videos (YouTube embeds)

| Place | ID |
|-------|-----|
| EMS hero | `3zUpYmlZU8E` |
| About EMS | `EnXU_JWvFZQ` |
| Home testimonials | `jCWYcxjJYag`, `QOV4x01EEbI` |

---

## 12. Key component files (reference)

| Piece | Path |
|-------|------|
| Tokens | `app/globals.css` |
| Fonts / meta | `app/layout.tsx` |
| Header | `components/header.tsx` |
| Footer | `components/footer.tsx` |
| Button | `components/ui/button.tsx` |
| Card | `components/ui/card.tsx` |
| shadcn config | `components.json` |
| Home page | `app/page.tsx` |
| EMS page | `app/ems/page.tsx` |
| Translations / copy helpers | `lib/translations` (if present) |
| Solar projects data | `lib/solar-projects-data` |

---

## 13. Recreate checklist (priority order)

1. **Colors:** cream `#fcfaf6` + orange `#cb4b00` + gold `#cf9b00` (prefer OKLCH tokens above)
2. **Fonts:** Inter (body) + Playfair Display (headlines)
3. **Layout:** `container mx-auto px-4 lg:px-8`, sticky frosted header, section `py-20` / `lg:py-32`
4. **Eyebrows:** `bg-primary/10 text-primary rounded-full` uppercase pills
5. **Cards:** light border, soft shadow, image hover zoom — not heavy card stacks in hero
6. **Home hero:** light gradient, 2-col, inset rounded hero image with shadow
7. **EMS hero:** dark full-bleed photo + overlapping primary-bordered cards
8. **Icons:** Lucide in soft primary wells (`bg-primary/10`)
9. **Motion:** fade-up + whileInView on EMS; hover scale on product images
10. Swap brand name, logo, contact, and product copy for the new site — keep structure & visual language

---

## 14. Quick design tokens summary (for Figma / other tools)

```
Background:   #fcfaf6
Text:         #24211c
Muted text:   #66635d
Muted fill:   #f1eee7
Border:       #e6e4e1
Primary:      #cb4b00
Secondary:    #cf9b00
Card:         #ffffff
Destructive:  #bb061e
Radius base:  8px
Font sans:    Inter
Font serif:   Playfair Display
Icon set:     Lucide
UI style:     shadcn New York
```

---

*Generated from the live `ecom-interstellar-website` codebase for rebuilding a similar site.*
