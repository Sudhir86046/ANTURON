"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";

const features = [
  {
    title: "Natural-Quality AI Voice with human voice cloning",
    desc: "Conversations indistinguishable from your best human rep",
  },
  {
    title: "Intelligent Lead Prioritization",
    desc: "AI ranks and sequences calls so reps engage only hot leads",
  },
  {
    title: "Custom Playbook Execution",
    desc: "Every call follows your exact script, tone, and sales logic",
  },
  {
    title: "Seamless Live Agent Handoff",
    desc: "Warm transfers to human reps the moment intent spikes",
  },
  {
    title: "Automatic CRM Logging",
    desc: "Every call, note, and outcome synced to your CRM",
  },
  {
    title: "Compliance & Call Recording Controls",
    desc: "Built-in recording, consent management & audit-ready logs",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Enterprise Voice AI Built for{" "}
            <span className="text-orange-400">
              Revenue, Operations & Scale
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            Anturon AI voice agents deploy into your existing CRM, dialer, and
            telephony stack — zero rip-and-replace, zero workflow disruption.
            Just intelligent automation that works from day one.
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 md:py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] sm:p-6"
              >
                <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}