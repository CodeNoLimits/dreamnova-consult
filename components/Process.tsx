"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Audit R.O.I Gratuit",
    desc: "Appel découverte 30 min. On analyse votre business, vos pain points, et on projette le ROI avec TerraMind.",
    duration: "30 min",
    icon: "📊",
  },
  {
    num: "02",
    title: "Architecture & Stratégie",
    desc: "Plan d'action détaillé : quels systèmes IA déployer, dans quel ordre, avec quels KPIs. Rien n'est lancé sans votre GO.",
    duration: "48h",
    icon: "🏗️",
  },
  {
    num: "03",
    title: "Déploiement Rapide",
    desc: "Mise en production en 72h. Sites, bots, workflows — tout est live et fonctionnel. Vous voyez les premiers résultats.",
    duration: "72h",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Optimisation Continue",
    desc: "Les agents IA optimisent en continu. Dashboard temps réel, reporting hebdo, scaling automatique.",
    duration: "24/7",
    icon: "📈",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0A0A12]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Notre Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            De l&apos;Idée au Revenu en 4 Étapes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un process rodé sur 84+ projets. Pas de réunions inutiles, que du résultat.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 rounded-2xl border border-white/5 bg-[#0D0D16] hover:border-[#D4AF37]/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <span className="text-[#D4AF37] font-mono text-xs font-bold tracking-widest">
                        ÉTAPE {step.num}
                      </span>
                      <span className="ml-auto text-gray-700 font-mono text-xs">{step.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#06060C] shrink-0 mt-8" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
