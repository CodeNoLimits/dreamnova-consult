"use client"

import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Workflow,
  Megaphone,
  GraduationCap,
  Search,
  Film,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Check,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
} from "lucide-react"

const EMAIL = "dreamnovaultimate@gmail.com"
const WHATSAPP = "https://wa.me/972584921492"
const WHATSAPP_MELEA = "https://wa.me/972586604622"
const LINKEDIN = "https://linkedin.com/in/dreamnova"
const TIKTOK = "https://tiktok.com/@dreamnova"
const FORMATION_URL = "https://dreamnova-formation-ia.vercel.app"

const heroStats = [
  { value: "250+", label: "Projets livrés" },
  { value: "98%", label: "Satisfaction client" },
  { value: "15+", label: "Pays couverts" },
  { value: "24h", label: "Temps de réponse" },
]

const pricingPlans = [
  { name: "Solo", price: "490", period: "/mois", popular: false, features: ["1 service IA au choix", "Support email", "1 révision/mois", "Rapport mensuel"] },
  { name: "Starter", price: "2 300", period: "/mois", popular: false, features: ["2 services IA", "Support prioritaire", "3 révisions/mois", "Reporting bi-mensuel", "Formation équipe (1h)"] },
  { name: "Growth", price: "5 400", period: "/mois", popular: true, features: ["5 services IA", "Support 7j/7", "Révisions illimitées", "Reporting hebdomadaire", "Formation équipe (4h)", "Account manager dédié"] },
  { name: "Enterprise", price: "13 800", period: "/mois", popular: false, features: ["Tous les services", "Support 24/7", "Révisions illimitées", "Dashboard temps réel", "Formation continue", "Manager dédié", "SLA garanti"] },
]

const services = [
  {
    icon: Globe, title: "Sites Web Premium", price: "À partir de 1 500 €",
    description: "Landing pages haute conversion, e-commerce et applications web avec les dernières technologies.",
    features: ["Landing pages haute conversion", "Sites e-commerce (Shopify, WooCommerce)", "SEO technique avancé", "Design responsive mobile-first", "Analytics et tracking", "Hébergement + maintenance (1 an)"],
  },
  {
    icon: Workflow, title: "Automatisation IA & Workflows", price: "500 €/mois",
    description: "Workflows intelligents avec Zapier, Make et N8N. Éliminez les tâches répétitives.",
    features: ["Audit complet des processus", "Configuration Zapier, Make ou N8N", "Automatisation email et CRM", "Chatbots IA personnalisés", "Intégration ChatGPT/Claude", "Maintenance continue"],
  },
  {
    icon: Megaphone, title: "Marketing Digital", price: "800 €/mois",
    description: "Stratégie marketing boostée par l'IA. SEO, publicité et growth hacking.",
    features: ["Stratégie multi-canal", "Gestion LinkedIn, TikTok, YouTube", "SEO et content marketing", "Google Ads & Meta Ads", "Reporting mensuel", "Contenu assisté par IA"],
  },
  {
    icon: GraduationCap, title: "Formation IA", price: "297 €/personne",
    description: "45+ leçons vidéo pour maîtriser l'IA. Certification Dream Nova incluse.",
    features: ["45+ leçons vidéo", "Templates et prompts prêts", "Ateliers pratiques", "Certification Dream Nova", "Coaching 3 mois", "Contenu personnalisé"],
  },
  {
    icon: Search, title: "Audit & Consulting IA", price: "2 000 €",
    description: "Diagnostic complet avec feuille de route IA et estimation du ROI.",
    features: ["Audit complet processus", "Opportunités IA identifiées", "Feuille de route stratégique", "Estimation ROI", "Plan d'action 90 jours", "Session restitution (2h)"],
  },
  {
    icon: Film, title: "Production Contenu IA", price: "Sur devis",
    description: "Vidéos, images, copywriting et traduction professionnelle assistés par l'IA.",
    features: ["Production vidéo IA", "Images professionnelles", "Copywriting web", "Traduction FR/EN/HE", "Création musicale IA", "Post-production"],
  },
]

const values = [
  { icon: Zap, title: "Rapidité", text: "Livraison en 1 à 4 semaines." },
  { icon: TrendingUp, title: "ROI mesurable", text: "Retour concret et mesurable." },
  { icon: Shield, title: "Transparence", text: "Prix clairs, pas de frais cachés." },
  { icon: Users, title: "Accompagnement", text: "Support dédié à chaque étape." },
]

const processSteps = [
  { num: "01", title: "Appel Découverte", time: "30 min — Gratuit", text: "On échange sur vos besoins et objectifs." },
  { num: "02", title: "Diagnostic", time: "48 heures", text: "Analyse approfondie et proposition avec ROI." },
  { num: "03", title: "Implémentation", time: "1 à 4 semaines", text: "Mise en place et formation de votre équipe." },
  { num: "04", title: "Suivi", time: "Continu", text: "Monitoring et optimisation continue." },
]

const testimonials = [
  { name: "Sophie Laurent", company: "Agence Immobilière SL", result: "+340% de leads", quote: "David a transformé notre approche digitale. En 3 mois, nos leads ont explosé.", service: "Marketing + Auto" },
  { name: "Marc Benayoun", company: "E-commerce Fashion", result: "80% temps gagné", quote: "Les workflows ont libéré mon équipe des tâches répétitives.", service: "Automatisation" },
  { name: "Léa Dubois", company: "Coach Business", result: "8 000€/mois", quote: "J'ai lancé ma propre offre de consulting IA grâce à la formation.", service: "Formation IA" },
]

const technologies = ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "OpenAI", "Claude", "Gemini", "Make", "N8N", "Zapier", "Vercel", "Shopify", "Tailwind CSS", "Framer Motion"]

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } }, { threshold, rootMargin: "0px 0px -50px 0px" })
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function AgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="gradient-text-gold text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>Dream Nova</a>
          <div className="hidden lg:flex items-center gap-1">
            {["Services", "Tarifs", "Processus", "Témoignages", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition rounded-lg hover:bg-white/5">{l}</a>
            ))}
            <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition rounded-lg hover:bg-white/5 flex items-center gap-1">Formation IA <ExternalLink className="w-3 h-3" /></a>
          </div>
          <a href={`mailto:${EMAIL}`} className="hidden lg:inline-flex items-center gap-2 h-9 px-5 rounded-lg text-sm font-semibold bg-gradient-gold text-[var(--color-background)] hover:shadow-glow-gold active:scale-[0.98] transition-all">Réserver un appel</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[var(--color-text-secondary)]">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 z-40">
            <div className="absolute inset-0 bg-[var(--color-background)]/90 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <div className="relative flex flex-col pt-24 px-6 pb-8">
              {["Services", "Tarifs", "Processus", "Témoignages", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition rounded-xl hover:bg-white/5">{l}</a>
              ))}
              <a href={`mailto:${EMAIL}`} onClick={() => setMenuOpen(false)} className="mt-6 flex items-center justify-center h-12 rounded-xl text-lg font-semibold bg-gradient-gold text-[var(--color-background)]">Réserver un appel</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden">
        <div className="hero-grid-pattern" />
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-blue)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-6"><Sparkles className="w-3.5 h-3.5" /> Agence IA pour Entrepreneurs</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "var(--font-serif)", lineHeight: 1.1 }}>Transformez votre business <span className="gradient-text-gold">avec l&apos;intelligence artificielle</span></h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed mb-10">Dream Nova Consult accompagne les entrepreneurs francophones dans leur transformation digitale. Sites web, automatisation, marketing et formation — tout boosté par l&apos;IA.</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Appel Découverte Gratuit")}`} className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-lg font-semibold bg-gradient-gold text-[var(--color-background)] hover:shadow-glow-gold active:scale-[0.98] transition-all">Réserver mon appel gratuit <ArrowRight className="w-5 h-5" /></a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-lg font-semibold glass text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg-strong)] active:scale-[0.98] transition-all"><Phone className="w-4 h-4" /> WhatsApp</a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {heroStats.map(s => (<div key={s.label} className="glass-card p-4 text-center"><p className="text-2xl md:text-3xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>{s.value}</p><p className="text-xs md:text-sm text-[var(--color-text-muted)] mt-1">{s.label}</p></div>))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <Reveal>
            <div className="glass-card p-8 md:p-12 hover:shadow-glow-gold transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center bg-[var(--color-surface-raised)] shrink-0">
                  <span className="text-4xl md:text-5xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>DN</span>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl md:text-4xl mb-1" style={{ fontFamily: "var(--font-serif)" }}><span className="gradient-text-gold">David Dream Nova</span></h2>
                  <p className="text-[var(--color-gold)] font-medium mb-1">CEO & Co-Fondateur</p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[var(--color-text-muted)] text-sm mb-4"><MapPin className="w-3.5 h-3.5" /> Jérusalem, Israël</div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">Entrepreneur passionné par l&apos;IA, j&apos;ai fondé Dream Nova Consult pour aider les entrepreneurs francophones à exploiter le potentiel de l&apos;intelligence artificielle. Mon objectif : rendre l&apos;IA accessible, actionnable et rentable pour chaque business.</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5">
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="h-8 px-4 rounded-lg text-sm font-medium glass inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all">LinkedIn</a>
                    <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="h-8 px-4 rounded-lg text-sm font-medium glass inline-flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all">TikTok</a>
                    <a href={`mailto:${EMAIL}`} className="h-8 px-4 rounded-lg text-sm font-medium glass inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"><Mail className="w-3.5 h-3.5" />{EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="glass-card p-8 md:p-12 hover:shadow-glow-gold transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-[var(--color-blue)] flex items-center justify-center bg-[var(--color-surface-raised)] shrink-0">
                  <span className="text-4xl md:text-5xl gradient-text-blue" style={{ fontFamily: "var(--font-serif)" }}>M</span>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl md:text-4xl mb-1" style={{ fontFamily: "var(--font-serif)" }}><span className="gradient-text-blue">Meléa</span></h2>
                  <p className="text-[var(--color-blue-light)] font-medium mb-1">Directrice Commerciale & Co-Fondatrice</p>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[var(--color-text-muted)] text-sm mb-4"><MapPin className="w-3.5 h-3.5" /> Jérusalem, Israël</div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">Experte en développement commercial et relation client, Meléa pilote la stratégie commerciale de Dream Nova Consult. Elle accompagne chaque client de A à Z pour garantir une expérience sur mesure et des résultats concrets.</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5">
                    <a href={WHATSAPP_MELEA} target="_blank" rel="noopener noreferrer" className="h-8 px-4 rounded-lg text-sm font-medium glass inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"><Phone className="w-3.5 h-3.5" /> WhatsApp Meléa</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal><div className="text-center mb-16"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-4">Nos Services</span><h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>Ce qu&apos;on fait pour vous</h2><p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4">Des solutions complètes pour digitaliser votre business avec l&apos;IA.</p></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => { const Icon = svc.icon; const isExp = expanded === i; return (
              <Reveal key={svc.title} delay={i * 100}>
                <div className="glass-card h-full flex flex-col p-6 lg:p-8 group cursor-pointer" onClick={() => setExpanded(isExp ? null : i)}>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><Icon className="w-6 h-6 text-[var(--color-gold)]" /></div>
                  <h3 className="text-xl text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-serif)" }}>{svc.title}</h3>
                  <p className="text-[var(--color-gold)] font-semibold text-sm mb-3">{svc.price}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">{svc.description}</p>
                  <div className={`overflow-hidden transition-all duration-300 ${isExp ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="space-y-2 mb-4">{svc.features.map((f, fi) => (<li key={fi} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" /><span className="text-[var(--color-text-secondary)]">{f}</span></li>))}</ul>
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Demande: ${svc.title}`)}`} onClick={e => e.stopPropagation()} className="text-[var(--color-gold)] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">Demander un devis <ArrowRight className="w-4 h-4" /></a>
                    <ChevronDown className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform ${isExp ? "rotate-180" : ""}`} />
                  </div>
                </div>
              </Reveal>
            )})}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section id="valeurs" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal><div className="text-center mb-16"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-blue)]/10 text-[var(--color-blue-light)] border border-[var(--color-blue)]/20 mb-4">Nos Valeurs</span><h2 className="text-4xl md:text-5xl gradient-text-blue" style={{ fontFamily: "var(--font-serif)" }}>Pourquoi Dream Nova</h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => { const Icon = v.icon; return (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass-card p-6 flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-blue)]/10 border border-[var(--color-blue)]/20 flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-[var(--color-blue-light)]" /></div>
                  <div><h3 className="text-lg text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-serif)" }}>{v.title}</h3><p className="text-[var(--color-text-secondary)] text-sm">{v.text}</p></div>
                </div>
              </Reveal>
            )})}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section id="processus" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal><div className="text-center mb-16"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-4">Notre Processus</span><h2 className="text-4xl md:text-5xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>Comment on travaille</h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 150}>
                <div className="glass-card p-6 text-center h-full relative">
                  <span className="absolute top-4 right-4 text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>{s.num}</span>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-glow-gold"><span className="text-xl font-bold text-[var(--color-background)]" style={{ fontFamily: "var(--font-serif)" }}>{s.num}</span></div>
                  <h3 className="text-lg text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-serif)" }}>{s.title}</h3>
                  <p className="text-[var(--color-gold)] text-sm font-medium mb-3">{s.time}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal><div className="text-center mb-16"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-4">Nos Forfaits</span><h2 className="text-4xl md:text-5xl lg:text-6xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>Investissez dans votre croissance</h2><p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-4">Des forfaits mensuels adaptés à chaque étape de votre business.</p></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100}>
                <div className={`glass-card h-full flex flex-col p-6 lg:p-8 relative ${plan.popular ? "border-[var(--color-gold)]/40 shadow-glow-gold" : ""}`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-gold text-[var(--color-background)]">POPULAIRE</span>}
                  <h3 className="text-2xl text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-serif)" }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>{plan.price}€</span>
                    <span className="text-[var(--color-text-muted)] text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span className="text-[var(--color-text-secondary)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Forfait ${plan.name} - Dream Nova Consult`)}`} className={`mt-auto flex items-center justify-center h-11 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${plan.popular ? "bg-gradient-gold text-[var(--color-background)] hover:shadow-glow-gold" : "glass text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg-strong)]"}`}>Choisir {plan.name}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section id="temoignages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal><div className="text-center mb-16"><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-4">Résultats Clients</span><h2 className="text-4xl md:text-5xl gradient-text-gold" style={{ fontFamily: "var(--font-serif)" }}>Ils nous font confiance</h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <div className="glass-card h-full flex flex-col p-6 lg:p-8 hover:shadow-glow-gold transition-shadow">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 self-start mb-5">{t.service}</span>
                  <p className="text-2xl gradient-text-gold mb-4" style={{ fontFamily: "var(--font-serif)" }}>{t.result}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 pt-5 border-t border-[var(--color-glass-border)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-glass-border)] flex items-center justify-center"><span className="text-xs font-semibold text-[var(--color-gold)]">{t.name.split(" ").map(n => n[0]).join("")}</span></div>
                      <div><p className="text-sm text-[var(--color-text-primary)] font-medium">{t.name}</p><p className="text-xs text-[var(--color-text-muted)]">{t.company}</p></div>
                    </div>
                    <div className="flex gap-0.5 mt-3">{[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]" />)}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-blue)]/10 text-[var(--color-blue-light)] border border-[var(--color-blue)]/20 mb-4">Stack Technique</span><h2 className="text-4xl md:text-5xl gradient-text-blue mb-8" style={{ fontFamily: "var(--font-serif)" }}>Technologies Maîtrisées</h2></Reveal>
          <Reveal delay={200}><div className="flex flex-wrap justify-center gap-3">{technologies.map(t => (<span key={t} className="px-5 py-2 rounded-full text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-glass-border)] hover:border-[var(--color-gold)]/30 hover:text-[var(--color-gold)] transition-all cursor-default">{t}</span>))}</div></Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="glass-card p-10 md:p-16 relative overflow-hidden hover:shadow-glow-gold transition-shadow">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-gold)]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-blue)]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)] border border-[var(--color-gold)]/20 mb-6"><Clock className="w-3.5 h-3.5" /> Appel de 30 min offert</span>
                <h2 className="text-3xl md:text-5xl gradient-text-gold mb-4" style={{ fontFamily: "var(--font-serif)" }}>Prêt à transformer votre business ?</h2>
                <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-lg mx-auto leading-relaxed">Réservez votre appel découverte gratuit et découvrons ensemble comment l&apos;IA peut accélérer votre croissance.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Appel Découverte Gratuit")}`} className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-lg font-semibold bg-gradient-gold text-[var(--color-background)] hover:shadow-glow-gold active:scale-[0.98] transition-all"><Mail className="w-5 h-5" /> Réserver par email</a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl text-lg font-semibold glass text-[var(--color-text-primary)] hover:bg-[var(--color-glass-bg-strong)] active:scale-[0.98] transition-all"><Phone className="w-5 h-5" /> WhatsApp direct</a>
                </div>
                <p className="text-[var(--color-text-muted)] text-xs mt-6">{EMAIL} • WhatsApp: +972 58 492 1492 • Jérusalem, Israël</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-[var(--color-glass-border)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <p>&copy; {new Date().getFullYear()} Dream Nova Consult. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href={FORMATION_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-secondary)] transition">Formation IA</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-secondary)] transition">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-[var(--color-text-secondary)] transition">Contact</a>
            <a href="/mentions-legales" className="hover:text-[var(--color-text-secondary)] transition">Mentions légales</a>
            <a href="/cgv" className="hover:text-[var(--color-text-secondary)] transition">CGV</a>
            <a href="/confidentialite" className="hover:text-[var(--color-text-secondary)] transition">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
