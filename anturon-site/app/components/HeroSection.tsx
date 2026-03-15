"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Calls Handled Daily", value: "10,000+" },
  { label: "Avg. Agent Response Time", value: "0.8 sec" },
  { label: "Go-Live in Under 2-3 Days", value: "2-3 Days" },
];

export default function HeroSection() {
  const [showIntroGlow, setShowIntroGlow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntroGlow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-black"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[-120px] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl transition-opacity duration-1000 sm:h-[360px] sm:w-[360px] ${
          showIntroGlow ? "opacity-100" : "opacity-30"
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-90px] h-40 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-3 pb-2 pt-10 sm:px-4 md:flex-row md:items-center md:gap-10 md:pb-4 md:pt-12 lg:px-6 xl:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-medium text-orange-300 sm:text-xs">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
            <span className="whitespace-normal sm:whitespace-nowrap">
              LIVE | Enterprise Voice AI - Inbound · Outbound · Support · BPO
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[68px] lg:leading-[1.02]">
            Turn{" "}
            <span className="text-orange-500">Every Enterprise Call</span> Into
            a Closed Deal - Automatically.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Anturon&apos;s AI voice agents handle inbound and outbound calls
            across sales, customer support, BPO, and scheduling - sounding
            natural, following your playbooks, and syncing live with the CRM.
            Your team engages only the leads that are ready to close.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <div className="flex w-full flex-col items-start sm:w-auto">
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-orange-400 sm:w-auto sm:px-7 sm:text-base"
              >
                Book a Live Demo
              </Link>
              <span className="mt-2 text-sm text-slate-400">
                See Agent in Action
              </span>
            </div>

            <div className="flex w-full flex-col items-start sm:w-auto">
              <Link
                href="#pilot"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60 sm:w-auto sm:px-9 sm:text-base"
              >
                Start Pilot
              </Link>
              <span className="mt-2 text-sm text-slate-400">
                Live in 2-3 days.
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4"
              >
                <div className="text-[11px] uppercase tracking-wide text-slate-400 sm:text-[12px]">
                  {item.label}
                </div>
                <div className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-500 sm:text-sm">
            Integrates seamlessly with your existing CRM, dialer & lead stack —
            zero infrastructure changes, zero disruption to your current
            workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 flex-1"
        >
          <div className="mx-auto w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur sm:max-w-md sm:p-5 lg:max-w-[520px]">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-2">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs font-semibold text-orange-300">
                  AI
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-slate-100 sm:text-sm">
                    Outbound campaign: Hot leads
                  </p>
                  <p className="text-[11px] text-slate-400 sm:text-xs">
                    3 agents live · 127 calls in progress
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <CallRow
                name="Retail Lead"
                number="+91 •••• 1823"
                status="Connected · 02:14"
                stage="Qualification"
              />
              <CallRow
                name="Retail Lead"
                number="+91 •••• 9051"
                status="Ringing · auto-retry"
                stage="Follow-up"
              />
              <CallRow
                name="SME Lead"
                number="+91 •••• 4410"
                status="Wrap-up · notes syncing"
                stage="Booked demo"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[11px] text-slate-400">
                Answer rate today
                <div className="text-sm font-semibold text-slate-50">80%</div>
              </div>

              <button className="rounded-full bg-slate-100/10 px-3 py-2 text-[11px] font-medium text-slate-100 transition hover:bg-slate-100/15">
                View call dashboard
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CallRowProps = {
  name: string;
  number: string;
  status: string;
  stage: string;
};

function CallRow({ name, number, status, stage }: CallRowProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold text-slate-100 sm:text-sm">
          {name}
        </p>
        <p className="text-[11px] text-slate-500">{number}</p>
        <p className="mt-0.5 text-[11px] text-emerald-300">{status}</p>
      </div>

      <div className="inline-flex w-fit rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-200">
        {stage}
      </div>
    </div>
  );
}