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
1. Navbar (responsive + mobile menu)
2. Hero (stats: 250+ projects, 98% satisfaction, 15+ pays, 24h response)
3. Founders (David Dream Nova CEO + Melea Directrice Commerciale)
4. Services (6 services with pricing, expandable)
5. Valeurs (4 core values)
6. Process (4 steps)
7. **Tarifs** (4 forfaits: Solo 490, Starter 2300, Growth 5400, Enterprise 13800)
8. Testimonials (3 clients)
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

## TODO
- [ ] Add individual service pages (/services/[slug])
- [ ] Add portfolio/case studies page
- [ ] Add blog page (Dell generating articles with Ollama)
- [ ] Add contact form with Brevo integration
- [ ] Connect Stripe for service payments
- [ ] Add animations and micro-interactions

## David Must Do
- [ ] Provide real testimonial quotes from actual clients
- [ ] Confirm pricing plans (Solo/Starter/Growth/Enterprise)
- [ ] Upload profile photos (David + Melea)
- [ ] Review Melea bio and role description
- [ ] Review and approve all site content
