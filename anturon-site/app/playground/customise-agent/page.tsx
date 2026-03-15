"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../../components/Footer";

const previewImages = [
  "/preview1.jpg",
  "/preview2.jpg",
  "/preview3.jpg",
  "/preview4.jpg",
];

type OptionItem = {
  label: string;
  locked?: boolean;
};

function LockedBadge() {
  return (
    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-300">
      Locked
    </span>
  );
}

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniFlowCard({
  title,
  children,
  active = false,
}: {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[20px] border p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.35),0_12px_30px_rgba(0,0,0,0.22)] transition sm:p-5 ${
        active
          ? "border-orange-400/70 bg-orange-500/[0.06]"
          : "border-orange-500/25 bg-[#071226]/95"
      }`}
    >
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-orange-300">
        {title}
      </p>
      {children}
    </div>
  );
}

function HoverSelectBox({
  label,
  helper,
  value,
  options,
  onChange,
  preview,
}: {
  label: string;
  helper: string;
  value: string;
  options: OptionItem[];
  onChange: (value: string) => void;
  preview?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-orange-400/70 sm:p-5"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className="mb-3">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
          {label}
        </p>
        <p className="mt-1 text-xs leading-6 text-slate-400">{helper}</p>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-left transition hover:border-orange-400"
      >
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
            Selected
          </p>
          <p className="mt-1 text-sm font-medium text-white">{value}</p>
        </div>

        <div className="ml-3 flex shrink-0 items-center gap-2">
          <span className="text-xs text-slate-400">{open ? "Close" : "Choose"}</span>
          <ChevronIcon open={open} />
        </div>
      </button>

      <div
        className={`grid transition-all duration-200 ${
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            {options.map((option) => {
              const active = value === option.label;
              const locked = !!option.locked;

              return (
                <button
                  key={option.label}
                  type="button"
                  disabled={locked}
                  onClick={() => {
                    if (!locked) {
                      onChange(option.label);
                      setOpen(false);
                    }
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition ${
                    active
                      ? "border-orange-400 bg-orange-500/10"
                      : "border-slate-800 bg-slate-950/70 hover:border-slate-700"
                  } ${locked ? "cursor-not-allowed opacity-60" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{active ? "◉" : "○"}</span>
                    <span className="text-sm text-slate-200">{option.label}</span>
                  </div>

                  {locked ? <LockedBadge /> : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {preview ? (
        <div className="mt-3 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
          {preview}
        </div>
      ) : null}
    </div>
  );
}

function PlaygroundSelectBox({
  title,
  value,
  options,
  onChange,
  helper,
}: {
  title: string;
  value: string;
  options: { label: string; value: string; locked?: boolean }[];
  onChange: (value: string) => void;
  helper?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <MiniFlowCard title={title} active>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-left transition hover:border-orange-400"
      >
        <p className="text-sm font-medium text-slate-100">{value}</p>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="mt-3 space-y-2 rounded-xl border border-slate-800 bg-slate-950/95 p-2">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled={option.locked}
              onClick={() => {
                if (!option.locked) {
                  onChange(option.value);
                  setOpen(false);
                }
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-3 text-left transition ${
                value === option.value
                  ? "border-orange-400 bg-orange-500/10"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              } ${option.locked ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span className="text-sm text-slate-200">
                {value === option.value ? "◉" : "○"} {option.label}
              </span>
              {option.locked ? <LockedBadge /> : null}
            </button>
          ))}
        </div>
      )}

      {helper ? <p className="mt-2 text-xs text-slate-400">{helper}</p> : null}
    </MiniFlowCard>
  );
}

function Tile({
  sectionLabel,
  title,
  description,
  children,
}: {
  sectionLabel: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur sm:rounded-[28px] sm:p-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
        {sectionLabel}
      </p>
      <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
      <div className="mt-6 space-y-5">{children}</div>
    </div>
  );
}

export default function CustomiseAgentPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [tone, setTone] = useState("Professional & Formal");
  const [language, setLanguage] = useState("English");
  const [openingLine, setOpeningLine] = useState("Use agent name + company name");
  const [audience, setAudience] = useState("Enterprise Decision-Makers");
  const [qualification, setQualification] = useState(
    "Budget + Authority + Need (BANT)"
  );
  const [routing, setRouting] = useState("Hot → Assign to sales rep immediately");
  const [booking, setBooking] = useState("Yes - book demo if intent is detected");
  const [knowledge, setKnowledge] = useState("Basic product FAQs");

  const [topAgentName, setTopAgentName] = useState("Alex");
  const [topLanguage, setTopLanguage] = useState("Hindi");
  const [topPhoneNumber, setTopPhoneNumber] = useState("7464079221");
  const [topCompany, setTopCompany] = useState("");
  const [topIndustry, setTopIndustry] = useState("");
  const [topTeamSize, setTopTeamSize] = useState("");
  const [topUseCase, setTopUseCase] = useState("");
  const [topCampaignType, setTopCampaignType] = useState("");
  const [topCallVolume, setTopCallVolume] = useState("");
  const [topCrm, setTopCrm] = useState("");
  const [topNotes, setTopNotes] = useState("");

  const [agentPurpose, setAgentPurpose] = useState(
    "This agent calls warm leads from our website to qualify them for a product demo."
  );
  const [callType, setCallType] = useState("Outbound Sales Call");
  const [aiPrompt, setAiPrompt] = useState("");
  const [maxDuration, setMaxDuration] = useState("⏱ 2 Minutes (Trial Default)");
  const [desiredOutcome, setDesiredOutcome] = useState("Book a demo / appointment");

  const toneOptions = [
    { label: "Professional & Formal" },
    { label: "Friendly & Conversational" },
    { label: "Direct & Assertive" },
    { label: "Warm & Empathetic" },
  ];

  const languageOptions = [
    { label: "English" },
    { label: "Hindi", locked: true },
    { label: "Hinglish (Bilingual)", locked: true },
    { label: "Regional Languages", locked: true },
  ];

  const openingOptions = [
    { label: "Use agent name + company name" },
    { label: "Use only the agent name" },
    { label: "Custom opening script" },
  ];

  const audienceOptions = [
    { label: "Enterprise Decision-Makers" },
    { label: "SMB Owners" },
    { label: "Warm / Referred Leads" },
    { label: "Cold Outreach List" },
  ];

  const qualificationOptions = [
    { label: "Budget + Authority + Need (BANT)" },
    { label: "Interest + Availability" },
    { label: "Product-Fit Questions" },
    { label: "Custom Logic (Full Plan)" },
  ];

  const routingOptions = [
    { label: "Hot → Assign to sales rep immediately" },
    { label: "Warm → Add to nurture sequence" },
    { label: "Cold → Re-engagement campaign" },
    { label: "Custom routing rules (Full Plan)" },
  ];

  const bookingOptions = [
    { label: "Yes - book demo if intent is detected" },
    { label: "Yes - always attempt booking" },
    { label: "No - qualify only, no booking" },
    { label: "Custom booking flow (Full Plan)" },
  ];

  const knowledgeOptions = [
    { label: "Basic product FAQs" },
    { label: "Pricing objection responses" },
    { label: "Competitor comparison responses" },
    { label: "Full knowledge base upload" },
  ];

  const durationOptions = [
    { label: "2 Minutes", value: "⏱ 2 Minutes (Trial Default)" },
    { label: "3 Minutes (Growth Plan)", value: "3 Minutes (Growth Plan)", locked: true },
    { label: "5 Minutes (Enterprise)", value: "5 Minutes (Enterprise)", locked: true },
    { label: "Custom (Enterprise)", value: "Custom (Enterprise)", locked: true },
  ];

  const playgroundLanguageOptions = [
    { label: "Hindi", value: "Hindi", locked: true },
    { label: "Hinglish", value: "Hinglish" },
    { label: "English", value: "English", locked: true },
    { label: "Regional Languages", value: "Regional Languages", locked: true },
  ];

  const smartPrompt = useMemo(() => {
    const prompts: Record<string, string> = {
      "Outbound Sales Call":
        "Be professional and friendly. Start by asking if it's a good time to speak. Qualify the lead on budget and timeline. If interested, offer to book a demo.",
      "Inbound Support Call":
        "Be calm and helpful. Understand the issue, verify the customer context, and resolve the problem clearly or escalate with a concise summary.",
      "Lead Qualification Call":
        "Be structured and consultative. Understand need, timeline, authority, and urgency. Move qualified prospects to the next step quickly.",
      "Appointment / Demo Booking":
        "Be concise and confident. Confirm interest, propose a next step, and guide the caller toward confirming a demo slot.",
      "Payment Follow-up Call":
        "Be polite and direct. Confirm pending dues, explain the context, and encourage timely action without sounding harsh.",
      "Customer Onboarding Call":
        "Be warm and clear. Welcome the customer, explain the setup process, and answer common onboarding questions.",
    };

    return prompts[callType] || "";
  }, [callType]);

  useEffect(() => {
    setAiPrompt(smartPrompt);
  }, [smartPrompt]);

  useEffect(() => {
    if (audience === "Enterprise Decision-Makers") {
      setTopIndustry((prev) => prev || "Finance");
      setTopTeamSize((prev) => prev || "51-200");
    } else if (audience === "SMB Owners") {
      setTopIndustry((prev) => prev || "E-commerce");
      setTopTeamSize((prev) => prev || "11-50");
    } else if (audience === "Warm / Referred Leads") {
      setTopUseCase((prev) => prev || "Appointment Booking");
    } else if (audience === "Cold Outreach List") {
      setTopCampaignType((prev) => prev || "Outbound Sales");
    }
  }, [audience]);

  useEffect(() => {
    if (booking.includes("book demo")) {
      setDesiredOutcome("Book a demo / appointment");
    } else if (booking.includes("qualify only")) {
      setDesiredOutcome("Qualify the lead");
    }
  }, [booking]);

  useEffect(() => {
    if (qualification === "Interest + Availability") {
      setTopUseCase((prev) => prev || "Lead Qualification");
    }
    if (routing.includes("nurture")) {
      setTopCampaignType((prev) => prev || "Reminder Calls");
    }
  }, [qualification, routing]);

  const rightHighlights = {
    prompt: aiPrompt.trim().length > 0,
    purpose: agentPurpose.trim().length > 0,
    outcome: desiredOutcome !== "",
  };

  const handleContinueSetup = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <section className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 xl:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:gap-8 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-6 sm:space-y-8">
            <Tile
              sectionLabel="Voice & Behaviour"
              title="Give Your AI Agent a Voice That Sounds Like Your Brand"
              description="Define how your agent speaks, what tone it carries, and how it adapts to different audiences — so every call reflects your brand, not a generic bot."
            >
              <HoverSelectBox
                label="Tone & Speaking Style"
                helper="Choose how your agent sounds on every call."
                value={tone}
                options={toneOptions}
                onChange={setTone}
                preview={
                  <>
                    <p className="text-sm text-slate-200">
                      Your agent will sound:{" "}
                      <span className="font-semibold text-orange-300">{tone}</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Consistent across every call, every lead.
                    </p>
                  </>
                }
              />

              <HoverSelectBox
                label="Language & Conversation Flow"
                helper="Set the primary language for all calls."
                value={language}
                options={languageOptions}
                onChange={setLanguage}
                preview={
                  <p className="text-sm text-slate-300">
                    Language: <span className="font-medium text-white">{language}</span>,
                    multi-language support available in paid plans.
                  </p>
                }
              />

              <HoverSelectBox
                label="Brand-Specific Opening Line"
                helper="How should your agent introduce itself?"
                value={openingLine}
                options={openingOptions}
                onChange={setOpeningLine}
                preview={
                  <p className="text-sm text-slate-300">
                    Preview:{" "}
                    <span className="font-medium text-white">
                      Hi, I&apos;m {topAgentName} calling from {topCompany || "Anturon"}. Is
                      this a good time to connect?
                    </span>
                  </p>
                }
              />

              <HoverSelectBox
                label="Audience-Based Conversation Style"
                helper="Who is your agent calling?"
                value={audience}
                options={audienceOptions}
                onChange={setAudience}
                preview={
                  <p className="text-sm text-slate-300">
                    Audience mode selected:{" "}
                    <span className="font-medium text-white">{audience}</span>
                  </p>
                }
              />
            </Tile>

            <Tile
              sectionLabel="Call Flow & Outcomes"
              title="Define Every Step of the Conversation — From Opening Line to Closed Deal"
              description="Set your qualification logic, objection responses, and post-call actions — your agent follows the exact flow you design, on every single call."
            >
              <HoverSelectBox
                label="Qualification Criteria"
                helper="What should your agent qualify leads on?"
                value={qualification}
                options={qualificationOptions}
                onChange={setQualification}
                preview={
                  <p className="text-sm text-slate-300">
                    ✓ Qualifying leads on:{" "}
                    <span className="font-medium text-white">{qualification}</span>
                  </p>
                }
              />

              <HoverSelectBox
                label="Post-Call Lead Routing"
                helper="Where should leads go after the call?"
                value={routing}
                options={routingOptions}
                onChange={setRouting}
                preview={
                  <p className="text-sm text-slate-300">
                    ✓ Routing logic:{" "}
                    <span className="font-medium text-white">{routing}</span>
                  </p>
                }
              />

              <HoverSelectBox
                label="Demo / Appointment Booking"
                helper="Should your agent attempt to book a demo?"
                value={booking}
                options={bookingOptions}
                onChange={setBooking}
                preview={
                  <p className="text-sm text-slate-300">
                    ✓ Agent will: <span className="font-medium text-white">{booking}</span>
                  </p>
                }
              />

              <HoverSelectBox
                label="Objection Handling & Knowledge"
                helper="What should your agent know?"
                value={knowledge}
                options={knowledgeOptions}
                onChange={setKnowledge}
                preview={
                  <p className="text-sm text-slate-300">
                    ✓ Agent loaded with:{" "}
                    <span className="font-medium text-white">{knowledge}</span>
                  </p>
                }
              />
            </Tile>
          </div>

          <div className="h-fit xl:sticky xl:top-6">
            <div className="overflow-hidden rounded-[24px] border border-slate-800 bg-[#030712] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px]">
              <div className="border-b border-slate-800 px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-400">
                  Live Agent Playground
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                  Your Agent Is Ready.
                  <span className="block text-orange-400">Now Hear It Call You.</span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Fill in the details below and take a 2-minute live call from the AI
                  agent you just configured.
                </p>
              </div>

              <div className="relative p-4 sm:p-5">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <MiniFlowCard title="Agent Name" active>
                    <input
                      type="text"
                      value={topAgentName}
                      onChange={(e) => setTopAgentName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    />
                    <p className="mt-2 text-xs text-slate-400">
                      Default agent name set to Alex.
                    </p>
                  </MiniFlowCard>

                  <PlaygroundSelectBox
                    title="Language Selection"
                    value={topLanguage}
                    onChange={setTopLanguage}
                    options={playgroundLanguageOptions}
                    helper="Only Hindi and Hinglish are selectable in this trial setup."
                  />

                  <MiniFlowCard
                    title="AI Prompt, Agent Behaviour & Capabilities"
                    active={rightHighlights.prompt}
                  >
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      rows={6}
                      maxLength={500}
                      placeholder="e.g. Be professional and friendly. Start by asking if it's a good time to speak..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    />
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-xs text-slate-400">
                        Think of this as your agent&apos;s instruction manual for the call.
                      </p>
                      <p className="shrink-0 text-xs text-slate-500">{aiPrompt.length}/500</p>
                    </div>
                  </MiniFlowCard>

                  <MiniFlowCard title="Agent Purpose" active={rightHighlights.purpose}>
                    <textarea
                      value={agentPurpose}
                      onChange={(e) => setAgentPurpose(e.target.value)}
                      rows={3}
                      maxLength={300}
                      placeholder="e.g. This agent calls warm leads from our website to qualify them for a product demo."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    />
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <p className="text-xs text-slate-400">
                        This shapes how your agent frames the call objective.
                      </p>
                      <p className="shrink-0 text-xs text-slate-500">{agentPurpose.length}/300</p>
                    </div>
                  </MiniFlowCard>

                  <MiniFlowCard title="Call Type" active>
                    <select
                      value={callType}
                      onChange={(e) => setCallType(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    >
                      <option>Outbound Sales Call</option>
                      <option>Inbound Support Call</option>
                      <option>Lead Qualification Call</option>
                      <option>Appointment / Demo Booking</option>
                      <option>Payment Follow-up Call</option>
                      <option>Customer Onboarding Call</option>
                    </select>
                    <p className="mt-2 text-xs text-slate-400">
                      This defines the call context and shapes the agent&apos;s opening.
                    </p>
                  </MiniFlowCard>

                  <MiniFlowCard title="The Agent Will Call You On" active>
                    <input
                      type="tel"
                      value={topPhoneNumber}
                      onChange={(e) => setTopPhoneNumber(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    />
                  </MiniFlowCard>

                  <PlaygroundSelectBox
                    title="Max Call Duration"
                    value={maxDuration}
                    onChange={setMaxDuration}
                    options={durationOptions}
                    helper="Trial calls are limited to 2 minutes. Full call duration control available in paid plans."
                  />

                  <MiniFlowCard title="Desired Call Outcome" active={rightHighlights.outcome}>
                    <select
                      value={desiredOutcome}
                      onChange={(e) => setDesiredOutcome(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-orange-400"
                    >
                      <option>Qualify the lead</option>
                      <option>Book a demo / appointment</option>
                      <option>Collect contact information</option>
                      <option>Pitch the product</option>
                      <option>Follow up on previous conversation</option>
                      <option>Recover an unpaid/lapsed account</option>
                    </select>
                    <p className="mt-2 text-xs text-slate-400">
                      Your agent will steer the conversation toward this outcome.
                    </p>
                  </MiniFlowCard>

                  <div className="pt-1">
                    <Link href="/demo">
                      <button
                        type="button"
                        onClick={handleContinueSetup}
                        disabled={isSubmitting}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-950 transition ${
                          isSubmitting
                            ? "cursor-not-allowed bg-orange-300"
                            : "bg-orange-500 hover:bg-orange-400"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900/30 border-t-slate-900" />
                            Processing Setup...
                          </>
                        ) : (
                          "Call Me Now - Start 2-Min Trial"
                        )}
                      </button>
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4">
                    <p className="text-sm font-medium text-white">
                      Join enterprises already running 10,000+ AI calls per day
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      Most teams go live in under 2-3 days.
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                      Configuration Preview
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                      See how customization works in practice
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Preview the UI and agent setup layers that shape behaviour,
                      qualification, and workflow outcomes.
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {previewImages.map((src, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedImage(src)}
                          className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left transition duration-300 hover:scale-[1.02] hover:border-orange-400"
                        >
                          <div className="relative h-40 w-full sm:h-36">
                            <Image
                              src={src}
                              alt={`Customisation preview ${index + 1}`}
                              fill
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[70vh] w-full max-w-6xl sm:h-[80vh]">
            <Image
              src={selectedImage}
              alt="Full preview"
              fill
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}