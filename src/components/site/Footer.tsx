import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const socials: { label: string; path: string }[] = [
  { label: "Facebook", path: "M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2.1-2H17V2.2C16.7 2.1 15.6 2 14.4 2 11.9 2 10 3.5 10 6.7V10H7v4h3v8h3z" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2M12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" },
  { label: "Twitter", path: "M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.7a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.7 3.3 4.1-.4.1-.9.2-1.3.1.4 1.6 2 2.9 3.7 2.9A8.2 8.2 0 012 18.5 11.6 11.6 0 008.3 20c7.5 0 11.7-6.4 11.5-12.1.8-.6 1.5-1.3 2.2-2z" },
  { label: "LinkedIn", path: "M6.9 8v12H3V8h3.9zM5 2.5A2.3 2.3 0 015 7a2.3 2.3 0 010-4.5zM21 20h-3.9v-6c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H9.5V8h3.7v1.7c.5-.8 1.4-1.9 3.5-1.9 2.5 0 4.4 1.6 4.4 5.2V20z" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Airaa Real Estate" className="h-10 w-10 rounded-md" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-charcoal">AIRAA</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Real Estate</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Premium properties, quality construction, and trusted documentation across Tamil Nadu.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-white text-charcoal transition-colors hover:border-brand hover:text-brand">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {["Home", "Services", "Properties", "About", "Testimonials", "FAQ"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {["Home Buying", "Home Selling", "Construction", "Civil Engineering", "Documentation", "Property Valuation"].map((l) => (
              <li key={l}><span className="hover:text-brand cursor-default">{l}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand mt-0.5" />
              <span>Sivan Kovil Street, Beside Sivan Kovil, Kinathukadavu, Tamil Nadu — 652109</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand mt-0.5" />
              <a href="tel:+919788121526" className="hover:text-brand">97881 21526</a>
            </li>
          </ul>
          <Link to="/contact" className="mt-5 inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-hover">Get in touch</Link>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Airaa Real Estate. All rights reserved.</p>
          <p>Crafted with care in Kinathukadavu, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}