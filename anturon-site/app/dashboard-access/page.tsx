"use client";

import { useState } from "react";

export default function DashboardAccessPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="w-[400px] rounded-xl bg-slate-900 p-6">
        <h1 className="mb-4 text-xl font-bold">Access Dashboard</h1>

        {!showPopup && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-2"
              required
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-2"
              required
            />

            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-2"
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded bg-slate-800 p-2"
              required
            />

            <button
              type="submit"
              className="w-full rounded bg-orange-500 p-2 font-bold text-black"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[350px] rounded-xl bg-slate-900 p-6 text-center shadow-lg">
            <h2 className="text-xl font-bold text-green-400">
              Request Submitted
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              Our team will connect with you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 rounded bg-orange-500 px-4 py-2 font-semibold text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}