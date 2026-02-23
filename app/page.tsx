import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Evaluation Section (Financial Navy - Wrapped in .dark) */}
      <section id="evaluation" className="dark bg-[#0f172a] flex flex-col items-center justify-center px-4 text-center py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Financial Insights <br />
              <span className="text-primary">Redefined.</span>
            </h1>
            <p className="text-lg text-slate-300 md:text-xl max-w-xl mx-auto">
              Our platform works seamlessly with complex financial data to provide you with actionable intelligence.
            </p>
          </div>

          <div className="relative group p-1 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent max-w-xl mx-auto">
            <Card className="bg-[#1e293b] rounded-xl p-6 md:p-10 border border-slate-700/50 shadow-2xl space-y-4 relative text-white">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2 border border-primary/20">
                Free Feature
              </div>
              <h2 className="text-2xl font-bold">Company Market Value</h2>
              <p className="text-base text-slate-300">
                Ever wondered what your company is worth in today's market? Use our free calculation tool to get an instant valuation.
              </p>
              <div className="pt-2">
                <Link href="#plans">
                  <Button size="default" className="px-6 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform bg-primary text-[#022c22] hover:bg-primary/90">
                    Try it now
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features & Pricing Section (Professional White - Default Theme) */}
      <section className="bg-white text-slate-950 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Features Grid */}
          <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-24">
            <div className="text-left space-y-2">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="size-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Real-time Data</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Stay ahead with data that updates as the market moves, ensuring accurate analysis.</p>
            </div>
            <div className="text-left space-y-2">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="size-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Precision Tools</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Advanced algorithms designed for financial accuracy and risk management.</p>
            </div>
            <div className="text-left space-y-2">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div className="size-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Secure Analysis</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Your financial data is protected with industry-standard bank-level security.</p>
            </div>
          </div>

          <div id="plans" className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Simple, Transparent Pricing</h2>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                Choose the plan that best fits your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Free Plan */}
              <Card className="border-slate-200 shadow-sm flex flex-col py-6 hover:shadow-md transition-shadow bg-white">
                <CardHeader className="gap-1">
                  <CardTitle className="text-2xl font-bold text-slate-900">Free</CardTitle>
                  <CardDescription className="text-slate-500">Explore our platform</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6 py-6">
                  <div className="text-4xl font-bold text-slate-900">$0</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>Market Evaluation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full h-10 border-slate-300 text-slate-900 hover:bg-slate-50 font-bold">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro Plan (Wrapped in .dark for Navy theme) */}
              <Card className="dark border-slate-700 shadow-2xl relative flex flex-col bg-[#0f172a] text-white py-6 scale-105 z-10 border-2">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-[#022c22] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
                <CardHeader className="gap-1">
                  <CardTitle className="text-2xl font-bold text-white">Pro</CardTitle>
                  <CardDescription className="text-slate-400">For growth phase</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6 py-6 text-white">
                  <div className="text-4xl font-bold text-white">$19.99<span className="text-lg font-normal text-slate-400">/mo</span></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>Market Evaluation</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>Accounting Tools</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-200">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>Custom Calculations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-10 font-bold bg-primary text-[#022c22] hover:bg-primary/90 transition-all">Try Now</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-slate-200 shadow-sm flex flex-col py-6 hover:shadow-md transition-shadow bg-white">
                <CardHeader className="gap-1">
                  <CardTitle className="text-2xl font-bold text-slate-900">Enterprise</CardTitle>
                  <CardDescription className="text-slate-500">Scale operations</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-6 py-6">
                  <div className="text-4xl font-bold text-slate-900">Custom</div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <Check className="size-5 text-primary stroke-[3px]" />
                      <span>API Integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full h-10 border-slate-300 text-slate-900 hover:bg-slate-50 font-bold">Contact Us</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
