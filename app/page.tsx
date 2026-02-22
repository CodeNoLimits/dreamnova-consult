"use client"

import { useState, useEffect } from "react"
import { Menu, X, ExternalLink } from "lucide-react"
import HeroTerraMind from "../components/HeroTerraMind"
import AcquisitionEngine from "../components/AcquisitionEngine"
import EcosystemShowcase from "../components/EcosystemShowcase"
import TerminalROI from "../components/TerminalROI"
import EmpireManifesto from "../components/EmpireManifesto"

const FORMATION_URL = "https://dreamnova-formation-ia.vercel.app"

const navLinks = [
  { label: "Acquisition", href: "#acquisition" },
  { label: "Projets", href: "#ecosystem" },
  { label: "Audit ROI", href: "#audit-roi" },
  { label: "Doctrine", href: "#manifesto" },
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
          <span className="text-white font-bold tracking-tight uppercase text-sm">Dream Nova Global</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/clients" className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            Clients
          </a>
          <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
            Formation <ExternalLink size={10} />
          </a>
        </div>

        {/* CTA */}
        <a href="mailto:dreamnovaultimate@gmail.com?subject=Audit%20ROI%20DreamNova" className="hidden md:inline-flex h-9 px-5 items-center bg-[#D4AF37] text-black font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-colors">
          Démarrer l&apos;Audit
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-5">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="/clients" onClick={() => setOpen(false)} className="text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
            Portail Clients
          </a>
          <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-mono uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors">
            Formation IA
          </a>
          <a href="mailto:dreamnovaultimate@gmail.com" className="mt-4 flex items-center justify-center h-12 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs">
            Démarrer l&apos;Audit →
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
              <span className="text-white font-bold tracking-tight uppercase text-sm">Dream Nova Global</span>
            </div>
            <p className="text-gray-600 text-xs font-mono leading-relaxed">
              Infrastructure Autonome CEO/CTO/COO<br />
              Jérusalem, Israël — 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Services</p>
              {["Acquisition Leads", "Automatisation IA", "Sites Web Premium", "Formation"].map(s => (
                <a key={s} href="mailto:dreamnovaultimate@gmail.com" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">{s}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Liens</p>
              {[
                { label: "Portail Clients", href: "/clients" },
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "CGV", href: "/cgv" },
                { label: "Confidentialité", href: "/confidentialite" },
              ].map(l => (
                <a key={l.label} href={l.href} className="text-xs text-gray-500 hover:text-white transition-colors font-mono">{l.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-1">Social</p>
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/dreamnova" },
                { label: "TikTok", href: "https://tiktok.com/@dreamnova" },
                { label: "Formation IA", href: FORMATION_URL },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors font-mono">{l.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 py-6 border-y border-white/5 mb-8 flex-wrap">
          {["Vercel", "Next.js", "Supabase", "Stripe", "Claude AI", "Gemini", "TerraMind"].map(t => (
            <span key={t} className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">{t}</span>
          ))}
        </div>

        <p className="text-center text-[10px] font-mono text-gray-800 tracking-widest uppercase">
          Na Nach Nachma Nachman MeUman · Ein Ye&apos;ush Ba&apos;olam Klal · © {new Date().getFullYear()} Dream Nova Global
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
      <AcquisitionEngine />
      <EcosystemShowcase />
      <TerminalROI />
      <EmpireManifesto />
      <Footer />
    </div>
  )
}
