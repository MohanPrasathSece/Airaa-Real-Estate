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
    <header className="fixed inset-x-0 top-5 z-50 flex flex-col items-center px-4">
      <div
        className={`flex w-full max-w-4xl items-center justify-between gap-6 rounded-full border border-hairline px-6 py-1.5 transition-all duration-300 bg-white shadow-[0_8px_32px_0_rgba(197,160,89,0.12)]`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center shrink-0 -my-1.5">
          <img src={logo} alt="Airaa Real Estate" className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-white/60 bg-white" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-charcoal/85">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="transition-colors hover:text-brand"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button & Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+919788121526"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-hover shadow-sm"
          >
            <Phone className="h-3 w-3" />
            Call Now
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/40"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      {open && (
        <div className="mt-2 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl p-4 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-charcoal hover:bg-white/40"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-charcoal hover:bg-white/40"
            >
              Contact
            </Link>
            <a
              href="tel:+919788121526"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-white"
            >
              <Phone className="h-3.5 w-3.5" /> Call 97881 21526
            </a>
          </div>
        </div>
      )}
    </header>
  );
}