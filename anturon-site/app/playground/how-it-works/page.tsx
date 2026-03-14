"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";

const previewImages = [
  "/preview1.jpg",
  "/preview2.jpg",
  "/preview3.jpg",
  "/preview4.jpg",
];

export default function PlaygroundDetailPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Section 01
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              How your AI agent works
            </h1>
            <p className="text-base leading-7 text-slate-300">
              Anturon AI voice agents automatically handle outbound and inbound
              calls for your sales team. The system connects with your lead
              sources, initiates intelligent conversations, and qualifies
              prospects before passing them to your team. Instead of manual cold
              calling, the AI agent follows a structured conversation flow
              designed for sales campaigns. It can introduce your offer, ask
              qualification questions, capture intent, and schedule the next
              step. Every interaction is recorded and structured as usable data
              so that your team gets clear insights about which leads are ready
              to convert.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Section 02
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              Why this page matters
            </h2>
            <p className="text-base leading-7 text-slate-300">
              Traditional call centers require large teams to manage high call
              volumes. Anturon replaces repetitive work with intelligent
              automation while still keeping conversations natural and
              goal-driven. The AI agent adapts its responses based on user
              answers and keeps the conversation aligned with the campaign
              objective.
            </p>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                AI voice call automation
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                Lead qualification flow
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                Dashboard and campaign insights
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Preview Box
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Multiple visual previews
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previewImages.map((src, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left transition hover:scale-[1.02] hover:border-orange-400"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={src}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedImage(null)}
        >
        <div className="relative h-[80vh] w-full max-w-6xl flex items-center justify-center">
  <Image
    src={selectedImage}
    alt="Full preview"
    fill
    className="object-contain"
  />
</div>
        </div>
      )}
      <Footer/>
    </main>
  );
}