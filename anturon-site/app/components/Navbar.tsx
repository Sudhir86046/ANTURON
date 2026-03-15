"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PlaygroundTabId = "how" | "customise";

const playgroundTabs: { id: PlaygroundTabId; label: string; href: string }[] = [
  { id: "how", label: "How does it work", href: "/playground/how-it-works" },
  {
    id: "customise",
    label: "Customise your agent",
    href: "/playground/customise-agent",
  },
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
  { label: "Dashboard", href: "/dashboard-access" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsPlaygroundOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsPlaygroundOpen(false);
    }
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:gap-6 md:py-4">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 flex-col items-start"
          onClick={() => {
            setIsOpen(false);
            setIsPlaygroundOpen(false);
          }}
        >
          <img
            src="/Logo.jpg"
            alt="Anturon Logo"
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="mt-1 text-[10px] leading-tight tracking-wide text-slate-400 sm:text-[11px]">
            Every Call, Every Lead, Fully Automated
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-8 lg:gap-10">
            <div className="relative" ref={dropdownRef}>
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
                <div className="absolute left-1/2 top-full z-40 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-slate-800 bg-slate-950/95 p-2 shadow-xl">
                  {playgroundTabs.map((t) => (
                    <Link
                      key={t.id}
                      href={t.href}
                      onClick={() => setIsPlaygroundOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-orange-400"
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
        </div>

        <div className="hidden shrink-0 md:block">
          <Link
            href="/dashboard-access"
            className="rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 lg:px-10"
          >
            Dashboard
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-lg text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 shadow-lg md:hidden">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Playground
              </p>

              <ul className="mb-4 space-y-1">
                {playgroundTabs.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={t.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-orange-400"
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mb-4 border-t border-slate-800 pt-4">
                <div className="space-y-1">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-orange-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}