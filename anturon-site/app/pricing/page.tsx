"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const plans = [
  {
    badge: "PILOT-READY",
    name: "Starter",
    description:
      "Perfect for enterprises running a proof-of-concept or validating Voice AI on a specific campaign or use case.",
    features: [
      "Up to 2 concurrent AI voice agents",
      "Single campaign deployment",
      "Inbound or outbound call support",
      "Basic call analytics & transcripts",
      "CRM-ready (plug & play setup)",
    ],
    buttonText: "Start Pilot",
    buttonStyle:
      "border border-slate-700 text-slate-100 hover:bg-orange-500",
    badgeStyle: "bg-orange-500/10 text-orange-300",
    highlight: false,
    microcopy: "Ideal for first deployment and internal validation.",
  },
  {
    badge: "RECOMMENDED",
    name: "Growth",
    description:
      "Built for teams scaling AI-led calling across multiple campaigns, queues, and operational workflows.",
    features: [
      "Up to 10 concurrent AI voice agents",
      "Multiple campaigns & call queues",
      "CRM sync & intelligent routing",
      "Advanced call analytics & transcripts",
      "Sales, support, BPO & scheduling workflows",
    ],
    buttonText: "Book a Pricing Call",
    buttonStyle:
      "border border-slate-700 text-slate-100 hover:bg-orange-500",
    badgeStyle: "bg-orange-500/10 text-orange-300",
    highlight: true,
    microcopy: "Best for revenue teams ready to scale AI operations.",
  },
  {
    badge: "CUSTOM",
    name: "Enterprise",
    description:
      "Designed for high-volume organizations needing custom workflows, deeper integrations, and compliance-ready deployment.",
    features: [
      "Unlimited AI voice agents",
      "Custom workflows & playbooks",
      "Advanced analytics & reporting",
      "Custom integrations & SLAs",
      "Security, compliance & enterprise support",
    ],
    buttonText: "Talk to Enterprise Team",
    buttonStyle:
      "border border-slate-700 text-slate-100 hover:bg-orange-500",
    badgeStyle: "bg-orange-500/10 text-orange-300",
    highlight: false,
    microcopy: "For complex environments and multi-team rollout.",
  },
];

const faqs = [
  {
    question: "How fast can Anturon go live?",
    answer:
      "Most pilot deployments can go live in under 10 days depending on workflow complexity, CRM setup, and approval timelines.",
  },
  {
    question: "Do we need to change our current tech stack?",
    answer:
      "No. Anturon is designed to integrate with your existing CRM, dialer, and lead stack with minimal disruption.",
  },
  {
    question: "Can Anturon support inbound and outbound calls?",
    answer:
      "Yes. Plans can support inbound, outbound, or a combination based on your business workflow.",
  },
  {
    question: "Do you offer custom enterprise pricing?",
    answer:
      "Yes. Enterprise plans are tailored based on call volume, integrations, compliance requirements, and deployment scope.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-orange-300 sm:text-xs">
            Enterprise Pricing
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Voice AI Plans Built for{" "}
            <span className="text-orange-400">Enterprise Scale</span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base md:text-lg md:leading-8">
            Deploy your first AI voice agent in under 10 days, then scale across
            sales, inbound support, BPO, and scheduling without changing your
            existing stack.
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-2xl p-5 sm:p-6 ${
                  plan.highlight
                    ? "border border-orange-500/60 bg-slate-900/60 shadow-[0_0_40px_rgba(248,150,30,0.2)]"
                    : "border border-slate-800 bg-slate-900/40"
                }`}
              >
                <span
                  className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide sm:text-[11px] ${plan.badgeStyle}`}
                >
                  {plan.badge}
                </span>

                <h2 className="text-xl font-semibold sm:text-2xl">{plan.name}</h2>

                <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-[15px]">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-500/15 text-xs font-bold text-orange-300">
                        ✓
                      </span>
                      <span className="leading-6">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-1 flex-col justify-end">
                  <Link
                    href="/demo"
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>

                  <p className="mt-3 text-center text-xs leading-5 text-slate-400">
                    {plan.microcopy}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/30 p-5 text-sm text-slate-300 sm:p-6 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="text-base font-semibold text-white">Live Fast</div>
              <p className="mt-1 leading-6">
                Pilot deployments can go live in under 10 days.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-white">CRM Ready</div>
              <p className="mt-1 leading-6">
                Integrates with your existing sales and support workflows.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                Flexible Scale
              </div>
              <p className="mt-1 leading-6">
                Start small, then expand across teams and campaigns.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                Enterprise Fit
              </div>
              <p className="mt-1 leading-6">
                Built for security, compliance, and custom operations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-slate-800 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-slate-900 p-6 text-center sm:rounded-3xl sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Not sure which plan fits your team?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
              We’ll help you map the right Voice AI setup based on call volume,
              workflows, integrations, and deployment timeline.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-slate-800 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Pricing FAQ</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">
            Common questions teams ask before launching a pilot or scaling
            enterprise Voice AI.
          </p>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5"
              >
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300 md:text-[15px]">
                  {faq.answer}
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