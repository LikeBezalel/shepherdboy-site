"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, CheckCircle2, Rocket, Shield, Sparkles, PhoneCall, Mail, Globe } from "lucide-react";


/**
 * ShepherdBoy – Professional Landing Page (single file)
 * Paste this entire file into: app/page.tsx
 * Tailwind requirement: darkMode: "class" in tailwind.config.js
 */

const COMPANY_NAME = "ShepherdBoy";
const DOMAIN = "shepherdboymarketing.com";

const features = [
  { icon: "rocket", title: "Funnel Builds", text: "High-converting funnels, landing pages, and lead flows built in GHL." },
  { icon: "calender", title: "Booked Appointments", text: "Calendars + automation that turn clicks into calls." },
  { icon: "shield", title: "CRM & Automations", text: "Pipelines, triggers, and follow-ups that scale your ops." },
];


const plans = [
  { name: "Starter", price: "$997/mo", items: ["1 funnel + CRM setup", "12 social posts/mo", "Monthly reporting"] },
  { name: "Growth", price: "$2,497/mo", items: ["Multi-channel automations", "20 social posts + UGC", "Ads mgmt + A/B tests"] },
  { name: "Authority", price: "$4,997/mo", items: ["Everything in Growth", "Video editing + repurposing", "Priority support"] },
];

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount: pick stored theme or system preference
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("sb-theme")) as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const sys = prefersDark ? "dark" : "light";
    setTheme(sys);
    document.documentElement.classList.toggle("dark", sys === "dark");
  }, []);

  // When theme changes: persist + flip the html.dark class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("sb-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen">
      {/* Background layers */}
      <div
        className="
          fixed inset-0 -z-10
          bg-gray-100
          dark:bg-slate-950
        "
      />
      {/* soft radial glow only in dark to avoid a hard line */}
      <div
        className="
          pointer-events-none fixed inset-0 -z-10 opacity-70
          [background:radial-gradient(1200px_circle_at_20%_20%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(1000px_circle_at_80%_10%,rgba(168,85,247,0.12),transparent_55%)]
          hidden dark:block
        "
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-xl bg-black dark:bg-white" />
            <span className="font-semibold tracking-tight dark:text-white">{COMPANY_NAME}</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white">Services</a>
            <a href="#work" className="text-sm text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white">Results</a>
            <a href="#pricing" className="text-sm text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white">Pricing</a>
            <a href="#contact" className="text-sm text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl dark:text-white">
            We build funnels, automations, and content that get you{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent dark:from-indigo-500 dark:to-fuchsia-400">
              booked
            </span>.
          </h1>
          <p className="mt-4 max-w-xl text-black/70 dark:text-white/70">
            {COMPANY_NAME} is a performance-driven marketing partner. We deliver CRM, funnels, automations, and content that convert visitors into appointments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              Book a Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-4 py-2 text-black hover:bg-black/[.03] dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
            >
              See Results
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-black/60 dark:text-white/60">
            <div className="flex items-center gap-1">🌐 {DOMAIN}</div>
            <div className="flex items-center gap-1">📞 (945) 222-5549</div>
            <div className="flex items-center gap-1">✉️ hello@{DOMAIN}</div>
          </div>
        </div>

        {/* GHL Calendar */}
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="border-b border-black/5 p-4 text-black/80 dark:border-white/10 dark:text-white/90">
            <strong>Book a Strategy Call</strong>
          </div>
          <div className="aspect-[4/3] w-full">
            <iframe
              title="GHL Calendar"
              src="https://api.leadconnectorhq.com/widget/booking/cVG0IosCL1jFqaDC9np4"
              className="h-full w-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            <span
            className="
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500
            hover:bg-clip-text hover:text-transparent
            dark:hover:from-fuchsia-400 dark:hover:to-indigo-500
            "
           >
            Done-for-you growth engine
          </span>
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70">Build. Automate. Scale. We run the tech so you can run the business.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-black dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
          
            <h3 className="text-2xl font-semibold text-black md:text-3xl dark:text-white">
             {" "}
             <span
            className="
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500
            hover:bg-clip-text hover:text-transparent
            dark:hover:from-fuchsia-400 dark:hover:to-indigo-500
            "
           >
            Recent wins
             </span>
            </h3>
            <ul className="mt-4 space-y-3 text-black/80 dark:text-white/80">
             <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> 127 booked calls in 30 days for a med spa using GHL automations.</li>
             <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> 4.1x ROAS in 8 weeks for a roofing client via funnel rebuild + retargeting.</li>
             <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> 32% lift in show-up rate with SMS + email cadence overhaul.</li>
            </ul>
          </div>

          {/* Contact form slot (keep as GHL form later) */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h4 className="font-semibold text-black dark:text-white">Tell us about your goals</h4>
            <div className="mt-4 h-[520px] w-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
              {/* Replace with your actual GHL form embed when ready */}
              <iframe
                title="GHL Form"
                src="https://api.leadconnectorhq.com/widget/form/nwi8UYd4yL5uTVAcxgWS"
                className="h-full w-full bg-white dark:bg-slate-900"
                frameBorder="0"
              />
            </div>
            <p className="mt-3 text-xs text-black/60 dark:text-white/60">
              By submitting, you agree to our terms and to receive communications. Opt-out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
           <span
            className="
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-500
            hover:bg-clip-text hover:text-transparent
            dark:hover:from-fuchsia-400 dark:hover:to-indigo-500
            "
           >
            Simple monthly retainers
          </span>
         </h3>

          <p className="mt-3 text-black/70 dark:text-white/70">Pick a plan to match your growth stage. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, idx) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 shadow-sm
              ${idx === 1
                  ? "border-black/10 bg-white ring-2 ring-black/10 dark:border-white/10 dark:bg-white/10 dark:ring-white/10"
                  : "border-black/10 bg-white dark:border-white/10 dark:bg-white/5"
                }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-black dark:text-white">{p.name}</span>
                <span className="text-lg text-black/80 dark:text-white/80">{p.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black/80 dark:text-white/80">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2"> {i}</li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-6 inline-flex w-full justify-center rounded-2xl bg-black px-4 py-2 text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Book (secondary calendar) */}
      <section id="book" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-black md:text-3xl dark:text-white">Ready to scale? Let’s talk.</h3>
            <p className="mt-3 text-black/70 dark:text-white/70">
              15–20 minute discovery call to map your fastest path to booked appointments. No hard pitch.
            </p>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-white/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Clarify goals and KPIs</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Audit your current funnel + CRM</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5" /> Get a quick-win action plan</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="border-b border-black/5 p-4 text-black/80 dark:border-white/10 dark:text-white/90">
              <strong>Book your call</strong>
            </div>
            <div className="aspect-[4/3] w-full">
              <iframe
                title="GHL Calendar 2"
                src="https://api.leadconnectorhq.com/widget/booking/cVG0IosCL1jFqaDC9np4"
                className="h-full w-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Theme Toggle */}
      <footer className="border-t border-black/10 bg-white/80 py-8 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 md:grid-cols-2">
          <p className="text-sm text-black/60 dark:text-white/60">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>

          <div className="flex items-center justify-start gap-4 md:justify-end">
            <a href="#" className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">Terms</a>

            {/* Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-black/60 dark:text-white/60">Light</span>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="peer sr-only"
                />
                <div className="h-6 w-11 rounded-full bg-black/10 transition peer-checked:bg-white/20 dark:bg-white/20 dark:peer-checked:bg-white/40" />
                <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-5 dark:bg-white" />
              </label>
              <span className="text-sm text-black/60 dark:text-white/60">Dark</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
