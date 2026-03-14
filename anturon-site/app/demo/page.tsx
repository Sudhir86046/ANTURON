"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function DemoPage() {
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDemoForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting demo form:", demoForm);

      const res = await fetch("http://localhost:5000/api/demo-request", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(demoForm),
});

      const data = await res.json();
      console.log("Demo response:", data);

      if (data.success) {
        setShowPopup(true);
        setDemoForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Demo submit error:", error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Demo
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Book a live demo of Anturon
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            See how AI voice agents handle campaigns, qualify leads, and push
            structured results to your team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              What you will see
            </p>
            <div className="mt-5 space-y-3">
              {[
                "AI calling workflow walkthrough",
                "Lead qualification logic",
                "Dashboard and reporting view",
                "Campaign customization options",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Request a demo
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Let’s show you the workflow live
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Share your campaign use case, team size, or sales workflow and we
              will tailor the demo around it.
            </p>

            {!showPopup && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={demoForm.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={demoForm.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={demoForm.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={demoForm.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your use case"
                  value={demoForm.message}
                  onChange={handleChange}
                  className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-black hover:bg-orange-400 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Request demo"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center shadow-lg">
            <h2 className="text-xl font-bold text-green-400">
              Demo Request Submitted
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Our team will connect with you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 rounded-lg bg-orange-500 px-4 py-2 font-semibold text-black hover:bg-orange-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}