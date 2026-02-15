import type { Metadata } from "next"
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-nf-serif",
  display: "swap",
})

const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nf-sans",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-nf-mono",
  display: "swap",
})

const SITE_URL = "https://dreamnova-consult.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "Dream Nova Consult — Agence IA pour Entrepreneurs",
    template: "%s | Dream Nova Consult",
  },
  description:
    "Dream Nova Consult accompagne les entrepreneurs francophones dans leur transformation digitale avec l'intelligence artificielle. 60+ projets livrés en e-commerce, SaaS, automatisation et formation IA.",
  metadataBase: new URL(SITE_URL),
  keywords: ["agence IA", "intelligence artificielle", "consulting IA", "formation IA", "automatisation", "sites web", "e-commerce", "Jerusalem", "entrepreneur", "francophone"],
  openGraph: {
    title: "Dream Nova Consult — Agence IA pour Entrepreneurs",
    description:
      "60+ projets livrés. Sites web premium, automatisation IA, marketing digital et formation sur mesure pour entrepreneurs francophones.",
    url: SITE_URL,
    siteName: "Dream Nova Consult",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Nova Consult — Agence IA",
    description:
      "60+ projets livrés. Transformez votre business avec l'intelligence artificielle.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`scroll-smooth ${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Dream Nova Consult",
              url: SITE_URL,
              email: "dreamnovaultimate@gmail.com",
              telephone: "+972584921492",
              description: "Agence IA pour entrepreneurs francophones. Sites web, automatisation, marketing digital et formation IA.",
              founder: {
                "@type": "Person",
                name: "David Amor",
                jobTitle: "CEO & Fondateur",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jerusalem",
                addressCountry: "IL",
              },
              areaServed: ["IL", "FR", "US"],
              serviceType: ["AI Consulting", "Web Development", "Marketing Digital", "AI Training"],
              priceRange: "€€€",
              sameAs: [
                "https://github.com/CodeNoLimits",
                "https://linkedin.com/in/dreamnova",
                "https://tiktok.com/@dreamnova",
              ],
            }),
          }}
        />
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
