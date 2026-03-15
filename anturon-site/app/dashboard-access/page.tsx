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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-xl bg-slate-900 p-6 shadow-lg">
        <h1 className="mb-2 text-xl font-bold">Access Dashboard</h1>
        <p className="mb-4 text-sm text-slate-300">
          Fill in your details and our team will help you with dashboard access.
        </p>

        {!showPopup && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-3 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-3 outline-none"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-3 outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-3 outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-orange-500 p-3 font-bold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-sm rounded-xl bg-slate-900 p-6 text-center shadow-lg">
            <h2 className="text-xl font-bold text-green-400">
              Request Submitted
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              Our team will connect with you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 rounded bg-orange-500 px-4 py-2 font-semibold text-black hover:bg-orange-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
