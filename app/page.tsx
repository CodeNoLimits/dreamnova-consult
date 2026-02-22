"use client"

import { useState, useEffect } from "react"
import { Menu, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import HeroTerraMind from "../components/HeroTerraMind"
import Services from "../components/Services"
import AcquisitionEngine from "../components/AcquisitionEngine"
import Process from "../components/Process"
import Tarifs from "../components/Tarifs"
import EcosystemShowcase from "../components/EcosystemShowcase"
import TerminalROI from "../components/TerminalROI"
import CTASection from "../components/CTASection"
import EmpireManifesto from "../components/EmpireManifesto"

const FORMATION_URL = "https://dreamnova-formation-ia.vercel.app"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Acquisition", href: "#acquisition" },
  { label: "Process", href: "#process" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Projets", href: "#ecosystem" },
  { label: "Audit ROI", href: "#audit-roi" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-[#D4AF37] rounded-sm" />
          <span className="text-white font-bold tracking-tight uppercase text-sm">Dream Nova</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/clients" className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            Clients
          </Link>
          <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
            Formation <ExternalLink size={10} />
          </a>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/972584921492?text=Bonjour%20David%2C%20je%20veux%20un%20audit%20ROI%20%F0%9F%9A%80"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex h-9 px-5 items-center bg-[#D4AF37] text-black font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors"
        >
          Audit Gratuit
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-5">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/clients" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
            Portail Clients
          </Link>
          <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
            Formation IA
          </a>
          <a
            href="https://wa.me/972584921492?text=Bonjour%20David%2C%20je%20veux%20un%20audit%20ROI%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center h-12 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs"
          >
            💬 Audit Gratuit →
          </a>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-[#D4AF37] rounded-sm" />
              <span className="text-white font-bold tracking-tight uppercase text-sm">Dream Nova</span>
            </div>
            <p className="text-gray-600 text-xs font-mono leading-relaxed">
              Infrastructure Autonome CEO/CTO/COO<br />
              Jérusalem, Israël — 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Services</p>
              {[
                { label: "Sites Web Premium", href: "#services" },
                { label: "Automatisation IA", href: "#services" },
                { label: "Acquisition Leads", href: "#acquisition" },
                { label: "Formation", href: FORMATION_URL },
              ].map(s => (
                <a key={s.label} href={s.href} className="text-xs text-gray-500 hover:text-white transition-colors font-mono">{s.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Liens</p>
              <Link href="/clients" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">Portail Clients</Link>
              <Link href="/mentions-legales" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">Mentions légales</Link>
              <Link href="/cgv" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">CGV</Link>
              <Link href="/confidentialite" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">Confidentialité</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Contact</p>
              <a href="https://wa.me/972584921492" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">WhatsApp</a>
              <a href="mailto:dreamnovaultimate@gmail.com" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">Email</a>
              <a href="https://linkedin.com/in/dreamnova" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">LinkedIn</a>
              <a href="https://tiktok.com/@dreamnova" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">TikTok</a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 py-6 border-y border-white/5 mb-8 flex-wrap">
          {["Next.js", "React", "Vercel", "Supabase", "Stripe", "Tailwind", "Claude AI", "Gemini", "n8n", "Retell AI", "TerraMind"].map(t => (
            <span key={t} className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">{t}</span>
          ))}
        </div>

        <p className="text-center text-[10px] font-mono text-gray-800 tracking-widest uppercase">
          Na Nach Nachma Nachman MeUman · Ein Ye&apos;ush Ba&apos;olam Klal · © {new Date().getFullYear()} Dream Nova
        </p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white scroll-smooth">
      <Navbar />
      <HeroTerraMind />
      <Services />
      <AcquisitionEngine />
      <Process />
      <Tarifs />
      <EcosystemShowcase />
      <TerminalROI />
      <CTASection />
      <EmpireManifesto />
      <Footer />
    </div>
  )
}
