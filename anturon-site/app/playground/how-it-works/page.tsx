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
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg sm:rounded-3xl sm:p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
              Section 01
            </p>
            <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              How your AI agent works
            </h1>
            <p className="text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
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

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg sm:rounded-3xl sm:p-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
              Section 02
            </p>
            <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
              Why this page matters
            </h2>
            <p className="text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
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

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg sm:rounded-3xl sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
                Preview Box
              </p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
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
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left transition duration-200 hover:scale-[1.02] hover:border-orange-400"
              >
                <div className="relative h-56 w-full sm:h-48 md:h-52 lg:h-56">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex h-[70vh] w-full max-w-6xl items-center justify-center sm:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-sm text-white hover:bg-slate-700 sm:right-4 sm:top-4"
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Full preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}