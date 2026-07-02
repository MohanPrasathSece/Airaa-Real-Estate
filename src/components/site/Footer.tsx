import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

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
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-white text-charcoal transition-colors hover:border-brand hover:text-brand">
                <Icon className="h-4 w-4" />
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