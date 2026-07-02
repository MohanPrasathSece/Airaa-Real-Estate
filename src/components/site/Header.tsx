import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Airaa Real Estate" className="h-10 w-10 rounded-md object-cover" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-charcoal tracking-wide">AIRAA</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Real Estate</div>
          </div>
        </Link>
      </div>
    </header>
  );
}