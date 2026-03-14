"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section id="about" className="border-t border-slate-800 px-4 py-20">
        <div className="mx-auto max-w-6xl space-y-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              About Anturon
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              AI voice workforce for modern sales teams
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              Anturon helps companies automate inbound and outbound calling using AI
              voice agents. Our goal is to help teams scale conversations, respond
              faster to leads and build more efficient sales workflows.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">
              — Deepak Pandey
            </p>
            <p className="text-sm text-orange-300">Founder, Anturon</p>
          </motion.div>
        </div>
 
          
      </section>
      <Footer/>
    </main>
  );
}