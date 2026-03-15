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

      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://13.63.125.236:5000";

      const res = await fetch(`${apiUrl}/api/demo-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(demoForm),
      });

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error response:", errorText);
        throw new Error(`Request failed with status ${res.status}`);
      }

      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response received:", text);
        throw new Error("Server did not return JSON");
      }

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
      alert("Form submit failed. Please check backend/API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 px-4 py-10 text-white sm:px-6 sm:py-12">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
            Demo
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Book a live demo of Anturon
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            See how AI voice agents handle campaigns, qualify leads, and push
            structured results to your team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
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
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-300 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-orange-400 sm:text-sm">
              Request a demo
            </p>

            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              Let’s show you the workflow live
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Share your campaign use case, team size, or sales workflow and we
              will tailor the demo around it.
            </p>

            {!showPopup && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={demoForm.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={demoForm.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={demoForm.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={demoForm.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your use case"
                  value={demoForm.message}
                  onChange={handleChange}
                  className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
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
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center shadow-lg sm:p-6">
            <h2 className="text-xl font-bold text-green-400 sm:text-2xl">
              Demo Request Submitted
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Our team will connect with you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 sm:text-base"
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