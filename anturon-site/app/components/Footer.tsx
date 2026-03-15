import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.jpg"
                alt="Anturon Logo"
                className="h-9 w-auto sm:h-10"
              />
            </div>

            <p className="text-sm leading-6 text-slate-400">
              Voice AI agents for modern sales teams. Automate outbound and
              inbound calling, qualify leads faster, and scale conversations
              without scaling headcount.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/pricing"
                  className="inline-block transition hover:text-orange-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="inline-block transition hover:text-orange-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-block transition hover:text-orange-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="inline-block transition hover:text-orange-400"
                >
                  Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Playground */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Playground
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/playground/how-it-works"
                  className="inline-block transition hover:text-orange-400"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/playground/customise-agent"
                  className="inline-block transition hover:text-orange-400"
                >
                  Customise your agent
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Get started
            </h4>

            <p className="mb-4 text-sm leading-6 text-slate-400">
              Ready to see how Anturon can automate your calling workflows?
            </p>

            <Link
              href="/demo"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 sm:w-auto"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 text-center text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
            <p>© 2025 Anturon Voice AI. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <Link href="/pricing" className="transition hover:text-orange-400">
                Pricing
              </Link>
              <Link href="/features" className="transition hover:text-orange-400">
                Features
              </Link>
              <Link href="/demo" className="transition hover:text-orange-400">
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}