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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-10 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.22),_transparent_35%),linear-gradient(to_bottom,_#0b1120,_#050816,_#020617)]" />

      <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-orange-500/50 blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-orange-400/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/30 blur-3xl animate-pulse" />

      <div className="absolute left-[10%] top-[18%] h-24 w-24 rounded-full border border-orange-400/30 bg-orange-500/10 blur-sm animate-[bounce_6s_ease-in-out_infinite]" />
      <div className="absolute right-[12%] top-[22%] h-16 w-16 rounded-full border border-orange-300/40 bg-orange-300/10 blur-sm animate-[bounce_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[18%] left-[18%] h-20 w-20 rounded-full border border-orange-500/30 bg-orange-400/10 blur-sm animate-[bounce_7s_ease-in-out_infinite]" />

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-orange-500/20 bg-slate-900/70 p-5 shadow-[0_0_60px_rgba(249,115,22,0.12)] backdrop-blur-xl sm:p-6">
        <div className="mb-5">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300 sm:text-xs">
            Dashboard Access
          </span>

          <h1 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Access Dashboard
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
            Fill in your details and our team will help you with dashboard
            access.
          </p>

          <p className="mt-4 text-sm text-slate-300">
            Already have access?{" "}
           <a
  href="https://api.anturon.io"
  className="text-orange-500 font-semibold hover:text-orange-400 transition"
  onClick={(e) => {
    e.preventDefault();
    window.location.href = "https://api.anturon.io";
  }}
>
  Login
</a>
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
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-slate-800 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.10)] sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-slate-800 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.10)] sm:text-base"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-slate-800 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.10)] sm:text-base"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-slate-400 focus:border-orange-400 focus:bg-slate-800 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.10)] sm:text-base"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(249,115,22,0.30)] disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-orange-500/20 bg-slate-900/90 p-5 text-center shadow-[0_0_60px_rgba(249,115,22,0.18)] sm:p-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
              <span className="text-3xl text-green-400">✓</span>
            </div>

            <h2 className="mt-4 text-xl font-bold text-green-400 sm:text-2xl">
              Request Submitted
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
              Our team will connect with you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:shadow-[0_10px_30px_rgba(249,115,22,0.25)] sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}