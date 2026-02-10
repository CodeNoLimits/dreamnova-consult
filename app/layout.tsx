import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const SITE_URL = "https://dreamnova-consult.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "Dream Nova Consult — Agence IA pour Entrepreneurs",
    template: "%s | Dream Nova Consult",
  },
  description:
    "Dream Nova Consult accompagne les entrepreneurs francophones dans leur transformation digitale avec l'intelligence artificielle. Sites web, automatisation, marketing, formation et consulting IA.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Dream Nova Consult — Agence IA pour Entrepreneurs",
    description:
      "Transformez votre business avec l'intelligence artificielle. Sites web premium, automatisation, marketing digital et formation IA sur mesure.",
    url: SITE_URL,
    siteName: "Dream Nova Consult",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Nova Consult — Agence IA",
    description:
      "Transformez votre business avec l'intelligence artificielle.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dream Nova Consult",
              url: SITE_URL,
              email: "dreamnovaultimate@gmail.com",
              founder: {
                "@type": "Person",
                name: "David Dream Nova",
                jobTitle: "CEO & Fondateur",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jerusalem",
                addressCountry: "IL",
              },
              sameAs: [
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
