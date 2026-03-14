"use client";

import { useState } from "react";

type TabKey = "how" | "customise" | "roi" | "resources";

const tabs: { key: TabKey; label: string }[] = [
  { key: "how", label: "HOW DOES IT WORK" },
  { key: "customise", label: "CUSTOMISE YOUR AGENT" },
  { key: "roi", label: "ROI VIEW" },
  { key: "resources", label: "RESOURCES" },
];

export default function PlaygroundSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("how");

  return (
    <section
      id="playground"
      className="border-t border-slate-800 bg-slate-950 px-4 py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Explore how the call experience looks
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Click any option below to understand Anturon’s capabilities in a
            clean, demo-ready format.
          </p>
        </header>
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "rounded-full px-5 py-2 text-xs font-medium tracking-wide transition",
                  "border border-slate-700/70 bg-slate-900/70",
                  "hover:border-orange-400 hover:text-orange-100",
                  isActive
                    ? "border-orange-500 bg-orange-500/10 text-orange-100 shadow-[0_0_0_1px_rgba(249,115,22,0.4)]"
                    : "text-slate-300",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg md:p-8">
            {activeTab === "how" && <HowItWorks />}
            {activeTab === "customise" && <CustomAgent />}
            {activeTab === "roi" && <RoiView />}
            {activeTab === "resources" && <Resources />}
          </div>
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-6 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Preview Area
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              This will show previews like call flow, agent settings, dashboards
              etc depending on the tab selected.
            </p>

            <div className="mt-6 rounded-xl bg-slate-950/60 p-4 text-sm text-slate-200">
              {activeTab === "how" && (
                <p>Preview: Complete visitor → exploration → demo booking flow.</p>
              )}
              {activeTab === "customise" && (
                <p>Preview: AI agent settings, tone, script & behaviour.</p>
              )}
              {activeTab === "roi" && (
                <p>Preview: ROI metrics & call analytics comparison.</p>
              )}
              {activeTab === "resources" && (
                <p>Preview: Documentation, security notes & guides.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase text-slate-300">
        User Journey
      </span>

      <h3 className="text-2xl font-semibold">
        From first visit to booked demo – in a few steps.
      </h3>

      <p className="text-sm text-slate-300">
        Show founders exactly how a visitor lands, explores and books a demo.
      </p>

      <ul className="space-y-2 text-sm text-slate-200">
        <li>• Visitor lands on hero section and sees the promise in 3–5 seconds</li>
        <li>• Scrolls into playground & tests interactive scenarios</li>
        <li>• Sees sample dashboards, call logs & AI behaviour</li>
        <li>• Trust builds → clicks “Book Demo” or “Talk to Us”</li>
      </ul>
    </div>
  );
}

function CustomAgent() {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase text-slate-300">
        Agent Settings
      </span>

      <h3 className="text-2xl font-semibold">Customise the AI agent</h3>

      <ul className="space-y-2 text-sm text-slate-200">
        <li>• Set tone, language & intro message</li>
        <li>• Configure call script, behaviour & fallback rules</li>
        <li>• CRM linking & automated note-taking</li>
      </ul>
    </div>
  );
}

function RoiView() {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase text-slate-300">
        ROI View
      </span>

      <h3 className="text-2xl font-semibold">Show clear ROI metrics</h3>

      <ul className="space-y-2 text-sm text-slate-200">
        <li>• Calls/day, peak load & answer rates</li>
        <li>• Cost per call vs human calling</li>
        <li>• Efficiency improvements & savings</li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase text-slate-300">
        Resources
      </span>

      <h3 className="text-2xl font-semibold">All decision-maker docs</h3>

      <ul className="space-y-2 text-sm text-slate-200">
        <li>• Setup checklist & onboarding guide</li>
        <li>• Compliance & security docs</li>
        <li>• Integration & support resources</li>
      </ul>
    </div>
  );
} 