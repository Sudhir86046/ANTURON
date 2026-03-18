 "use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Calls Handled Daily", value: "10,000+" },
  { label: "Avg. Agent Response Time", value: "0.8 sec" },
  { label: "Go-Live in Under 2-3 Days", value: "2-3 Days" },
];

const useCasePairs = [
  ["Lead Qualification", "Sales Process"],
  ["Customer Support", "Appointment Scheduling"],
  ["Real Estate", "Healthcare"],
  ["Retail", "EdTech / Universities"],
];

const answerRateSequence = [57, 65, 62, 68, 74, 71, 78, 75, 79, 77, 80];

type FlowType = "hot" | "cold" | "warm";

export default function HeroSection() {
  const [showIntroGlow, setShowIntroGlow] = useState(true);

  const [callsInProgress, setCallsInProgress] = useState(127);
  const [callingCapacity, setCallingCapacity] = useState(100);
  const [latency, setLatency] = useState(300);

  const [useCaseIndex, setUseCaseIndex] = useState(0);
  const [flowType, setFlowType] = useState<FlowType>("hot");

  const [hotValue, setHotValue] = useState(105);
  const [coldValue, setColdValue] = useState(80);
  const [warmValue, setWarmValue] = useState(150);

  const [answerRate, setAnswerRate] = useState(answerRateSequence[0]);

  useEffect(() => {
    const t = setTimeout(() => setShowIntroGlow(false), 2500);
    return () => clearTimeout(t);
  }, []);

  // top calls in progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCallsInProgress((prev) => (prev >= 5000 ? 127 : prev + 14));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // UNMATCHED fast increase
  useEffect(() => {
    const interval = setInterval(() => {
      setCallingCapacity((prev) => (prev >= 100000 ? 100 : prev + 399));
    }, 35);

    return () => clearInterval(interval);
  }, []);

  // ULTRA decimal decrease
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const next = prev - 0.25;
        return next <= 150 ? 300 : Number(next.toFixed(2));
      });
    }, 22);

    return () => clearInterval(interval);
  }, []);

  // MULTIPLE use cases rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setUseCaseIndex((prev) => (prev + 1) % useCasePairs.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Instant flow type rotate
  useEffect(() => {
    const sequence: FlowType[] = ["hot", "cold", "warm"];

    const interval = setInterval(() => {
      setFlowType((prev) => {
        const currentIndex = sequence.indexOf(prev);
        return sequence[(currentIndex + 1) % sequence.length];
      });
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  // Instant values slow growth
  useEffect(() => {
    const interval = setInterval(() => {
      setHotValue((prev) => {
        const next = prev + 320;
        return next >= 10000 ? 10000 : next;
      });

      setColdValue((prev) => {
        const next = prev + 210;
        return next >= 35000 ? 35000 : next;
      });

      setWarmValue((prev) => {
        const next = prev + 210;
        return next >= 42000 ? 42000 : next;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // Answer rate fixed sequence
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % answerRateSequence.length;
      setAnswerRate(answerRateSequence[index]);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  const flowMeta = {
    hot: {
      label: "HOT",
      value: hotValue,
      color: "text-orange-300",
      subtle: "text-orange-200/80",
    },
    cold: {
      label: "COLD",
      value: coldValue,
      color: "text-cyan-300",
      subtle: "text-cyan-200/80",
    },
    warm: {
      label: "WARM",
      value: warmValue,
      color: "text-amber-300",
      subtle: "text-amber-200/80",
    },
  }[flowType];

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

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 pb-6 pt-10 sm:px-6 md:gap-10 md:pb-8 md:pt-12 lg:flex-row lg:items-center lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex-1"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[10px] font-medium text-orange-300 sm:text-xs">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="whitespace-normal sm:whitespace-nowrap">
              LIVE | Enterprise Voice AI - Inbound · Outbound · Support · BPO
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[68px] lg:leading-[1.02]">
            Turn <span className="text-orange-500">Every Enterprise Call</span> Into
            a Closed Deal - Automatically.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            Anturon&apos;s AI voice agents handle inbound and outbound calls across
            sales, customer support, BPO, and scheduling - sounding natural,
            following your playbooks, and syncing live with the CRM. Your team
            engages only the leads that are ready to close.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <div className="flex w-full flex-col items-start sm:w-auto">
              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-orange-400 sm:w-auto sm:px-7 sm:text-base"
              >
                Book a Live Demo
              </Link>
              <span className="mt-2 text-sm text-slate-400">See Agent in Action</span>
            </div>

            <div className="flex w-full flex-col items-start sm:w-auto">
              <Link
                href="#playground"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60 sm:w-auto sm:px-9 sm:text-base"
              >
                Start Pilot
              </Link>
              <span className="mt-2 text-sm text-slate-400">Live in 2-3 days.</span>
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
            zero infrastructure changes, zero disruption to your current workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 flex-1 lg:-translate-y-6"
        >
          <div className="mx-auto w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur sm:max-w-md sm:p-5 lg:max-w-[540px]">
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
                    <span className="font-semibold text-slate-200">7 agents live</span>
                    {" · "}
                    <span className="font-semibold text-cyan-300">
                      {callsInProgress}
                    </span>{" "}
                    calls in progress
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                Live
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <SimpleMetricRow
                title="UNMATCHED"
                subtitle="Calling Capacity"
                rightContent={
                  <PlainMetric
                    value={callingCapacity.toLocaleString()}
                    suffix="calls/hour"
                    valueClassName="text-emerald-300"
                  />
                }
              />

              <SimpleMetricRow
                title="ULTRA"
                subtitle="Low Latency"
                rightContent={
                  <PlainMetric
                    value={latency.toFixed(2)}
                    suffix="ms"
                    valueClassName="text-violet-300"
                  />
                }
              />

              <SimpleMetricRow
                title="MULTIPLE"
                subtitle="Use Cases"
                rightContent={
                  <div className="min-w-[220px] text-right sm:min-w-[250px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`pair-${useCaseIndex}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="flex flex-col items-end gap-1"
                      >
                        <span className="text-sm font-semibold text-orange-300">
                          {useCasePairs[useCaseIndex][0]}
                        </span>
                        <span className="text-sm font-semibold text-orange-200">
                          {useCasePairs[useCaseIndex][1]}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                }
              />
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                    Instant
                  </div>
                  <div className="mt-1 text-base font-semibold leading-snug text-slate-100 sm:text-[11px]">
                    Lead Qualification
                  </div>
                </div>

                <div className="min-w-[170px] text-right">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={flowType}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col items-end"
                    >
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wide ${flowMeta.color}`}
                      >
                        {flowMeta.label}
                      </span>

                      <div className="mt-0.5 flex items-end gap-1 justify-end">
                        <span
                          className={`min-w-[78px] text-right tabular-nums text-[18px] font-bold sm:text-[20px] ${flowMeta.color}`}
                        >
                          {flowMeta.value.toLocaleString()}
                        </span>
                        <span className={`text-[10px] ${flowMeta.subtle}`}>
                          leads
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-[11px] text-slate-400">
                Answer rate 
                <div className="mt-1 min-h-[28px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={answerRate}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="inline-block min-w-[52px] tabular-nums text-lg font-bold text-emerald-300"
                    >
                      {answerRate}%
                    </motion.span>
                  </AnimatePresence>
                </div>
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

type SimpleMetricRowProps = {
  title: string;
  subtitle: string;
  rightContent: React.ReactNode;
};

function SimpleMetricRow({
  title,
  subtitle,
  rightContent,
}: SimpleMetricRowProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="text-[14px] font-semibold uppercase tracking-[0.2em] text-orange-300">
          {title}
        </div>
        <div className="mt-1 text-sm font-semibold leading-snug text-slate-100 sm:text-[11px]">
         {subtitle}
        </div>
      </div>

      <div className="w-full sm:w-auto">{rightContent}</div>
    </div>
  );
}

type PlainMetricProps = {
  value: string;
  suffix: string;
  valueClassName?: string;
};

function PlainMetric({
  value,
  suffix,
  valueClassName = "",
}: PlainMetricProps) {
  return (
    <div className="text-right">
      <div className="inline-flex items-end gap-1">
        <span
          className={`min-w-[78px] text-right tabular-nums text-[18px] font-bold sm:text-[20px] ${valueClassName}`}
        >
          {value}
        </span>
        <span className="text-[11px] font-medium text-slate-400">{suffix}</span>
      </div>
    </div>
  );
}