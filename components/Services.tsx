"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    icon: "🌐",
    title: "Sites Web Premium",
    desc: "Sites vitrines, e-commerce et plateformes sur mesure. Next.js, React, design luxe. Optimisés SEO + Lighthouse 90+.",
    price: "À partir de 1 500€",
    details: ["Landing pages haute conversion", "E-commerce Stripe/PayPal", "Multi-langue (FR/EN/HE/AR)", "Responsive mobile-first", "Hébergement Vercel inclus"],
    color: "#D4AF37",
  },
  {
    icon: "🤖",
    title: "Automatisation IA",
    desc: "Agents IA autonomes 24/7. Chatbots, voice bots, workflows automatisés. Réduction de 60% du temps opérationnel.",
    price: "À partir de 2 000€",
    details: ["Chatbots WhatsApp/Telegram", "Voice agents (Retell AI/Vapi)", "Workflows n8n/Make/Zapier", "CRM automatisé", "Dashboard temps réel"],
    color: "#3B82F6",
  },
  {
    icon: "📈",
    title: "Acquisition de Leads",
    desc: "Machine à leads autonome. Scraping légal, enrichissement IA, scoring comportemental. 80+ leads qualifiés/jour.",
    price: "À partir de 2 500€",
    details: ["Scraping B2B légal (SIRENE, LinkedIn)", "Enrichissement email + téléphone", "Scoring intent 78%+", "Campagnes cold email IA", "Reporting hebdomadaire"],
    color: "#8B5CF6",
  },
  {
    icon: "🎯",
    title: "Marketing Digital",
    desc: "Stratégie réseaux sociaux, contenu IA, SEO technique. Présence digitale complète en 30 jours.",
    price: "À partir de 1 200€/mois",
    details: ["Stratégie social media", "Création contenu IA (texte + image)", "SEO technique + contenu", "Google Ads / Meta Ads", "Analytics + reporting"],
    color: "#10B981",
  },
  {
    icon: "🎓",
    title: "Formation IA",
    desc: "Formations sur mesure pour entrepreneurs. Maîtrisez ChatGPT, Claude, automatisation en 5 sessions.",
    price: "490€ (5 sessions)",
    details: ["ChatGPT / Claude / Gemini", "Automatisation business", "Création de contenu IA", "Workflow personnel", "Support WhatsApp 30 jours"],
    color: "#F59E0B",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & DevOps",
    desc: "Architecture cloud, CI/CD, monitoring. Votre infrastructure technique gérée par des agents IA.",
    price: "Sur devis",
    details: ["Architecture Vercel/AWS", "Base de données Supabase", "CI/CD GitHub Actions", "Monitoring 24/7", "Sécurité + conformité RGPD"],
    color: "#EF4444",
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Solutions Clés en Main
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De la stratégie à l&apos;exécution. Chaque service est déployé avec des agents IA
            pour une efficacité maximale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-white/5 bg-[#0D0D16] hover:border-[#D4AF37]/20 transition-all duration-300 cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <div
                className="text-sm font-bold font-mono"
                style={{ color: service.color }}
              >
                {service.price}
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/5 space-y-2 overflow-hidden"
                  >
                    {service.details.map((d) => (
                      <li key={d} className="text-gray-500 text-sm flex items-start gap-2">
                        <span style={{ color: service.color }}>•</span>
                        {d}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <div className="absolute top-6 right-6 text-gray-700 text-xs font-mono">
                {expanded === i ? "−" : "+"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
