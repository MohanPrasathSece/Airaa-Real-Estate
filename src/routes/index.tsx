import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import {
  ArrowRight,
  Award,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileCheck2,
  FileText,
  Hammer,
  HardHat,
  Home,
  Key,
  Landmark,
  MapPin,
  Maximize,
  Phone,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

import hero from "@/assets/hero-pool-villa.png";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";
import familyKeys from "@/assets/family-keys.jpg";
import construction from "@/assets/construction.jpg";
import ctaVilla from "@/assets/cta-villa.jpg";
import whyImg from "@/assets/why-choose.jpg";

export const Route = createFileRoute("/")({
  component: IndexPage,
});
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28 ${className}`}>{children}</section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {children}
    </span>
  );
}

function IndexPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Properties />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="Luxury villa" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pt-10 pb-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8 lg:pt-16">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <Eyebrow>Premium Real Estate · Tamil Nadu</Eyebrow>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl">
            Find Your Dream Property with{" "}
            <span className="text-brand italic">Confidence</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Trusted experts in buying, selling, construction, documentation, and civil engineering consultation — delivering luxury homes with complete legal clarity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#properties" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_40px_-15px_rgba(138,112,92,0.7)] transition-all hover:bg-brand-hover hover:shadow-[0_20px_50px_-15px_rgba(109,84,67,0.7)]">
              Explore Properties <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-charcoal backdrop-blur transition-colors hover:border-charcoal/40">
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Verified Listings</div>
            <div className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-brand" /> Legal Documentation</div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-brand" /> 10+ Years Trust</div>
          </div>
        </motion.div>

        {/* Floating stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, value: "500+", label: "Happy Clients" },
            { icon: Home, value: "300+", label: "Properties Sold" },
            { icon: Award, value: "10+", label: "Years Experience" },
            { icon: ShieldCheck, value: "100%", label: "Legal Documentation" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-hairline bg-white/80 p-5 backdrop-blur-xl shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-bold text-charcoal">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/5 transition-transform group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
const services = [
  { icon: Home, title: "Real Estate Sales", desc: "Prime DTCP plots, luxury villas, and lands with clear titles." },
  { icon: Hammer, title: "Quality Construction", desc: "Resilient structural concrete builds designed to last generations." },
  { icon: ScrollText, title: "Legal Documentation", desc: "Complete assistance with patta, EC checks, and agreements." },
  { icon: HardHat, title: "Civil Consultation", desc: "Qualified engineering planning and execution advice." },
];

function Services() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl text-balance">
          Comprehensive real estate services under one trusted roof
        </h2>
        <p className="mt-4 text-muted-foreground">
          From your first site visit to key handover — we take care of every detail with clarity and care.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_30px_60px_-25px_rgba(138,112,92,0.25)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ArrowRight className="absolute right-6 top-6 h-4 w-4 -translate-x-2 text-brand opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ------------------------------ PROPERTIES ------------------------------ */
const properties = [
  { img: p1, name: "Palm Grove Villa", location: "Coimbatore", price: "₹2.4 Cr", beds: 4, baths: 5, area: "3,800 sqft", badge: "Featured" },
  { img: p2, name: "Airaa Skyline Residences", location: "Kinathukadavu", price: "₹85 L", beds: 3, baths: 2, area: "1,650 sqft", badge: "New" },
  { img: p3, name: "Green Court House", location: "Pollachi", price: "₹1.15 Cr", beds: 3, baths: 3, area: "2,200 sqft", badge: "Ready" },
  { img: p4, name: "Sunrise DTCP Plots", location: "Kinathukadavu", price: "₹18 L / plot", beds: 0, baths: 0, area: "1,200 sqft", badge: "Plot" },
  { img: p5, name: "Airaa Gated Community", location: "Coimbatore", price: "₹1.9 Cr", beds: 4, baths: 4, area: "3,200 sqft", badge: "Gated" },
  { img: p6, name: "Trade Tower Commercial", location: "Coimbatore", price: "₹4.8 Cr", beds: 0, baths: 4, area: "6,500 sqft", badge: "Commercial" },
];

function Properties() {
  return (
    <Section id="properties" className="!py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Featured Listings</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Handpicked properties, ready for the perfect owner
          </h2>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
          Request full catalog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_10px_40px_-24px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand backdrop-blur">
                {p.badge}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {p.price}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> {p.location}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-charcoal">{p.name}</h3>
              <div className="mt-5 flex items-center gap-5 border-t border-hairline pt-4 text-sm text-muted-foreground">
                {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-brand" /> {p.beds}</span>}
                {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-brand" /> {p.baths}</span>}
                <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-brand" /> {p.area}</span>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/10 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-brand hover:text-brand">
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <Section className="!py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.4)]">
        <img src={ctaVilla} alt="Luxury villa" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/20" />
        <div className="relative grid gap-8 px-8 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> Take the next step
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ready to buy or sell your dream property?
            </h2>
            <p className="mt-4 max-w-lg text-white/80">
              Talk to our advisors today — no obligation, just clear guidance and honest options.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="tel:+919788121526" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(138,112,92,0.8)] hover:bg-brand-hover">
              <Phone className="h-4 w-4" /> Call 97881 21526
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-charcoal hover:bg-white/90">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
