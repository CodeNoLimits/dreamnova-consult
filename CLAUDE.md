# DreamNova Consult - Agency Site

## Status: DEPLOYED & IMPROVED
- **URL**: https://dreamnova-consult.vercel.app
- **Stack**: Next.js 15.5.12, Tailwind CSS 4, lucide-react
- **Design**: Dark glassmorphism, gold/blue gradients, Instrument Serif + DM Sans

## Architecture
```
app/
  layout.tsx          # Metadata, OG tags, JSON-LD Organization schema
  globals.css         # Full design system (Tailwind v4 @theme inline)
  page.tsx            # Complete agency homepage (all sections)
  opengraph-image.tsx # Dynamic OG image (edge runtime)
  robots.ts           # SEO robots.txt
  sitemap.ts          # SEO sitemap
```

## Sections on Homepage
1. Navbar (responsive + mobile menu) — Portfolio link added
2. Hero (stats: 63+ projects, 98% satisfaction, 10+ pays, 24h response)
3. Founders (David Dream Nova CEO + Melea Directrice Commerciale)
4. Services (6 services with pricing, expandable)
5. Valeurs (4 core values)
6. Process (4 steps)
7. **Tarifs** (4 forfaits: Solo 490, Starter 2300, Growth 5400, Enterprise 13800)
8. **Portfolio** (6 real deployed projects with live thum.io thumbnails)
9. Tech Stack (15 technologies)
10. CTA (email + WhatsApp)
11. Footer

## Contact Info
- Email: dreamnovaultimate@gmail.com
- WhatsApp David: +972584921492
- WhatsApp Melea: +972586604622
- LinkedIn: https://linkedin.com/in/dreamnova
- TikTok: https://tiktok.com/@dreamnova
- Formation: https://dreamnova-formation-ia.vercel.app

## Completed (Feb 13, 2026)
- [x] Replace fake testimonials with real portfolio (6 live projects with thum.io thumbnails)
- [x] Fix inflated stats (250+ → 63+ verified projects)
- [x] Self-host fonts via next/font (eliminated render-blocking Google Fonts)
- [x] Enhanced SEO: keywords, JSON-LD ProfessionalService schema, OG image alignment
- [x] Fixed CSS variables in legal pages (--color-bg → --color-background)
- [x] Added image optimization config (thum.io, compression, no poweredByHeader)
- [x] Portfolio links to full portfolio at dreamnova-portfolio.vercel.app
- [x] Fixed navbar/hero overlap (pt-28 → pt-36)
- [x] Fixed lint warnings in clients page (unused imports)

## TODO
- [ ] Add individual service pages (/services/[slug])
- [ ] Add blog page (Dell generating articles with Ollama)
- [ ] Add contact form with Brevo integration
- [ ] Connect Stripe for service payments
- [ ] Add real profile photos for David + Melea
- [ ] Add authentication to /clients page (currently public with sensitive client data)
- [ ] Consider splitting page.tsx into server/client components (currently all "use client")
