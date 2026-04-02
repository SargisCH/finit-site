"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How accurate is the market valuation tool?",
    a: "Our valuation tool uses industry-standard methodologies and real-time market data to provide 98% accuracy. Results are benchmarked against actual valuations in your industry.",
  },
  { q: "Is my financial data secure?", a: "Yes. We use bank-level encryption and are SOC 2 compliant to protect all your financial data." },
  { q: "Can I integrate FINIT with my existing tools?", a: "Absolutely. FINIT offers seamless API integrations with major accounting, CRM, and ERP platforms." },
  { q: "What kind of support do you offer?", a: "We offer 24/7 support via chat and email. Pro and Enterprise plans include dedicated account managers." },
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time with no cancellation fees." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex items-center justify-between text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-slate-800">{q}</span>
        <ChevronDown
          className={`size-4 text-slate-500 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 text-sm text-slate-500 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-white pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">Try it now</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Financial Insights{" "}
                <span className="text-primary italic">Redefined</span>
                <br />
                <span className="text-slate-900">With Our All-in-One Platform</span>
              </h1>
              <p className="text-slate-500 text-base max-w-md leading-relaxed">
                Actionable intelligence for modern financial consulting. Empower your decisions with data-driven precision and real-time market movements.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="http://185-47-174-99.cloud-xip.com:5173/" target="_blank">
                  <Button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold px-6">
                    Try Now
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="border-slate-300 text-slate-700 font-semibold px-6 hover:bg-slate-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Dashboard illustration */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-slate-100 rounded-2xl p-4 shadow-xl border border-slate-200">
                  {/* Mini dashboard mockup */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <div className="size-3 rounded bg-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-slate-200 rounded w-3/4" />
                        <div className="h-2 bg-slate-100 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <div className="size-8 rounded-lg bg-orange-100 flex items-center justify-center">
                        <div className="size-3 rounded bg-orange-400" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-slate-200 rounded w-2/3" />
                        <div className="h-2 bg-slate-100 rounded w-1/3" />
                      </div>
                    </div>
                    {/* Chart bars */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-end gap-1.5 h-16 justify-center">
                        {[40, 65, 50, 80, 60, 90, 70, 55, 85, 45].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              backgroundColor: i === 6 ? "#f97316" : "#72E484",
                              opacity: 0.85,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners / Logos ── */}
      <section className="bg-white border-t border-slate-100 py-10 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-60">
            {["CHIPXPRT", "GUINNESS GLOBAL INVESTORS", "CHIPXPRT", "GUINNESS GLOBAL INVESTORS"].map((name, i) => (
              <span key={i} className="text-sm font-bold text-slate-400 tracking-wide uppercase">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Everything you need<br />to master markets
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed md:pt-10">
              Cutting-edge tools designed for professional financial analysis and portfolio management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="2" width="8" height="8" rx="1" stroke="#72E484" strokeWidth="1.5"/>
                    <rect x="12" y="2" width="8" height="8" rx="1" stroke="#72E484" strokeWidth="1.5"/>
                    <rect x="2" y="12" width="8" height="8" rx="1" stroke="#72E484" strokeWidth="1.5"/>
                    <circle cx="16" cy="16" r="4" stroke="#72E484" strokeWidth="1.5"/>
                  </svg>
                ),
                title: "Real-time Data",
                desc: "Live market feeds and instant updates across all the global exchanges with sub-second latency.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M8 6c0-1.1.9-2 2-2h2a2 2 0 0 1 0 4h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1-2-2" stroke="#72E484" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8 3c0 1.1.9 2 2 2M14 17c0 1.1-.9 2-2 2" stroke="#72E484" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Precision Tools",
                desc: "Advanced calculators and custom modeling software built for complex financial instruments.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2L4 5.5v5c0 4.2 3 7.9 7 9 4-1.1 7-4.8 7-9v-5L11 2z" stroke="#72E484" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M8 11l2 2 4-4" stroke="#72E484" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: "Secure Analysis",
                desc: "Enterprise-grade encryption and SOC 2 compliance for all your sensitive financial data.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="space-y-4 p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow bg-white">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">{icon}</div>
                <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-[#1a2f6f] py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">About Finit</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Bridging complexity<br />and strategy
              </h2>
            </div>
            <p className="text-slate-300 text-sm max-w-xs leading-relaxed md:pt-10">
              FINIT is a premier financial consulting platform dedicated to bridging the gap between complex data and actionable strategy. Our mission is to provide consultants with the most reliable, secure and intuitive tools in the industry.
            </p>
          </div>

          {/* Image with stat overlays */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="w-full h-72 md:h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              {/* Candlestick chart visual */}
              <div className="flex items-end gap-2 h-40 px-8">
                {[50, 70, 45, 85, 60, 95, 55, 80, 65, 90, 50, 75, 85, 60, 95].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div
                      className="w-4 rounded-sm"
                      style={{
                        height: `${h * 0.6}%`,
                        backgroundColor: i % 3 === 1 ? "#f59e0b" : "#72E484",
                        minHeight: 8,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Stat: Active Users */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
              <p className="text-2xl font-extrabold">10K+</p>
              <p className="text-xs text-slate-300 mt-0.5">Active Users</p>
            </div>

            {/* Stat: 24/7 Support */}
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-white">
              <p className="text-2xl font-extrabold">24/7</p>
              <p className="text-xs text-slate-300 mt-0.5">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="plans" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-3 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Scalable pricing for every team</h2>
            <p className="text-slate-500 text-sm">Choose the plan that fits your professional needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Free */}
            <Card className="border-slate-200 shadow-sm flex flex-col py-6 bg-white hover:shadow-md transition-shadow">
              <CardHeader className="gap-1">
                <CardTitle className="text-xl font-bold text-slate-900">Free</CardTitle>
                <CardDescription className="text-slate-500">Explore our platform</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 py-6">
                <div className="text-4xl font-bold text-slate-900">$0</div>
                <ul className="space-y-2.5">
                  {["Basic analytics", "1 user access", "Public datasets only", "Advanced modeling"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Check className="size-4 text-primary stroke-[2.5px] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="http://185-47-174-99.cloud-xip.com:5173/" target="_blank" className="w-full">
                  <Button variant="outline" className="w-full font-semibold border-slate-900 text-slate-900 hover:bg-slate-50">
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Pro */}
            <Card className="border-[#1a2f6f] shadow-2xl flex flex-col bg-[#1a2f6f] text-white py-6 scale-105 z-10 relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-[#022c22] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Popular
              </div>
              <CardHeader className="gap-1">
                <CardTitle className="text-xl font-bold text-white">Pro</CardTitle>
                <CardDescription className="text-slate-300">For growth phase</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 py-6">
                <div className="text-4xl font-bold text-white">
                  $19.99<span className="text-lg font-normal text-slate-300">/month</span>
                </div>
                <ul className="space-y-2.5">
                  {["Advanced modeling tools", "Unlimited reports", "Priority email support", "Custom dashboard views"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <Check className="size-4 text-primary stroke-[2.5px] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-semibold bg-primary text-[#022c22] hover:bg-primary/90">
                  Upgrade to Pro
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="border-slate-200 shadow-sm flex flex-col py-6 bg-white hover:shadow-md transition-shadow">
              <CardHeader className="gap-1">
                <CardTitle className="text-xl font-bold text-slate-900">Enterprise</CardTitle>
                <CardDescription className="text-slate-500">Scale operations</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 py-6">
                <div className="text-4xl font-bold text-slate-900">Custom</div>
                <ul className="space-y-2.5">
                  {["Custom integrations", "Dedicated account manager", "SSO & Advanced security", "API Access"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Check className="size-4 text-primary stroke-[2.5px] shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full font-semibold border-slate-900 text-slate-900 hover:bg-slate-50">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Frequently asked<br />questions
              </h2>
            </div>
            <div>
              {faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-10 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#1a2f6f] rounded-3xl py-20 px-8 text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to elevate your consulting?
            </h2>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Join thousands of financial professionals who rely on FINIT for their daily intelligence needs.
            </p>
            <Link href="http://185-47-174-99.cloud-xip.com:5173/" target="_blank">
              <Button className="bg-primary text-[#022c22] font-semibold px-8 hover:bg-primary/90 mt-2">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">Contact</p>
                <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail className="size-4 text-primary shrink-0" />
                  hello@finit.com
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone className="size-4 text-primary shrink-0" />
                  +1 (212) 567-8910
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="size-4 text-primary shrink-0" />
                  123 Financial District, New York, NY 10004
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">Message</label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-[#1a2f6f] text-white hover:bg-[#1a2f6f]/90 font-semibold">
                Get Started Now
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0d1b3e] text-slate-400 py-14 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C3.5 1 2 3 2 5c0 2.5 2 4 4 5 2-1 4-2.5 4-5 0-2-1.5-4-4-4z" fill="#022c22"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-base">FINIT</span>
              </div>
              <p className="text-xs leading-relaxed">The future of financial consulting is here. High-precision data for the modern era.</p>
              <div className="flex items-center gap-3">
                {["f", "𝕏", "in"].map(s => (
                  <div key={s} className="size-7 rounded-full border border-slate-700 flex items-center justify-center text-xs text-slate-400 hover:text-white hover:border-slate-500 cursor-pointer transition-colors">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-white text-sm font-semibold">Company</h4>
              {["Services", "About", "Careers", "Contact"].map(l => (
                <a key={l} href="#" className="block text-xs hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            {/* Solutions */}
            <div className="space-y-3">
              <h4 className="text-white text-sm font-semibold">Solutions</h4>
              {["For Startups", "For Agencies", "Enterprises", "Compliance"].map(l => (
                <a key={l} href="#" className="block text-xs hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            {/* Resources */}
            <div className="space-y-3">
              <h4 className="text-white text-sm font-semibold">Resources</h4>
              {["Our Mission", "Blog", "Privacy Policy", "Support"].map(l => (
                <a key={l} href="#" className="block text-xs hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
            © 2026 FINIT Financial Intelligence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
