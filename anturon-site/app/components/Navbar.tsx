"use client";

import Link from "next/link";
import { useState } from "react";

type PlaygroundTabId = "how" | "customise" | "roi" | "resources";

const playgroundTabs: { id: PlaygroundTabId; label: string; href: string }[] = [
  { id: "how", label: "How does it work", href: "/playground/how-it-works" },
  { id: "customise", label: "Customise your agent", href: "/playground/customise-agent" },
];

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Demo", href: "/demo" },
];

const mobileNavLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Features", href: "/features" },
  { label: "Demo", href: "/demo" },
  { label: "Dashboard", href:"/dashboard-access" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex flex-col items-start leading-tight">
          <img
            src="/Logo.jpg"
            alt="Anturon Logo"
            className="h-9 w-auto object-contain"
          />
          <span className="mt-1 whitespace-nowrap text-[11px] tracking-wide text-slate-400">
            Every Call, Every Lead, Fully Automated
          </span>
        </Link>

        <div className="hidden w-full items-center justify-end gap-8 md:flex">
          <div className="flex flex-1 items-center justify-center gap-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsPlaygroundOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm text-slate-200 transition hover:text-orange-400"
              >
                <span>Playground</span>
                <span
                  className={`text-[10px] transition-transform duration-200 ${
                    isPlaygroundOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {isPlaygroundOpen && (
                <div className="absolute left-1/2 top-full z-40 mt-1 w-56 -translate-x-1/2 rounded-xl border border-slate-800 bg-slate-950/95 px-3 py-2 shadow-xl">
                  {playgroundTabs.map((t) => (
                    <Link
                      key={t.id}
                      href={t.href}
                      onClick={() => setIsPlaygroundOpen(false)}
                      className="block w-full whitespace-nowrap rounded-md px-3 py-2 text-left text-xs text-slate-200 transition hover:bg-slate-800 hover:text-orange-400"
                    >
                      {t.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-200 transition hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
           <Link
  href="/dashboard-access"
  className="rounded-full bg-orange-500 px-10 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
>
  Dashboard
</Link>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-700 text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-3 md:hidden">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Playground
          </p>

          <ul className="mb-2 space-y-1">
            {playgroundTabs.map((t) => (
              <li key={t.id}>
                <Link
                  href={t.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full whitespace-nowrap text-left text-xs text-slate-300 hover:text-orange-400"
                >
                  • {t.label}
                </Link>
              </li>
            ))}
          </ul>

          {mobileNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-1.5 text-sm text-slate-200 hover:text-orange-400"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="#book-demo"
            className="mt-2 inline-flex w-full justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
            onClick={() => setIsOpen(false)}
          >
            Book demo
          </a>
        </div>
      )}
    </header>
  );
}