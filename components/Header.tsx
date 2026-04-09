import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header({ dark = false }: { dark?: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        dark
          ? "border-white/10 bg-[#1a2f6f]/90 backdrop-blur-md"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-primary flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1C4 1 2 3.5 2 6c0 3 2.5 5 5 6 2.5-1 5-3 5-6 0-2.5-2-5-5-5z"
                  fill="#022c22"
                />
              </svg>
            </div>
            <span
              className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}
            >
              FINIT
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "About", "Pricing", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  dark
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="https://calc.finit.am" target="_blank">
          <Button className="bg-primary text-[#022c22] font-semibold px-5 hover:bg-primary/90">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
}
