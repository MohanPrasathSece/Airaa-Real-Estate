import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Properties", href: "/#properties" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-hairline shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Airaa Real Estate" className="h-10 w-10 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-charcoal tracking-wide">AIRAA</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Real Estate</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-7 text-sm font-semibold text-charcoal/85">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition-colors hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="relative transition-colors hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="tel:+919788121526"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(138,112,92,0.6)] transition-all hover:bg-brand-hover hover:shadow-[0_14px_34px_-10px_rgba(109,84,67,0.6)]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white/80"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-white animate-in fade-in slide-in-from-top-2">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-soft"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-soft"
            >
              Contact
            </Link>
            <a
              href="tel:+919788121526"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call 97881 21526
            </a>
          </div>
        </div>
      )}
    </header>
  );
}