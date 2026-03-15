"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const MiniFlowCard = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute rounded-[24px] border border-slate-800 bg-[#071226]/95 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.45),0_18px_45px_rgba(0,0,0,0.30)] ${className}`}
  >
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-300">
      {title}
    </p>
    {children}
  </div>
);

const FlowDotLineH = ({
  className = "",
  width = 120,
  delay = 0,
}: {
  className?: string;
  width?: number;
  delay?: number;
}) => (
  <div className={`absolute ${className}`} style={{ width, height: 2 }}>
    <div className="absolute inset-0 rounded-full bg-slate-700" />
    <motion.div
      className="absolute top-1/2 h-[4px] w-[4px] -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
      animate={{ x: [0, width] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  </div>
);

const FlowDotLineV = ({
  className = "",
  height = 100,
  delay = 0,
}: {
  className?: string;
  height?: number;
  delay?: number;
}) => (
  <div className={`absolute ${className}`} style={{ width: 2, height }}>
    <div className="absolute inset-0 rounded-full bg-slate-700" />
    <motion.div
      className="absolute left-1/2 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]"
      animate={{ y: [0, height] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  </div>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    contact: "",
    company: "",
    industry: "",
    teamSize: "",
    useCase: "",
    campaignType: "",
    callVolume: "",
    crm: "",
    integration: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection />

      <section id="packages" className="border-t border-slate-800 px-4 py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            Voice AI Plans Built for Enterprise Scale
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Start with a pilot deployment, then scale AI voice agents across sales,
            support, BPO and scheduling workflows.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <span className="mb-2 inline-flex w-fit rounded-full bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-300">
                PILOT-READY
              </span>
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="mt-2 text-sm text-slate-300">
                Perfect for enterprises running a proof-of-concept or validating Voice
                AI on a specific campaign.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Up to 2 concurrent AI voice agents</li>
                <li>• Single campaign deployment</li>
                <li>• Inbound or outbound call support</li>
                <li>• Basic call analytics & transcripts</li>
                <li>• CRM-ready plug & play setup</li>
              </ul>
              <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-900">
                Start Pilot
              </button>
            </div>

            <div className="flex flex-col rounded-2xl border border-orange-500/60 bg-slate-900/60 p-6 shadow-[0_0_40px_rgba(248,150,30,0.2)]">
              <span className="mb-2 inline-flex w-fit rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-300">
                RECOMMENDED
              </span>
              <h3 className="text-xl font-semibold">Growth</h3>
              <p className="mt-2 text-sm text-slate-300">
                Built for teams scaling AI-led calling across multiple campaigns and
                workflows.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Up to 10 concurrent AI voice agents</li>
                <li>• Multiple campaigns & call queues</li>
                <li>• CRM sync & intelligent routing</li>
                <li>• Advanced analytics & transcripts</li>
                <li>• Sales, support & BPO workflows</li>
              </ul>
              <button className="mt-6 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Book Pricing Call
              </button>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <span className="mb-2 inline-flex w-fit rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                CUSTOM
              </span>
              <h3 className="text-xl font-semibold">Enterprise</h3>
              <p className="mt-2 text-sm text-slate-300">
                Designed for high-volume teams requiring custom workflows and enterprise
                compliance.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Unlimited AI voice agents</li>
                <li>• Custom workflows & playbooks</li>
                <li>• Advanced analytics & reporting</li>
                <li>• Custom integrations & SLAs</li>
                <li>• Enterprise security & compliance</li>
              </ul>
              <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-900">
                Talk to Enterprise Team
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="border-t border-slate-800 px-4 py-16">
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            Enterprise Voice AI Built for Revenue, Operations & Scale
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            Anturon AI voice agents deploy into your existing CRM, dialer, and
            telephony stack - zero rip-and-replace, zero workflow disruption. Just
            intelligent automation that works from day one.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Natural-Quality AI Voice with human voice cloning",
                desc: "Sounds exactly like your top human representative.",
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
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <h4 className="text-sm font-semibold text-white">{feature.title}</h4>
                <p className="mt-1 text-xs text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-sm md:grid-cols-3 lg:grid-cols-6">
            {[
              "Custom Setup",
              "Enterprise-Grade Security",
              "Live in Under 2-3 Days",
              "CRM & Dialer Integrations",
              "10,000+ AI Calls Daily",
              "Advanced Analytics",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-xl border border-orange-500/30 bg-slate-900/40 p-3 text-center text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="playground"
        className="border-t border-slate-800 bg-slate-950 py-12"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8 xl:px-12">
            <div className="mb-8 max-w-3xl">
              <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                Setup Flow
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Configure your AI calling workflow
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
                Fill all setup details in one connected flow and define how your
                Anturon AI voice agent should work for your campaign.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="mx-auto w-[1180px] min-w-[1180px] px-4 md:px-8 xl:px-12">
              <div className="relative h-[760px] overflow-hidden rounded-[24px] border border-slate-800 bg-[#030712]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(143, 158, 180, 0.16) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <MiniFlowCard
                  className="left-[30px] top-[70px] w-[190px]"
                  title="Agent Name"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  />
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[250px] top-[70px] w-[220px]"
                  title="Preferred Language"
                >
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Bhojpuri">Bhojpuri</option>
                    <option value="Hinglish">Hinglish</option>
                    <option value="Other">Other</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[490px] top-[70px] w-[190px]"
                  title="Phone Number"
                >
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  />
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[710px] top-[70px] w-[230px]"
                  title="Company Name"
                >
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  />
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[110px] top-[240px] w-[190px]"
                  title="Industry"
                >
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select industry</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="EdTech">EdTech</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[330px] top-[240px] w-[180px]"
                  title="Team Size"
                >
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[540px] top-[240px] w-[220px]"
                  title="Primary Use Case"
                >
                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select use case</option>
                    <option value="Lead Qualification">Lead Qualification</option>
                    <option value="Appointment Booking">Appointment Booking</option>
                    <option value="Follow-ups">Follow-ups</option>
                    <option value="Customer Support">Customer Support</option>
                    <option value="Collections">Collections</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[200px] top-[410px] w-[220px]"
                  title="Campaign Type"
                >
                  <select
                    id="campaignType"
                    name="campaignType"
                    value={formData.campaignType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select campaign type</option>
                    <option value="Outbound Sales">Outbound Sales</option>
                    <option value="Inbound Support">Inbound Support</option>
                    <option value="Reminder Calls">Reminder Calls</option>
                    <option value="Survey / Feedback">Survey / Feedback</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[450px] top-[410px] w-[240px]"
                  title="Monthly Call Volume"
                >
                  <select
                    id="callVolume"
                    name="callVolume"
                    value={formData.callVolume}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  >
                    <option value="">Select call volume</option>
                    <option value="0-1,000">0-1,000</option>
                    <option value="1,000-10,000">1,000-10,000</option>
                    <option value="10,000-50,000">10,000-50,000</option>
                    <option value="50,000+">50,000+</option>
                  </select>
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[720px] top-[410px] w-[250px]"
                  title="CRM / Lead Source"
                >
                  <input
                    id="crm"
                    name="crm"
                    type="text"
                    placeholder="Eg. HubSpot, Zoho, Salesforce"
                    value={formData.crm}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  />
                </MiniFlowCard>

                <MiniFlowCard
                  className="left-[420px] top-[540px] w-[340px]"
                  title="Final Notes"
                >
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Tell us about your campaign goals, script style, calling hours, escalation rules, etc."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                  />
                </MiniFlowCard>

                <div className="absolute left-[800px] top-[715px]">
                  <Link href="/playground/customise-agent#start-trial">
                    <button className="rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                      Continue Setup
                    </button>
                  </Link>
                </div>

                <FlowDotLineH className="left-[220px] top-[132px]" width={30} delay={0.05} />
                <FlowDotLineH className="left-[470px] top-[132px]" width={20} delay={0.2} />
                <FlowDotLineH className="left-[680px] top-[132px]" width={30} delay={0.35} />
                <FlowDotLineV className="left-[830px] top-[171px]" height={70} delay={0.5} />
                <FlowDotLineH className="left-[745px] top-[240px]" width={85} delay={0.65} />
                <FlowDotLineH className="left-[300px] top-[300px]" width={30} delay={0.8} />
                <FlowDotLineH className="left-[510px] top-[300px]" width={30} delay={0.95} />
                <FlowDotLineV className="left-[650px] top-[341px]" height={70} delay={1.1} />
                <FlowDotLineH className="left-[420px] top-[470px]" width={30} delay={1.25} />
                <FlowDotLineH className="left-[690px] top-[470px]" width={30} delay={1.4} />
                <FlowDotLineV className="left-[850px] top-[510px]" height={205} delay={1.55} />
                <FlowDotLineV className="left-[625px] top-[510px]" height={30} delay={1.55} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="border-t border-slate-800 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              About Anturon
            </span>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              AI voice workforce for modern sales teams
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-300 md:text-base">
              Anturon helps companies automate inbound and outbound calling using
              AI voice agents. Our mission is to help businesses scale
              conversations, respond instantly to leads, and build efficient sales
              workflows using intelligent voice automation.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">— Deepak Pandey</p>
              <p className="text-sm text-orange-300">Founder, Anturon</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="book-demo" className="border-t border-slate-800 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3 text-3xl font-semibold">Book a Demo</h2>

              <p className="mb-8 text-slate-400">
                Share your details and we&apos;ll set up a live Anturon playground
                for your team.
              </p>

              <div className="space-y-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none"
                />

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none"
                />

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 outline-none"
                />

                <Link href="/demo">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-4 w-full rounded-full bg-orange-500 py-2 font-semibold text-black transition hover:bg-orange-400"
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full min-h-[340px] rounded-2xl border border-slate-600 bg-slate-900/50 p-4 sm:min-h-[420px]"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                  MINI FAQ
                </h3>

                <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] font-medium text-orange-300">
                  Scroll
                </span>
              </div>

              <p className="mb-2 text-xs text-slate-300">Frequently Asked Questions</p>

              <div className="faq-scroll h-[240px] overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2 sm:h-[300px]">
                <div className="faq-track flex flex-col gap-3">
                  {[
                    {
                      q: "How does Anturon's Voice AI sound compared to a human agent?",
                      a: "Anturon's AI voice agents mirror natural speech patterns including pacing, pauses, tonality and cloning, making them sound like a human rep in most conversations.",
                    },
                    {
                      q: "Will Anturon disrupt our existing CRM or telephony setup?",
                      a: "No. Anturon is built for zero-disruption deployment and plugs directly into your CRM, dialer and lead sources with no infrastructure changes required.",
                    },
                    {
                      q: "How quickly can we go live with Anturon?",
                      a: "Most enterprise teams are fully operational within 10 days of onboarding, including CRM integration and playbook setup.",
                    },
                    {
                      q: "Is Anturon compliant with enterprise data and call regulations?",
                      a: "Yes. Anturon includes built-in call recording controls, consent management and audit-ready logs to support enterprise compliance requirements.",
                    },
                    {
                      q: "Can Anturon handle both inbound and outbound calls?",
                      a: "Yes. Anturon supports inbound customer support, outbound sales, BPO workflows, appointment booking and demo scheduling within a single platform.",
                    },
                    {
                      q: "Can Anturon follow our team’s exact call script?",
                      a: "Yes. Anturon can be configured around your script, tone, qualification logic and escalation rules.",
                    },
                    {
                      q: "Does Anturon support pilot deployments before full rollout?",
                      a: "Yes. Most teams start with a focused pilot and then expand across campaigns, teams and workflows.",
                    },
                    {
                      q: "How does Anturon's Voice AI sound compared to a human agent?",
                      a: "Anturon's AI voice agents mirror natural speech patterns including pacing, pauses, tonality and cloning, making them sound like a human rep in most conversations.",
                    },
                    {
                      q: "Will Anturon disrupt our existing CRM or telephony setup?",
                      a: "No. Anturon is built for zero-disruption deployment and plugs directly into your CRM, dialer and lead sources with no infrastructure changes required.",
                    },
                    {
                      q: "How quickly can we go live with Anturon?",
                      a: "Most enterprise teams are fully operational within 10 days of onboarding, including CRM integration and playbook setup.",
                    },
                    {
                      q: "Is Anturon compliant with enterprise data and call regulations?",
                      a: "Yes. Anturon includes built-in call recording controls, consent management and audit-ready logs to support enterprise compliance requirements.",
                    },
                    {
                      q: "Can Anturon handle both inbound and outbound calls?",
                      a: "Yes. Anturon supports inbound customer support, outbound sales, BPO workflows, appointment booking and demo scheduling within a single platform.",
                    },
                    {
                      q: "Can Anturon follow our team’s exact call script?",
                      a: "Yes. Anturon can be configured around your script, tone, qualification logic and escalation rules.",
                    },
                    {
                      q: "Does Anturon support pilot deployments before full rollout?",
                      a: "Yes. Most teams start with a focused pilot and then expand across campaigns, teams and workflows.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-800 bg-slate-900/60 p-3"
                    >
                      <p className="text-[12px] font-semibold leading-5 text-white">
                        {item.q}
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="news-box relative min-h-[560px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-0 md:min-h-[700px] lg:min-h-[800px]"
          >
            <div className="news-header relative z-10 border-b border-slate-800 px-6 py-5">
              <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Latest News
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Product &amp; Campaign Updates
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                See what&apos;s happening across Anturon voice agents, dashboards and
                outbound campaigns.
              </p>
            </div>

            <div className="news-viewport relative h-[420px] overflow-hidden px-4 py-4 sm:h-[520px] sm:px-6 lg:h-[620px]">
              <div className="news-fade-top pointer-events-none absolute left-0 right-0 top-0 z-[1] h-14" />
              <div className="news-fade-bottom pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-12" />

              <div className="news-scroll flex flex-col gap-4">
                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Natural-Quality AI Voice with Human-Like Cloning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Conversations so realistic, they’re indistinguishable from your
                    best human representative.
                  </p>
                </div>

                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Intelligent Lead Prioritization
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    AI automatically ranks and sequences leads so your reps focus only
                    on the highest-intent prospects.
                  </p>
                </div>

                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Custom Playbook Execution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Every call follows your exact script, tone, and sales logic for
                    consistent conversations.
                  </p>
                </div>

                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Seamless Live Agent Handoff
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    AI instantly transfers the call to a human rep when customer intent
                    spikes.
                  </p>
                </div>

                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Automatic CRM Logging
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Every call, note, and outcome is automatically synced to your CRM.
                  </p>
                </div>

                <div className="news-card rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <p className="text-sm font-semibold text-white">
                    Compliance & Call Recording Controls
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Built-in recording, consent management, and audit-ready logs ensure
                    full compliance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}