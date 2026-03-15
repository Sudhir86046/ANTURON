"use client";

import { useState } from "react";

type DashboardForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

export default function DashboardAccessPage() {
  const [form, setForm] = useState<DashboardForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://13.63.125.236:5000";

      const res = await fetch(`${apiUrl}/api/dashboard-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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

      if (data.success) {
        setShowPopup(true);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Dashboard form submit error:", error);
      alert("Form submit failed. Please check backend/API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden bg-slate-950 px-4 py-8 text-white sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-[0_0_40px_rgba(0,0,0,0.35)] sm:p-6">
        <div className="mb-5">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-xs">
            Dashboard Access
          </span>

          <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
            Access Dashboard
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
            Fill in your details and our team will help you with dashboard
            access.
          </p>
        </div>

        {!showPopup && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-orange-400 sm:text-base"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center shadow-[0_0_40px_rgba(0,0,0,0.45)] sm:p-6">
            <h2 className="text-xl font-bold text-green-400 sm:text-2xl">
              Request Submitted
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
    </div>
  );
}